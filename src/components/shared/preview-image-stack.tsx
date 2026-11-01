"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface PreviewImage {
  src: string;
  alt: string;
}

interface PreviewImageStackProps {
  images: PreviewImage[];
  alt: string;
}

export function PreviewImageStack({ images, alt }: PreviewImageStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const advance = useCallback(() => {
    if (images.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isHovering || images.length <= 1) return;

    const interval = setInterval(advance, 2200);
    return () => clearInterval(interval);
  }, [isHovering, images.length, advance]);

  const current = images[activeIndex] ?? images[0];

  if (!current) {
    return (
      <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    );
  }

  return (
    <div
      className="group/preview relative aspect-[16/10] w-full overflow-hidden bg-secondary/30"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setActiveIndex(0);
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: isHovering ? 1.06 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/preview:opacity-100" />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity duration-300 group-hover/preview:opacity-100">
          {images.map((img, i) => (
            <span
              key={img.src}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-4 bg-primary"
                  : "w-1 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
