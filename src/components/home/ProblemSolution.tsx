"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const features = [
  {
    title: "Moisture-Resistant Tackified Feel",
    description:
      "Our all-natural resin formula creates a grip surface that repels moisture, giving you confident control even in rain, humidity, and heat.",
  },
  {
    title: "Adjustable Grip Intensity",
    description:
      "Squeeze lightly for subtle tack. Squeeze harder for maximum grip. You control exactly how much hold you need for your conditions.",
  },
  {
    title: "Works on Hands and Gloves",
    description:
      "Apply directly to bare hands or enhance your glove's performance. Gorilla Gold adapts to your setup, not the other way around.",
  },
  {
    title: "No Residue. No Buildup.",
    description:
      "Unlike pine tar or rosin, Gorilla Gold dissolves within hours and never accumulates on your equipment. Clean performance, every time.",
  },
];

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-24">
      {/* Gold glow from left */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[1400px] w-[300px] -translate-x-1/3 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionLabel>The Gorilla Gold difference</SectionLabel>

        <div className="mt-6 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
              What happens when
              <br />
              your grip fails?
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
              Sweaty palms. Humid air. A sudden downpour. When conditions change,
              grip pressure increases, control decreases, and confidence
              disappears. Gorilla Gold is a grip-enhancing towel with an
              all-natural resin formula that gives you a moisture-resistant
              tackified feel, so you can play with confidence, not white
              knuckles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-bg-secondary p-6"
              >
                <h3 className="text-base font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
