import type { Metadata } from "next";
import Image from "next/image";
import { Check, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ProductSchema } from "@/components/schema/ProductSchema";
import { TrustSection } from "@/components/shared/TrustSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { TestimonialSection } from "@/components/shared/TestimonialSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { products } from "@/data/products";
import { faqs } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = products.find((p) => p.handle === handle);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Grip-Enhancing Towel`,
    description: product.metaDescription,
    openGraph: {
      title: `${product.name} | Grip-Enhancing Towel`,
      description: product.metaDescription,
    },
  };
}

function getProductFAQs(sports: string[]): typeof faqs {
  const sportLower = sports.map((s) => s.toLowerCase());

  const relevantIds: string[] = [
    "what-is-gorilla-gold",
    "how-does-it-work",
    "is-it-reusable",
    "residue",
    "how-long-does-it-last",
    "is-it-legal",
    "product-difference",
    "how-to-apply",
    "how-to-store",
    "where-to-buy",
  ];

  if (sportLower.includes("golf")) {
    relevantIds.push("sweaty-hands", "help-in-rain", "gloves", "arthritis");
  }
  if (sportLower.includes("pickleball")) {
    relevantIds.push("pickleball", "pickleball-paddle-grips", "sweaty-hands");
  }
  if (sportLower.includes("tennis")) {
    relevantIds.push("tennis-elbow", "sweaty-hands");
  }
  if (sportLower.includes("softball") || sportLower.includes("baseball")) {
    relevantIds.push("asa-approved", "vs-pine-tar-rosin", "tournament-use");
  }
  if (sportLower.includes("bowling") || sportLower.includes("disc golf")) {
    relevantIds.push("bowling", "disc-golf", "sweaty-hands");
  }

  const unique = [...new Set(relevantIds)];
  return faqs.filter((faq) => unique.includes(faq.id));
}

function getProductTestimonialIds(sports: string[]): string[] {
  const sportLower = sports.map((s) => s.toLowerCase());
  return testimonials
    .filter((t) => sportLower.includes(t.sport.toLowerCase()))
    .map((t) => t.id);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = products.find((p) => p.handle === handle);

  if (!product) {
    notFound();
  }

  const productFAQs = getProductFAQs(product.sports);
  const testimonialIds = getProductTestimonialIds(product.sports);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Shop", href: "/shop" },
          { name: product.name, href: `/shop/${product.handle}` },
        ]}
      />

      {/* Product Detail Section */}
      <section className="bg-bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-bg-secondary">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <SectionLabel>{product.sports.join(" / ")}</SectionLabel>

              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-2 text-lg font-medium text-accent">
                {product.tagline}
              </p>

              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h2 className="font-heading text-lg font-semibold text-text-primary">
                  Features
                </h2>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Table */}
              <div className="mt-8">
                <h2 className="font-heading text-lg font-semibold text-text-primary">
                  Pricing
                </h2>
                <div className="mt-4 overflow-hidden rounded-xl border border-border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-bg-elevated">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-muted">
                          Variant
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-muted">
                          Pack Size
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-muted">
                          SKU
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-text-muted">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {product.skus.map((sku) => (
                        <tr
                          key={sku.sku}
                          className="transition-colors hover:bg-bg-elevated/50"
                        >
                          <td className="px-4 py-3 text-sm font-medium text-text-primary">
                            {sku.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-text-secondary">
                            {sku.packSize}
                          </td>
                          <td className="px-4 py-3 text-sm text-text-muted">
                            {sku.sku}
                          </td>
                          <td className="px-4 py-3 text-right text-sm font-bold text-text-primary">
                            ${sku.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Buy Button */}
              <div className="mt-8 flex items-center gap-4">
                <Button
                  href="https://store.gorillagold.com"
                  variant="primary"
                  size="lg"
                  arrow
                >
                  Buy on Gorilla Gold Store
                </Button>
                <span className="flex items-center gap-1.5 text-xs text-text-muted">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Opens store.gorillagold.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Schema for each SKU */}
      {product.skus.map((sku) => (
        <ProductSchema
          key={sku.sku}
          name={sku.name}
          description={product.metaDescription}
          image={product.images[0].src}
          sku={sku.sku}
          price={sku.price}
          url={`https://www.gorillagold.com/shop/${product.handle}`}
          ratingValue={5}
          reviewCount={18}
        />
      ))}

      <TrustSection />

      <FAQSection
        faqs={productFAQs}
        heading={`${product.name} Questions`}
      />

      <TestimonialSection
        testimonialIds={testimonialIds}
        heading={`What ${product.sports[0]} Athletes Say`}
      />

      <RelatedContent categories={product.relatedCategories} />

      <CTABanner
        headline="Get your grip right"
        description={`Order ${product.name} today. 3-packs from $${product.skus[0].price}.`}
        buttonText="Buy Now"
        buttonHref="https://store.gorillagold.com"
      />
    </>
  );
}
