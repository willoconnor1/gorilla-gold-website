import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { RelatedLink } from "@/types";

interface RelatedContentProps {
  categories?: RelatedLink[];
  content?: RelatedLink[];
  showFAQ?: boolean;
}

export function RelatedContent({
  categories = [],
  content = [],
  showFAQ = true,
}: RelatedContentProps) {
  const filteredCategories = showFAQ
    ? categories.filter((link) => link.href !== "/faq")
    : categories;
  const filteredContent = showFAQ
    ? content.filter((link) => link.href !== "/faq")
    : content;

  const merged: RelatedLink[] = [
    ...filteredCategories,
    ...filteredContent,
    ...(showFAQ
      ? [
          {
            label: "Frequently Asked Questions",
            href: "/faq",
            description:
              "Get answers to common questions about Gorilla Gold grip-enhancing towels.",
          },
        ]
      : []),
  ];

  const seen = new Set<string>();
  const allLinks = merged.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });

  if (allLinks.length === 0) return null;

  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Explore more</SectionLabel>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Related pages
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-bg-secondary p-5 transition-colors hover:border-accent/50"
            >
              <div>
                <p className="font-medium text-text-primary group-hover:text-accent transition-colors">
                  {link.label}
                </p>
                {link.description && (
                  <p className="mt-1 text-sm text-text-secondary">
                    {link.description}
                  </p>
                )}
              </div>
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-text-muted transition-colors group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
