"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Link,
  Download,
  ArrowDown,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialIconLink } from "@/components/shared/social-icon-link";
import { siteConfig } from "@/lib/data/site";
import { techIcons } from "@/lib/data/skills";
import {
  ParticleBackground,
  GridBackground,
  MouseGlow,
} from "@/components/effects/background-effects";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % siteConfig.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden animated-gradient"
    >
      <GridBackground />
      <ParticleBackground />
      <MouseGlow />

      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px] pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[100px] pulse-glow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Badge variant="glow" className="gap-2 px-4 py-1.5">
            <span className="font-mono text-[10px] uppercase tracking-wider">
              {siteConfig.experienceLabel}
            </span>
          </Badge>
          <Badge variant="glow" className="gap-2 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-foreground">{siteConfig.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="mt-4 h-8 overflow-hidden sm:h-10"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg font-medium gradient-text sm:text-xl md:text-2xl"
            >
              {siteConfig.rotatingTitles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href={siteConfig.cvUrl} download>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <SocialIconLink
            href={siteConfig.github}
            label="GitHub"
            tooltip="🐙 GitHub — Explore my code"
            className="rounded-full glass p-3 text-muted-foreground transition-all hover:text-primary hover:glow-blue"
          >
            <Code2 className="h-5 w-5" />
          </SocialIconLink>
          <SocialIconLink
            href={siteConfig.linkedin}
            label="LinkedIn"
            tooltip="💼 LinkedIn — Let's connect"
            className="rounded-full glass p-3 text-muted-foreground transition-all hover:text-primary hover:glow-blue"
          >
            <Link className="h-5 w-5" />
          </SocialIconLink>
          <SocialIconLink
            href={`mailto:${siteConfig.email}`}
            label="Email"
            tooltip="✉️ Email — Send me a message"
            external={false}
            className="rounded-full glass p-3 text-muted-foreground transition-all hover:text-primary hover:glow-blue"
          >
            <Mail className="h-5 w-5" />
          </SocialIconLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-[scroll_30s_linear_infinite] gap-4">
            {[...techIcons, ...techIcons].map((tech, i) => (
              <span
                key={`marquee-${tech}-${i}`}
                className="shrink-0 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-mono text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.7 }}
          className="mt-16"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
