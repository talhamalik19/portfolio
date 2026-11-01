"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TehzeebImage } from "@/lib/tehzeeb-images";

interface ImageGalleryProps {
  images: TehzeebImage[];
  columns?: 2 | 3;
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selected, setSelected] = useState<TehzeebImage | null>(null);

  if (images.length === 0) return null;

  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid gap-4 ${gridCols}`}>
        {images.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.05}>
            <motion.button
              type="button"
              whileHover={{ y: -4 }}
              onClick={() => setSelected(image)}
              className="group relative w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:glow-blue"
            >
              <div className="relative aspect-video">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div className="border-t border-border/50 px-4 py-3">
                <p className="truncate text-xs text-muted-foreground">
                  {image.alt}
                </p>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-5xl border-border bg-background p-2 sm:p-4">
          <DialogTitle className="sr-only">
            {selected?.alt ?? "Screenshot preview"}
          </DialogTitle>
          {selected && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
