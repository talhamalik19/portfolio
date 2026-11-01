"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const open = index !== null;
  const current = index !== null ? images[index] : null;
  const count = images.length;

  const goPrev = useCallback(() => {
    if (index === null || count === 0) return;
    onNavigate((index - 1 + count) % count);
  }, [index, count, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null || count === 0) return;
    onNavigate((index + 1) % count);
  }, [index, count, onNavigate]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, goPrev, goNext]);

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="max-w-5xl border-0 bg-transparent p-0 shadow-none sm:p-0">
        <DialogTitle className="sr-only">
          {current?.alt ?? "Image preview"}
        </DialogTitle>

        {current ? (
          <div className="relative">
            <div className="relative mx-auto aspect-[16/10] w-full max-h-[80vh] overflow-hidden rounded-lg bg-black/40 sm:aspect-[16/9]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                unoptimized={/\.svg($|\?)/i.test(current.src)}
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {count > 1 ? (
              <>
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 sm:left-3"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 sm:right-3"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                {index !== null ? (
                  <span className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-mono text-white/80 backdrop-blur-sm">
                    {index + 1} / {count}
                  </span>
                ) : null}
              </>
            ) : null}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
