"use client";

import { useEffect, useRef, useId } from "react";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          primaryColor: "#00c2ff",
          primaryTextColor: "#e5e5e5",
          primaryBorderColor: "#00c2ff",
          lineColor: "#00c2ff",
          secondaryColor: "#1a1a1a",
          tertiaryColor: "#111111",
          background: "#0a0a0a",
          mainBkg: "#111111",
          nodeBorder: "#00c2ff",
          clusterBkg: "#111111",
          titleColor: "#e5e5e5",
          edgeLabelBackground: "#111111",
        },
      });

      if (cancelled || !containerRef.current) return;

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart.trim());
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch {
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML =
            '<pre class="text-xs text-muted-foreground">Diagram could not be rendered.</pre>';
        }
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div
      ref={containerRef}
      className="my-8 overflow-x-auto rounded-xl border border-border bg-card/50 p-6 [&_svg]:mx-auto"
    />
  );
}
