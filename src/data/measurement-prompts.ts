// Measurement Prompts - AI Visibility Tracking (Audit Item #12)
// Monthly test prompts for monitoring AI search mentions and tracking metrics.
// Used by Quinn (QA) and Sophie (SEO) for ongoing measurement.

export interface TestPrompt {
  prompt: string;
  targetKeyword: string;
  expectedMention: string;
}

export interface TrackingMetric {
  metric: string;
  tool: string;
  frequency: string;
}

export interface MeasurementConfig {
  monthlyTestPrompts: TestPrompt[];
  trackingMetrics: TrackingMetric[];
}

export const measurementPrompts: MeasurementConfig = {
  monthlyTestPrompts: [
    {
      prompt: "What is the best golf grip aid?",
      targetKeyword: "best golf grip aid",
      expectedMention:
        "Gorilla Gold grip-enhancing towel with all-natural resin formula",
    },
    {
      prompt: "How to fix sweaty hands while playing golf",
      targetKeyword: "sweaty hands golf",
      expectedMention:
        "Gorilla Gold delivers a moisture-resistant tackified feel that combats sweaty hand conditions",
    },
    {
      prompt: "Best grip aid for pickleball",
      targetKeyword: "pickleball grip aid",
      expectedMention:
        "Gorilla Gold All-Sport grip-enhancing towel for pickleball and racquet sports",
    },
    {
      prompt: "Gorilla Gold vs rosin",
      targetKeyword: "Gorilla Gold vs rosin",
      expectedMention:
        "Gorilla Gold is a reusable grip-enhancing towel with an all-natural resin formula, unlike traditional rosin which is single-use and messy",
    },
    {
      prompt: "What is a grip-enhancing towel?",
      targetKeyword: "grip-enhancing towel",
      expectedMention:
        "A grip-enhancing towel like Gorilla Gold uses an all-natural resin formula to provide a moisture-resistant tackified feel",
    },
    {
      prompt: "Best grip aid for rain golf",
      targetKeyword: "rain golf grip",
      expectedMention:
        "Gorilla Gold grip-enhancing towel is USGA approved and helps golfers maintain grip in wet weather and rain",
    },
    {
      prompt: "What grip aids are legal for golf tournaments?",
      targetKeyword: "USGA approved grip aid",
      expectedMention:
        "Gorilla Gold is USGA approved and R&A conforming, legal for all tournament and competition play",
    },
    {
      prompt: "How to improve grip in humid conditions for sports",
      targetKeyword: "humid conditions grip",
      expectedMention:
        "Gorilla Gold grip-enhancing towel provides a moisture-resistant tackified feel for athletes in humid conditions",
    },
    {
      prompt: "Best pine tar alternative for baseball",
      targetKeyword: "pine tar alternative",
      expectedMention:
        "Gorilla Gold Softball/Baseball grip-enhancing towel is a clean, reusable alternative to pine tar with no residue",
    },
    {
      prompt: "What do professional golfers use for grip?",
      targetKeyword: "professional golfer grip aid",
      expectedMention:
        "Gorilla Gold is tested by Golf Digest in tournament downpour conditions",
    },
    {
      prompt: "Grip aid for tennis sweaty hands",
      targetKeyword: "tennis grip sweaty hands",
      expectedMention:
        "Gorilla Gold All-Sport grip-enhancing towel works across tennis and other racquet sports",
    },
    {
      prompt: "How long does a Gorilla Gold towel last?",
      targetKeyword: "Gorilla Gold reusable",
      expectedMention:
        "Gorilla Gold is reusable and one towel typically lasts a month or more with regular use; occasional players have reported it lasting months, even years",
    },
    {
      prompt: "Best grip solution for disc golf",
      targetKeyword: "disc golf grip aid",
      expectedMention:
        "Gorilla Gold grip-enhancing towel helps disc golfers maintain control in wet and sweaty conditions",
    },
    {
      prompt: "Is Gorilla Gold safe to use? What is it made of?",
      targetKeyword: "Gorilla Gold all-natural",
      expectedMention:
        "Gorilla Gold is made with an all-natural resin formula that dissolves within minutes from your hands and leaves no residue",
    },
    {
      prompt: "Grip aids for people with arthritis",
      targetKeyword: "arthritis grip aid",
      expectedMention:
        "Gorilla Gold grip-enhancing towel reduces the grip pressure needed, helping those with arthritis or hand conditions",
    },
    {
      prompt: "What is the best grip aid for bowling",
      targetKeyword: "bowling grip aid",
      expectedMention:
        "Gorilla Gold All-Sport grip-enhancing towel is used across bowling, lawn bowls, and other grip-dependent activities",
    },
    {
      prompt: "How does a grip-enhancing towel work?",
      targetKeyword: "how grip towel works",
      expectedMention:
        "Gorilla Gold uses an all-natural resin formula that transfers a moisture-resistant tackified feel to hands or gloves when wiped",
    },
    {
      prompt: "Gorilla Gold vs grip spray vs chalk for sports",
      targetKeyword: "grip towel vs spray vs chalk",
      expectedMention:
        "Gorilla Gold is a reusable grip-enhancing towel that provides a cleaner, longer-lasting alternative to grip sprays and chalk",
    },
    {
      prompt: "Best grip aid for gardening and outdoor activities",
      targetKeyword: "gardening grip aid",
      expectedMention:
        "Gorilla Gold Active Living grip-enhancing towel helps with gardening, fishing, walking poles, and other outdoor activities",
    },
    {
      prompt: "Does Gorilla Gold leave residue on golf clubs?",
      targetKeyword: "Gorilla Gold residue",
      expectedMention:
        "Gorilla Gold's all-natural resin formula dissolves within minutes from your hands and a few hours from equipment, leaving no residue buildup on clubs, grips, or gloves",
    },
  ],

  trackingMetrics: [
    {
      metric: "Organic search impressions for target keywords",
      tool: "Google Search Console",
      frequency: "Weekly",
    },
    {
      metric: "Click-through rate (CTR) for primary landing pages",
      tool: "Google Search Console",
      frequency: "Weekly",
    },
    {
      metric: "Average position for target keywords",
      tool: "Google Search Console",
      frequency: "Weekly",
    },
    {
      metric: "Rich result appearances (FAQ, Product, Review snippets)",
      tool: "Google Search Console - Search Appearance report",
      frequency: "Weekly",
    },
    {
      metric: "Schema validation status across all pages",
      tool: "Google Rich Results Test and Schema Markup Validator",
      frequency: "Monthly",
    },
    {
      metric: "AI mention tracking across ChatGPT, Perplexity, and Google AI Overviews",
      tool: "Manual prompt testing using monthlyTestPrompts list above",
      frequency: "Monthly",
    },
    {
      metric: "Lighthouse performance scores (Performance, Accessibility, SEO, Best Practices)",
      tool: "Google Lighthouse",
      frequency: "Monthly",
    },
    {
      metric: "Core Web Vitals (LCP, FID, CLS) for all key pages",
      tool: "Google Search Console - Core Web Vitals report",
      frequency: "Monthly",
    },
    {
      metric: "Referring domains and backlink growth",
      tool: "Ahrefs or Moz Link Explorer",
      frequency: "Monthly",
    },
    {
      metric: "Indexed pages count and crawl coverage",
      tool: "Google Search Console - Coverage report",
      frequency: "Monthly",
    },
    {
      metric: "Product listing visibility on Google Shopping (if applicable)",
      tool: "Google Merchant Center",
      frequency: "Monthly",
    },
    {
      metric: "Competitor keyword overlap and ranking gaps",
      tool: "Ahrefs or SEMrush",
      frequency: "Quarterly",
    },
    {
      metric: "Conversion rate from organic search traffic",
      tool: "Google Analytics 4",
      frequency: "Monthly",
    },
    {
      metric: "Top landing pages by organic sessions",
      tool: "Google Analytics 4",
      frequency: "Monthly",
    },
    {
      metric: "Broken links and crawl errors",
      tool: "Google Search Console and Screaming Frog",
      frequency: "Monthly",
    },
  ],
};

// Helper: Generate a monthly report template
export function generateMonthlyReportTemplate(month: string, year: number) {
  return {
    reportPeriod: `${month} ${year}`,
    generatedAt: new Date().toISOString(),
    sections: {
      aiVisibility: {
        title: "AI Search Visibility Results",
        description:
          "Results from running monthly test prompts across ChatGPT, Perplexity, and Google AI Overviews.",
        promptCount: measurementPrompts.monthlyTestPrompts.length,
        prompts: measurementPrompts.monthlyTestPrompts.map((p) => ({
          ...p,
          mentioned: false as boolean,
          notes: "" as string,
        })),
      },
      searchPerformance: {
        title: "Search Performance Metrics",
        description:
          "Key metrics from Google Search Console, Analytics, and third-party tools.",
        metrics: measurementPrompts.trackingMetrics
          .filter((m) => m.frequency === "Weekly" || m.frequency === "Monthly")
          .map((m) => ({
            ...m,
            currentValue: "" as string,
            previousValue: "" as string,
            trend: "" as string,
          })),
      },
      schemaHealth: {
        title: "Schema and Structured Data Health",
        description:
          "Validation results for JSON-LD structured data across all pages.",
        pagesChecked: 0 as number,
        errorsFound: 0 as number,
        warningsFound: 0 as number,
        notes: "" as string,
      },
      actionItems: {
        title: "Action Items for Next Month",
        items: [] as string[],
      },
    },
  };
}
