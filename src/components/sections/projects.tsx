"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { ProjectCard } from "@/components/shared/project-card";
import { ModalImageNavigator } from "@/components/shared/modal-image-navigator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/data/projects";

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Other Projects"
          title="Systems I've Built"
          description="Real-world applications solving complex business problems with scalable architecture and modern engineering practices."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} onSelect={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                <DialogDescription>
                  {selected.subtitle ?? selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                {selected.images?.length ? (
                  <ModalImageNavigator
                    images={selected.images}
                    alt={selected.title}
                  />
                ) : null}
                {selected.subtitle ? (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-primary">
                      Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {selected.description}
                    </p>
                  </div>
                ) : null}
                {selected.highlights?.length ? (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-primary">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {selected.highlights.map((highlight) => (
                        <li
                          key={`${selected.id}-highlight-${highlight}`}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-primary">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <Badge key={`${selected.id}-tech-${t}`} variant="default">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                {selected.architecture ? (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-primary">
                      Architecture
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {selected.architecture}
                    </p>
                  </div>
                ) : null}
                {selected.challenges.length > 0 ? (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-primary">
                      Challenges Solved
                    </h4>
                    <ul className="space-y-1.5">
                      {selected.challenges.map((c, i) => (
                        <li
                          key={`${selected.id}-challenge-${i}`}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {selected.achievements.length > 0 ? (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-primary">
                      Achievements
                    </h4>
                    <ul className="space-y-1.5">
                      {selected.achievements.map((a, i) => (
                        <li
                          key={`${selected.id}-achievement-${i}`}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {selected.liveUrl ? (
                  <Button variant="glow" className="w-full" asChild>
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Official Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
