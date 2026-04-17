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
      "Gorilla Gold Golf is a grip-enhancing towel designed specifically for golfers who need reliable grip confidence on every swing. Made with an all-natural resin formula, it delivers a moisture-resistant tackified feel that keeps your hands and gloves performing at their best, even in rain, humidity, and high-heat rounds.\n\nWhether you struggle with sweaty hands, play in unpredictable weather, or simply want more control without over-gripping, Gorilla Gold helps you maintain a relaxed, secure hold on the club. The towel works on bare hands and gloves alike, and the level of tackiness is adjustable based on how much pressure you apply. One towel lasts approximately one month with regular use (two to three rounds per week), making it a cost-effective addition to any golf bag.\n\nGorilla Gold is USGA approved and R&A conforming, so it is fully legal for tournament and competition play. The resin dissolves naturally within hours and leaves no residue buildup on grips or gloves. Endorsed by Hank Haney and tested by Golf Digest, Gorilla Gold has earned the trust of professionals and weekend players alike.",
    bulletPoints: [
      "Grip-enhancing towel with all-natural resin formula for a moisture-resistant tackified feel",
      "USGA approved and R&A conforming, legal for all tournament and competition play",
      "Works on bare hands and gloves; adjustable tackiness based on pressure applied",
      "Reusable: one towel lasts approximately one month with regular play (2-3 rounds per week)",
      "Ideal for sweaty hands, rain, humidity, and wet weather golf conditions",
      "Resin dissolves naturally within hours with no residue buildup on grips or gloves",
      "Endorsed by Hank Haney and tested by Golf Digest",
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
      "Gorilla Gold All-Sport is a reusable grip-enhancing towel with an all-natural resin formula that provides a moisture-resistant tackified feel for athletes across pickleball, tennis, basketball, football, and other grip-dependent sports.",
    fullDescription:
      "Gorilla Gold All-Sport is a versatile grip-enhancing towel built for athletes who depend on a secure hold to perform their best. Made with an all-natural resin formula, it delivers a moisture-resistant tackified feel that keeps hands and equipment grippy in hot, sweaty, and wet conditions across a wide range of sports.\n\nFrom pickleball paddles to tennis racquets, from footballs to basketballs, Gorilla Gold All-Sport is trusted by athletes in every grip-dependent activity. The towel works equally well on bare hands and gloves, and the tackiness level adjusts based on pressure. Whether you are battling humidity on the court or managing sweaty palms during competition, Gorilla Gold helps you stay in control without over-gripping.\n\nEach towel is reusable and lasts approximately one month with regular use. The all-natural resin dissolves within hours and leaves no residue on your hands, gloves, or equipment. Gorilla Gold All-Sport is the go-to grip solution for athletes who refuse to let conditions compromise their performance.",
    bulletPoints: [
      "Grip-enhancing towel with all-natural resin formula for a moisture-resistant tackified feel",
      "Designed for pickleball, tennis, basketball, football, rugby, and all grip-dependent sports",
      "Works on bare hands and gloves; adjustable tackiness based on pressure applied",
      "Reusable: one towel lasts approximately one month with regular use",
      "Combats sweaty hands, humidity, and wet conditions that compromise grip",
      "All-natural resin dissolves within hours with no residue on hands or equipment",
      "Trusted by competitive athletes and recreational players across multiple sports",
    ],
    searchKeywords: [
      "grip aid for sports",
      "pickleball grip towel",
      "tennis grip aid",
      "sweaty hands sports",
      "grip enhancing towel",
      "basketball grip aid",
      "football grip towel",
      "racquet sport grip aid",
      "all sport tack towel",
      "best grip aid for pickleball",
      "humidity grip solution sports",
      "reusable grip towel for athletes",
    ],
  },

  softballBaseball: {
    productName: "Gorilla Gold Softball/Baseball Grip-Enhancing Towel",
    tagline: "The Feel For The Game",
    shortDescription:
      "Gorilla Gold Softball/Baseball is a reusable grip-enhancing towel featuring an all-natural resin formula that provides a moisture-resistant tackified feel, giving batters and fielders reliable grip control in all weather conditions.",
    fullDescription:
      "Gorilla Gold Softball/Baseball is a grip-enhancing towel purpose-built for the diamond. Made with an all-natural resin formula, it delivers a moisture-resistant tackified feel that helps batters, pitchers, and fielders maintain a confident, controlled grip on bats, balls, and gloves, even when conditions get wet, humid, or slippery.\n\nSweaty hands and rain are two of the biggest grip challenges in softball and baseball. Gorilla Gold solves both. Apply the towel to your hands or batting gloves before stepping into the box, and you get an immediate boost in grip security without the mess or hassle of traditional pine tar or rosin bags. The tackiness level is adjustable: light pressure for a subtle hold, firmer pressure for maximum grip.\n\nEach towel is reusable and lasts approximately one month with regular use. The all-natural resin formula dissolves within hours, leaving no sticky residue on your hands, gloves, or equipment. Gorilla Gold is a clean, effective alternative to pine tar and rosin for players who want consistent grip performance game after game.",
    bulletPoints: [
      "Grip-enhancing towel with all-natural resin formula for a moisture-resistant tackified feel",
      "Designed specifically for softball and baseball batters, pitchers, and fielders",
      "Clean alternative to pine tar and rosin bags with no messy residue",
      "Works on bare hands and batting gloves; adjustable tackiness based on pressure",
      "Reusable: one towel lasts approximately one month with regular play",
      "All-natural resin dissolves within hours, leaving no buildup on bats or gloves",
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
      "clean grip aid for batters",
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
  reusability: "Reusable: one towel lasts approximately one month with regular use",
  safetyStatement:
    "Made with an all-natural resin formula. Dissolves within hours with no residue buildup.",
  competitionLegal:
    "USGA approved and R&A conforming for tournament play (Golf product).",
  endorsementHighlight:
    'Endorsed by Hank Haney: "Should be in every golfer\'s bag."',
  storeUrl: "https://store.gorillagold.com",
  contactEmail: "sales@gorillagold.com",
  contactPhone: "(818) 259-9437",
};
