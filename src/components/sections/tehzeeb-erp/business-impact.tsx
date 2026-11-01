"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { businessImpact } from "@/lib/data/tehzeeb-erp";

export function BusinessImpact() {
  return (
    <div className="mb-20 md:mb-24">
      <Reveal>
        <p className="mb-8 text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Business Impact
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {businessImpact.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <motion.div
              whileHover={{ y: -3 }}
              className="glass h-full rounded-xl border border-border/60 p-6 transition-all hover:glow-blue"
            >
              <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
