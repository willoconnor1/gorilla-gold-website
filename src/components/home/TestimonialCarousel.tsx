"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";

const sports = Array.from(new Set(testimonials.map((t) => t.sport)));

export function TestimonialCarousel() {
  const [activeSport, setActiveSport] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filtered = activeSport
    ? testimonials.filter((t) => t.sport === activeSport)
    : testimonials;

  // Reset index when filter changes
  useEffect(() => {
    setCurrent(0);
  }, [activeSport]);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % filtered.length);
  }, [filtered.length]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (filtered.length <= 1) return;
    intervalRef.current = setInterval(advance, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [advance, filtered.length]);

  const testimonial = filtered[current];

  if (!testimonial) return null;

  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>What athletes are saying</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Trusted by athletes
              <br />
              across every sport.
            </h2>
          </div>
          <Button href="/testimonials" variant="outline" arrow>
            All testimonials
          </Button>
        </div>

        {/* Sport filter buttons */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSport(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeSport === null
                ? "bg-accent text-black"
                : "border border-border text-text-secondary hover:border-accent hover:text-accent"
            }`}
          >
            All
          </button>
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setActiveSport(sport)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeSport === sport
                  ? "bg-accent text-black"
                  : "border border-border text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-secondary p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating || 5 }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="mt-6 font-heading text-xl font-medium leading-relaxed text-text-primary sm:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-6">
                  <p className="text-base font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  {testimonial.title && (
                    <p className="text-sm text-text-muted">
                      {testimonial.title}
                    </p>
                  )}
                  <span className="mt-2 inline-block rounded-full bg-bg-elevated px-3 py-1 text-xs font-medium text-accent">
                    {testimonial.sport}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="mt-8 flex items-center gap-1.5">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-border hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
