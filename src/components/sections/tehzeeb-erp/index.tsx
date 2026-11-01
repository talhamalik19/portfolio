import { TehzeebErpContent } from "./content";

export function TehzeebErpSection() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden border-b border-border/50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <TehzeebErpContent />
      </div>
    </section>
  );
}
