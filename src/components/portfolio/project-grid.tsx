"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/lib/data/portfolio";
import { ProjectArtwork } from "./project-artwork";

const filters = ["All projects", "E-commerce", "Corporate", "POS"] as const;

export function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All projects");
  const visible = portfolioProjects.filter((project) => filter === "All projects" || project.category === filter);

  return (
    <>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((item) => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === "All projects" && <span>04</span>}</button>)}
        </div>
        <p className="project-count" role="status">{String(visible.length).padStart(2, "0")} projects</p>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className="portfolio-project" key={project.slug}>
            <Link href={`/case-studies/${project.slug}`} className="project-image-link" aria-label={`View ${project.name} project`}><ProjectArtwork project={project} /><span className="project-hover-arrow"><ArrowUpRight size={25} /></span></Link>
            <div className="project-title-row"><h3><Link href={`/case-studies/${project.slug}`}>{project.name}</Link></h3><span>{project.category}</span></div>
            <p className="project-summary">{project.summary}</p>
            <div className="project-bottom"><div className="project-tech">{project.tech.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div><Link href={`/case-studies/${project.slug}`} className="project-details-link" aria-label={`Read about ${project.name}`}><ArrowUpRight size={20} /></Link></div>
          </article>
        ))}
      </div>
    </>
  );
}
