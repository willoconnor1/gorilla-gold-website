import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Gorilla Gold Grip-Enhancing Towel",
  description:
    "Get answers to common questions about Gorilla Gold grip-enhancing towels. Learn about the all-natural resin formula, how it works, which sports it covers, legality for competition, and where to buy.",
  openGraph: {
    title: "FAQ | Gorilla Gold Grip-Enhancing Towel",
    description:
      "Get answers to common questions about Gorilla Gold grip-enhancing towels. Learn about the all-natural resin formula, how it works, which sports it covers, legality for competition, and where to buy.",
  },
};

const faqCategories = ["Product", "Performance", "Usage", "Comparison", "Purchase"] as const;

const categoryDescriptions: Record<string, string> = {
  Product:
    "Learn about Gorilla Gold, its all-natural resin formula, product versions, and competition legality.",
  Performance:
    "Find out how Gorilla Gold performs in rain, humidity, and sweaty conditions.",
  Usage:
    "Get tips on application, storage, sport-specific use, and how long each towel lasts.",
  Comparison:
    "See how Gorilla Gold compares to rosin, pine tar, chalk, and other grip aids.",
  Purchase:
    "Find out where to buy Gorilla Gold and current pricing.",
};

export default function FAQPage() {
  const groupedFaqs = faqCategories.map((category) => ({
    category,
    items: faqs.filter((faq) => faq.category === category),
  }));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <PageHero
        label="Frequently asked questions"
        h1="Frequently Asked Questions About Gorilla Gold"
        introText="Gorilla Gold is a grip-enhancing towel trusted by athletes in golf, pickleball, tennis, softball, and dozens of other sports. Below you will find answers to the most common questions about the all-natural resin formula, how to use it, what makes it different from other grip aids, and where to buy."
      />

      <div className="bg-bg-primary pb-24">
        <div className="mx-auto max-w-3xl px-6">
          {groupedFaqs.map(
            ({ category, items }) =>
              items.length > 0 && (
                <div key={category} className="mt-16 first:mt-0">
                  <SectionLabel>{category}</SectionLabel>
                  <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                    {category} Questions
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary">
                    {categoryDescriptions[category]}
                  </p>
                  <div className="mt-8">
                    <FAQAccordion items={items} />
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <FAQSchema items={faqs} />

      <RelatedContent
        categories={[
          {
            label: "Golf Grip Aid",
            href: "/golf-grip-aid",
            description:
              "Explore how Gorilla Gold helps golfers maintain grip in wet and sweaty conditions.",
          },
          {
            label: "Pickleball Grip Aid",
            href: "/pickleball-grip-aid",
            description:
              "Learn how Gorilla Gold keeps your paddle grip secure in hot weather.",
          },
          {
            label: "Tennis Grip Aid",
            href: "/tennis-grip-aid",
            description:
              "Discover how Gorilla Gold reduces over-gripping and elbow strain for tennis players.",
          },
          {
            label: "Wet Weather Grip Aid",
            href: "/wet-weather-grip-aid",
            description:
              "See how the moisture-resistant tackified feel keeps you in control during rain play.",
          },
          {
            label: "Sweaty Hands Grip Aid",
            href: "/sweaty-hands-grip-aid",
            description:
              "Find solutions for sweaty hands across all grip-dependent sports.",
          },
          {
            label: "Grip Aid Comparisons",
            href: "/grip-aid-comparisons",
            description:
              "Compare Gorilla Gold to rosin, pine tar, chalk, and other alternatives.",
          },
        ]}
        showFAQ={false}
      />

      <CTABanner
        headline="Ready to experience the difference?"
        description="Try Gorilla Gold and feel the moisture-resistant tackified grip that athletes trust in every condition."
        buttonText="Shop Gorilla Gold"
        buttonHref="https://store.gorillagold.com"
      />
    </>
  );
}
