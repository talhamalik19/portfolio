"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

interface ArchitectureService {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  layer: "domain" | "integration" | "central";
}

interface ArchitectureDiagramProps {
  services: ArchitectureService[];
}

export function ArchitectureDiagram({ services }: ArchitectureDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  const domainServices = services.filter((s) => s.layer === "domain");
  const integrationServices = services.filter((s) => s.layer === "integration");
  const centralServices = services.filter((s) => s.layer === "central");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (diagramRef.current) {
      const cards = diagramRef.current.querySelectorAll(".arch-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          scrollTrigger: {
            trigger: diagramRef.current,
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
    <div ref={diagramRef} className="space-y-8">
      <LayerRow label="Domain Services" services={domainServices} />
      <div className="flex justify-center">
        <ArrowRight className="h-5 w-5 rotate-90 text-primary/40 md:rotate-90" />
      </div>
      <LayerRow label="Integration Layer" services={integrationServices} />
      <div className="flex justify-center">
        <ArrowRight className="h-5 w-5 rotate-90 text-primary/40" />
      </div>
      <LayerRow label="Central Services" services={centralServices} />
    </div>
  );
}

function LayerRow({
  label,
  services,
}: {
  label: string;
  services: ArchitectureService[];
}) {
  return (
    <Reveal>
      <div>
        <p className="mb-4 text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <div className="flex flex-wrap items-stretch justify-center gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -4, scale: 1.02 }}
                className="arch-card glass w-full max-w-[200px] rounded-xl p-4 transition-all hover:glow-blue"
              >
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="mb-1 text-sm font-semibold">{service.name}</h4>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
