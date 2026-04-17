interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
}: HowToSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => {
      const stepObj: Record<string, unknown> = {
        "@type": "HowToStep",
        name: step.name,
        text: step.text,
      };

      if (step.image) {
        stepObj.image = step.image;
      }

      return stepObj;
    }),
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
