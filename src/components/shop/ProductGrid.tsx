"use client";

import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <a
          key={product.handle}
          href="https://store.gorillagold.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <GlowCard className="flex flex-col overflow-hidden bg-bg-secondary p-6 h-full">
            <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-xl bg-bg-elevated">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h2 className="font-heading text-2xl font-bold text-text-primary">
              {product.name}
            </h2>

            <p className="mt-2 text-sm text-accent">{product.tagline}</p>

            <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-text-secondary">
              {product.description.slice(0, 180)}...
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.sports.map((sport) => (
                <span
                  key={sport}
                  className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {sport}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-lg font-bold text-text-primary">
                ${product.skus[0].price}
              </span>
              <span className="text-sm text-text-muted">
                {product.skus[0].packSize}
              </span>
              <span className="text-text-muted">|</span>
              <span className="text-lg font-bold text-text-primary">
                ${product.skus[1].price}
              </span>
              <span className="text-sm text-text-muted">
                {product.skus[1].packSize}
              </span>
            </div>

            <div className="mt-6">
              <Button
                href="https://store.gorillagold.com"
                variant="primary"
                arrow
              >
                Shop Now
              </Button>
            </div>
          </GlowCard>
        </a>
      ))}
    </div>
  );
}
