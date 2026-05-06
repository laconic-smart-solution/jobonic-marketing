import { BottomCtaSection } from "@/components/sections/bottom-cta-section";
import { BusinessBannerSection } from "@/components/sections/business-banner-section";
import { CorridorsSection } from "@/components/sections/corridors-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { TrustArchitectureSection } from "@/components/sections/trust-architecture-section";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);

  return (
    <>
      <HeroSection dict={dict} />
      <CorridorsSection locale={params.locale} dict={dict} />
      <TrustArchitectureSection dict={dict} />
      <BusinessBannerSection locale={params.locale} dict={dict} />
      <PartnersSection dict={dict} />
      <BottomCtaSection dict={dict} />
    </>
  );
}
