import AboutBanner from "@/components/about/Banner";
import MissionVision from "@/components/about/MissionVision";
import Directors from "@/components/about/Directors";
import Sponsors from "@/components/home/Sponsors";
import AboutBottom from "@/components/about/AboutBottom";
import PageLayout from "@/layout";

export default function About() {
  return (
    <PageLayout>
      <AboutBanner />
      <MissionVision />
      <Directors />
      <Sponsors />
      <AboutBottom />
    </PageLayout>
  );
}
