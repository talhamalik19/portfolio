"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { CareerHighlight } from "@/lib/data/career-highlights";

interface LearningRoadmapModalProps {
  highlight: CareerHighlight | null;
  open: boolean;
  onClose: () => void;
}

export function LearningRoadmapModal({
  highlight,
  open,
  onClose,
}: LearningRoadmapModalProps) {
  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="max-w-lg gap-5">
        {highlight ? (
          <>
            <DialogHeader className="space-y-3 pr-6 text-left">
              <div className="flex flex-wrap items-center gap-2">
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
              <DialogTitle className="text-xl leading-snug sm:text-2xl">
                {highlight.title}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                {highlight.description}
              </DialogDescription>
            </DialogHeader>

            {highlight.topicCategories?.length ? (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-primary">
                  Topics Covered
                </h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlight.topicCategories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        {category.title}
                      </p>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Final Goal
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Building production-ready AI agents and real-world AI
                applications.
              </p>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
