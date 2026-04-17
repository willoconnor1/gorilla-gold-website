import type { Metadata } from "next";
import { Globe, Mail, Phone, MapPin, Package, Handshake } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";
import { DistributorHero } from "@/components/shared/DistributorHero";

export const metadata: Metadata = {
  title: "International Distributors | Gorilla Gold Grip-Enhancing Towel",
  description:
    "Gorilla Gold international distribution information. Find distributors worldwide or become a distributor for the grip-enhancing towel trusted by athletes in golf, pickleball, tennis, and more.",
  openGraph: {
    title: "International Distributors | Gorilla Gold Grip-Enhancing Towel",
    description:
      "Gorilla Gold international distribution information. Find distributors worldwide or become a distributor for the grip-enhancing towel trusted by athletes in golf, pickleball, tennis, and more.",
  },
};

const distributionRegions = [
  {
    region: "North America",
    description:
      "Available through direct sales, pro shops, sporting goods retailers, and the Gorilla Gold online store. Serving the United States and Canada with domestic shipping from our US warehouse.",
  },
  {
    region: "Europe",
    description:
      "Growing distribution across the United Kingdom, Ireland, and continental Europe. Gorilla Gold is R&A conforming and approved for competition play in all European golf events.",
  },
  {
    region: "Asia-Pacific",
    description:
      "Expanding presence across Australia, New Zealand, Japan, and Southeast Asia. Active in golf, cricket, and racquet sport markets throughout the region.",
  },
  {
    region: "Latin America",
    description:
      "Seeking distribution partners across Mexico, Central America, and South America. Strong market potential in golf, tennis, and baseball communities.",
  },
];

const distributorBenefits = [
  {
    icon: Package,
    title: "Wholesale pricing",
    description:
      "Competitive wholesale pricing with volume discounts. Flexible order minimums for new partners entering new markets.",
  },
  {
    icon: Globe,
    title: "Marketing support",
    description:
      "Access to brand assets, product photography, translated marketing materials, and digital content for your local market.",
  },
  {
    icon: Handshake,
    title: "Exclusive territories",
    description:
      "Qualified distributors may receive exclusive territory agreements, ensuring protected market access and dedicated support from the Gorilla Gold team.",
  },
];

export default function InternationalDistributorsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          {
            name: "International Distributors",
            href: "/international-distributors",
          },
        ]}
      />

      <DistributorHero />

      {/* Current Distribution */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Where we are</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Current distribution regions
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            Gorilla Gold is available in multiple regions around the world. We
            are actively expanding our network and seeking qualified
            distributors in new markets.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {distributionRegions.map((region) => (
              <div
                key={region.region}
                className="rounded-2xl border border-border bg-bg-secondary p-6"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {region.region}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Distributor */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Partner with us</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Become a Gorilla Gold distributor
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            We are looking for experienced distributors who understand the
            sporting goods market in their region. Ideal partners have
            established relationships with pro shops, sporting goods retailers,
            online marketplaces, or direct-to-consumer channels in their
            territory.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {distributorBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-bg-primary p-6"
              >
                <benefit.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Application details</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            What to include in your inquiry
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            To help us evaluate your distributor application quickly, please
            include the following information when you contact our team.
          </p>

          <div className="mt-12 max-w-2xl space-y-4">
            {[
              "Your company name and website",
              "Territory or region you want to serve",
              "Sports markets you specialize in (golf, racquet sports, team sports, etc.)",
              "Your current retail or wholesale distribution channels",
              "Estimated initial order volume",
              "Any existing relationships with pro shops, retailers, or online platforms",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <p className="text-base text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Contact our distribution team
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary">
            Ready to bring Gorilla Gold to your market? Reach out to our team
            to start the conversation.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-2xl">
            <a
              href="mailto:sales@gorillagold.com"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-primary p-6 transition-colors hover:border-accent/50"
            >
              <Mail className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-text-primary transition-colors group-hover:text-accent">
                  Email
                </p>
                <p className="text-sm text-text-secondary">
                  sales@gorillagold.com
                </p>
              </div>
            </a>

            <a
              href="tel:+18182599437"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-primary p-6 transition-colors hover:border-accent/50"
            >
              <Phone className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-text-primary transition-colors group-hover:text-accent">
                  Phone
                </p>
                <p className="text-sm text-text-secondary">(818) 259-9437</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Gorilla Gold is expanding worldwide"
        description="Join our growing network of international distributors and bring the grip-enhancing towel to athletes in your market."
        buttonText="Shop Now"
        buttonHref="/shop"
      />
    </>
  );
}
