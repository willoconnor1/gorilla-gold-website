"use client"

import dynamic from "next/dynamic"
import { SectionLabel } from "@/components/ui/SectionLabel"

const RotatingEarth = dynamic(
  () => import("@/components/ui/wireframe-dotted-globe"),
  { ssr: false }
)

export function DistributorHero() {
  return (
    <section className="bg-bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <SectionLabel>Distribution</SectionLabel>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
              International Distributors
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
              Gorilla Gold is a grip-enhancing towel trusted by athletes worldwide. Our distribution network is expanding to serve golf, pickleball, tennis, softball, and active living communities across every continent. Whether you are looking to purchase Gorilla Gold in your country or become a distributor, this page has the information you need.
            </p>
          </div>
          {/* Right: globe */}
          <div className="w-full max-w-[360px] shrink-0 lg:max-w-[420px]">
            <RotatingEarth width={420} height={420} />
          </div>
        </div>
      </div>
    </section>
  )
}
