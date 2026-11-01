"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/shared/reveal";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What People Say"
          description="Feedback from teams and stakeholders who've experienced the engineering firsthand."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass group relative h-full rounded-xl p-6 md:p-8 transition-all hover:glow-blue"
              >
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-primary">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
