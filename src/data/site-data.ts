export const PLATFORM_URL = "https://jobonic.io/en";

export const languages = ["EN", "TH", "中文", "FR", "DE"] as const;

export const corridors = [
  {
    slug: "africa",
    name: "Africa EN/FR",
    shortName: "Africa",
    description:
      "Access bilingual partners and service operators for English and French-speaking markets across Africa.",
    tags: ["EN/FR", "Market Entry", "SME Expansion"],
    theme: "teal",
    services: [
      "B2B lead generation and partner sourcing",
      "French and English localization",
      "Cross-border operations support",
    ],
  },
  {
    slug: "china",
    name: "China CN",
    shortName: "China",
    description:
      "Connect with China-ready operators for sourcing, trade documentation, and Mandarin-enabled commercial support.",
    tags: ["CN", "Sourcing", "Compliance"],
    theme: "amber",
    services: [
      "Supplier identification and vetting",
      "Mandarin-speaking liaison services",
      "Import-export documentation support",
    ],
  },
  {
    slug: "germany",
    name: "Germany DE",
    shortName: "Germany",
    description:
      "Build reliable DACH corridor operations with German-speaking professionals and institutional-grade business workflows.",
    tags: ["DE", "DACH", "Industrial Services"],
    theme: "stone",
    services: [
      "Commercial representation and outreach",
      "Technical documentation translation",
      "B2B procurement coordination",
    ],
  },
] as const;

export const trustFeatures = [
  {
    title: "Milestone escrow",
    description:
      "Jobonic holds client funds in escrow and releases payment only when each milestone is completed and accepted.",
  },
  {
    title: "Neutral arbitration",
    description:
      "When disputes happen, Jobonic acts as a neutral resolver with documented milestone evidence and fair outcomes.",
  },
  {
    title: "Cross-border safe",
    description:
      "Built for international service transactions with corridor-focused safeguards for payments, language, and delivery.",
  },
] as const;

export const partnerLogos = ["CCPIT", "Business France", "Germany Trade & Invest", "Zenichub"] as const;

export const businessCategories = [
  "Market development and partner acquisition",
  "Cross-border sourcing and procurement",
  "Localization, translation, and compliance support",
  "Commercial operations and corridor project management",
] as const;
