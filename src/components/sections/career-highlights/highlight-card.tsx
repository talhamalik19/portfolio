"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { CareerHighlight } from "@/lib/data/career-highlights";
import { isRoadmapHighlight } from "@/lib/data/career-highlights";

interface HighlightCardProps {
  highlight: CareerHighlight;
  onSelect: () => void;
}

export function HighlightCard({ highlight, onSelect }: HighlightCardProps) {
  const isRoadmap = isRoadmapHighlight(highlight);
  const isSvg =
    highlight.image != null && /\.svg($|\?)/i.test(highlight.image.src);

  return (
    <motion.button
      type="button"
      whileHover={{ y: -4 }}
      onClick={onSelect}
      className="group glass relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border/60 text-left transition-all hover:glow-blue"
    >
      {isRoadmap ? (
        <div className="relative flex aspect-[4/3] flex-col justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,194,255,0.12),transparent_55%)]" />
          <div className="relative flex flex-wrap content-start gap-1.5 overflow-hidden">
            {(highlight.topics ?? []).map((topic) => (
              <span
                key={topic}
                className="rounded-md border border-primary/20 bg-background/50 px-2 py-0.5 text-[10px] font-medium text-primary/90 backdrop-blur-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      ) : highlight.image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={highlight.image.src}
            alt={highlight.image.alt}
            fill
            unoptimized={isSvg}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="glow">{highlight.badge}</Badge>
          {highlight.status ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden
              />
              {highlight.status}
            </span>
          ) : null}
        </div>
        <h3 className="mb-2 text-sm font-semibold">{highlight.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {highlight.summary}
        </p>
      </div>
    </motion.button>
  );
}
