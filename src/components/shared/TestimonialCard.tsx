import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

export function TestimonialCard({
  testimonial,
  featured = false,
}: TestimonialCardProps) {
  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-bg-secondary p-8">
        <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-accent" />

        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>

        <blockquote className="mt-5 font-heading text-xl font-medium leading-relaxed text-text-primary">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="font-heading text-base font-semibold text-text-primary">
              {testimonial.name}
            </p>
            {testimonial.title && (
              <p className="mt-0.5 text-sm text-accent/80">
                {testimonial.title}
              </p>
            )}
          </div>
          <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {testimonial.sport}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-bg-secondary p-6">
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-text-primary">
            {testimonial.name}
          </p>
          {testimonial.title && (
            <p className="text-xs text-text-muted">{testimonial.title}</p>
          )}
        </div>
        <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted">
          {testimonial.sport}
        </span>
      </div>
    </div>
  );
}
