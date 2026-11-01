"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "talha-portfolio-theme";

function getSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

function subscribe(onChange: () => void) {
  const root = document.documentElement;
  const observer = new MutationObserver(onChange);
  observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  const syncPreference = () => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(storageKey); } catch { /* Storage can be unavailable. */ }
    root.dataset.theme = saved === "light" ? "light" : "dark";
  };
  const handleStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) syncPreference();
  };

  window.addEventListener("storage", handleStorage);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", handleStorage);
  };
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => true);

  function toggleTheme() {
    const next = getSnapshot() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(storageKey, next); } catch { /* The switch still works without storage. */ }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Dark theme" aria-pressed={isDark} title="Switch light and dark theme">
      <Moon size={17} className="theme-icon-moon" aria-hidden="true" />
      <Sun size={17} className="theme-icon-sun" aria-hidden="true" />
    </button>
  );
}
