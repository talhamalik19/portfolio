"use client";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

interface TechStackBadgesProps {
  items: string[];
  variant?: "default" | "mono";
}

export function TechStackBadges({
  items,
  variant = "mono",
}: TechStackBadgesProps) {
  return (
    <Reveal>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item, index) =>
          variant === "mono" ? (
            <span
              key={item}
              className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-mono text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item}
            </span>
          ) : (
            <Badge key={item} variant="glow" className="text-xs">
              {item}
            </Badge>
          )
        )}
      </div>
    </Reveal>
  );
}
