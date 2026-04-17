"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  ArrowUpRight,
  CircleDot,
  Target,
  CloudRain,
  Droplets,
  Leaf,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import RotatingGolfClub from "@/components/ui/wireframe-golf-club";

const sports: {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Pickleball",
    description: "Keep your paddle from slipping in hot weather and humidity.",
    href: "/pickleball-grip-aid",
    icon: CircleDot,
  },
  {
    name: "Tennis",
    description: "Improved racquet grip and reduced wrist vibration in humid conditions.",
    href: "/tennis-grip-aid",
    icon: Target,
  },
  {
    name: "Wet Weather",
    description: "Grip confidence in rain, humidity, and any wet condition.",
    href: "/wet-weather-grip-aid",
    icon: CloudRain,
  },
  {
    name: "Sweaty Hands",
    description: "The go-to solution for athletes who struggle with perspiration.",
    href: "/sweaty-hands-grip-aid",
    icon: Droplets,
  },
  {
    name: "Active Living",
    description: "Grip support for gardening, fishing, walking poles, and more.",
    href: "/active-living-grip",
    icon: Leaf,
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

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Golf - featured with spinning wireframe club */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="sm:col-span-2 lg:col-span-1 lg:row-span-2 flex items-center justify-center"
          >
            <Link
              href="/golf-grip-aid"
              className="group flex flex-col items-center text-center"
            >
              <h3 className="mb-1 font-heading text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
                Golf
              </h3>
              <RotatingGolfClub width={200} height={160} />
              <p className="-mt-6 max-w-[280px] text-sm text-text-secondary">
                Best golf grip aid for sweaty hands, rain, and humid conditions.
              </p>
            </Link>
          </motion.div>

          {/* Other sports - standard cards */}
          {sports.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (i + 1) * 0.05 }}
            >
              <Link
                href={sport.href}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-bg-primary p-6 transition-all hover:border-accent/50 hover:bg-bg-elevated"
              >
                <sport.icon className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-base font-semibold text-text-primary">
                      {sport.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 transition-all group-hover:text-accent group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    {sport.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
