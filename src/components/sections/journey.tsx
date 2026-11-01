"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { journeyStages } from "@/lib/data/journey";

export function JourneySection() {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader
          label="My Journey"
          title="Professional Journey"
          description="Milestones across frontend foundations, backend mastery, DevOps evolution, and AI-powered systems."
        />

        <Reveal className="mb-12 flex justify-center">
          <div className="glass inline-flex items-center gap-3 rounded-full border border-primary/20 px-5 py-2.5">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Timeline
            </span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span className="text-sm font-semibold gradient-text">
              2022 → 2026
            </span>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {journeyStages.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 0.08}>
              <div
                className={`relative mb-12 flex items-start gap-8 md:mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 z-10 flex -translate-x-1/2 items-center justify-center md:left-1/2">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <span className="absolute inset-0 h-5 w-5 -m-1 rounded-full bg-primary/20 blur-sm pulse-glow" />
                    <span className="relative block h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50 ring-4 ring-primary/10" />
                  </motion.div>
                </div>

                <div
                  className={`ml-12 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono font-semibold text-primary glow-cyan">
                    {stage.year}
                  </span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-12 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}
                >
                  <div className="glass group overflow-hidden rounded-xl transition-all hover:glow-blue">
                    <div className="relative h-24 border-b border-border/50 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                      <div className="absolute inset-0 grid-bg opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
                          Milestone · {stage.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          {stage.milestone}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">{stage.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {stage.description}
                      </p>
                      <ul
                        className={`space-y-2 ${
                          index % 2 === 0 ? "" : "md:text-right"
                        }`}
                      >
                        {stage.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={`${stage.id}-highlight-${highlightIndex}`}
                            className={`flex items-start gap-2 text-xs text-muted-foreground ${
                              index % 2 !== 0 ? "md:flex-row-reverse md:gap-2" : ""
                            }`}
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/80" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
