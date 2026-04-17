import { Button } from "./Button";

interface CTABannerProps {
  headline: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({
  headline,
  description,
  buttonText,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {headline}
        </h2>
        {description && (
          <p className="max-w-lg text-base text-text-secondary">
            {description}
          </p>
        )}
        <Button href={buttonHref} variant="primary" size="lg" arrow>
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
