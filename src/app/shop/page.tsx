import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { ProductSchema } from "@/components/schema/ProductSchema";
import { CTABanner } from "@/components/ui/CTABanner";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop Gorilla Gold | Grip-Enhancing Towels",
  description:
    "Shop Gorilla Gold grip-enhancing towels. Available in Golf, All-Sport, and Softball/Baseball versions. All-natural resin formula. 3-packs from $21.",
  openGraph: {
    title: "Shop Gorilla Gold | Grip-Enhancing Towels",
    description:
      "Shop Gorilla Gold grip-enhancing towels. Available in Golf, All-Sport, and Softball/Baseball versions. All-natural resin formula. 3-packs from $21.",
  },
};

export default function ShopPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Shop", href: "/shop" },
        ]}
      />

      <PageHero
        label="Shop"
        h1="Shop Gorilla Gold Grip-Enhancing Towels"
        introText="Gorilla Gold is available in three sport-specific versions, each built with the same all-natural resin formula. Choose the grip-enhancing towel designed for your game: Golf, All-Sport, or Softball/Baseball. Every version is reusable, creates a moisture-resistant tackified feel, and dissolves within hours with no residue."
      />

      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ProductGrid />
        </div>
      </section>

      {products.map((product) => (
        <ProductSchema
          key={product.handle}
          name={product.name}
          description={product.metaDescription}
          image={product.images[0].src}
          sku={product.skus[0].sku}
          price={product.skus[0].price}
          url={`https://www.gorillagold.com/shop/${product.handle}`}
          ratingValue={5}
          reviewCount={18}
        />
      ))}

      <CTABanner
        headline="Ready to improve your grip?"
        description="Order Gorilla Gold today and feel the difference in your next round, match, or game."
        buttonText="Shop Now"
        buttonHref="https://store.gorillagold.com"
      />
    </>
  );
}
