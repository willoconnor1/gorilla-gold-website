import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { TrustSection } from "@/components/shared/TrustSection";
import { UseCaseGrid } from "@/components/shared/UseCaseGrid";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { TestimonialSection } from "@/components/shared/TestimonialSection";
import { ProductModule } from "@/components/shared/ProductModule";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { CategoryPage } from "@/types";

interface CategoryPageTemplateProps {
  data: CategoryPage;
}

export function CategoryPageTemplate({ data }: CategoryPageTemplateProps) {
  return (
    <>
      {!data.fullBleedHero && (
        <section className="bg-bg-primary pt-8">
          <div className="mx-auto max-w-7xl px-6">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: data.h1, href: `/${data.slug}` },
              ]}
            />
          </div>
        </section>
      )}

      <PageHero
        h1={data.h1}
        introText={data.introText}
        label={data.sport}
        imageSrc={data.heroImage}
        imageAlt={data.heroImageAlt}
        fullBleed={data.fullBleedHero}
      />

      <TrustSection />

      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>The problem</SectionLabel>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary">
            {data.problemStatement}
          </p>
        </div>
      </section>

      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>How Gorilla Gold helps</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Real-world use cases
          </h2>
          <div className="mt-12">
            <UseCaseGrid useCases={data.useCases} />
          </div>
        </div>
      </section>

      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>How it compares</SectionLabel>
          <h2 className="mt-4 mb-12 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Gorilla Gold vs the alternatives
          </h2>
          <ComparisonTable points={data.comparisonPoints} />
        </div>
      </section>

      <TestimonialSection testimonialIds={data.testimonialIds} />

      <ProductModule productHandles={data.relatedProducts} />

      <FAQSection faqs={data.faqs} />

      <RelatedContent
        categories={data.relatedCategories}
        content={data.relatedContent}
      />

      <CTABanner
        headline="Ready to take control of your grip?"
        description="Join thousands of athletes who trust Gorilla Gold in every condition. All-natural, reusable, and built for performance."
        buttonText="Shop Gorilla Gold"
        buttonHref="/shop"
      />
    </>
  );
}
