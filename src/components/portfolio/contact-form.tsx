"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fields.get("name") ?? "").trim(),
          email: String(fields.get("email") ?? "").trim(),
          message: String(fields.get("message") ?? "").trim(),
        }),
        signal: AbortSignal.timeout(45000),
      });
      const result = await response.json() as { success?: boolean; error?: string };
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || "Your message couldn’t be sent. Please try again or email me directly.");
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setError(error instanceof Error && error.name !== "TimeoutError" && error.name !== "TypeError"
        ? error.message
        : "Your message couldn’t be sent. Please try again or email me directly.");
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-heading" aria-busy={status === "sending"} onInput={() => { if (status !== "sending") setStatus("idle"); }}>
      <div className="contact-form-heading"><h3 id="contact-form-heading">Send me a message</h3><span>LET’S BUILD SOMETHING</span></div>
      <fieldset disabled={status === "sending"}>
        <legend className="sr-only">Your contact details and message</legend>
        <div className="contact-form-row">
          <div className="contact-field"><label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required minLength={2} maxLength={100} /></div>
          <div className="contact-field"><label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
        </div>
        <div className="contact-field"><label htmlFor="contact-message">Your message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" placeholder="Tell me a little about your project…" rows={5} required minLength={10} maxLength={5000} /></div>
        <button className="button button-lime contact-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? <>Sending… <LoaderCircle size={17} className="sending-spinner" aria-hidden="true" /></> : <>Send message <ArrowUpRight size={18} aria-hidden="true" /></>}</button>
      </fieldset>
      <div className="contact-form-feedback" aria-live="polite" aria-atomic="true">
        {status === "success" && <p className="form-success" role="status"><CheckCircle2 size={17} aria-hidden="true" />Message sent. Thanks for getting in touch!</p>}
        {status === "error" && <p className="form-error" role="alert">{error}</p>}
      </div>
      <p className="contact-form-alternative">Prefer email? <a href={`mailto:${siteConfig.email}`}>Write to me directly <ArrowUpRight size={12} aria-hidden="true" /></a></p>
    </form>
  );
}
