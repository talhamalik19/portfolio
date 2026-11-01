"use client";

import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { PageLoader } from "@/components/effects/page-loader";
import { CommandPalette } from "@/components/effects/command-palette";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <CommandPalette />
      {children}
    </SmoothScrollProvider>
  );
}
