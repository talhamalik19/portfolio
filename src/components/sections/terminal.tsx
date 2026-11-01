"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { text: "$ whoami", delay: 0 },
  { text: "muhammad-bin-masood", delay: 800, className: "text-primary" },
  { text: "$ cat stack.txt", delay: 1600 },
  { text: "laravel · docker · aws · react · livewire", delay: 2400, className: "text-cyan-400" },
  { text: "$ ls skills/", delay: 3200 },
  { text: "laravel/  docker/  aws/  terraform/  react/", delay: 4000, className: "text-muted-foreground" },
  { text: "$ echo $MINDSET", delay: 4800 },
  { text: "\"Build systems that scale. Never settle.\"", delay: 5600, className: "text-green-400" },
  { text: "$ status --availability", delay: 6400 },
  { text: "● OPEN TO OPPORTUNITIES", delay: 7200, className: "text-green-500" },
];

export function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("terminal-section");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
  }, [started]);

  return (
    <div id="terminal-section" className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-xl border border-border bg-[#0d0d0d] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">
            ~/portfolio — bash
          </span>
        </div>
        <div className="space-y-1 p-6 font-mono text-sm">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={line.className || "text-foreground/80"}
            >
              {line.text}
            </motion.div>
          ))}
          {started && visibleLines < terminalLines.length && (
            <span className="terminal-cursor inline-block h-4 w-2 bg-primary" />
          )}
        </div>
      </div>
    </div>
  );
}
