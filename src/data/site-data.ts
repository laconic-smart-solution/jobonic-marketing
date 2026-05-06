import type { Locale } from "@/lib/i18n";

/** Last-resort app entry when `NEXT_PUBLIC_PLATFORM_URL` and `NEXT_PUBLIC_DEV_PLATFORM_BASE` are unset. Override with `NEXT_PUBLIC_DEFAULT_PLATFORM_URL`. */
const defaultPlatformEntry =
  process.env.NEXT_PUBLIC_DEFAULT_PLATFORM_URL?.trim() || "https://jobonic.io/en";

/** Canonical entry URL for the main Jobonic app (e.g. Get Started). Set `NEXT_PUBLIC_PLATFORM_URL`; falls back to `NEXT_PUBLIC_DEV_PLATFORM_BASE` then default entry. */
export const PLATFORM_URL = (
  process.env.NEXT_PUBLIC_PLATFORM_URL?.trim() ||
  process.env.NEXT_PUBLIC_DEV_PLATFORM_BASE?.trim() ||
  defaultPlatformEntry
).replace(/\/$/, "");

function localeBaseFromRootUrl(url: string, locale: Locale): string {
  const normalized = url.replace(/\/$/, "");
  const withoutLocale = normalized.replace(/\/[a-z]{2}$/i, "");
  return `${withoutLocale}/${locale}`;
}

/** Base URL for the main Jobonic web app, matching the current marketing locale. */
export function platformLocaleBaseUrl(locale: Locale): string {
  const dev = process.env.NEXT_PUBLIC_DEV_PLATFORM_BASE?.trim();
  if (dev) {
    return localeBaseFromRootUrl(dev, locale);
  }
  const platform = process.env.NEXT_PUBLIC_PLATFORM_URL?.trim();
  if (platform) {
    return localeBaseFromRootUrl(platform, locale);
  }
  return localeBaseFromRootUrl(defaultPlatformEntry, locale);
}

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
