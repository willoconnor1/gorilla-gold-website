import type { Metadata } from "next";
import {
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Shield,
  Leaf,
  RefreshCw,
  Users,
  Award,
  Heart,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "About Gorilla Gold | The Feel For The Game",
  description:
    "Learn about Gorilla Gold, the grip-enhancing towel trusted by athletes across golf, pickleball, tennis, softball, and active living. All-natural resin formula. USGA approved.",
  openGraph: {
    title: "About Gorilla Gold | The Feel For The Game",
    description:
      "Learn about Gorilla Gold, the grip-enhancing towel trusted by athletes across golf, pickleball, tennis, softball, and active living. All-natural resin formula. USGA approved.",
  },
};

const values = [
  {
    icon: Leaf,
    title: "All-Natural Formula",
    description:
      "Gorilla Gold uses an all-natural resin formula with no synthetic chemicals, fragrances, or adhesives. Every ingredient is chosen for safety and performance.",
  },
  {
    icon: RefreshCw,
    title: "Reusable by Design",
    description:
      "One Gorilla Gold grip-enhancing towel lasts approximately one month with regular use. Store it sealed between sessions, and it keeps delivering moisture-resistant tackified feel round after round.",
  },
  {
    icon: Shield,
    title: "Competition Approved",
    description:
      "Gorilla Gold is USGA approved, R&A conforming, and the sole ASA-approved drying agent for softball pitchers. It is also NFHS-approved for high school play.",
  },
  {
    icon: Users,
    title: "Built for Every Athlete",
    description:
      "From PGA professionals to weekend golfers, competitive pickleball players to pole fitness athletes, Gorilla Gold serves anyone who needs confident grip in challenging conditions.",
  },
];

const sports = [
  { name: "Golf", description: "The core market, from tour-level to recreational play" },
  { name: "Pickleball", description: "Fast-growing adoption for hot-weather paddle control" },
  { name: "Tennis", description: "Reduced racquet slipping and lighter grip pressure" },
  { name: "Softball / Baseball", description: "The sole ASA-approved drying agent for pitchers" },
  { name: "Football", description: "Confident ball handling in rain and sweat" },
  { name: "Basketball", description: "Secure grip for shooting and ball-handling drills" },
  { name: "Bowling / Lawn Bowls", description: "Consistent release in humid conditions" },
  { name: "Disc Golf", description: "Reliable disc control in wet and sweaty conditions" },
  { name: "Active Living", description: "Gardening, fishing, walking poles, pole fitness, weightlifting" },
];

const trustSignals = [
  { icon: Shield, label: "USGA Approved" },
  { icon: Shield, label: "R&A Conforming" },
  { icon: Award, label: "Sole ASA-Approved Drying Agent" },
  { icon: Award, label: "NFHS Approved" },
  { icon: Heart, label: "Endorsed by Hank Haney" },
  { icon: Award, label: "Tested by Golf Digest" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <PageHero
        label="Our Story"
        h1="About Gorilla Gold"
        introText="Gorilla Gold is a grip-enhancing towel that helps athletes and active users maintain control in wet, sweaty, and slippery conditions. Built with an all-natural resin formula, every Gorilla Gold towel creates a moisture-resistant tackified feel that dissolves within hours and leaves no residue. The Feel For The Game."
      />

      {/* What Gorilla Gold Is */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>What we make</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            The grip-enhancing towel trusted worldwide
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Gorilla Gold is a grip-enhancing towel infused with an all-natural resin formula. Simply squeeze it against your hands, gloves, or equipment grips to create a moisture-resistant tackified feel that repels sweat, rain, and humidity. The resin adjusts with pressure: a light squeeze delivers subtle tack, while a firm squeeze provides maximum hold.
            </p>
            <p>
              Each towel is reusable and typically lasts about one month with regular use. The all-natural resin dissolves within hours and leaves no residue on grips, gloves, equipment, or skin. Gorilla Gold is the clean, effective, competition-legal alternative to chalk, rosin, pine tar, and other grip aids.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Our values</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Why athletes choose Gorilla Gold
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-bg-primary p-6"
              >
                <value.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Uses Gorilla Gold */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Who uses Gorilla Gold</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Trusted across every grip-dependent sport
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport) => (
              <div
                key={sport.name}
                className="rounded-2xl border border-border bg-bg-secondary p-5"
              >
                <h3 className="font-heading text-base font-semibold text-text-primary">
                  {sport.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {sport.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Certifications and endorsements</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Approved, tested, and endorsed
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-bg-primary p-5"
              >
                <signal.icon className="h-6 w-6 shrink-0 text-accent" />
                <p className="text-sm font-medium text-text-primary">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Contact Gorilla Gold
          </h2>
          <p className="mt-4 max-w-2xl text-base text-text-secondary">
            Have questions about Gorilla Gold grip-enhancing towels? Looking for bulk or wholesale pricing? Reach out to our team.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:sales@gorillagold.com"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-6 transition-colors hover:border-accent/50"
            >
              <Mail className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                  Email
                </p>
                <p className="text-sm text-text-secondary">
                  sales@gorillagold.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+18182599437"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-6 transition-colors hover:border-accent/50"
            >
              <Phone className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                  Phone
                </p>
                <p className="text-sm text-text-secondary">
                  (818) 259-9437
                </p>
              </div>
            </a>

            {/* Website */}
            <a
              href="https://store.gorillagold.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-bg-secondary p-6 transition-colors hover:border-accent/50"
            >
              <Globe className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                  Store
                </p>
                <p className="text-sm text-text-secondary">
                  store.gorillagold.com
                </p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              Follow Gorilla Gold
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/gorillagold"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/gorillagold"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://twitter.com/gorillagold"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Experience the feel for the game"
        description="Order your Gorilla Gold grip-enhancing towel today. 3-packs from $21."
        buttonText="Shop Now"
        buttonHref="/shop"
      />
    </>
  );
}
