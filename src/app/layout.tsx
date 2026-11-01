import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const title = "Talha Malik — Full Stack Developer";
const description = "Full Stack Developer with 3 years of experience in React.js, Next.js, and Node.js. Explore Talha Malik’s e-commerce, POS, and CMS-driven projects.";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: title, template: "%s | Talha Malik" },
  description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: ["Talha Malik", "Full Stack Developer", "MERN Stack Developer", "React.js", "Next.js", "Node.js", "Rawalpindi", "Pakistan"],
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: "Talha Malik Portfolio",
    ...(siteUrl ? { url: siteUrl, images: [{ url: "/og-image.svg", width: 1200, height: 630 }] } : {}),
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script id="theme-initializer" dangerouslySetInnerHTML={{ __html: `(function(){var t;try{t=localStorage.getItem('talha-portfolio-theme')}catch(e){}document.documentElement.dataset.theme=t==='light'?'light':'dark'})()` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
