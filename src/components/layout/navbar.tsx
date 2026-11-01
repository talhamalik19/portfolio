"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label="Talha Malik home" onClick={() => setOpen(false)}>
          <span className="monogram">tm<span>.</span></span>
          <span className="wordmark-name">Talha Malik<span>Full Stack Developer</span></span>
        </Link>
        <div className="desktop-nav">
          {siteConfig.navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <Link href="/#contact" className="nav-contact">Let’s connect <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <ThemeToggle />
        <button className="mobile-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      {open && (
        <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
          {[...siteConfig.navLinks, { label: "Contact", href: "/#contact" }].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>
          ))}
          <a href={siteConfig.cvUrl} download="Talha_Malik_Resume.pdf" onClick={() => setOpen(false)}>Download resume <ArrowUpRight size={18} aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  );
}
