"use client";

import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { architecturePreview } from "@/lib/data/tehzeeb-erp";

export function ArchitecturePreview() {
  return (
    <div className="mb-20 md:mb-24">
      <Reveal>
        <p className="mb-8 text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Connected Architecture
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mx-auto flex max-w-xs flex-col items-center gap-2">
          {architecturePreview.map((layer, index) => (
            <div key={layer} className="flex w-full flex-col items-center">
              <div className="glass w-full rounded-xl border border-border/60 px-5 py-3.5 text-center text-sm font-medium transition-all hover:glow-blue">
                {layer}
              </div>
              {index < architecturePreview.length - 1 && (
                <ChevronDown className="my-1 h-4 w-4 text-primary/40" />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
