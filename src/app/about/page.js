import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import AboutBanner from "@/components/about/Banner";
import MissionVision from "@/components/about/MissionVision";
import Directors from "@/components/about/Directors";
import Sponsors from "@/components/home/Sponsors";
import AboutBottom from "@/components/about/AboutBottom";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutBanner />
      <MissionVision />
      <Directors />
      <Sponsors />
      <AboutBottom />
      <Footer />
    </div>
  );
}
