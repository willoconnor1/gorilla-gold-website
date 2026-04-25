import { HeroImage } from "@/components/home/HeroImage";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { UseCases } from "@/components/home/UseCases";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { FAQTeaser } from "@/components/home/FAQTeaser";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <HeroImage />
      <UseCases />
      <FeaturedProducts />
      <ProblemSolution />
      <TestimonialCarousel />
      <FAQTeaser />
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

      <CTABanner
        headline="Ready to take control of your grip?"
        description="Join thousands of athletes who trust Gorilla Gold in every condition. All-natural, reusable, and built for performance."
        buttonText="Shop Gorilla Gold"
        buttonHref="/shop"
      />
    </>
  );
}
