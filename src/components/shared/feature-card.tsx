"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: FeatureCardProps) {
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        className="glass group h-full rounded-xl p-5 transition-all hover:glow-blue"
      >
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="mb-1.5 text-sm font-semibold">{title}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </Reveal>
  );
}

interface FeatureCardGridProps {
  items: { title: string; description: string; icon: LucideIcon }[];
}

export function FeatureCardGrid({ items }: FeatureCardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <FeatureCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
          delay={index * 0.05}
        />
      ))}
    </div>
  );
}
