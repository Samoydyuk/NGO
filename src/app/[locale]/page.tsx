import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import AchievementsSection from "@/components/home/AchievementsSection";
import NewsGrid from "@/components/home/NewsGrid";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import MembershipCTA from "@/components/home/MembershipCTA";
import PartnersSection from "@/components/home/PartnersSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <AchievementsSection />
      <NewsGrid />
      <UpcomingEvents />
      <MembershipCTA />
      <PartnersSection />
    </>
  );
}
