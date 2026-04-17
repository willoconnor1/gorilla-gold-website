import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface PageHeroProps {
  h1: string;
  introText: string;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
  fullBleed?: boolean;
  goldGlow?: boolean;
}

export function PageHero({ h1, introText, label, imageSrc, imageAlt, fullBleed, goldGlow }: PageHeroProps) {
  const hasImage = imageSrc && imageAlt;

  if (hasImage && fullBleed) {
    return (
      <section className="relative min-h-[500px] overflow-hidden sm:min-h-[600px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-right"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 sm:min-h-[600px]">
          <div className="max-w-xl py-16 sm:py-24">
            {label && <SectionLabel variant="light">{label}</SectionLabel>}
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              {introText}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const showGlow = goldGlow !== false && !hasImage;

  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 sm:py-24">
      {showGlow && (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute bottom-0 left-1/2 h-[300px] w-[1400px] -translate-x-1/2 translate-y-1/3 rounded-full opacity-30 blur-[120px]"
            style={{ background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)" }}
          />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {hasImage ? (
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              {label && <SectionLabel>{label}</SectionLabel>}
              <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
                {h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
                {introText}
              </p>
            </div>
            <div className="relative w-full max-w-sm shrink-0 lg:max-w-md">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        ) : (
          <>
            {label && <SectionLabel>{label}</SectionLabel>}
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
              {h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
              {introText}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
