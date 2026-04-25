import type { ProductPageData } from "@/types";

export const products: ProductPageData[] = [
  {
    handle: "gorilla-gold-golf",
    name: "Gorilla Gold Golf",
    tagline: "Grip confidence for every round",
    metaDescription:
      "Gorilla Gold Golf grip-enhancing towel. USGA approved, R&A conforming. All-natural resin formula for moisture-resistant tack in rain, heat, and humidity.",
    description:
      "Gorilla Gold Golf is a grip-enhancing towel built specifically for golfers who refuse to let sweaty hands, rain, or humidity compromise their game. The all-natural resin formula creates a moisture-resistant tackified feel on your hands and gloves, giving you confident grip pressure from the first tee to the final putt. USGA approved and R&A conforming, Gorilla Gold Golf is legal in every sanctioned competition. One reusable towel typically lasts a month or more for golfers playing 2-3 times per week, and occasional players have reported Gorilla Gold lasting months, even years. Simply squeeze the towel with varying pressure to dial in the exact level of tack your conditions demand. The resin dissolves within minutes from your hands and a few hours from equipment, leaving no residue on your grips, gloves, or gear.",
    features: [
      "USGA approved and R&A conforming for all tournament and competition play",
      "All-natural resin formula with no synthetic chemicals, fragrances, or adhesives",
      "Creates a moisture-resistant tackified feel that repels sweat, rain, and humidity",
      "Adjustable tack: squeeze lightly for subtle grip or firmly for maximum hold",
      "Works on bare hands and golf gloves for flexible application",
      "Reusable: one towel typically lasts a month or more with regular play",
      "Dissolves within minutes from hands and a few hours from equipment, with no residue buildup",
      "Tested by Golf Digest in tournament conditions, including a national tournament downpour",
    ],
    sports: ["Golf"],
    skus: [
      {
        name: "Gorilla Gold Golf 3-Pack",
        sku: "101",
        packSize: "3-Pack",
        price: "21.00",
      },
      {
        name: "Gorilla Gold Golf 12-Pack",
        sku: "102",
        packSize: "12-Pack",
        price: "81.00",
      },
    ],
    images: [
      {
        src: "/images/gorilla-gold-golf.webp",
        alt: "Gorilla Gold Golf grip-enhancing towel 3-pack",
      },
    ],
    relatedCategories: [
      {
        label: "Best Golf Grip Aid for Sweaty Hands",
        href: "/golf-grip-aid",
        description:
          "Complete guide to using Gorilla Gold for golf grip improvement.",
      },
      {
        label: "Golf Grip Aid for Rain and Wet Weather",
        href: "/wet-weather-grip-aid",
        description:
          "How Gorilla Gold keeps your grip secure in rain and wet conditions.",
      },
      {
        label: "Grip Aid Comparisons",
        href: "/grip-aid-comparisons",
        description:
          "See how Gorilla Gold compares to rosin bags, chalk, and other golf grip aids.",
      },
    ],
  },
  {
    handle: "gorilla-gold-all-sport",
    name: "Gorilla Gold All-Sport",
    tagline: "One towel for every game",
    metaDescription:
      "Gorilla Gold All-Sport grip-enhancing towel for pickleball, tennis, football, basketball, and more. All-natural resin formula. Reusable. No residue.",
    description:
      "Gorilla Gold All-Sport is a grip-enhancing towel designed for universal use across all sports and activities where a good grip is critical. From football and basketball to lawn bowls, disc golf, track and field, gymnastics, and soccer goalkeepers, the all-natural resin formula creates a moisture-resistant tackified feel that keeps you in control. Apply it to bare hands, gloves, or any equipment surface. The resin adjusts with pressure: a light squeeze provides subtle tack for finesse play, while a firm squeeze delivers maximum hold for power moves in wet conditions. Reusable and mess-free, Gorilla Gold All-Sport dissolves within minutes from your hands and a few hours from equipment, leaving no residue.",
    features: [
      "All-natural resin formula creates moisture-resistant tackified feel across all conditions",
      "Designed for universal use across sports where a good grip is critical",
      "Works on bare hands, gloves, and equipment surfaces",
      "Adjustable tack through variable squeeze pressure for sport-specific needs",
      "Reusable: one towel typically lasts a month or more of regular use",
      "Dissolves within minutes from hands and a few hours from equipment, with no residue",
      "All-natural ingredients with no synthetic chemicals or irritants",
      "Compact towel format fits in any sports bag, pocket, or gear case",
    ],
    sports: [
      "Football",
      "Basketball",
      "Lawn Bowls",
      "Disc Golf",
      "Track and Field",
      "Gymnastics",
      "Soccer (Goalkeepers)",
    ],
    skus: [
      {
        name: "Gorilla Gold All-Sport 3-Pack",
        sku: "201",
        packSize: "3-Pack",
        price: "21.00",
      },
      {
        name: "Gorilla Gold All-Sport 12-Pack",
        sku: "202",
        packSize: "12-Pack",
        price: "81.00",
      },
    ],
    images: [
      {
        src: "/images/gorilla-gold-all-sport.webp",
        alt: "Gorilla Gold All-Sport grip-enhancing towel 3-pack",
      },
    ],
    relatedCategories: [
      {
        label: "Best Grip Solutions for Sweaty Hands",
        href: "/sweaty-hands-grip-aid",
        description:
          "Cross-sport grip solutions for athletes dealing with perspiration.",
      },
      {
        label: "Active Living Grip Solutions",
        href: "/active-living-grip",
        description:
          "Gorilla Gold for everyday active living: gardening, fishing, hiking, and more.",
      },
      {
        label: "Grip Aid Comparisons",
        href: "/grip-aid-comparisons",
        description:
          "See how Gorilla Gold compares to chalk, pine tar, rosin, and other grip aids.",
      },
    ],
  },
  {
    handle: "gorilla-gold-softball-baseball",
    name: "Gorilla Gold Softball/Baseball",
    tagline: "The sole drying agent allowed by NCAA, NFHS, and USA Softball",
    metaDescription:
      "Gorilla Gold Softball Baseball grip-enhancing towel. Sole NCAA, NFHS, and USA Softball-allowed drying agent for pitchers. All-natural resin for hitters and fielders.",
    description:
      "Gorilla Gold is a grip-enhancing towel and the sole NCAA, USA Softball, and NFHS-allowed drying agent for softball pitchers to use on the mound. The all-natural resin formula creates a moisture-resistant tackified feel that gives pitchers precise ball control, hitters a relaxed bat grip for faster swings, and fielders confident glove-hand traction. Reusable, Gorilla Gold is legal at every level of play from youth leagues to championship tournaments.",
    features: [
      "Allowed by NCAA, NFHS, USA Softball, ISC, and ISF for tournament play",
      "Sole drying agent for softball pitchers to use on the mound",
      "All-natural resin formula creates moisture-resistant tackified feel for precise ball control",
      "Improves bat grip for relaxed hands and faster swing speed",
      "Works on bare hands, batting gloves, and fielding gloves",
      "Proven in rain tournaments: maintains grip when other aids wash away",
      "Dissolves within minutes from hands and a few hours from equipment, with no residue on bats, balls, gloves, or uniforms",
      "Reusable towel format: clean alternative to messy pine tar and rosin bags",
    ],
    sports: ["Softball", "Baseball"],
    skus: [
      {
        name: "Gorilla Gold Softball/Baseball 3-Pack",
        sku: "109",
        packSize: "3-Pack",
        price: "21.00",
      },
      {
        name: "Gorilla Gold Softball/Baseball 12-Pack",
        sku: "110",
        packSize: "12-Pack",
        price: "81.00",
      },
    ],
    images: [
      {
        src: "/images/gorilla-gold-baseball.webp",
        alt: "Gorilla Gold Softball Baseball grip-enhancing towel 3-pack",
      },
    ],
    relatedCategories: [
      {
        label: "Best Grip Aid for Softball and Baseball",
        href: "/softball-grip-aid",
        description:
          "Complete guide to Gorilla Gold for pitchers, hitters, and fielders.",
      },
      {
        label: "Gorilla Gold vs Rosin vs Pine Tar",
        href: "/grip-aid-comparisons",
        description:
          "Detailed comparison of Gorilla Gold against pine tar, rosin, and other grip aids.",
      },
      {
        label: "Wet Weather Grip Aid",
        href: "/wet-weather-grip-aid",
        description:
          "How Gorilla Gold performs in rain tournaments and wet conditions.",
      },
    ],
  },
  // TODO: Tom — confirm Racquet Sports SKU numbers, real pricing, and product photo.
  // Placeholder added per Tom's revision doc (FAQ refers to Racquet Sports as a distinct product
  // for tennis, pickleball, squash, and padel players).
  {
    handle: "gorilla-gold-racquet-sports",
    name: "Gorilla Gold Racquet Sports",
    tagline: "Built for tennis, pickleball, squash, and padel",
    metaDescription:
      "Gorilla Gold Racquet Sports grip-enhancing towel for tennis, pickleball, squash, and padel players. All-natural resin formula. Reusable. No residue.",
    description:
      "Gorilla Gold Racquet Sports is a grip-enhancing towel made for tennis, pickleball, squash, and padel players. The all-natural resin formula creates a moisture-resistant tackified feel on your hands and racquet or paddle grip, giving you confident control through humid matches, hot tournaments, and long practice sessions. Apply it directly to dry hands or grips. Reusable: one towel typically lasts a month or more of regular play. The resin dissolves within minutes from your hands and a few hours from equipment, leaving no residue on your racquet, paddle, or overgrip.",
    features: [
      "Made for tennis, pickleball, squash, and padel players",
      "All-natural resin formula creates moisture-resistant tackified feel for racquet and paddle grips",
      "Apply to dry hands or grips for confident control during changeovers and between games",
      "Reusable: one towel typically lasts a month or more of regular play",
      "Dissolves within minutes from hands and a few hours from equipment, with no residue",
      "Works on top of any existing overgrip or directly on the base grip",
      "All-natural ingredients with no synthetic chemicals or irritants",
    ],
    sports: ["Tennis", "Pickleball", "Squash", "Padel"],
    skus: [
      {
        // TODO: Tom — confirm real SKU and pricing for Racquet Sports 3-pack.
        name: "Gorilla Gold Racquet Sports 3-Pack",
        sku: "TBD-RS3",
        packSize: "3-Pack",
        price: "21.00",
      },
      {
        // TODO: Tom — confirm real SKU and pricing for Racquet Sports 12-pack.
        name: "Gorilla Gold Racquet Sports 12-Pack",
        sku: "TBD-RS12",
        packSize: "12-Pack",
        price: "81.00",
      },
    ],
    images: [
      {
        // TODO: Tom — replace with real Racquet Sports product photo when available.
        src: "/images/gorilla-gold-all-sport.webp",
        alt: "Gorilla Gold Racquet Sports grip-enhancing towel (placeholder image)",
      },
    ],
    relatedCategories: [
      {
        label: "Grip Aid for Tennis in Humid Conditions",
        href: "/tennis-grip-aid",
        description:
          "Gorilla Gold for tennis players battling humidity and sweat on the court.",
      },
      {
        label: "Grip Aid for Pickleball in Hot Weather",
        href: "/pickleball-grip-aid",
        description:
          "How Gorilla Gold keeps pickleball players in control during hot weather play.",
      },
      {
        label: "Best Grip Solutions for Sweaty Hands",
        href: "/sweaty-hands-grip-aid",
        description:
          "Cross-sport grip solutions for athletes dealing with perspiration.",
      },
    ],
  },
];
