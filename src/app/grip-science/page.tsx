import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";
import {
  Droplets,
  Hand,
  SlidersHorizontal,
  Scale,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Science of Grip | Gorilla Gold",
  description:
    "Learn how moisture affects grip and how Gorilla Gold's all-natural resin formula creates a moisture-resistant tackified feel. Comparisons with chalk, rosin, and pine tar.",
  openGraph: {
    title: "The Science of Grip | Gorilla Gold",
    description:
      "Learn how moisture affects grip and how Gorilla Gold's all-natural resin formula creates a moisture-resistant tackified feel. Comparisons with chalk, rosin, and pine tar.",
  },
};

const sections = [
  {
    icon: Droplets,
    label: "The problem",
    heading: "How moisture undermines your grip",
    paragraphs: [
      "Sweat, rain, and humidity are the three enemies of a confident grip. When your hands perspire, the moisture fills the microscopic ridges and valleys that create friction between your skin and the handle surface. The result is a slippery interface that forces you to squeeze harder, increasing muscle fatigue and reducing fine motor control.",
      "Rain compounds the problem by coating equipment surfaces with a film of water that acts as a lubricant between your hand and the grip. In humid conditions, both effects combine: your hands sweat more, and the surrounding air keeps surfaces damp. This is why athletes in hot, humid climates struggle with grip consistency more than players in dry environments.",
      "Over-gripping to compensate for moisture creates a cascade of performance issues. In golf, excessive grip pressure restricts wrist hinge and costs you swing speed. In tennis, it increases vibration transfer to the elbow. In softball, it slows bat speed. The real solution is not to grip harder, but to make the grip surface itself resist moisture.",
    ],
  },
  {
    icon: Hand,
    label: "The solution",
    heading: "How the all-natural resin formula works",
    paragraphs: [
      "Gorilla Gold uses an all-natural resin formula that creates a moisture-resistant tackified feel on any surface it contacts. When you squeeze the grip-enhancing towel against your hands, gloves, or equipment grip, a thin layer of plant-based resin transfers to the surface. This resin layer repels water and creates friction where moisture would otherwise cause slipping.",
      "The resin works by bonding temporarily to skin and grip surfaces, creating a tacky interface layer that is hydrophobic. Moisture beads on the surface rather than forming a slippery film. This is fundamentally different from chalk or rosin, which absorb moisture temporarily but break down quickly when saturated.",
      "Because the formula is all-natural, it is safe for direct skin contact, does not irritate, and does not contain synthetic adhesives or petroleum-based chemicals. The resin dissolves naturally within hours and leaves no permanent residue on equipment, clothing, or skin.",
    ],
  },
  {
    icon: SlidersHorizontal,
    label: "Adjustable control",
    heading: "Why adjustable tackiness matters",
    paragraphs: [
      "Different conditions and different sports require different levels of grip. A golfer putting on a dry morning needs subtle tack for feel, while the same golfer driving in a rainstorm needs maximum hold. A pickleball player in moderate heat wants light grip enhancement, while a softball pitcher in a rain delay needs aggressive moisture resistance.",
      "Gorilla Gold delivers adjustable tackiness through variable squeeze pressure. A light squeeze transfers a minimal amount of resin for subtle grip enhancement. A firm, sustained squeeze transfers a heavier layer for maximum moisture-resistant tack. This lets you dial in the exact level of grip your conditions demand, on the spot, without switching products.",
      "This adjustability also means you can apply different levels to different surfaces in the same session. Apply light tack to your leading hand for feel, and heavier tack to your trailing hand for power. Apply to your hands for one sport, and directly to your paddle grip for another. One product adapts to every scenario.",
    ],
  },
  {
    icon: Scale,
    label: "Head to head",
    heading: "How Gorilla Gold compares to alternatives",
    paragraphs: [
      "Chalk absorbs moisture temporarily but creates dust, dries out skin with repeated use, and needs constant reapplication. It fails completely in rain because water overwhelms its absorption capacity. Chalk is also banned or restricted in some competition settings.",
      "Rosin bags provide short-term tack but are messy, inconsistent, and break down quickly in wet conditions. Rosin also accumulates on equipment surfaces over time, creating buildup that changes the feel of your grips and requires cleaning.",
      "Pine tar delivers strong tack but is notoriously messy, stains clothing and equipment, and is banned in most organized softball and baseball leagues above recreational level. It is also difficult to remove from hands and gear.",
      "Gorilla Gold combines the tack of pine tar, the convenience of chalk, and the approval status that none of the others can match. It is reusable, mess-free, dissolves within hours, and is approved for competition by the USGA, R&A, ASA, and NFHS.",
    ],
  },
  {
    icon: RefreshCw,
    label: "Longevity",
    heading: "The reusable advantage",
    paragraphs: [
      "Unlike chalk and rosin, which are consumed with each application, Gorilla Gold is a reusable grip-enhancing towel. One towel lasts approximately one month for golfers playing 2-3 times per week. For multi-sport athletes using it several times a week, a single towel still delivers weeks of reliable performance.",
      "The key to longevity is proper storage. Keep your Gorilla Gold towel sealed in its resealable pouch or any airtight bag between uses. This preserves the all-natural resin formula and prevents the towel from drying out prematurely. Avoid leaving it exposed to open air for extended periods.",
      "At $21 for a 3-pack, Gorilla Gold costs roughly $7 per towel. With a month of use per towel, that works out to pennies per round or match. Compare that to the ongoing cost of chalk bags, rosin bags, or overgrips that need frequent replacement, and the value becomes clear.",
    ],
  },
];

export default function GripSciencePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Grip Science", href: "/grip-science" },
        ]}
      />

      <PageHero
        label="Grip Science"
        h1="The Science Behind Gorilla Gold's All-Natural Resin Formula"
        introText="Understanding how moisture affects your grip, and how Gorilla Gold's all-natural resin formula creates a moisture-resistant tackified feel that outperforms chalk, rosin, and pine tar in every condition."
      />

      {sections.map((section, index) => (
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

      <CTABanner
        headline="Feel the science in your grip"
        description="Try Gorilla Gold's all-natural resin formula and experience moisture-resistant tackified grip for yourself."
        buttonText="Shop Gorilla Gold"
        buttonHref="/shop"
      />
    </>
  );
}
