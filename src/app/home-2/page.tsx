import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { UseCases } from "@/components/home/UseCases";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { FAQTeaser } from "@/components/home/FAQTeaser";
import { CTABanner } from "@/components/ui/CTABanner";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";

export default function Home2() {
  return (
    <>
      <OrganizationSchema />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <FeaturedProducts />
      <UseCases />
      <TestimonialCarousel />
      <FAQTeaser />
      <CTABanner
        headline="Ready to take control of your grip?"
        description="Join thousands of athletes who trust Gorilla Gold in every condition. All-natural, reusable, and built for performance."
        buttonText="Shop Gorilla Gold"
        buttonHref="/shop"
      />
    </>
  );
}
