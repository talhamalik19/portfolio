import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a href="/" className="footer-name">Talha Malik<span>© {new Date().getFullYear()}</span></a>
        <p>Full stack development. Thoughtful execution.</p>
        <div className="footer-links">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
