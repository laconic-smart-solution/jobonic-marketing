export const locales = ["en", "th", "zh", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  th: "TH",
  zh: "中文",
  fr: "FR",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }
  return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export type SiteDictionary = {
  nav: {
    findWork: string;
    findTalent: string;
    corridors: string;
    forBusiness: string;
    pricing: string;
    about: string;
    getStarted: string;
    all: string;
    africa: string;
    china: string;
    germany: string;
    b2b: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    chips: string[];
  };
  sections: {
    corridorsTitle: string;
    corridorsSubtitle: string;
    trustTitle: string;
    businessTitle: string;
    businessDescription: string;
    businessCta: string;
    partnersTitle: string;
    bottomTitle: string;
    bottomCtas: string[];
  };
  pages: {
    aboutTitle: string;
    aboutDescription: string;
    businessTitle: string;
    businessDescription: string;
    pricingTitle: string;
    pricingDescription: string;
    bookDemo: string;
  };
  footer: {
    blurb: string;
    jobonic: string;
    corridors: string;
    forBusiness: string;
    legal: string;
    privacy: string;
    terms: string;
    trust: string;
  };
};

const en: SiteDictionary = {
  nav: {
    findWork: "Find Work",
    findTalent: "Find Talent",
    corridors: "Corridors",
    forBusiness: "For Business",
    pricing: "Pricing",
    about: "About",
    getStarted: "Get Started",
    all: "All",
    africa: "Africa",
    china: "China",
    germany: "Germany",
    b2b: "B2B",
  },
  hero: {
    eyebrow: "Thailand's global service marketplace",
    title: "Connect Thailand to Africa, China, Germany with payment guaranteed",
    subtitle:
      "Link Thailand-based professionals and SMEs to Africa (EN/FR), China (CN), and Germany (DE) through secure milestone contracts where Jobonic holds payment until work is done.",
    primaryCta: "Find Corridor Talent",
    secondaryCta: "Post a Service",
    chips: ["Africa EN/FR", "China CN", "Germany DE", "Thailand TH"],
  },
  sections: {
    corridorsTitle: "Three corridors. One platform.",
    corridorsSubtitle: "A corridor activation marketplace connecting Thailand to Africa, China, and Germany.",
    trustTitle: "Pay on delivery. Verified by Jobonic.",
    businessTitle: "Not just freelancers - companies too.",
    businessDescription:
      "Use B2B corridor contracts with escrow-backed milestones for agencies, consultancies, operators, and enterprise teams.",
    businessCta: "Learn about Jobonic for Business",
    partnersTitle: "Institutional corridor partners",
    bottomTitle: "Ready to connect Thailand to the world?",
    bottomCtas: ["Find Corridor Talent", "List a Service", "For Business"],
  },
  pages: {
    aboutTitle: "Corridor activation for global service trade",
    aboutDescription:
      "Jobonic is a corridor activation marketplace designed for trusted cross-border service execution.",
    businessTitle: "B2B corridor contracts for growing companies",
    businessDescription:
      "From sourcing to market expansion, Jobonic supports business-grade engagements with milestones and arbitration.",
    pricingTitle: "Pricing aligned with trust and delivery",
    pricingDescription: "Choose an engagement model that matches your transaction volume and complexity.",
    bookDemo: "Book a Demo",
  },
  footer: {
    blurb: "Corridor activation marketplace connecting Thailand to Africa, China, and Germany.",
    jobonic: "Jobonic",
    corridors: "Corridors",
    forBusiness: "For Business",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    trust: "Trust & Safety",
  },
};

export const dictionaries: Record<Locale, SiteDictionary> = {
  en,
  th: {
    ...en,
    nav: { ...en.nav, findWork: "หางาน", findTalent: "หาผู้ให้บริการ", forBusiness: "สำหรับธุรกิจ", about: "เกี่ยวกับ" },
    hero: {
      ...en.hero,
      eyebrow: "ตลาดบริการระดับโลกจากประเทศไทย",
      title: "เชื่อมไทยสู่อัฟริกา จีน และเยอรมนี พร้อมการชำระเงินที่รับประกัน",
      primaryCta: "ค้นหาผู้เชี่ยวชาญตามคอร์ริดอร์",
      secondaryCta: "ลงประกาศบริการ",
    },
    sections: { ...en.sections, corridorsTitle: "สามคอร์ริดอร์ หนึ่งแพลตฟอร์ม", partnersTitle: "พันธมิตรสถาบันตามคอร์ริดอร์" },
    pages: { ...en.pages, bookDemo: "จองเดโม" },
  },
  zh: {
    ...en,
    nav: { ...en.nav, findWork: "找工作", findTalent: "找人才", forBusiness: "企业服务", about: "关于" },
    hero: {
      ...en.hero,
      eyebrow: "泰国全球服务市场",
      title: "连接泰国与非洲、中国、德国，付款有保障",
      primaryCta: "寻找走廊人才",
      secondaryCta: "发布服务",
    },
    sections: { ...en.sections, corridorsTitle: "三大走廊，一个平台", partnersTitle: "机构走廊合作伙伴" },
    pages: { ...en.pages, bookDemo: "预约演示" },
  },
  fr: {
    ...en,
    nav: { ...en.nav, findWork: "Trouver du travail", findTalent: "Trouver des talents", forBusiness: "Entreprises", about: "A propos" },
    hero: {
      ...en.hero,
      eyebrow: "La place de marche mondiale de services de la Thailande",
      title: "Connectez la Thailande a l'Afrique, la Chine et l'Allemagne avec paiement garanti",
      primaryCta: "Trouver des talents corridor",
      secondaryCta: "Publier un service",
    },
    sections: { ...en.sections, corridorsTitle: "Trois corridors. Une plateforme." },
    pages: { ...en.pages, bookDemo: "Reserver une demo" },
  },
  de: {
    ...en,
    nav: { ...en.nav, findWork: "Arbeit finden", findTalent: "Talente finden", forBusiness: "Fur Unternehmen", about: "Uber uns" },
    hero: {
      ...en.hero,
      eyebrow: "Thailands globaler Service-Marktplatz",
      title: "Verbinden Sie Thailand mit Afrika, China und Deutschland mit garantierter Zahlung",
      primaryCta: "Corridor-Talente finden",
      secondaryCta: "Service einstellen",
    },
    sections: { ...en.sections, corridorsTitle: "Drei Korridore. Eine Plattform." },
    pages: { ...en.pages, bookDemo: "Demo buchen" },
  },
};

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
