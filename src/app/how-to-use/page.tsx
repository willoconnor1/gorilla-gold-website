import type { Metadata } from "next";
import {
  Shirt,
  Hand,
  GripVertical,
  SlidersHorizontal,
  RefreshCw,
  Sparkles,
  Droplets,
  ShieldCheck,
  CircleAlert,
  Lightbulb,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { TrustSection } from "@/components/shared/TrustSection";
import { ProductModule } from "@/components/shared/ProductModule";
import { FAQSection } from "@/components/shared/FAQSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";
import { HowToSchema } from "@/components/schema/HowToSchema";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "How to Use Gorilla Gold | Step-by-Step Grip-Enhancing Towel Guide",
  description:
    "Learn how to use the Gorilla Gold grip-enhancing towel in 5 simple steps. Unfold, apply to a dry surface, squeeze to activate tackiness, adjust pressure, and reapply during play.",
  openGraph: {
    title: "How to Use Gorilla Gold | Step-by-Step Grip-Enhancing Towel Guide",
    description:
      "Learn how to use the Gorilla Gold grip-enhancing towel in 5 simple steps. Unfold, apply to a dry surface, squeeze to activate tackiness, adjust pressure, and reapply during play.",
  },
};

const steps = [
  {
    number: 1,
    icon: Shirt,
    title: "Unfold the towel",
    description:
      "Remove the Gorilla Gold grip-enhancing towel from its resealable pouch and unfold it. Most people open it to about washcloth size before using it. You do not need to fully unfold the towel; a comfortable hand-sized section works best.",
    tip: "Keep the unused portion folded to preserve resin for future applications.",
  },
  {
    number: 2,
    icon: Hand,
    title: "Apply to a dry surface",
    description:
      "Press the towel against the surface you want to treat. Gorilla Gold works on your bare hands, your gloves, or directly on your equipment grip. The all-natural resin formula transfers best to a dry surface, so wipe down any moisture before applying.",
    tip: "For best results, towel-dry your hands or grip first. The resin bonds more effectively to a clean, dry surface.",
    surfaces: ["Your grip", "Your hands", "Your gloves"],
  },
  {
    number: 3,
    icon: GripVertical,
    title: "Squeeze to activate",
    description:
      "This is the key step. Squeeze the towel against the surface with varying pressure to control the amount of tack. A light squeeze transfers a thin layer of resin for subtle grip enhancement. A firm squeeze transfers a thicker layer for maximum moisture-resistant tackiness.",
    tip: "Start with a light squeeze and build up. You can always add more tack, but you cannot remove it until it dissolves naturally.",
    pressure: [
      { level: "Light squeeze", result: "Slight tack, ideal for dry conditions or finesse shots" },
      { level: "Medium squeeze", result: "Moderate grip, good for general play" },
      { level: "Hard squeeze", result: "Maximum tackiness, best for rain, heavy sweat, or humid conditions" },
    ],
  },
  {
    number: 4,
    icon: SlidersHorizontal,
    title: "Adjust as needed",
    description:
      "You control how sticky it gets based on pressure alone. There is no single correct amount of tack. Different conditions, different sports, and different personal preferences all call for different levels. Experiment during your first few uses to find what feels right for you.",
    tip: "Think of it like dialing in your grip stickiness with pressure. More pressure means more tack, less pressure means less tack.",
  },
  {
    number: 5,
    icon: RefreshCw,
    title: "Reapply during use",
    description:
      "The all-natural resin formula dissolves gradually during play. Reapply whenever you feel your grip starting to slip. Some athletes reapply once or twice per round, while others use the towel every time they pick up their club, paddle, or bat. There is no wrong frequency.",
    tip: "Keep the towel in your pocket or clipped to your bag for quick access between shots.",
  },
];

const howItWorks = [
  {
    icon: Droplets,
    title: "Cleans oil and sweat off the grip",
    description:
      "The towel material absorbs surface oils and perspiration, removing the slippery layer that causes grip failure.",
  },
  {
    icon: ShieldCheck,
    title: "Leaves a light tacky, moisture-repelling layer",
    description:
      "The all-natural resin creates a hydrophobic barrier that repels water rather than absorbing it, maintaining friction in wet conditions.",
  },
  {
    icon: Sparkles,
    title: "Helps you grip without squeezing as hard",
    description:
      "Increased surface friction means less grip pressure is needed. This reduces hand fatigue, forearm tension, and the over-gripping that leads to inconsistent performance.",
  },
];

const commonMistakes = [
  {
    mistake: "Using it on a wet grip first",
    correction:
      "The all-natural resin formula bonds best to a dry surface. Wipe your grip or hands dry before applying Gorilla Gold. Applying to a wet surface dilutes the resin and reduces tackiness.",
  },
  {
    mistake: "Over-squeezing on the first application",
    correction:
      "Start light and build up. If you squeeze too hard right away, the surface may feel overly sticky. A gradual approach lets you find the exact tack level you prefer.",
  },
  {
    mistake: "Expecting one application to last all day",
    correction:
      "The resin dissolves naturally within hours. This is by design: it prevents residue buildup on your equipment. Plan to reapply during your round or match as needed.",
  },
];

const howToUseFaqs = faqs.filter((faq) =>
  ["how-to-apply", "how-to-store", "how-long-does-it-last", "gloves", "residue"].includes(faq.id)
);

const howToSchemaSteps = steps.map((step) => ({
  name: step.title,
  text: step.description,
}));

export default function HowToUsePage() {
  return (
    <>
      <HowToSchema
        name="How to Use the Gorilla Gold Grip-Enhancing Towel"
        description="Learn how to use the Gorilla Gold grip-enhancing towel in 5 simple steps for better grip in wet, sweaty, and slippery conditions."
        steps={howToSchemaSteps}
        totalTime="PT2M"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "How to Use", href: "/how-to-use" },
        ]}
      />

      <PageHero
        label="How to use"
        h1="How to Use Gorilla Gold"
        introText="Gorilla Gold is a grip-enhancing towel that gives you adjustable tackiness through simple squeeze pressure. Five steps, no complicated technique, and total control over your grip in any condition."
      />

      {/* Video Demo */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>See it in action</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Watch how Gorilla Gold works
            </h2>
            <p className="mt-4 text-base text-text-secondary">
              See the grip-enhancing towel in action and learn how to get the most out of every application.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-bg-secondary">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  title="Gorilla Gold grip-enhancing towel demonstration"
                  src="https://player.vimeo.com/video/105165216?h=c6ec0b836b"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>Step-by-step guide</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              5 steps to better grip
            </h2>
            <p className="mt-4 text-base text-text-secondary">
              Whether you play golf, pickleball, tennis, or any grip-dependent activity, the process is the same.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated transition-all duration-300 hover:border-accent/30"
              >
                {/* Step number accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-accent/20 group-hover:bg-accent transition-colors duration-300" />

                <div className="p-8 pl-10">
                  {/* Step header */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <span className="font-heading text-xl font-bold">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <step.icon className="h-5 w-5 text-accent" />
                        <h3 className="font-heading text-xl font-bold text-text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-base leading-relaxed text-text-secondary">
                        {step.description}
                      </p>

                      {/* Pressure levels for step 3 */}
                      {step.pressure && (
                        <div className="mt-5 space-y-3">
                          {step.pressure.map((p) => (
                            <div
                              key={p.level}
                              className="flex items-start gap-3 rounded-lg bg-bg-primary/50 px-4 py-3"
                            >
                              <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                                {p.level}
                              </span>
                              <span className="text-sm text-text-secondary">{p.result}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Surface options for step 2 */}
                      {step.surfaces && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {step.surfaces.map((surface) => (
                            <span
                              key={surface}
                              className="rounded-full border border-border bg-bg-primary/50 px-4 py-1.5 text-sm text-text-secondary"
                            >
                              {surface}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Pro tip */}
                      {step.tip && (
                        <div className="mt-5 flex items-start gap-3 rounded-lg border border-accent/10 bg-accent/5 px-4 py-3">
                          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <p className="text-sm text-text-secondary">
                            <span className="font-medium text-accent">Tip:</span> {step.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connector line between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-[2.9rem] h-6 w-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It's Actually Doing */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              What Gorilla Gold is actually doing
            </h2>
            <p className="mt-4 text-base text-text-secondary">
              Understanding the science helps you get the most out of your grip-enhancing towel.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-bg-secondary p-6 transition-colors duration-200 hover:border-accent/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>Avoid these mistakes</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Common mistakes to avoid
            </h2>
            <p className="mt-4 text-base text-text-secondary">
              Getting the most out of Gorilla Gold is simple once you know what not to do.
            </p>

            <div className="mt-12 space-y-6">
              {commonMistakes.map((item) => (
                <div
                  key={item.mistake}
                  className="rounded-2xl border border-border bg-bg-elevated p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                      <CircleAlert className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-text-primary">
                        {item.mistake}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {item.correction}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Mental Model */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Think of it this way</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Dialing in grip stickiness with pressure
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Gorilla Gold is not a one-time application. Think of it as a tool you adjust throughout
              your round. Light pressure for a subtle edge, firm pressure for maximum hold.
              You are always in control.
            </p>
            <div className="mt-10 inline-flex items-center gap-6 rounded-2xl border border-border bg-bg-secondary px-8 py-5">
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Less pressure</p>
                <p className="mt-1 font-heading text-sm font-bold text-text-primary">Light tack</p>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-3 rounded-full bg-accent transition-all"
                    style={{ width: `${8 + i * 6}px`, opacity: 0.2 + i * 0.16 }}
                  />
                ))}
              </div>
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">More pressure</p>
                <p className="mt-1 font-heading text-sm font-bold text-text-primary">Maximum tack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      <ProductModule productHandles={["gorilla-gold-golf", "gorilla-gold-all-sport", "gorilla-gold-softball-baseball"]} />

      {howToUseFaqs.length > 0 && (
        <FAQSection
          faqs={howToUseFaqs}
          heading="Questions About Using Gorilla Gold"
        />
      )}

      <CTABanner
        headline="Ready to improve your grip?"
        description="Try Gorilla Gold and feel the difference adjustable tackiness makes. 3-packs start at $21."
        buttonText="Shop Gorilla Gold"
        buttonHref="/shop"
      />
    </>
  );
}
