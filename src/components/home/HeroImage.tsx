"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroImage() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      {/* Background image — positioned below navbar */}
      <div className="absolute -inset-x-8 top-0 -bottom-16 scale-110">
        <Image
          src="/images/hero-towel-floating-v2.png"
          alt="Gorilla Gold grip-enhancing towel floating with dramatic gold lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="120vw"
        />
      </div>

      {/* Light gradient only behind text, no darkening on the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Grip Confidence
            <br />
            When Conditions
            <br />
            <span className="text-accent">Fight Back.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 font-heading text-lg italic tracking-wide text-accent sm:text-xl"
          >
            The feel for the game.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-white/80"
          >
            Gorilla Gold is a grip-enhancing towel that helps athletes and
            active users improve control in wet, sweaty, and slippery
            conditions across golf, racquet sports, pickleball, lawn bowls,
            and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white/90"
          >
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              USGA approved
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
              R&A conforming
            </span>
            <span className="text-white/60">Conforms with the Rules of Golf</span>
          </motion.div>

          {/* TODO: Tom — confirm wording and which fastpitch approvals to display on the upper fold (NCAA / NFHS / USA Softball / ISC / ISF). Placeholder shown until confirmed. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white/80"
          >
            <span className="rounded-full border border-dashed border-accent/60 bg-accent/10 px-3 py-1 text-accent">
              Allowed by NCAA, NFHS &amp; USA Softball
            </span>
            <span className="text-xs uppercase tracking-wide text-white/50">
              (placeholder, pending Tom confirm)
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/shop" variant="primary" size="lg" arrow>
              Shop Gorilla Gold
            </Button>
            <Button href="/golf-grip-aid" variant="outline" size="lg">
              Explore by Sport
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
