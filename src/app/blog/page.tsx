import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTABanner } from "@/components/ui/CTABanner";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Gorilla Gold Grip-Enhancing Towel",
  description:
    "Read grip tips, product comparisons, how-to guides, and expert advice from Gorilla Gold. Learn how the all-natural resin formula helps athletes across golf, pickleball, tennis, and more.",
  openGraph: {
    title: "Blog | Gorilla Gold Grip-Enhancing Towel",
    description:
      "Read grip tips, product comparisons, how-to guides, and expert advice from Gorilla Gold. Learn how the all-natural resin formula helps athletes across golf, pickleball, tennis, and more.",
  },
};

const categoryLabels: Record<string, string> = {
  comparison: "Comparison",
  "how-to": "How-To",
  explainer: "Explainer",
  guide: "Guide",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      <PageHero
        label="Blog"
        h1="Gorilla Gold Blog: Grip Tips, Comparisons, and How-To Guides"
        introText="Explore articles on grip improvement, product comparisons, sport-specific tips, and expert advice. Whether you play golf, pickleball, tennis, or any grip-dependent sport, our guides will help you perform with confidence."
      />

      <section className="bg-bg-primary pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-bg-secondary transition-colors hover:border-accent/50"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {categoryLabels[post.category] || post.category}
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-xs text-text-muted"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="mt-4 font-heading text-xl font-bold tracking-tight text-text-primary transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-medium text-accent">
                    Read article
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Experience grip confidence in every condition"
        description="Try Gorilla Gold and discover the moisture-resistant tackified feel that athletes trust worldwide."
        buttonText="Shop Gorilla Gold"
        buttonHref="https://store.gorillagold.com"
      />
    </>
  );
}
