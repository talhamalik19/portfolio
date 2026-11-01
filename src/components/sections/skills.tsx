"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { skillCategories } from "@/lib/data/skills";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 group-hover:shadow-lg group-hover:shadow-primary/30"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Skills & Tech Stack"
          title="Technical Arsenal"
          description="A focused toolkit across backend, frontend, DevOps, and cloud infrastructure."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass group h-full rounded-xl p-6 transition-all hover:glow-blue"
              >
                <h3 className="mb-5 text-base font-semibold gradient-text">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={`${category.name}-${skill.name}`}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
