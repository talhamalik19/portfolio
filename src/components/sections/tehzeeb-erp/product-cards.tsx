"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/reveal";
import { PreviewProductCard } from "@/components/shared/preview-product-card";
import { Dialog } from "@/components/ui/dialog";
import { ErpModuleModal } from "./module-modal";
import { productPreviews, type ErpModule } from "@/lib/data/tehzeeb-erp";

export function ProductPreviewCards() {
  const [selected, setSelected] = useState<ErpModule | null>(null);

  return (
    <div className="mb-20 md:mb-24">
      <Reveal>
        <p className="mb-8 text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Platform Applications
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {productPreviews.map((product, index) => (
          <Reveal key={product.id} delay={index * 0.05}>
            <PreviewProductCard
              title={product.title}
              description={product.description}
              tech={product.tech}
              images={product.images.map((src) => ({
                src,
                alt: product.title,
              }))}
              onClick={() => setSelected(product)}
            />
          </Reveal>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        {selected && <ErpModuleModal module={selected} />}
      </Dialog>
    </div>
  );
}
