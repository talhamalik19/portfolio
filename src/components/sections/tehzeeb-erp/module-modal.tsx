"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ModalImageNavigator } from "@/components/shared/modal-image-navigator";
import type { ErpModule } from "@/lib/data/tehzeeb-erp";
import {
  tehzeebErpMeta,
  erpModuleModalCta,
} from "@/lib/data/tehzeeb-erp";

interface ErpModuleModalProps {
  module: ErpModule;
}

export function ErpModuleModal({ module }: ErpModuleModalProps) {
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="text-2xl">{module.title}</DialogTitle>
        <DialogDescription>{module.subtitle}</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <ModalImageNavigator images={module.images} alt={module.title} />

        <div>
          <h4 className="mb-2 text-sm font-semibold text-primary">Overview</h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {module.overview}
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-primary">
            Key Features
          </h4>
          <ul className="space-y-1.5">
            {module.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-primary">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {module.modalTech.map((t) => (
              <Badge key={`${module.id}-modal-tech-${t}`} variant="default">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-xs italic text-muted-foreground">
          {erpModuleModalCta.footerNote}
        </p>

        <Button variant="glow" className="w-full" asChild>
          <Link href={tehzeebErpMeta.caseStudyHref}>
            {erpModuleModalCta.buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DialogContent>
  );
}
