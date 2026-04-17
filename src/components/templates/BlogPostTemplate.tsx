import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQSection } from "@/components/shared/FAQSection";
import { RelatedContent } from "@/components/shared/RelatedContent";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { BlogPost } from "@/types";

const categoryLabels: Record<string, string> = {
  comparison: "Comparison",
  "how-to": "How-To",
  explainer: "Explainer",
  guide: "Guide",
};

interface BlogPostTemplateProps {
  post: BlogPost;
}

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="bg-bg-primary">
        {/* Article Header */}
        <header className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6">
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
            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-text-muted">
              By {post.author}
            </p>
          </div>
        </header>

        {/* Article Sections */}
        <div className="pb-24">
          <div className="mx-auto max-w-3xl px-6">
            {post.sections.map((section, index) => (
              <section key={index} className="mt-12 first:mt-0">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="border-t border-border pb-16">
            <div className="mx-auto max-w-3xl px-6 pt-8">
              <SectionLabel>Tags</SectionLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      {/* FAQ Section */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQSection faqs={post.faqs} heading="Questions About This Topic" />
      )}

      {/* Related Content */}
      <RelatedContent categories={post.relatedCategories} />

      <CTABanner
        headline="Ready to improve your grip?"
        description="Try Gorilla Gold and experience the all-natural resin formula trusted by athletes across every sport."
        buttonText="Shop Gorilla Gold"
        buttonHref="https://store.gorillagold.com"
      />
    </>
  );
}
