"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on mount (some browsers block autoplay)
    video.play().catch(() => {
      // Autoplay blocked - video will show first frame as poster
    });

    // Pause for a few seconds at the end before replaying
    const handleEnded = () => {
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 3000);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Gold glow from bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[600px] w-[2800px] -translate-x-1/2 translate-y-1/3 rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Grip Confidence
            <br />
            When Conditions
            <br />
            <span className="text-accent">Fight Back.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-white/80"
          >
            Gorilla Gold is a grip-enhancing towel that helps athletes and
            active users improve control in wet, sweaty, and slippery
            conditions across golf, racquet sports, pickleball, bowls, and
            more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/shop" variant="primary" size="lg" arrow>
              Shop Gorilla Gold
            </Button>
            <Button href="/golf-grip-aid" variant="outline" size="lg">
              Explore by Sport
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
