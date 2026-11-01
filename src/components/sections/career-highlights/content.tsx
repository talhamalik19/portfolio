"use client";

import { useMemo, useState } from "react";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { ImageLightbox } from "@/components/shared/image-lightbox";
import { HighlightCard } from "./highlight-card";
import { LearningRoadmapModal } from "./learning-roadmap-modal";
import {
  isRoadmapHighlight,
  type CareerHighlight,
} from "@/lib/data/career-highlights";

interface CareerHighlightsContentProps {
  highlights: CareerHighlight[];
}

export function CareerHighlightsContent({
  highlights,
}: CareerHighlightsContentProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [roadmapOpen, setRoadmapOpen] = useState(false);

  const momentHighlights = useMemo(
    () => highlights.filter((h) => !isRoadmapHighlight(h) && h.image),
    [highlights]
  );

  const roadmapHighlight = useMemo(
    () => highlights.find(isRoadmapHighlight) ?? null,
    [highlights]
  );

  const handleSelect = (highlight: CareerHighlight) => {
    if (isRoadmapHighlight(highlight)) {
      setRoadmapOpen(true);
      return;
    }

    if (!highlight.image) return;

    const index = momentHighlights.findIndex((h) => h.id === highlight.id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  if (highlights.length === 0) {
    return null;
  }

  return (
    <section
      id="career-highlights"
      className="section-padding relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Milestones"
          title="Career Highlights"
          description="A collection of memorable milestones, achievements, certifications, and moments that have shaped my professional journey."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <Reveal key={highlight.id} delay={index * 0.1}>
              <HighlightCard
                highlight={highlight}
                onSelect={() => handleSelect(highlight)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={momentHighlights.map((h) => ({
          src: h.image!.src,
          alt: h.image!.alt,
        }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <LearningRoadmapModal
        highlight={roadmapHighlight}
        open={roadmapOpen}
        onClose={() => setRoadmapOpen(false)}
      />
    </section>
  );
}
