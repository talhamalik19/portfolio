"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Map,
  Code2,
  FolderOpen,
  Briefcase,
  Cloud,
  Brain,
  Mail,
  Search,
} from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import { scrollToSection } from "@/lib/utils";

const commands = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: Map, label: "Journey", href: "#journey" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Cloud, label: "DevOps", href: "#devops" },
  { icon: Brain, label: "AI Work", href: "#ai" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    scrollToSection(id);
  };

  return (
  <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[20%] z-[201] w-full max-w-lg -translate-x-1/2 px-4"
          >
            <Command
              className="glass-strong overflow-hidden rounded-xl shadow-2xl"
              label="Command Palette"
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Command.Input
                  placeholder="Navigate to section..."
                  className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>
                <Command.Group heading="Navigation" className="text-xs text-muted-foreground">
                  {commands.map((cmd) => (
                    <Command.Item
                      key={cmd.href}
                      value={cmd.label}
                      onSelect={() => handleSelect(cmd.href)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-primary/10 aria-selected:text-primary"
                    >
                      <cmd.icon className="h-4 w-4" />
                      {cmd.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
              <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                Press <kbd className="rounded border border-border px-1.5 py-0.5 font-mono">Esc</kbd> to close
              </div>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5" />
        <kbd className="font-mono">Ctrl+K</kbd>
      </button>
    </>
  );
}
