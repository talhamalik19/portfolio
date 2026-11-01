"use client";

import { motion } from "framer-motion";
import { Server, Cloud, ArrowRight, Wifi, WifiOff } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

interface SyncDiagramProps {
  branchItems: string[];
  centralItems: string[];
}

export function SyncDiagram({ branchItems, centralItems }: SyncDiagramProps) {
  return (
    <Reveal>
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass rounded-xl p-6 transition-all hover:glow-blue"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Server className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Branch Layer</h4>
              <p className="text-xs text-muted-foreground">
                Local Windows Server
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            {branchItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
            <WifiOff className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">
              Works offline
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-2 px-4">
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-2">
            <ArrowRight className="h-5 w-5 text-primary/60" />
            <div className="glass rounded-lg px-4 py-3 text-center">
              <Wifi className="mx-auto mb-1 h-4 w-4 text-primary" />
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                Sync when online
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary/60" />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <ArrowRight className="h-4 w-4 rotate-90 text-primary/60" />
            <div className="glass rounded-lg px-3 py-2">
              <p className="text-[10px] font-mono text-muted-foreground">
                Sync Layer
              </p>
            </div>
            <ArrowRight className="h-4 w-4 rotate-90 text-primary/60" />
          </div>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          className="glass rounded-xl p-6 transition-all hover:glow-blue"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Cloud className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Central Layer</h4>
              <p className="text-xs text-muted-foreground">Live HQ Server</p>
            </div>
          </div>
          <ul className="space-y-2">
            {centralItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Reveal>
  );
}
