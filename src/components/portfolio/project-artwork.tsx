import { ArrowUpRight, Box, Layers3, ShoppingBag, Terminal } from "lucide-react";
import type { PortfolioProject } from "@/lib/data/portfolio";

// Typographic project artwork, rather than fabricated application screenshots.
export function ProjectArtwork({ project }: { project: PortfolioProject }) {
  return (
    <div className={`project-artwork artwork-${project.visual}`} aria-hidden="true">
      <span className="artwork-eyebrow">{project.category} / {project.number}</span>
      {project.visual === "fme" && <><div className="artwork-orbit orbit-one" /><div className="artwork-orbit orbit-two" /><span className="fme-emblem"><Box strokeWidth={1.2} /></span><span className="artwork-brand fme-brand">fme<span>extensions</span></span><span className="artwork-caption">React.js / Next.js / Magento 2</span></>}
      {project.visual === "extendons" && <><div className="extendons-block block-one" /><div className="extendons-block block-two" /><Layers3 className="extendons-symbol" strokeWidth={1} /><span className="artwork-brand extendons-brand">extendons<span>E-commerce, across borders.</span></span><span className="artwork-small-icon"><ShoppingBag size={21} strokeWidth={1.4} /></span></>}
      {project.visual === "juice" && <><div className="citrus citrus-one" /><div className="citrus citrus-two" /><span className="artwork-brand juice-brand">Juice<span>Station</span></span><span className="artwork-caption">Next.js meets Strapi.</span></>}
      {project.visual === "baseer" && <><div className="baseer-grid" /><span className="baseer-terminal"><Terminal size={34} strokeWidth={1.2} /></span><span className="artwork-brand baseer-brand">BASEER<span>Point of sale. In sync.</span></span><div className="baseer-pill"><span /> Offline support <ArrowUpRight size={14} /></div></>}
      <span className="artwork-footnote">{project.visual === "baseer" ? "DESKTOP + WEB" : "WEB DEVELOPMENT"}</span>
    </div>
  );
}
