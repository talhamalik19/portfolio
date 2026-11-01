"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, BarChart3, Cpu, Zap } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/shared/reveal";

const aiFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description:
      "Intelligent dashboards that surface insights automatically — anomaly detection, trend prediction, and smart recommendations.",
  },
  {
    icon: BarChart3,
    title: "Advanced Visualizations",
    description:
      "Real-time data visualization with interactive charts, heatmaps, and custom reporting engines built for enterprise scale.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Dashboards",
    description:
      "Self-adapting dashboards that learn from user behavior and prioritize the metrics that matter most.",
  },
  {
    icon: Cpu,
    title: "Future-Ready Systems",
    description:
      "Architecture designed for AI integration — modular inference layers, event-driven pipelines, and scalable data processing.",
  },
  {
    icon: Zap,
    title: "Performance Metrics",
    description:
      "Comprehensive KPI tracking with automated alerts, SLA monitoring, and performance benchmarking across systems.",
  },
];

export function AISection() {
  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.05),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="AI & Analytics"
          title="Intelligent Systems"
          description="Building the next generation of data-driven platforms with AI integration at the core."
        />

        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-2xl p-8 md:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[80px]" />
              <div className="relative">
                <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary">
                  AI Analytics Dashboard
                </span>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                  Data Meets <span className="gradient-text">Intelligence</span>
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Modern analytics platform combining Laravel backend power with
                  AI-driven insights. Real-time data processing, intelligent
                  reporting, and enterprise-grade visualizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Livewire", "AI/ML", "Filament", "Tailwind"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
              <div className="absolute inset-0 grid-bg opacity-30" />
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                  style={{ top: `${20 + i * 15}%` }}
                  animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
              <div className="relative text-center">
                <Brain className="mx-auto mb-4 h-16 w-16 text-primary/60" />
                <p className="text-sm font-mono text-muted-foreground">
                  AI Inference Layer
                </p>
                <p className="mt-1 text-xs text-primary/60">
                  Processing insights in real-time
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass group rounded-xl p-6 transition-all hover:glow-blue"
              >
                <feature.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 text-base font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
