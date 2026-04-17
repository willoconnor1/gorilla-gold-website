"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Sun,
  Cloud,
  ThermometerSun,
  Hand,
  Trophy,
  Dumbbell,
  TreePine,
  Fish,
  Footprints,
  Target,
  Zap,
  Shield,
  CircleDot,
  Grip,
  CloudRain,
  Activity,
} from "lucide-react";
import type { UseCase } from "@/types";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Sun,
  Cloud,
  ThermometerSun,
  Hand,
  Trophy,
  Dumbbell,
  TreePine,
  Fish,
  Footprints,
  Target,
  Zap,
  Shield,
  CircleDot,
  Grip,
  CloudRain,
  Activity,
};

interface UseCaseGridProps {
  useCases: UseCase[];
}

export function UseCaseGrid({ useCases }: UseCaseGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {useCases.map((useCase, i) => {
        const IconComponent = useCase.icon ? iconMap[useCase.icon] : null;
        return (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-bg-secondary p-6"
          >
            {IconComponent && (
              <IconComponent className="mb-4 h-8 w-8 text-accent" />
            )}
            <h3 className="text-base font-semibold text-text-primary">
              {useCase.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              {useCase.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
