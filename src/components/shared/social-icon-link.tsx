"use client";

import type { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialIconLinkProps {
  href: string;
  label: string;
  tooltip: string;
  className?: string;
  external?: boolean;
  children: ReactNode;
}

export function SocialIconLink({
  href,
  label,
  tooltip,
  className,
  external = true,
  children,
}: SocialIconLinkProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={className}
            aria-label={label}
          >
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent side="top">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
