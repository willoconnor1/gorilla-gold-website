"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { products } from "@/data/products";

interface ProductModuleProps {
  productHandles: string[];
}

export function ProductModule({ productHandles }: ProductModuleProps) {
  const filtered = products.filter((p) =>
    productHandles.includes(p.handle)
  );

  if (filtered.length === 0) return null;

  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Shop Gorilla Gold</SectionLabel>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Find the right towel for your game.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => {
            const minPrice = product.skus.reduce(
              (min, sku) =>
                parseFloat(sku.price) < min ? parseFloat(sku.price) : min,
              Infinity
            );

            return (
              <a
                key={product.handle}
                href="https://store.gorillagold.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlowCard className="overflow-hidden bg-bg-secondary">
                  {product.images[0] && (
                    <div className="relative h-72 overflow-hidden bg-bg-elevated rounded-t-2xl">
                      <Image
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        fill
                        className="object-contain p-4 object-center transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {product.tagline}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">
                        From ${minPrice.toFixed(2)}
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
                    <div className="mt-4">
                      <Button
                        href="https://store.gorillagold.com"
                        variant="secondary"
                        size="sm"
                        arrow
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </GlowCard>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
