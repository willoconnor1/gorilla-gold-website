// Retailer Copy - Canonical Product Descriptions (Audit Item #5)
// Consistent product language for Shopify, Amazon, and all retail channels.
// Uses entity-consistent language per brand guidelines.

export interface RetailerProductCopy {
  productName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  bulletPoints: string[];
  searchKeywords: string[];
}

export const retailerCopy: Record<string, RetailerProductCopy> = {
  golf: {
    productName: "Gorilla Gold Golf Grip-Enhancing Towel",
    tagline: "The Feel For The Game",
    shortDescription:
      "Gorilla Gold is a reusable grip-enhancing towel made with an all-natural resin formula that delivers a moisture-resistant tackified feel, helping golfers maintain confident grip control in wet, sweaty, and humid conditions.",
    fullDescription:
      "Gorilla Gold Golf is a grip-enhancing towel designed specifically for golfers who need reliable grip confidence on every swing. Made with an all-natural resin formula, it delivers a moisture-resistant tackified feel that keeps your hands and gloves performing at their best, even in rain, humidity, and high-heat rounds.\n\nWhether you struggle with sweaty hands, play in unpredictable weather, or simply want more control without over-gripping, Gorilla Gold helps you maintain a relaxed, secure hold on the club. The towel works on bare hands and gloves alike, and the level of tackiness is adjustable based on how much pressure you apply. One towel typically lasts a month or more for golfers playing two to three rounds per week, and occasional players have reported Gorilla Gold lasting months, even years.\n\nGorilla Gold is USGA approved and R&A conforming, so it is fully legal for tournament and competition play. The resin dissolves naturally within minutes from your hands and a few hours from equipment, leaving no residue buildup on grips or gloves. Tested by Golf Digest in tournament conditions, Gorilla Gold has earned the trust of professionals and weekend players alike.",
    bulletPoints: [
      "Grip-enhancing towel with all-natural resin formula for a moisture-resistant tackified feel",
      "USGA approved and R&A conforming, legal for all tournament and competition play",
      "Works on bare hands and gloves; adjustable tackiness based on pressure applied",
      "Reusable: one towel typically lasts a month or more with regular play (2-3 rounds per week)",
      "Ideal for sweaty hands, rain, humidity, and wet weather golf conditions",
      "Resin dissolves within minutes from hands and a few hours from equipment, with no residue buildup",
      "Tested by Golf Digest in tournament conditions",
    ],
    searchKeywords: [
      "golf grip aid",
      "golf grip towel",
      "grip enhancing towel golf",
      "sweaty hands golf",
      "golf rain grip",
      "wet weather golf grip",
      "golf grip for humid conditions",
      "golf tack towel",
      "reusable golf grip aid",
      "USGA approved grip aid",
      "golf grip confidence",
      "best golf grip aid for sweaty hands",
    ],
  },

  allSport: {
    productName: "Gorilla Gold All-Sport Grip-Enhancing Towel",
    tagline: "The Feel For The Game",
    shortDescription:
      "Gorilla Gold All-Sport is a reusable grip-enhancing towel with an all-natural resin formula that provides a moisture-resistant tackified feel for athletes across all sports and activities where a good grip is critical.",
    fullDescription:
      "Gorilla Gold All-Sport is a versatile grip-enhancing towel built for athletes who depend on a secure hold to perform their best. Made with an all-natural resin formula, it delivers a moisture-resistant tackified feel that keeps hands and equipment grippy in hot, sweaty, and wet conditions across a wide range of sports.\n\nFrom basketball and football to lawn bowls, disc golf, track and field, gymnastics, and soccer goalkeeping, Gorilla Gold All-Sport is trusted by athletes in every grip-dependent activity. The towel works equally well on bare hands and gloves, and the tackiness level adjusts based on pressure. Whether you are battling humidity on the court or managing sweaty palms during competition, Gorilla Gold helps you stay in control without over-gripping.\n\nEach towel is reusable and typically lasts a month or more with regular use; occasional players have reported Gorilla Gold lasting months, even years. The all-natural resin dissolves within minutes from your hands and a few hours from equipment, leaving no residue on your hands, gloves, or gear. Gorilla Gold All-Sport is the go-to grip solution for athletes who refuse to let conditions compromise their performance.",
    bulletPoints: [
      "Grip-enhancing towel with all-natural resin formula for a moisture-resistant tackified feel",
      "Designed for universal use across all sports and activities where a good grip is critical",
      "Works on bare hands and gloves; adjustable tackiness based on pressure applied",
      "Reusable: one towel typically lasts a month or more with regular use",
      "Combats sweaty hands, humidity, and wet conditions that compromise grip",
      "All-natural resin dissolves within minutes from hands and a few hours from equipment, with no residue",
      "Trusted by competitive athletes and recreational players across multiple sports",
    ],
    searchKeywords: [
      "grip aid for sports",
      "all sport grip towel",
      "sweaty hands sports",
      "grip enhancing towel",
      "basketball grip aid",
      "football grip towel",
      "lawn bowls grip aid",
      "gymnastics grip aid",
      "soccer goalkeeper grip aid",
      "all sport tack towel",
      "humidity grip solution sports",
      "reusable grip towel for athletes",
    ],
  },

  softballBaseball: {
    productName: "Gorilla Gold Softball/Baseball Grip-Enhancing Towel",
    tagline: "The Feel For The Game",
    shortDescription:
      "Gorilla Gold Softball/Baseball is a reusable grip-enhancing towel and the sole NCAA, NFHS, and USA Softball-allowed drying agent for softball pitchers, with an all-natural resin formula that delivers a moisture-resistant tackified feel for batters, pitchers, and fielders.",
    fullDescription:
      "Gorilla Gold Softball/Baseball is a grip-enhancing towel purpose-built for the diamond. It is the sole NCAA, USA Softball, and NFHS-allowed drying agent for softball pitchers to use on the mound. Made with an all-natural resin formula, it delivers a moisture-resistant tackified feel that helps batters, pitchers, and fielders maintain a confident, controlled grip on bats, balls, and gloves, even when conditions get wet, humid, or slippery.\n\nSweaty hands and rain are two of the biggest grip challenges in softball and baseball. Gorilla Gold solves both. Apply the towel to your hands or batting gloves before stepping into the box, and you get an immediate boost in grip security without the mess or hassle of traditional pine tar or rosin bags. The tackiness level is adjustable: light pressure for a subtle hold, firmer pressure for maximum grip.\n\nEach towel is reusable and typically lasts a month or more with regular use; occasional players have reported Gorilla Gold lasting months, even years. The all-natural resin formula dissolves within minutes from your hands and a few hours from equipment, leaving no sticky residue on your hands, gloves, or bats. Gorilla Gold is a clean, effective alternative to pine tar and rosin for players who want consistent grip performance game after game.",
    bulletPoints: [
      "Grip-enhancing towel with all-natural resin formula for a moisture-resistant tackified feel",
      "Sole NCAA, NFHS, and USA Softball-allowed drying agent for softball pitchers",
      "Allowed by NCAA, NFHS, USA Softball, ISC, and ISF for tournament play",
      "Designed for softball and baseball batters, pitchers, and fielders",
      "Clean alternative to pine tar and rosin bags with no messy residue",
      "Works on bare hands and batting gloves; adjustable tackiness based on pressure",
      "Reusable: one towel typically lasts a month or more with regular play",
      "All-natural resin dissolves within minutes from hands and a few hours from equipment",
      "Reliable grip control in rain, humidity, sweat, and all challenging conditions",
    ],
    searchKeywords: [
      "baseball grip aid",
      "softball grip towel",
      "bat grip aid",
      "baseball sweaty hands",
      "pine tar alternative baseball",
      "rosin alternative softball",
      "batting grip towel",
      "grip enhancing towel baseball",
      "wet weather batting grip",
      "softball tack towel",
      "best grip aid for baseball",
      "NCAA NFHS USA Softball approved drying agent",
      "clean grip aid for batters",
    ],
  },

  racquetSports: {
    // TODO: Tom — confirm Racquet Sports is a real upcoming product, then finalize copy and SKU.
    productName: "Gorilla Gold Racquet Sports Grip-Enhancing Towel",
    tagline: "The Feel For The Game",
    shortDescription:
      "Gorilla Gold Racquet Sports is a reusable grip-enhancing towel made for tennis, pickleball, squash, and padel players, with an all-natural resin formula that delivers a moisture-resistant tackified feel.",
    fullDescription:
      "Gorilla Gold Racquet Sports is a grip-enhancing towel made specifically for tennis, pickleball, squash, and padel players. The all-natural resin formula creates a moisture-resistant tackified feel on your dry hands or grip, giving you confident control through humid matches, hot tournaments, and long practice sessions.\n\nApply directly to dry bare hands or to a dry racquet or paddle grip during changeovers. The towel works on top of any existing overgrip or directly on the base grip. Adjustable tackiness lets you dial in the right level of grip for your conditions and personal feel.\n\nEach towel is reusable and typically lasts a month or more with regular use. The all-natural resin dissolves within minutes from your hands and a few hours from equipment, leaving no residue on your racquet, paddle, or overgrip.",
    bulletPoints: [
      "Grip-enhancing towel made for tennis, pickleball, squash, and padel",
      "All-natural resin formula creates a moisture-resistant tackified feel",
      "Apply to dry hands or grips; works on top of any overgrip or directly on the base grip",
      "Adjustable tackiness based on pressure applied",
      "Reusable: one towel typically lasts a month or more with regular play",
      "Resin dissolves within minutes from hands and a few hours from equipment, with no residue",
      "No restrictions on use in pickleball, tennis, or other racquet sport competitions",
    ],
    searchKeywords: [
      "racquet sports grip aid",
      "tennis grip aid",
      "pickleball grip aid",
      "squash grip aid",
      "padel grip aid",
      "tennis grip towel",
      "pickleball grip towel",
      "racquet grip enhancing towel",
      "humid match grip aid",
      "best grip aid for racquet sports",
    ],
  },
};

// Shared brand copy elements for use across all retail channels
export const sharedBrandCopy = {
  brandName: "Gorilla Gold",
  entityDefinition: "grip-enhancing towel",
  tagline: "The Feel For The Game",
  formulaDescription: "all-natural resin formula",
  keyAttribute: "moisture-resistant tackified feel",
  reusability:
    "Reusable: one towel typically lasts a month or more with regular use; occasional players have reported Gorilla Gold lasting months, even years",
  safetyStatement:
    "Made with an all-natural resin formula. Dissolves within minutes from your hands and a few hours from equipment, with no residue buildup.",
  competitionLegal:
    "USGA approved and R&A conforming for tournament play (Golf product). Allowed by NCAA, NFHS, USA Softball, ISC, and ISF (Softball/Baseball product).",
  endorsementHighlight:
    'Tested by Golf Digest in tournament conditions: "we had no problems in a downpour."',
  storeUrl: "https://store.gorillagold.com",
  contactEmail: "sales@gorillagold.com",
  contactPhone: "(818) 259-9437",
};
