import { resolveCareerHighlights } from "@/lib/data/career-highlights";
import { getMomentsImages } from "@/lib/moments-images";
import { CareerHighlightsContent } from "./content";

export function CareerHighlightsSection() {
  const highlights = resolveCareerHighlights(getMomentsImages());

  return <CareerHighlightsContent highlights={highlights} />;
}
