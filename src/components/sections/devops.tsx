"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Container,
  Layers,
  Blocks,
  Settings,
  GitBranch,
  Activity,
  BarChart3,
  Cloud,
} from "lucide-react";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { devopsTools, awsServices, cicdSteps } from "@/lib/data/devops";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  container: Container,
  layers: Layers,
  blocks: Blocks,
  settings: Settings,
  "git-branch": GitBranch,
  activity: Activity,
  "bar-chart": BarChart3,
  cloud: Cloud,
};

export function DevOpsSection() {
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (pipelineRef.current) {
      const steps = pipelineRef.current.querySelectorAll(".pipeline-step");
      gsap.fromTo(
        steps,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          scrollTrigger: {
            trigger: pipelineRef.current,
            start: "top 80%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="devops" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="DevOps & Cloud"
          title="Infrastructure Excellence"
          description="From containerization to cloud architecture — building reliable, observable, and automated systems."
        />

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {devopsTools.map((tool, index) => {
            const Icon = iconMap[tool.icon] || Cloud;
            return (
              <Reveal key={tool.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass group h-full rounded-xl p-5 transition-all hover:glow-blue"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold">{tool.name}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mb-16">
            <h3 className="mb-6 text-center text-lg font-semibold">
              CI/CD Pipeline
            </h3>
            <div
              ref={pipelineRef}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {cicdSteps.map((step, i) => (
                <div key={`cicd-step-${i}`} className="flex items-center gap-3">
                  <div className="pipeline-step glass rounded-lg px-4 py-2.5 text-xs font-mono text-primary">
                    {step}
                  </div>
                  {i < cicdSteps.length - 1 && (
                    <div className="hidden h-px w-6 bg-primary/30 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div>
            <h3 className="mb-6 text-center text-lg font-semibold">
              AWS Infrastructure
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {awsServices.map((service) => (
                <motion.div
                  key={service.name}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-xl border border-primary/10 p-5 text-center transition-all hover:glow-cyan"
                >
                  <div className="mb-2 text-2xl font-bold gradient-text">
                    {service.name}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
