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

type CorridorSlug = "africa" | "china" | "germany";

type CorridorContent = {
  slug: CorridorSlug;
  name: string;
  shortName: string;
  description: string;
  tags: string[];
  services: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroCtaLabel: string;
  pageCtaLabel: string;
};

export type SiteDictionary = {
  brand: string;
  metadata: {
    siteTitle: string;
    siteDescription: string;
  };
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
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    chips: string[];
    mapCaption: string;
    socialProof: string;
    stats: { value: string; label: string }[];
    visual: {
      candidateMatch: string;
      candidateName: string;
      candidateRole: string;
      milestonePayment: string;
      escrow: string;
      pending: string;
      phaseOne: string;
      released: string;
      progress: string;
      corridorFlow: string;
      trustLayer: string;
      escrowArbitration: string;
      safeContracts: string;
      skills: string[];
      route: string[];
    };
  };
  sections: {
    corridorsEyebrow: string;
    corridorsTitle: string;
    corridorsSubtitle: string;
    explorePrefix: string;
    trustEyebrow: string;
    trustTitle: string;
    trustSubtitle: string;
    trustFeatures: { title: string; description: string }[];
    benefitsEyebrow: string;
    benefitsTitle: string;
    benefitsSubtitle: string;
    benefits: { title: string; description: string }[];
    howEyebrow: string;
    howTitle: string;
    howSubtitle: string;
    howSteps: { title: string; description: string }[];
    businessTitle: string;
    businessDescription: string;
    businessCta: string;
    businessCategories: string[];
    partnersEyebrow: string;
    partnersTitle: string;
    partnersSubtitle: string;
    testimonialQuote: string;
    testimonialAuthor: string;
    testimonialRole: string;
    bottomTitle: string;
    bottomSubtitle: string;
    bottomCtas: string[];
  };
  pages: {
    aboutTitle: string;
    aboutDescription: string;
    aboutBody: string;
    businessTitle: string;
    businessDescription: string;
    businessSectionTitle: string;
    businessSectionDescription: string;
    businessCardDescription: string;
    pricingTitle: string;
    pricingDescription: string;
    pricingPlans: { title: string; details: string }[];
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
    b2bContracts: string;
    bookDemo: string;
    enterpriseEscrow: string;
    copyright: string;
  };
  partners: { key: string; name: string }[];
  corridors: Record<CorridorSlug, CorridorContent>;
};

const en: SiteDictionary = {
  brand: "Jobonic",
  metadata: {
    siteTitle: "Jobonic Corridors",
    siteDescription: "A corridor activation marketplace connecting Thailand to Africa, China, and Germany.",
  },
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
  },
  hero: {
    eyebrow: "Thailand's global service marketplace",
    title: "Cross-border work with payments you can trust",
    subtitle:
      "Hire verified talent or find corridor-aligned projects across Africa, China, and Germany - milestones, escrow, and neutral dispute support built in.",
    primaryCta: "Hire talent",
    secondaryCta: "Find work",
    chips: ["Africa EN/FR", "China CN", "Germany DE", "Thailand TH"],
    mapCaption: "Corridor coverage: Africa - China - Germany",
    socialProof: "Used by teams hiring and delivering across corridors",
    stats: [
      { value: "3", label: "Active corridors" },
      { value: "100%", label: "Milestone-gated payouts" },
      { value: "24/7", label: "Platform access" },
    ],
    visual: {
      candidateMatch: "Candidate Match",
      candidateName: "Nadine M.",
      candidateRole: "B2B Expansion Specialist",
      milestonePayment: "Milestone Payment",
      escrow: "Escrow",
      pending: "Pending",
      phaseOne: "Phase 1",
      released: "Released",
      progress: "Project progress",
      corridorFlow: "Corridor Flow",
      trustLayer: "Trust Layer",
      escrowArbitration: "Escrow + Arbitration",
      safeContracts: "Cross-border safe contracts",
      skills: ["EN/FR", "Trade Ops", "Thailand -> Africa"],
      route: ["Thailand", "Germany", "Africa"],
    },
  },
  sections: {
    corridorsEyebrow: "Corridors",
    corridorsTitle: "Corridors built for how you actually work",
    corridorsSubtitle:
      "Dedicated playbooks for Africa, China, and Germany - so language, compliance, and delivery expectations match each market.",
    explorePrefix: "Explore",
    trustEyebrow: "Platform",
    trustTitle: "Everything you need to ship with confidence",
    trustSubtitle: "Escrow, milestones, and fair resolution - without losing momentum on cross-border deals.",
    trustFeatures: [
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
    ],
    benefitsEyebrow: "Benefits",
    benefitsTitle: "Why teams choose Jobonic",
    benefitsSubtitle: "Less back-and-forth, fewer payment surprises, and a clearer path from brief to done.",
    benefits: [
      {
        title: "Escrow-backed milestones",
        description: "Funds stay protected until deliverables are accepted - clients reduce risk, pros get predictable cash flow.",
      },
      {
        title: "Corridor-native matching",
        description: "Filters and workflows tuned for EN/FR, CN, and DE markets - not generic job board noise.",
      },
      {
        title: "Neutral arbitration",
        description: "If something goes wrong, Jobonic reviews milestone evidence and helps reach a fair outcome.",
      },
      {
        title: "B2B-ready contracts",
        description: "Engage agencies, operators, and SMEs with terms that scale beyond one-off gigs.",
      },
    ],
    howEyebrow: "Process",
    howTitle: "How it works",
    howSubtitle: "From first brief to final payout - in four straightforward steps.",
    howSteps: [
      {
        title: "Post or discover",
        description: "Publish a scoped need or browse corridor talent with clear skills and regions.",
      },
      {
        title: "Agree milestones",
        description: "Split work into checkpoints everyone signs off on before money moves.",
      },
      {
        title: "Work in escrow",
        description: "Jobonic holds client funds securely while delivery progresses.",
      },
      {
        title: "Release & review",
        description: "Approve completion, release payment, and build your on-platform reputation.",
      },
    ],
    businessTitle: "Built for companies, not just solo freelancers",
    businessDescription:
      "Run retainers, SOWs, and multi-phase programs with the same milestone and escrow backbone your finance team expects.",
    businessCta: "Explore Jobonic for Business",
    businessCategories: [
      "Market research contracts",
      "Trade agent retainers",
      "Logistics coordination",
      "Business development",
      "Supplier audit",
      "ASEAN market entry coordination",
    ],
    partnersEyebrow: "Social proof",
    partnersTitle: "Trusted by operators and institutions",
    partnersSubtitle: "Corridor partners and programs aligned with how Jobonic routes work across regions.",
    testimonialQuote:
      "Milestone escrow gave our clients confidence to expand into two new corridors without changing how we invoice.",
    testimonialAuthor: "Operations lead",
    testimonialRole: "B2B services firm, Bangkok",
    bottomTitle: "Start hiring - or find your next corridor project",
    bottomSubtitle: "Create a free account and launch your first milestone-backed engagement in minutes.",
    bottomCtas: ["Hire talent", "Find work", "For Business"],
  },
  pages: {
    aboutTitle: "Corridor activation for global service trade",
    aboutDescription: "Jobonic is a corridor activation marketplace designed for trusted cross-border service execution.",
    aboutBody:
      "Jobonic combines matching, escrow-backed milestones, and corridor-focused operations to support trusted international execution.",
    businessTitle: "B2B corridor contracts for growing companies",
    businessDescription:
      "From sourcing to market expansion, Jobonic supports business-grade engagements with milestones and arbitration.",
    businessSectionTitle: "Designed for enterprise and SME teams",
    businessSectionDescription:
      "Run repeatable B2B operations through a corridor-ready marketplace model with escrow and arbitration.",
    businessCardDescription:
      "Structured contracts, verified milestones, and delivery transparency for cross-border collaboration.",
    pricingTitle: "Pricing aligned with trust and delivery",
    pricingDescription: "Choose an engagement model that matches your transaction volume and complexity.",
    pricingPlans: [
      { title: "Starter", details: "For first-time corridor projects and pilot contracts." },
      { title: "Growth", details: "For recurring cross-border service buyers and teams." },
      { title: "Business", details: "For larger organizations with multi-country needs." },
    ],
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
    b2bContracts: "B2B Contracts",
    bookDemo: "Book a Demo",
    enterpriseEscrow: "Enterprise Escrow",
    copyright: "All rights reserved.",
  },
  partners: [
    { key: "ftcc", name: "Franco-Thai Chamber of Commerce" },
    { key: "ccpit", name: "China Council for the Promotion of International Trade" },
    { key: "business-france", name: "Business France" },
    { key: "gtai", name: "Germany Trade & Invest" },
    { key: "alliance", name: "Alliance Francaise" },
    { key: "zenichub", name: "Zenichub" },
  ],
  corridors: {
    africa: {
      slug: "africa",
      name: "Africa EN/FR",
      shortName: "Africa",
      description:
        "Access bilingual partners and service operators for English and French-speaking markets across Africa.",
      tags: ["EN/FR", "Market Entry", "SME Expansion"],
      services: [
        "B2B lead generation and partner sourcing",
        "French and English localization",
        "Cross-border operations support",
      ],
      heroEyebrow: "Africa Corridor",
      heroTitle: "Thailand to Africa service corridor",
      heroDescription:
        "Launch and manage services across English and French-speaking African markets with trusted milestone delivery.",
      heroCtaLabel: "Find Corridor Talent",
      pageCtaLabel: "Post an Africa Service Need",
    },
    china: {
      slug: "china",
      name: "China CN",
      shortName: "China",
      description:
        "Connect with China-ready operators for sourcing, trade documentation, and Mandarin-enabled commercial support.",
      tags: ["CN", "Sourcing", "Compliance"],
      services: [
        "Supplier identification and vetting",
        "Mandarin-speaking liaison services",
        "Import-export documentation support",
      ],
      heroEyebrow: "China Corridor",
      heroTitle: "Thailand to China service corridor",
      heroDescription:
        "Bridge Thai SMEs and operators to China with Mandarin-enabled support and secure contract milestones.",
      heroCtaLabel: "Find Corridor Talent",
      pageCtaLabel: "Post a China Service Need",
    },
    germany: {
      slug: "germany",
      name: "Germany DE",
      shortName: "Germany",
      description:
        "Build reliable DACH corridor operations with German-speaking professionals and institutional-grade business workflows.",
      tags: ["DE", "DACH", "Industrial Services"],
      services: [
        "Commercial representation and outreach",
        "Technical documentation translation",
        "B2B procurement coordination",
      ],
      heroEyebrow: "Germany Corridor",
      heroTitle: "Thailand to Germany service corridor",
      heroDescription:
        "Deliver professional cross-border services for DACH markets with trusted execution and payment certainty.",
      heroCtaLabel: "Find Corridor Talent",
      pageCtaLabel: "Post a Germany Service Need",
    },
  },
};

export const dictionaries: Record<Locale, SiteDictionary> = {
  en,
  th: {
    ...en,
    metadata: {
      siteTitle: "Jobonic คอร์ริดอร์",
      siteDescription: "แพลตฟอร์มคอร์ริดอร์ที่เชื่อมไทยกับแอฟริกา จีน และเยอรมนี",
    },
    nav: {
      ...en.nav,
      findWork: "หางาน",
      findTalent: "หาผู้ให้บริการ",
      corridors: "คอร์ริดอร์",
      forBusiness: "สำหรับธุรกิจ",
      pricing: "ราคา",
      about: "เกี่ยวกับ",
      getStarted: "เริ่มต้น",
      all: "ทั้งหมด",
    },
    hero: {
      ...en.hero,
      eyebrow: "ตลาดบริการระดับโลกจากประเทศไทย",
      title: "ทำงานข้ามพรมแดนอย่างมั่นใจ พร้อมระบบชำระเงินที่เชื่อถือได้",
      subtitle:
        "จ้างผู้เชี่ยวชาญที่ผ่านการตรวจสอบ หรือค้นหาโปรเจกต์ตามคอร์ริดอร์ในแอฟริกา จีน และเยอรมนี พร้อมไมล์สโตน เอสโครว์ และระบบไกล่เกลี่ย",
      primaryCta: "ค้นหาผู้ให้บริการ",
      secondaryCta: "ค้นหางาน",
      socialProof: "ทีมงานข้ามประเทศเลือกใช้ Jobonic",
      stats: [
        { value: "3", label: "คอร์ริดอร์ที่เปิดใช้งาน" },
        { value: "100%", label: "จ่ายตามไมล์สโตน" },
        { value: "24/7", label: "เข้าถึงแพลตฟอร์มได้ตลอด" },
      ],
      visual: {
        ...en.hero.visual,
        candidateMatch: "ผู้สมัครที่ตรงงาน",
        candidateRole: "ผู้เชี่ยวชาญขยายตลาด B2B",
        milestonePayment: "สถานะการชำระเงิน",
        escrow: "เอสโครว์",
        pending: "รอดำเนินการ",
        phaseOne: "เฟส 1",
        released: "ปล่อยชำระแล้ว",
        progress: "ความคืบหน้าโครงการ",
        corridorFlow: "เส้นทางคอร์ริดอร์",
        trustLayer: "ชั้นความเชื่อมั่น",
        escrowArbitration: "เอสโครว์ + ไกล่เกลี่ย",
        safeContracts: "สัญญาข้ามประเทศที่ปลอดภัย",
      },
    },
    sections: {
      ...en.sections,
      corridorsEyebrow: "คอร์ริดอร์",
      corridorsTitle: "คอร์ริดอร์ที่ออกแบบเพื่อการทำงานจริง",
      corridorsSubtitle: "เพลย์บุ๊กเฉพาะสำหรับแอฟริกา จีน และเยอรมนี เพื่อให้ภาษา กฎระเบียบ และการส่งมอบตรงตลาด",
      explorePrefix: "ดู",
      trustEyebrow: "แพลตฟอร์ม",
      trustTitle: "ทุกอย่างที่ต้องมีเพื่อส่งมอบงานอย่างมั่นใจ",
      trustSubtitle: "เอสโครว์ ไมล์สโตน และการไกล่เกลี่ยที่เป็นธรรม สำหรับดีลข้ามประเทศ",
      businessTitle: "ไม่ใช่แค่ฟรีแลนซ์ แต่รองรับบริษัทด้วย",
      businessDescription: "ทำรีเทนเนอร์ SOW และโปรแกรมหลายเฟส ด้วยโครงสร้างเอสโครว์ที่ทีมการเงินมั่นใจ",
      businessCta: "ดู Jobonic สำหรับธุรกิจ",
      partnersEyebrow: "ความน่าเชื่อถือ",
      partnersTitle: "ได้รับความไว้วางใจจากผู้ประกอบการและสถาบัน",
      partnersSubtitle: "พาร์ทเนอร์ตามคอร์ริดอร์ที่สนับสนุนการทำงานข้ามภูมิภาคบน Jobonic",
      bottomTitle: "เริ่มจ้างงาน หรือค้นหาโปรเจกต์คอร์ริดอร์ถัดไป",
      bottomSubtitle: "สมัครฟรีและเริ่มงานที่มีเอสโครว์คุ้มครองได้ในไม่กี่นาที",
      bottomCtas: ["จ้างผู้ให้บริการ", "ค้นหางาน", "สำหรับธุรกิจ"],
      businessCategories: [
        "สัญญาวิจัยตลาด",
        "รีเทนเนอร์ตัวแทนการค้า",
        "การประสานงานโลจิสติกส์",
        "พัฒนาธุรกิจ",
        "ตรวจประเมินซัพพลายเออร์",
        "ประสานงานเข้าสู่ตลาดอาเซียน",
      ],
    },
    pages: {
      ...en.pages,
      aboutTitle: "คอร์ริดอร์สำหรับการค้าบริการระดับโลก",
      aboutDescription: "Jobonic คือแพลตฟอร์มคอร์ริดอร์สำหรับการทำงานบริการข้ามประเทศอย่างน่าเชื่อถือ",
      aboutBody: "Jobonic ผสานการแมตช์งาน เอสโครว์ตามไมล์สโตน และระบบปฏิบัติการตามคอร์ริดอร์ เพื่อการทำงานข้ามประเทศที่มั่นใจ",
      businessTitle: "สัญญา B2B ตามคอร์ริดอร์สำหรับบริษัทที่กำลังเติบโต",
      businessDescription: "ตั้งแต่การจัดหาไปจนถึงการขยายตลาด Jobonic รองรับการทำงานธุรกิจด้วยไมล์สโตนและการไกล่เกลี่ย",
      businessSectionTitle: "ออกแบบเพื่อทีมองค์กรและ SME",
      businessSectionDescription: "ดำเนินงาน B2B แบบทำซ้ำได้ด้วยโมเดลมาร์เก็ตเพลสที่รองรับคอร์ริดอร์พร้อมเอสโครว์",
      businessCardDescription: "สัญญาชัดเจน ไมล์สโตนตรวจสอบได้ และการส่งมอบโปร่งใสสำหรับความร่วมมือข้ามประเทศ",
      pricingTitle: "ราคาออกแบบเพื่อความเชื่อมั่นและการส่งมอบ",
      pricingDescription: "เลือกโมเดลการใช้งานที่เหมาะกับปริมาณธุรกรรมและความซับซ้อนของงาน",
      pricingPlans: [
        { title: "เริ่มต้น", details: "สำหรับโปรเจกต์คอร์ริดอร์ครั้งแรกและการทดลองใช้งาน" },
        { title: "เติบโต", details: "สำหรับทีมที่ทำธุรกรรมบริการข้ามประเทศต่อเนื่อง" },
        { title: "ธุรกิจ", details: "สำหรับองค์กรที่มีความต้องการหลายประเทศ" },
      ],
      bookDemo: "จองเดโม",
    },
    footer: {
      ...en.footer,
      corridors: "คอร์ริดอร์",
      forBusiness: "สำหรับธุรกิจ",
      legal: "กฎหมาย",
      privacy: "ความเป็นส่วนตัว",
      terms: "ข้อกำหนด",
      trust: "ความปลอดภัย",
      b2bContracts: "สัญญา B2B",
      bookDemo: "จองเดโม",
      enterpriseEscrow: "เอสโครว์สำหรับองค์กร",
      copyright: "สงวนลิขสิทธิ์",
    },
    corridors: {
      ...en.corridors,
      africa: {
        ...en.corridors.africa,
        heroEyebrow: "คอร์ริดอร์แอฟริกา",
        heroTitle: "คอร์ริดอร์บริการ ไทย-แอฟริกา",
        heroDescription: "ขยายบริการสู่ตลาดแอฟริกาที่ใช้ภาษาอังกฤษและฝรั่งเศส ด้วยการส่งมอบแบบไมล์สโตน",
        heroCtaLabel: "ค้นหาผู้ให้บริการตามคอร์ริดอร์",
        pageCtaLabel: "โพสต์ความต้องการบริการแอฟริกา",
      },
      china: {
        ...en.corridors.china,
        heroEyebrow: "คอร์ริดอร์จีน",
        heroTitle: "คอร์ริดอร์บริการ ไทย-จีน",
        heroDescription: "เชื่อมผู้ประกอบการไทยกับตลาดจีนด้วยการสนับสนุนภาษาจีนและสัญญาที่ปลอดภัย",
        heroCtaLabel: "ค้นหาผู้ให้บริการตามคอร์ริดอร์",
        pageCtaLabel: "โพสต์ความต้องการบริการจีน",
      },
      germany: {
        ...en.corridors.germany,
        heroEyebrow: "คอร์ริดอร์เยอรมนี",
        heroTitle: "คอร์ริดอร์บริการ ไทย-เยอรมนี",
        heroDescription: "ส่งมอบบริการข้ามพรมแดนสู่ตลาด DACH ด้วยความเชื่อมั่นด้านการชำระเงิน",
        heroCtaLabel: "ค้นหาผู้ให้บริการตามคอร์ริดอร์",
        pageCtaLabel: "โพสต์ความต้องการบริการเยอรมนี",
      },
    },
  },
  zh: {
    ...en,
    metadata: {
      siteTitle: "Jobonic 走廊",
      siteDescription: "连接泰国、非洲、中国和德国的跨境服务市场",
    },
    nav: {
      ...en.nav,
      findWork: "找工作",
      findTalent: "找人才",
      corridors: "走廊",
      forBusiness: "企业",
      pricing: "价格",
      about: "关于",
      getStarted: "开始使用",
      all: "全部",
    },
    hero: {
      ...en.hero,
      eyebrow: "泰国全球服务市场",
      title: "跨境合作更安心，支付安全有保障",
      subtitle: "在非洲、中国和德国走廊中招聘认证人才或寻找项目，支持里程碑、托管和中立仲裁。",
      primaryCta: "雇佣人才",
      secondaryCta: "寻找工作",
      socialProof: "跨境团队都在使用 Jobonic",
      stats: [
        { value: "3", label: "活跃走廊" },
        { value: "100%", label: "按里程碑放款" },
        { value: "24/7", label: "平台可用" },
      ],
      visual: {
        ...en.hero.visual,
        candidateMatch: "候选人匹配",
        candidateRole: "B2B 增长专家",
        milestonePayment: "里程碑付款",
        escrow: "托管",
        pending: "待处理",
        phaseOne: "阶段 1",
        released: "已释放",
        progress: "项目进度",
        corridorFlow: "走廊流程",
        trustLayer: "信任层",
        escrowArbitration: "托管 + 仲裁",
        safeContracts: "跨境安全合同",
      },
    },
    sections: {
      ...en.sections,
      corridorsEyebrow: "走廊",
      corridorsTitle: "为真实业务打造的走廊",
      corridorsSubtitle: "针对非洲、中国和德国的专属工作流，让语言、合规和交付更匹配市场。",
      explorePrefix: "查看",
      trustEyebrow: "平台",
      trustTitle: "跨境交付所需的一切",
      trustSubtitle: "托管、里程碑和公平仲裁，保障跨境合作效率。",
      businessTitle: "不仅是自由职业者，也适用于企业",
      businessDescription: "支持长期合作、SOW 和多阶段项目，满足企业财务控制要求。",
      businessCta: "了解 Jobonic 企业版",
      partnersEyebrow: "可信背书",
      partnersTitle: "受到运营方与机构信赖",
      partnersSubtitle: "与 Jobonic 区域走廊模型一致的合作伙伴网络。",
      bottomTitle: "开始招聘，或寻找下一个走廊项目",
      bottomSubtitle: "免费创建账号，几分钟内开启首个里程碑托管项目。",
      bottomCtas: ["雇佣人才", "找工作", "企业服务"],
      businessCategories: ["市场调研合同", "贸易代理服务", "物流协调", "商务拓展", "供应商审计", "东盟市场进入协调"],
    },
    pages: {
      ...en.pages,
      aboutTitle: "面向全球服务贸易的走廊激活",
      aboutDescription: "Jobonic 是专为可信跨境服务执行打造的走廊市场。",
      aboutBody: "Jobonic 将人才匹配、里程碑托管和走廊化运营结合，帮助团队稳健完成国际协作。",
      businessTitle: "适合成长型公司的 B2B 走廊合同",
      businessDescription: "从采购到市场拓展，Jobonic 通过里程碑与仲裁支持企业级合作。",
      businessSectionTitle: "为企业与中小团队而设计",
      businessSectionDescription: "通过走廊化市场模型，执行可复制的 B2B 跨境流程。",
      businessCardDescription: "结构化合同、可验证里程碑和透明交付，支持跨境协作。",
      pricingTitle: "为信任与交付而设计的价格",
      pricingDescription: "选择最匹配交易规模和复杂度的方案。",
      pricingPlans: [
        { title: "基础", details: "适合首次走廊项目与试点合作。" },
        { title: "成长", details: "适合持续进行跨境采购的团队。" },
        { title: "企业", details: "适合多国家业务需求的大型组织。" },
      ],
      bookDemo: "预约演示",
    },
    footer: {
      ...en.footer,
      corridors: "走廊",
      forBusiness: "企业",
      legal: "法律",
      privacy: "隐私",
      terms: "条款",
      trust: "信任与安全",
      b2bContracts: "B2B 合同",
      bookDemo: "预约演示",
      enterpriseEscrow: "企业托管",
      copyright: "版权所有",
    },
  },
  fr: {
    ...en,
    metadata: {
      siteTitle: "Jobonic Corridors",
      siteDescription: "Marketplace de services reliant la Thailande, l'Afrique, la Chine et l'Allemagne.",
    },
    nav: {
      ...en.nav,
      findWork: "Trouver du travail",
      findTalent: "Trouver des talents",
      corridors: "Corridors",
      forBusiness: "Pour les entreprises",
      pricing: "Tarifs",
      about: "A propos",
      getStarted: "Commencer",
      all: "Tous",
    },
    hero: {
      ...en.hero,
      eyebrow: "Marketplace mondial de services de la Thailande",
      title: "Travail transfrontalier avec paiements de confiance",
      subtitle:
        "Recrutez des talents verifies ou trouvez des projets corridor en Afrique, Chine et Allemagne avec jalons, escrow et arbitrage.",
      primaryCta: "Recruter des talents",
      secondaryCta: "Trouver du travail",
      socialProof: "Utilise par des equipes operant sur plusieurs corridors",
      visual: {
        ...en.hero.visual,
        candidateMatch: "Candidat correspondant",
        candidateRole: "Specialiste expansion B2B",
        milestonePayment: "Paiement par jalon",
        pending: "En attente",
        phaseOne: "Phase 1",
        released: "Libere",
        progress: "Progression du projet",
        corridorFlow: "Flux corridor",
        trustLayer: "Couche de confiance",
        escrowArbitration: "Escrow + Arbitrage",
        safeContracts: "Contrats transfrontaliers securises",
      },
    },
    sections: {
      ...en.sections,
      corridorsEyebrow: "Corridors",
      corridorsTitle: "Des corridors concus pour le travail reel",
      corridorsSubtitle:
        "Playbooks dedies pour l'Afrique, la Chine et l'Allemagne afin d'aligner langue, conformite et livraison.",
      explorePrefix: "Explorer",
      trustEyebrow: "Plateforme",
      trustTitle: "Tout pour livrer en toute confiance",
      trustSubtitle: "Escrow, jalons et resolution equitable pour accelerer les accords transfrontaliers.",
      businessTitle: "Pas seulement des freelances - aussi des entreprises",
      businessDescription: "Gerez retainer, SOW et programmes multi-phases avec une structure escrow solide.",
      businessCta: "Decouvrir Jobonic pour les entreprises",
      partnersEyebrow: "Preuve sociale",
      partnersTitle: "Fait confiance par les operateurs et institutions",
      partnersSubtitle: "Partenaires corridor aligns avec le modele Jobonic.",
      bottomTitle: "Commencez a recruter - ou trouvez votre prochain projet corridor",
      bottomSubtitle: "Creez un compte gratuit et lancez votre premier engagement en quelques minutes.",
      bottomCtas: ["Recruter", "Trouver du travail", "Pour les entreprises"],
      businessCategories: [
        "Contrats d'etude de marche",
        "Retainers d'agents commerciaux",
        "Coordination logistique",
        "Developpement commercial",
        "Audit fournisseur",
        "Coordination entree marche ASEAN",
      ],
    },
    pages: {
      ...en.pages,
      aboutTitle: "Activation de corridors pour le commerce mondial des services",
      aboutDescription: "Jobonic est une marketplace corridor pour une execution transfrontaliere fiable.",
      aboutBody:
        "Jobonic combine matching, escrow par jalons et operations corridor pour des collaborations internationales fiables.",
      businessTitle: "Contrats corridor B2B pour entreprises en croissance",
      businessDescription: "De l'approvisionnement a l'expansion, Jobonic prend en charge les engagements business avec arbitrage.",
      businessSectionTitle: "Concu pour les equipes entreprise et PME",
      businessSectionDescription: "Executez des operations B2B repetables via une marketplace orientee corridor.",
      businessCardDescription: "Contrats structures, jalons verifies et livraison transparente pour la collaboration transfrontaliere.",
      pricingTitle: "Tarifs alignes sur la confiance et la livraison",
      pricingDescription: "Choisissez le modele adapte a votre volume transactionnel.",
      pricingPlans: [
        { title: "Starter", details: "Pour les premiers projets corridor et pilotes." },
        { title: "Growth", details: "Pour les equipes avec besoins transfrontaliers recurrents." },
        { title: "Business", details: "Pour les organisations operant sur plusieurs pays." },
      ],
      bookDemo: "Reserver une demo",
    },
    footer: {
      ...en.footer,
      forBusiness: "Pour les entreprises",
      legal: "Juridique",
      privacy: "Confidentialite",
      terms: "Conditions",
      trust: "Confiance & Securite",
      b2bContracts: "Contrats B2B",
      bookDemo: "Reserver une demo",
      enterpriseEscrow: "Escrow entreprise",
      copyright: "Tous droits reserves",
    },
  },
  de: {
    ...en,
    metadata: {
      siteTitle: "Jobonic Korridore",
      siteDescription: "Service-Marktplatz zwischen Thailand, Afrika, China und Deutschland.",
    },
    nav: {
      ...en.nav,
      findWork: "Arbeit finden",
      findTalent: "Talente finden",
      corridors: "Korridore",
      forBusiness: "Fur Unternehmen",
      pricing: "Preise",
      about: "Uber uns",
      getStarted: "Loslegen",
      all: "Alle",
    },
    hero: {
      ...en.hero,
      eyebrow: "Thailands globaler Service-Marktplatz",
      title: "Grenzubergreifende Arbeit mit sicheren Zahlungen",
      subtitle:
        "Finden Sie geprufte Talente oder Projekte in Afrika, China und Deutschland - mit Meilensteinen, Escrow und neutraler Schlichtung.",
      primaryCta: "Talente einstellen",
      secondaryCta: "Arbeit finden",
      socialProof: "Genutzt von Teams in mehreren Korridoren",
      visual: {
        ...en.hero.visual,
        candidateMatch: "Kandidat-Match",
        candidateRole: "B2B-Expansion Spezialistin",
        milestonePayment: "Meilenstein-Zahlung",
        pending: "Ausstehend",
        phaseOne: "Phase 1",
        released: "Freigegeben",
        progress: "Projektfortschritt",
        corridorFlow: "Korridor-Fluss",
        trustLayer: "Vertrauensebene",
        escrowArbitration: "Escrow + Schlichtung",
        safeContracts: "Sichere grenzubergreifende Vertrage",
      },
    },
    sections: {
      ...en.sections,
      corridorsEyebrow: "Korridore",
      corridorsTitle: "Korridore fur echte Arbeitsablaufe",
      corridorsSubtitle:
        "Spezielle Playbooks fur Afrika, China und Deutschland - passend zu Sprache, Compliance und Lieferung.",
      explorePrefix: "Entdecken",
      trustEyebrow: "Plattform",
      trustTitle: "Alles fur sichere Lieferung",
      trustSubtitle: "Escrow, Meilensteine und faire Schlichtung fur grenzubergreifende Projekte.",
      businessTitle: "Nicht nur Freelancer - auch fur Unternehmen",
      businessDescription: "Verwalten Sie Retainer, SOWs und mehrphasige Programme mit robustem Escrow.",
      businessCta: "Jobonic fur Unternehmen entdecken",
      partnersEyebrow: "Social Proof",
      partnersTitle: "Vertrauen von Betreibern und Institutionen",
      partnersSubtitle: "Korridor-Partner im Einklang mit dem Jobonic-Modell.",
      bottomTitle: "Jetzt einstellen - oder Ihr nachstes Korridorprojekt finden",
      bottomSubtitle: "Erstellen Sie ein kostenloses Konto und starten Sie in Minuten.",
      bottomCtas: ["Talente einstellen", "Arbeit finden", "Fur Unternehmen"],
      businessCategories: [
        "Marktforschungs-Vertrage",
        "Handelsagent-Retainer",
        "Logistikkoordination",
        "Business Development",
        "Lieferantenaudit",
        "ASEAN-Markteintrittskoordination",
      ],
    },
    pages: {
      ...en.pages,
      aboutTitle: "Korridor-Aktivierung fur globalen Servicehandel",
      aboutDescription: "Jobonic ist ein Korridor-Marktplatz fur vertrauenswurdige grenzubergreifende Umsetzung.",
      aboutBody:
        "Jobonic kombiniert Matching, meilensteinbasiertes Escrow und Korridor-Operationen fur sichere internationale Zusammenarbeit.",
      businessTitle: "B2B-Korridorvertrage fur wachsende Unternehmen",
      businessDescription: "Von Sourcing bis Marktexpansion unterstutzt Jobonic geschafskritische Engagements.",
      businessSectionTitle: "Fur Enterprise- und SME-Teams entwickelt",
      businessSectionDescription: "Fuhren Sie wiederholbare B2B-Ablaufe mit einem korridorfokussierten Marktplatz aus.",
      businessCardDescription: "Strukturierte Vertrage, verifizierte Meilensteine und transparente Lieferung.",
      pricingTitle: "Preise fur Vertrauen und Lieferung",
      pricingDescription: "Wahlen Sie ein Modell passend zu Volumen und Komplexitat.",
      pricingPlans: [
        { title: "Starter", details: "Fur erste Korridorprojekte und Piloten." },
        { title: "Growth", details: "Fur Teams mit wiederkehrenden grenzubergreifenden Anforderungen." },
        { title: "Business", details: "Fur Organisationen mit mehreren Landern." },
      ],
      bookDemo: "Demo buchen",
    },
    footer: {
      ...en.footer,
      corridors: "Korridore",
      forBusiness: "Fur Unternehmen",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      terms: "Bedingungen",
      trust: "Sicherheit",
      b2bContracts: "B2B-Vertrage",
      bookDemo: "Demo buchen",
      enterpriseEscrow: "Enterprise Escrow",
      copyright: "Alle Rechte vorbehalten",
    },
  },
};

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
