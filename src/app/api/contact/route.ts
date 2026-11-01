import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/data/site";

export const runtime = "nodejs";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(name: string, email: string, message: string, timestamp: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
</head>
<body style="margin:0;padding:0;background:#172d22;font-family:system-ui,sans-serif;color:#fafafa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;padding:32px 24px;">
    <tr>
      <td style="padding-bottom:24px;border-bottom:1px solid #3b5038;">
        <h1 style="margin:0;font-size:22px;font-weight:600;color:#d5ed8a;">New Portfolio Contact</h1>
        <p style="margin:8px 0 0;font-size:13px;color:#a7bc94;">${escapeHtml(timestamp)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding-top:24px;">
        <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#a7bc94;">Name</p>
        <p style="margin:0 0 20px;font-size:16px;color:#fafafa;">${escapeHtml(name)}</p>
        <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#a7bc94;">Email</p>
        <p style="margin:0 0 20px;font-size:16px;"><a href="mailto:${escapeHtml(email)}" style="color:#d5ed8a;text-decoration:none;">${escapeHtml(email)}</a></p>
        <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#a7bc94;">Message</p>
        <p style="margin:0;font-size:15px;line-height:1.6;color:#d4d4d8;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid contact form." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Please submit a valid contact form." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";

  if (name.length < 2 || name.length > 100 || /[\r\n]/.test(name)) {
    return NextResponse.json({ error: "Please enter a name between 2 and 100 characters." }, { status: 400 });
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Please enter a message between 10 and 5,000 characters." }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER || process.env.SMTP_EMAIL;
  const smtpPass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || 465);
  const secureSetting = process.env.SMTP_SECURE;
  const secure = secureSetting ? secureSetting === "true" : port === 465;

  if (!smtpUser || !smtpPass || !Number.isInteger(port) || port < 1 || port > 65535 || (secureSetting && !["true", "false"].includes(secureSetting))) {
    return NextResponse.json({ error: "Messages are temporarily unavailable. Please email me directly." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure,
    requireTLS: !secure && port === 587,
    auth: { user: smtpUser, pass: smtpPass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Karachi",
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || { name: "Talha Malik Portfolio", address: process.env.SMTP_EMAIL || smtpUser },
      to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
      replyTo: { name, address: email },
      subject: `Portfolio message from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", message, "", `Sent at: ${timestamp}`].join("\n"),
      html: buildEmailHtml(name, email, message, timestamp),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Keep provider details and submitted messages out of public responses and logs.
    console.error("Contact email delivery failed:", (error as { code?: string }).code || "SMTP_ERROR");
    return NextResponse.json({ error: "Your message couldn’t be sent. Please try again or email me directly." }, { status: 502 });
  } finally {
    transporter.close();
  }
}
