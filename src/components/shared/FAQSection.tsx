import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQSchema } from "@/components/schema/FAQSchema";
import type { FAQItem } from "@/types";

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

export function FAQSection({
  faqs,
  heading = "Common Questions",
}: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionLabel>Frequently asked questions</SectionLabel>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
          {heading}
        </h2>
        <div className="mt-12">
          <FAQAccordion items={faqs} />
        </div>
      </div>
      <FAQSchema items={faqs} />
    </section>
  );
}
