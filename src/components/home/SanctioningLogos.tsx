import Image from "next/image";

const logos = [
  { src: "/logos/usga.png", alt: "USGA", width: 1516, height: 422, mono: true },
  { src: "/logos/r-and-a.png", alt: "R&A", width: 857, height: 969, scale: 1.4 },
  { src: "/logos/ncaa.png", alt: "NCAA", width: 1616, height: 1500 },
  { src: "/logos/nfhs.png", alt: "NFHS", width: 1233, height: 1339 },
  { src: "/logos/usa-softball.png", alt: "USA Softball", width: 1308, height: 1193 },
];

export function SanctioningLogos() {
  // Duplicate the list so the marquee can loop seamlessly with translateX(-50%)
  const track = [...logos, ...logos];

  return (
    <div className="marquee-pause group relative w-full overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-12 sm:gap-16">
        {track.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex h-12 shrink-0 items-center justify-center sm:h-14"
            aria-hidden={i >= logos.length || undefined}
          >
            <Image
              src={logo.src}
              alt={i < logos.length ? logo.alt : ""}
              width={logo.width}
              height={logo.height}
              style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
              className={`h-full w-auto max-w-[120px] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 ${
                logo.mono ? "brightness-0 invert" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
