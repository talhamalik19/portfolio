"use client";

import { Reveal } from "@/components/shared/reveal";
import { tehzeebErpMeta } from "@/lib/data/tehzeeb-erp";

export function TehzeebHero() {
  return (
    <div className="mb-16 text-center md:mb-20">
      <Reveal>
        <span className="mb-6 inline-block rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
          {tehzeebErpMeta.badge}
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="gradient-text">{tehzeebErpMeta.title}</span>
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {tehzeebErpMeta.description}
        </p>
      </Reveal>
    </div>
  );
}
