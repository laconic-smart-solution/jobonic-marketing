import { BenefitsSection } from "@/components/sections/benefits-section";
import { BottomCtaSection } from "@/components/sections/bottom-cta-section";
import { BusinessBannerSection } from "@/components/sections/business-banner-section";
import { CorridorsSection } from "@/components/sections/corridors-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { TrustArchitectureSection } from "@/components/sections/trust-architecture-section";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <BenefitsSection dict={dict} />
      <HowItWorksSection dict={dict} />
      <CorridorsSection locale={locale} dict={dict} />
      <TrustArchitectureSection dict={dict} />
      <BusinessBannerSection locale={locale} dict={dict} />
      <PartnersSection dict={dict} />
      <BottomCtaSection locale={locale} dict={dict} />
    </>
  );
}
