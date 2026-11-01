"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition, useMediaQuery } from "@/hooks/use-mouse-position";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const isTouch = useMediaQuery("(hover: none)");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea");
      setIsHovering(!!interactive);
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9998] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 mix-blend-difference md:block"
        animate={{ x, y, scale: isHovering ? 2.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9997] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 md:block"
        animate={{ x, y, scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
