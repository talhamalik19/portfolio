"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

interface WorkflowPipelineProps {
  steps: string[];
  title?: string;
}

export function WorkflowPipeline({ steps, title }: WorkflowPipelineProps) {
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (pipelineRef.current) {
      const stepEls = pipelineRef.current.querySelectorAll(".pipeline-step");
      gsap.fromTo(
        stepEls,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.5,
          scrollTrigger: {
            trigger: pipelineRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Reveal>
      {title && (
        <h4 className="mb-6 text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          {title}
        </h4>
      )}
      <div
        ref={pipelineRef}
        className="flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center md:justify-center"
      >
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3 md:contents">
            <div className="pipeline-step glass flex flex-1 items-center gap-3 rounded-xl px-4 py-3 transition-all hover:glow-blue md:flex-none md:max-w-[180px]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {index + 1}
              </span>
              <span className="text-sm font-medium">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <ChevronRight className="hidden h-4 w-4 shrink-0 text-primary/40 md:block" />
            )}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
