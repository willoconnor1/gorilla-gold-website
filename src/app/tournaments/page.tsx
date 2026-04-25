import type { Metadata } from "next";
import {
  Shield,
  Trophy,
  Users,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTABanner } from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Tournament Partnerships | Gorilla Gold Grip-Enhancing Towel",
  description:
    "Gorilla Gold supports competitive play with USGA approved, R&A conforming grip-enhancing towels. The sole drying agent allowed by the NCAA, NFHS, and USA Softball for softball pitchers. Tournament partnerships and sponsorship opportunities.",
  openGraph: {
    title: "Tournament Partnerships | Gorilla Gold Grip-Enhancing Towel",
    description:
      "Gorilla Gold supports competitive play with USGA approved, R&A conforming grip-enhancing towels. The sole drying agent allowed by the NCAA, NFHS, and USA Softball for softball pitchers.",
  },
};

const golfApprovals = [
  "USGA approved for use during competition rounds",
  "R&A conforming under the Rules of Golf",
  "Legal in all PGA Tour, LPGA, amateur, and collegiate events",
  "Permitted in USGA qualifiers, club championships, and state amateur events",
  "Tested by Golf Digest in tournament downpour conditions",
];

const softballApprovals = [
  "Sole drying agent allowed by the NCAA, NFHS, and USA Softball for softball pitchers",
  "Also allowed by ISC and ISF for tournament play",
  "Legal for use during sanctioned tournament play",
  "Used by collegiate and travel softball programs nationwide",
];

const partnershipBenefits = [
  {
    icon: Trophy,
    title: "Player gift bags",
    description:
      "Include Gorilla Gold grip-enhancing towels in tournament welcome kits and player gift bags. Every participant receives a product they will actually use.",
  },
  {
    icon: Users,
    title: "On-course sampling",
    description:
      "Set up sampling stations at the first tee, practice range, or registration table. Athletes can experience the moisture-resistant tackified feel before they play.",
  },
  {
    icon: Shield,
    title: "Brand visibility",
    description:
      "Co-branded signage, tee markers, and scorecard inserts keep Gorilla Gold visible throughout the event. Our team provides materials and design support.",
  },
];

export default function TournamentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Tournaments", href: "/tournaments" },
        ]}
      />

      <PageHero
        label="Tournaments"
        h1="Tournament Partnerships"
        introText="Gorilla Gold supports competitive play at every level. As a USGA approved, R&A conforming grip-enhancing towel, and the sole drying agent allowed by the NCAA, NFHS, and USA Softball for softball pitchers, Gorilla Gold is one of the few grip products that athletes can legally use in sanctioned competition. We partner with tournaments, leagues, and events to put our product in the hands of competitive players."
      />

      {/* Golf Tournament Approval */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Golf tournaments</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            USGA approved and R&A conforming
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            Gorilla Gold is fully approved for competitive golf. Unlike chalk,
            rosin, and other grip products that may violate the Rules of Golf,
            Gorilla Gold has been reviewed and approved by both the USGA and
            R&A. Tournament directors and rules officials can confirm its
            legality with confidence.
          </p>

          <div className="mt-12 space-y-4">
            {golfApprovals.map((approval) => (
              <div key={approval} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-base text-text-secondary">{approval}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Softball/Baseball Approval */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Softball and baseball</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            The sole NCAA, NFHS, and USA Softball-allowed drying agent
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            Gorilla Gold holds a unique distinction in softball: it is the only
            drying agent allowed by the NCAA, NFHS, and USA Softball for use by
            pitchers on the mound during sanctioned play. Pine tar, rosin, and
            other grip aids are banned or restricted, but Gorilla Gold is
            explicitly permitted.
          </p>

          <div className="mt-12 space-y-4">
            {softballApprovals.map((approval) => (
              <div key={approval} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-base text-text-secondary">{approval}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="bg-bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Partnership options</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            How we support your event
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            Gorilla Gold partners with golf tournaments, softball leagues,
            pickleball events, and multi-sport competitions across the country.
            We offer flexible partnership packages tailored to your event size
            and audience.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-border bg-bg-secondary p-6"
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

      {/* Request Sponsorship */}
      <section className="bg-bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Request a partnership</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Bring Gorilla Gold to your tournament
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            Interested in having Gorilla Gold as a tournament sponsor, product
            supplier, or gift bag partner? Contact our team with your event
            details, including date, location, number of participants, and the
            sport. We will work with you to create a partnership that fits your
            event.
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
        headline="Ready to partner with Gorilla Gold?"
        description="Contact our team to discuss tournament supply, sponsorship, and event partnerships."
        buttonText="Shop Now"
        buttonHref="/shop"
      />
    </>
  );
}
