"use client";

import { useCountUp } from "@/hooks/use-count-up";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const { ref, count } = useCountUp({ end: value, suffix });

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block text-4xl font-bold gradient-text md:text-5xl"
      >
        {count}
      </span>
      <span className="mt-2 block text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
