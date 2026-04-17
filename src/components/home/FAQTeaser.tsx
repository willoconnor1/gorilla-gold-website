import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faq";

const teaserFaqs = faqs.slice(0, 4);

export function FAQTeaser() {
  return (
    <section className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionLabel>Frequently asked questions</SectionLabel>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Got questions? We&apos;ve got answers.
          </h2>
        </div>

        <div className="mt-12">
          <FAQAccordion items={teaserFaqs} />
        </div>

        <div className="mt-10 text-center">
          <Button href="/faq" variant="outline" arrow>
            See all FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}
