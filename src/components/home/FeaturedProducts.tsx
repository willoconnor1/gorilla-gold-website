"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/spotlight-card";

const products = [
  {
    name: "Gorilla Gold Golf",
    description: "Optimized for golf grip applications. USGA approved, R&A conforming.",
    price: "From $21.00",
    href: "https://store.gorillagold.com",
    sports: ["Golf"],
    color: "from-green-500/10 to-transparent",
    image: "/images/gorilla-gold-golf.webp",
    alt: "Gorilla Gold Golf grip-enhancing towel 3-pack",
  },
  {
    name: "Gorilla Gold All-Sport",
    description:
      "Universal grip-enhancing towel for football, basketball, lawn bowls, gymnastics, soccer goalkeepers, and all grip-dependent activities.",
    price: "From $21.00",
    href: "https://store.gorillagold.com",
    sports: ["Football", "Basketball", "Lawn Bowls"],
    color: "from-accent/10 to-transparent",
    image: "/images/gorilla-gold-all-sport.webp",
    alt: "Gorilla Gold All-Sport grip-enhancing towel 3-pack for all sports",
  },
  {
    name: "Gorilla Gold Racquet Sports",
    description:
      "Made for tennis, pickleball, squash, and padel players. (Placeholder image and pricing — pending Tom confirmation.)",
    price: "From $21.00",
    href: "https://store.gorillagold.com",
    sports: ["Tennis", "Pickleball", "Squash", "Padel"],
    color: "from-blue-500/10 to-transparent",
    // TODO: Tom — replace with real Racquet Sports product photo when available.
    image: "/images/gorilla-gold-all-sport.webp",
    alt: "Gorilla Gold Racquet Sports grip-enhancing towel (placeholder image)",
  },
  {
    name: "Gorilla Gold Softball / Baseball",
    description:
      "The sole NCAA, NFHS, and USA Softball-allowed drying agent for softball pitchers to use on the mound.",
    price: "From $21.00",
    href: "https://store.gorillagold.com",
    sports: ["Softball", "Baseball"],
    color: "from-red-500/10 to-transparent",
    image: "/images/gorilla-gold-baseball.webp",
    alt: "Gorilla Gold Softball Baseball grip-enhancing towel 3-pack NCAA NFHS USA Softball allowed",
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-bg-primary pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Featured products</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Find your
              <br />
              perfect grip.
            </h2>
            <p className="mt-4 max-w-md text-base text-text-secondary">
              Available in Golf, All-Sport, Racquet Sports, and Softball/Baseball
              versions. Same all-natural resin formula, tailored for your game.
            </p>
          </div>
          <Button href="https://store.gorillagold.com" variant="primary" arrow>
            View all products
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlowCard className="overflow-hidden bg-bg-secondary">
                  <div
                    className={`relative h-80 overflow-hidden bg-gradient-to-b ${product.color}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-contain p-4 pt-8 object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">
                        {product.price}
                      </span>
                      <div className="flex gap-1">
                        {product.sports.map((sport) => (
                          <span
                            key={sport}
                            className="rounded-full bg-bg-elevated px-2 py-0.5 text-xs text-text-muted"
                          >
                            {sport}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
