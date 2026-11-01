"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { tehzeebHighlights } from "@/lib/data/tehzeeb-erp";

export function TehzeebHighlights() {
  return (
    <div className="mb-20 md:mb-24">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
        {tehzeebHighlights.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <motion.div
              whileHover={{ y: -3 }}
              className="glass group rounded-xl border border-border/60 px-4 py-5 text-center transition-all hover:glow-blue md:px-5 md:py-6"
            >
              <p className="mb-1 text-lg font-bold tracking-tight gradient-text md:text-xl">
                {item.value}
              </p>
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground/80">
                {item.label}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
