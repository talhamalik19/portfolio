"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { stats } from "@/lib/data/stats";
import { TerminalSection } from "./terminal";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="Engineering With Purpose"
          description="A disciplined path from frontend craft to backend architecture, DevOps infrastructure, and AI-integrated analytics platforms."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I engineer systems that scale — from Laravel and CodeIgniter backends
              to VPC-based enterprise applications, legacy migrations, and
              multi-store platforms. My work spans ecommerce, inventory, school
              management, and AI-powered analytics dashboards, backed by Docker,
              AWS, and modern CI/CD pipelines. Every project reflects discipline,
              clean architecture, and a commitment to building software that
              performs under real-world pressure.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 text-center transition-all hover:glow-blue"
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-16">
          <TerminalSection />
        </Reveal>
      </div>
    </section>
  );
}
