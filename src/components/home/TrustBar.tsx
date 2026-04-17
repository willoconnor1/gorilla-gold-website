import { Shield, Leaf, RefreshCw } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "USGA Approved",
    description: "Conforms with the Rules of Golf",
  },
  {
    icon: Leaf,
    label: "All-Natural Formula",
    description: "No chemicals or synthetics",
  },
  {
    icon: RefreshCw,
    label: "Reusable",
    description: "One towel lasts up to a month",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-4 px-6 py-6"
          >
            <badge.icon className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-text-primary">
                {badge.label}
              </p>
              <p className="text-xs text-text-muted">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
