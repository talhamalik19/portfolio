"use client";

import { TehzeebHero } from "./hero";
import { TehzeebHighlights } from "./highlights";
import { ProductPreviewCards } from "./product-cards";
import { ArchitecturePreview } from "./architecture-preview";
import { BusinessImpact } from "./business-impact";
import { TehzeebTechStack, TehzeebCaseStudyCta } from "./tech-stack-section";

export function TehzeebErpContent() {
  return (
    <>
      <TehzeebHero />
      <TehzeebHighlights />
      <ProductPreviewCards />
      <ArchitecturePreview />
      <BusinessImpact />
      <TehzeebTechStack />
      <TehzeebCaseStudyCta />
    </>
  );
}
