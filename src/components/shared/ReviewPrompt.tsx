import { Target, CloudRain, Trophy } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const prompts = [
  {
    icon: Target,
    title: "What problem did Gorilla Gold solve for you?",
    description:
      "Describe the grip challenge you faced, whether it was sweaty hands, slippery equipment, or loss of control during play. Specific details help other athletes find the right solution.",
  },
  {
    icon: CloudRain,
    title: "Did it help in heat, humidity, or rain?",
    description:
      "Share the conditions you used Gorilla Gold in. Athletes searching for grip solutions often want to know how the towel performs in their specific climate or weather.",
  },
  {
    icon: Trophy,
    title: "What sport were you playing?",
    description:
      "Mention your sport and skill level. Whether you play golf, pickleball, tennis, softball, or something else entirely, your experience helps athletes in the same sport discover Gorilla Gold.",
  },
];

interface ReviewPromptProps {
  reviewUrl?: string;
}

export function ReviewPrompt({ reviewUrl = "#" }: ReviewPromptProps) {
  return (
    <section className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Share your experience</SectionLabel>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Help other athletes find the right grip solution
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
          Your review makes a real difference. When you share how Gorilla Gold
          helped your game, other athletes dealing with the same grip challenges
          can find the solution they need. A few sentences about your experience
          go a long way.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prompts.map((prompt) => (
            <div
              key={prompt.title}
              className="rounded-2xl border border-border bg-bg-elevated p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <prompt.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                {prompt.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {prompt.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href={reviewUrl} variant="primary" size="lg" arrow>
            Leave a Review
          </Button>
        </div>
      </div>
    </section>
  );
}
