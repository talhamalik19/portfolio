"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Cpu,
  Swords,
  BookOpen,
  TrendingUp,
  Target,
} from "lucide-react";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { philosophyItems } from "@/lib/data/philosophy";

const iconMap = {
  shield: Shield,
  cpu: Cpu,
  swords: Swords,
  "book-open": BookOpen,
  "trending-up": TrendingUp,
  target: Target,
};

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Philosophy"
          title="Engineering Mindset"
          description="The principles that drive every line of code, every architecture decision, and every system I build."
        />

        <div className="mb-16 text-center">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl">
              <p className="text-2xl font-light leading-relaxed tracking-tight md:text-3xl lg:text-4xl">
                &ldquo;I don&apos;t build websites.{" "}
                <span className="gradient-text font-medium">
                  I architect systems
                </span>{" "}
                that scale, perform, and endure.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Cpu;
            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass group h-full rounded-xl p-6 transition-all hover:glow-blue"
                >
                  <Icon className="mb-4 h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
