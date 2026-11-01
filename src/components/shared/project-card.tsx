"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PreviewProductCard } from "@/components/shared/preview-product-card";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (p: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  if (project.images?.length) {
    return (
      <PreviewProductCard
        title={project.title}
        description={project.description}
        tech={project.tech}
        images={project.images.map((src) => ({
          src,
          alt: project.title,
        }))}
        onClick={() => onSelect(project)}
        liveUrl={project.liveUrl}
      />
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all hover:glow-blue">
        <div
          className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,194,255,0.08),transparent_60%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              {project.featured && <Badge variant="glow">Featured</Badge>}
              <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <Badge
                key={`${project.id}-tech-${t}`}
                variant="secondary"
                className="text-[10px]"
              >
                {t}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-[10px]">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
