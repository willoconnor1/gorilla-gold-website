import type { Metadata } from "next";
import { Mail, Phone, Download, Newspaper } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Press | Gorilla Gold Grip-Enhancing Towel",
  description:
    "Gorilla Gold in the press. Media coverage, editorial features, and product reviews from Golf Digest, Golf Magazine, and other leading publications. Download our press kit.",
  openGraph: {
    title: "Press | Gorilla Gold Grip-Enhancing Towel",
    description:
      "Gorilla Gold in the press. Media coverage, editorial features, and product reviews from Golf Digest, Golf Magazine, and other leading publications. Download our press kit.",
  },
};

const publications = [
  "Golf Digest",
  "Golf Magazine",
  "GolfWRX",
  "MyGolfSpy",
  "The Golf Channel",
  "PGA Magazine",
  "Chicago Golf",
  "Softball Magazine",
  "Pickleball Magazine",
];

const pressHighlights = [
  {
    publication: "Golf Digest",
    quote:
      "No problems in a downpour. Gorilla Gold kept the grip secure when everything else was soaked.",
    author: "Jeff Patterson",
  },
  {
    publication: "Chicago Golf",
    quote:
      "My handicap dropped from 16.8 to 8.3. Gorilla Gold gave me confidence in my grip that I never had before.",
    author: "Andrew Cohn",
  },
  {
    publication: "Hank Haney",
    quote:
      "Should be in every golfer's bag. Gorilla Gold is the real deal for grip confidence.",
    author: "Hank Haney, Golf Instructor",
  },
];

export default function PressPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Press", href: "/press" },
        ]}
      />

      <PageHero
        label="Press"
        h1="Gorilla Gold in the Press"
        introText="Gorilla Gold has been featured and reviewed by leading sports publications, professional instructors, and media outlets. From Golf Digest product tests to endorsements by PGA professionals, the grip-enhancing towel continues to earn recognition across the sports world."
      />

      {/* As Seen In */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>As seen in</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Featured by trusted publications
          </h2>
          <div className="mt-12 flex flex-wrap gap-4">
            {publications.map((pub) => (
              <span
                key={pub}
                className="rounded-full border border-border bg-bg-elevated px-6 py-3 text-sm font-medium text-text-primary"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Press Highlights */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Press highlights</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            What the press is saying
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pressHighlights.map((highlight) => (
              <div
                key={highlight.author}
                className="flex flex-col rounded-2xl border border-border bg-bg-secondary p-6"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  {highlight.publication}
                </span>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-text-secondary">
                  &ldquo;{highlight.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-text-primary">
                  {highlight.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Press kit</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Brand assets and resources
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Our press kit includes the Gorilla Gold logo suite, product
              photography, brand guidelines, and key messaging. If you are
              writing about Gorilla Gold, please use the following core
              description: Gorilla Gold is a grip-enhancing towel with an
              all-natural resin formula that creates a moisture-resistant
              tackified feel for athletes across golf, pickleball, tennis,
              softball, and active living.
            </p>
            <p>
              Gorilla Gold is reusable, USGA approved, R&A conforming, and the
              sole ASA-approved drying agent for softball pitchers. It contains
              no synthetic chemicals and dissolves within hours, leaving no
              residue.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-bg-primary p-5">
              <Download className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Press Kit
                </p>
                <p className="text-xs text-text-muted">
                  Logo files, product photos, brand guidelines
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-bg-primary p-5">
              <Newspaper className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Product Fact Sheet
                </p>
                <p className="text-xs text-text-muted">
                  Specs, pricing, SKUs, approvals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Media contact</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Get in touch with our team
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary">
            For press inquiries, product samples, interview requests, or
            editorial collaboration, please contact the Gorilla Gold team
            directly.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-2xl">
            <a
              href="mailto:sales@gorillagold.com"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-6 transition-colors hover:border-accent/50"
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
              className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-6 transition-colors hover:border-accent/50"
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
        headline="Experience the grip-enhancing towel trusted by athletes worldwide"
        description="Try Gorilla Gold for yourself. 3-packs from $21."
        buttonText="Shop Now"
        buttonHref="/shop"
      />
    </>
  );
}
