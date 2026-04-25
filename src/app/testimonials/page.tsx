import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ReviewSchema } from "@/components/schema/ReviewSchema";
import { ReviewPrompt } from "@/components/shared/ReviewPrompt";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { TestimonialsClient } from "@/components/testimonials/TestimonialsClient";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Gorilla Gold Grip-Enhancing Towel",
  description:
    "Read what athletes say about Gorilla Gold grip-enhancing towels. Testimonials from golfers, softball players, tennis players, pickleball players, and more.",
  openGraph: {
    title: "Testimonials | Gorilla Gold Grip-Enhancing Towel",
    description:
      "Read what athletes say about Gorilla Gold grip-enhancing towels. Testimonials from golfers, softball players, tennis players, pickleball players, and more.",
  },
};

const FEATURED_IDS = ["jeff-patterson", "andrew-cohn"];

export default function TestimonialsPage() {
  const featuredTestimonials = FEATURED_IDS.map((id) =>
    testimonials.find((t) => t.id === id)
  ).filter(Boolean);

  const totalReviews = testimonials.length;
  const totalSports = new Set(testimonials.map((t) => t.sport)).size;
  const avgRating =
    testimonials.reduce((sum, t) => sum + (t.rating ?? 5), 0) / totalReviews;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Testimonials", href: "/testimonials" },
        ]}
      />

      {/* Hero + Stats Bar */}
      <section className="bg-bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Reviews</SectionLabel>
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
                What Athletes Say About Gorilla Gold
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                From PGA instructors to weekend golfers, competitive softball
                pitchers to casual pickleball players, athletes across every
                grip-dependent sport trust Gorilla Gold.
              </p>
            </div>

            <div className="flex gap-8 sm:gap-12">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-accent">
                  {totalReviews}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                  Reviews
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <p className="font-heading text-4xl font-bold text-accent">
                    {avgRating.toFixed(1)}
                  </p>
                  <Star className="mb-1 h-5 w-5 fill-accent text-accent" />
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                  Rating
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-accent">
                  {totalSports}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                  Sports
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Endorsements */}
      <section className="bg-bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Expert endorsements</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Trusted by the experts
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial!.id}
                testimonial={testimonial!}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Filter + Masonry Grid */}
      <TestimonialsClient testimonials={testimonials} />

      <ReviewPrompt />

      <ReviewSchema
        itemName="Gorilla Gold Grip-Enhancing Towel"
        ratingValue={5}
        reviewCount={testimonials.length}
        reviews={testimonials.map((t) => ({
          author: t.name,
          reviewBody: t.quote,
          ratingValue: t.rating ?? 5,
        }))}
      />

      <CTABanner
        headline="Join thousands of athletes who trust Gorilla Gold"
        description="Order your grip-enhancing towel today and feel the difference."
        buttonText="Shop Now"
        buttonHref="/shop"
      />
    </>
  );
}
