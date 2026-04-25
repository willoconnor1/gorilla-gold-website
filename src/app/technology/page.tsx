import type { Metadata } from "next";
import {
  TreePine,
  Droplets,
  RefreshCw,
  Leaf,
  SlidersHorizontal,
  Timer,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { TrustSection } from "@/components/shared/TrustSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Technology | Gorilla Gold All-Natural Resin Formula",
  description:
    "How Gorilla Gold's all-natural resin formula creates a moisture-resistant tackified feel. Learn about tree resin science, tackification, reusability, and environmental benefits.",
  openGraph: {
    title: "Technology | Gorilla Gold All-Natural Resin Formula",
    description:
      "How Gorilla Gold's all-natural resin formula creates a moisture-resistant tackified feel. Learn about tree resin science, tackification, reusability, and environmental benefits.",
  },
};

const technologySections = [
  {
    icon: TreePine,
    label: "Natural origins",
    heading: "Derived from natural tree resin",
    paragraphs: [
      "Gorilla Gold starts with tree resin, a natural substance produced by conifers and other tree species as a protective sealant. For centuries, athletes and craftspeople have relied on plant-based resins for grip enhancement. Gorilla Gold refines this tradition into a modern, consistent, competition-legal product.",
      "The all-natural resin formula contains no synthetic chemicals, petroleum-based adhesives, or artificial fragrances. Every ingredient is plant-derived and chosen for performance and safety. This means Gorilla Gold is safe for direct skin contact, safe for equipment, and safe for the environment.",
      "By sourcing natural resin, Gorilla Gold avoids the skin irritation and chemical residue problems associated with synthetic grip products. The result is a cleaner, healthier grip solution that performs better in the conditions that matter most.",
    ],
  },
  {
    icon: Droplets,
    label: "How it works",
    heading: "Tackification: creating moisture-resistant grip",
    paragraphs: [
      "Tackification is the process of creating a sticky, high-friction surface layer that resists moisture. When you squeeze a Gorilla Gold grip-enhancing towel, the all-natural resin transfers to your hands, gloves, or equipment grip. This thin resin layer is hydrophobic, meaning it repels water rather than absorbing it.",
      "Unlike chalk, which absorbs moisture until it saturates and fails, the resin layer actively pushes moisture away from the contact surface. Sweat beads on top of the resin rather than forming a slippery film between your hand and the grip. This is why Gorilla Gold continues to perform in heavy rain, extreme humidity, and intense perspiration.",
      "The moisture-resistant tackified feel is immediately noticeable. You will feel increased friction and control without any sticky residue transferring to balls, paddles, or other surfaces. The tack stays where you put it and works where you need it.",
    ],
  },
  {
    icon: SlidersHorizontal,
    label: "Adjustable performance",
    heading: "Variable pressure, variable tack",
    paragraphs: [
      "One of the key advantages of Gorilla Gold is adjustable tackiness through variable squeeze pressure. A light squeeze of the towel transfers a thin layer of resin for subtle grip enhancement, ideal for putting, finesse shots, or dry conditions where you want just a touch of added control.",
      "A firm, sustained squeeze transfers a thicker layer for maximum moisture resistance, perfect for rain rounds, hot-weather pickleball, or any situation where your hands are heavily perspiring. You control the output with your grip pressure alone.",
      "This means a single Gorilla Gold grip-enhancing towel adapts to every condition and every sport. You do not need separate products for light tack and heavy tack. One towel does it all, adjusted by feel in the moment.",
    ],
  },
  {
    icon: RefreshCw,
    label: "Reusability",
    heading: "Why Gorilla Gold is reusable",
    paragraphs: [
      "One Gorilla Gold towel typically lasts a month or more for golfers playing several times a week. The all-natural resin formula is infused throughout the towel fabric, not just coated on the surface. Each squeeze releases a fresh layer of resin from within the towel fibers.",
      "Proper storage extends towel life. Keep your Gorilla Gold sealed in its resealable pouch or any airtight container between uses. This prevents the resin from drying out and ensures consistent performance from the first use to the last. Avoid leaving the towel exposed to open air for extended periods.",
      "At under $25 for a 3-pack, reusability makes Gorilla Gold one of the most cost-effective grip solutions available. A single towel costs roughly $8 and depending on the frequency of play, can last for months. Occasional players have reported Gorilla Gold lasting months, even years. That is far longer than chalk bags, rosin bags, or replacement overgrips.",
    ],
  },
  {
    icon: Timer,
    label: "Clean formula",
    heading: "No lingering sticky feel",
    paragraphs: [
      "The all-natural resin formula dissolves naturally within minutes from your hands and within a few hours from equipment. This means it will not build up on your equipment, stain your clothing, or leave a permanent tacky layer on your hands. After your round or match, the resin breaks down on its own.",
      "This clean dissolution is a significant advantage over pine tar, which stains and requires solvents to remove, and over synthetic grip sprays that leave chemical residue on equipment surfaces. With Gorilla Gold, your clubs, paddles, bats, and gloves stay clean.",
      "The no-residue property also means Gorilla Gold is safe for shared equipment. Use it on a rental set of clubs, a borrowed paddle, or communal gym equipment without worrying about leaving a tacky film for the next user.",
    ],
  },
  {
    icon: Leaf,
    label: "Environmental responsibility",
    heading: "A grip solution that respects the environment",
    paragraphs: [
      "Gorilla Gold is committed to environmental responsibility at every stage. The all-natural resin formula is biodegradable and plant-derived. No petroleum-based chemicals enter the environment through use or disposal of the towel.",
      "Because each towel is reusable for several weeks or months, Gorilla Gold generates far less waste than single-use chalk bags, disposable rosin bags, or frequently replaced overgrips. Fewer products consumed means less packaging waste and lower environmental impact over the course of a season.",
      "The natural dissolution of the resin means no chemical contamination of golf course turf, court surfaces, or playing fields. When the resin leaves your hands through natural wear, it breaks down harmlessly. This is grip enhancement designed to perform without compromise, for athletes or the environment.",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Technology", href: "/technology" },
        ]}
      />

      <PageHero
        label="Technology"
        h1="The Science Behind Gorilla Gold"
        introText="Gorilla Gold is a grip-enhancing towel powered by an all-natural resin formula. Derived from natural tree resin, the formula creates a moisture-resistant tackified feel that outperforms synthetic alternatives in every condition. Here is how the technology works."
      />

      {technologySections.map((section, index) => (
        <section
          key={section.heading}
          className={
            index % 2 === 0 ? "bg-bg-primary py-24" : "bg-bg-secondary py-24"
          }
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <section.icon className="h-6 w-6 text-accent" />
                </div>
                <SectionLabel>{section.label}</SectionLabel>
              </div>

              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {section.heading}
              </h2>

              <div className="mt-8 space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <TrustSection />

      <CTABanner
        headline="Experience the all-natural resin formula"
        description="Try Gorilla Gold and feel the moisture-resistant tackified grip that athletes trust. 3-packs from $21."
        buttonText="Shop Gorilla Gold"
        buttonHref="/shop"
      />
    </>
  );
}
