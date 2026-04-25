"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import type { Testimonial } from "@/types";

const SPORT_ORDER = [
  "Golf",
  "Softball",
  "Tennis",
  "Pickleball",
  "Football",
  "Gymnastics",
  "Soccer",
  "Active Living",
];

const FEATURED_IDS = ["jeff-patterson", "andrew-cohn"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

interface TestimonialsClientProps {
  testimonials: Testimonial[];
}

export function TestimonialsClient({
  testimonials,
}: TestimonialsClientProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const nonFeatured = testimonials.filter(
    (t) => !FEATURED_IDS.includes(t.id)
  );

  const visible =
    activeFilter === "All"
      ? nonFeatured
      : nonFeatured.filter((t) => t.sport === activeFilter);

  const availableSports = SPORT_ORDER.filter((sport) =>
    nonFeatured.some((t) => t.sport === sport)
  );

  return (
    <>
      <div className="sticky top-16 z-30 border-b border-border bg-bg-primary/90 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {["All", ...availableSports].map((sport) => (
              <button
                key={sport}
                onClick={() => setActiveFilter(sport)}
                className={
                  activeFilter === sport
                    ? "rounded-full bg-accent px-5 py-2 text-sm font-medium text-bg-primary transition-colors"
                    : "rounded-full border border-border px-5 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent"
                }
              >
                {sport}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="columns-1 gap-6 sm:columns-2 lg:columns-3"
            >
              {visible.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="mb-6 break-inside-avoid"
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {visible.length === 0 && (
            <p className="py-12 text-center text-text-muted">
              No testimonials found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
