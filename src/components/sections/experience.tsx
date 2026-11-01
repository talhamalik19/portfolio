"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { experience } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Timeline"
          description="Professional roles and milestones across backend engineering, enterprise systems, and cloud infrastructure."
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                className="glass group relative rounded-xl p-6 transition-all hover:glow-blue md:p-8"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-primary to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm text-primary">{item.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:ml-14">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2 md:ml-14">
                  {item.highlights.map((h, highlightIndex) => (
                    <li
                      key={`${item.id}-highlight-${highlightIndex}`}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
