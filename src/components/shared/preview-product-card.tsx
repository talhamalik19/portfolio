"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  PreviewImageStack,
  type PreviewImage,
} from "@/components/shared/preview-image-stack";

interface PreviewProductCardProps {
  title: string;
  description: string;
  tech: string[];
  images: PreviewImage[];
  onClick: () => void;
  liveUrl?: string;
}

export function PreviewProductCard({
  title,
  description,
  tech,
  images,
  onClick,
  liveUrl,
}: PreviewProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:glow-blue"
      onClick={onClick}
    >
      <div className="relative">
        <PreviewImageStack images={images} alt={title} />
        <ArrowUpRight className="absolute right-3 top-3 h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-base font-semibold">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
          >
            Visit Live Website
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
