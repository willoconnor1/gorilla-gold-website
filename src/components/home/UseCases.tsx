"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import RotatingGolfClub from "@/components/ui/wireframe-golf-club";
import RotatingPickleballPaddle from "@/components/ui/wireframe-pickleball-paddle";
import RotatingTennisRacquet from "@/components/ui/wireframe-tennis-racquet";
import RotatingUmbrella from "@/components/ui/wireframe-umbrella";
import RotatingSweatyHand from "@/components/ui/wireframe-sweaty-hand";
import RotatingBaseball from "@/components/ui/wireframe-baseball";

const sports = [
  {
    name: "Golf",
    description: "Best golf grip aid for sweaty hands, rain, and humid conditions.",
    href: "/golf-grip-aid",
    visualization: RotatingGolfClub,
  },
  {
    name: "Pickleball",
    description: "Keep your paddle from slipping in hot weather and humidity.",
    href: "/pickleball-grip-aid",
    visualization: RotatingPickleballPaddle,
  },
  {
    name: "Tennis",
    description: "Improved racquet grip and reduced wrist vibration in humid conditions.",
    href: "/tennis-grip-aid",
    visualization: RotatingTennisRacquet,
  },
  {
    name: "Wet Weather",
    description: "Grip confidence in rain, humidity, and any wet condition.",
    href: "/wet-weather-grip-aid",
    visualization: RotatingUmbrella,
  },
  {
    name: "Sweaty Hands",
    description: "The go-to solution for athletes who struggle with perspiration.",
    href: "/sweaty-hands-grip-aid",
    visualization: RotatingSweatyHand,
  },
  {
    name: "Softball / Baseball",
    description: "Secure bat grip in heat, humidity, and high-pressure at-bats.",
    href: "/softball-baseball-grip-aid",
    visualization: RotatingBaseball,
  },
];

export function UseCases() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-24">
      {/* Gold glow from top */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[1400px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel>Grip aids by sport &amp; use case</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Built for every grip challenge.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
            Gorilla Gold is trusted across golf, racquet sports, pickleball,
            softball, and active living. Find the right solution for your sport.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <Link
                href={sport.href}
                className="group flex flex-col items-center text-center"
              >
                <h3 className="mb-1 font-heading text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
                  {sport.name}
                </h3>
                <sport.visualization width={200} height={160} />
                <p className="-mt-6 max-w-[280px] text-sm text-text-secondary">
                  {sport.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
