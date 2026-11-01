import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectArtwork } from "@/components/portfolio/project-artwork";
import { portfolioProjects } from "@/lib/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: `${project.name} | Talha Malik`, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = portfolioProjects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const project = portfolioProjects[index];
  const nextProject = portfolioProjects[(index + 1) % portfolioProjects.length];

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main className="shell project-page" id="main-content">
        <Link href="/#projects" className="project-back"><ArrowLeft size={16} aria-hidden="true" /> Back to selected work</Link>
        <p className="eyebrow detail-eyebrow">PROJECT {project.number} / {project.category.toUpperCase()}</p>
        <h1>{project.name}</h1>
        <p className="project-lede">{project.summary}</p>
        {slug != "baseer-pos" && (
          <div className="project-detail-meta">
            <div className="project-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a href={project.url} className="button button-dark" target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        )}
        <div className="project-detail-art"><ProjectArtwork project={project} /></div>
        <section className="project-contributions" aria-labelledby="contributions-heading">
          <h2 id="contributions-heading">My <em>contribution.</em></h2>
          <ul>{project.highlights.map((highlight, highlightIndex) => <li key={highlight}><span>{String(highlightIndex + 1).padStart(2, "0")}</span>{highlight}</li>)}</ul>
        </section>
        <Link href={`/case-studies/${nextProject.slug}`} className="next-project"><div><p>NEXT PROJECT</p><strong>{nextProject.name}</strong></div><ArrowUpRight size={26} aria-hidden="true" /></Link>
      </main>
      <Footer />
    </div>
  );
}
