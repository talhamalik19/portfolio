"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { TechStackBadges } from "@/components/shared/tech-stack-badges";
import { Button } from "@/components/ui/button";
import {
  tehzeebErpMeta,
  tehzeebTechStack,
  caseStudyCta,
} from "@/lib/data/tehzeeb-erp";

export function TehzeebTechStack() {
  return (
    <div className="mb-16">
      <Reveal>
        <p className="mb-8 text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Technology Stack
        </p>
      </Reveal>
      <TechStackBadges items={tehzeebTechStack} />
    </div>
  );
}

export function TehzeebCaseStudyCta() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/[0.06] to-transparent px-6 py-12 text-center md:px-12 md:py-16">
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="relative">
          <Button variant="glow" size="lg" className="mb-6 h-12 px-8 text-base" asChild>
            <Link href={tehzeebErpMeta.caseStudyHref}>
              {caseStudyCta.buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            {caseStudyCta.supportingText}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
