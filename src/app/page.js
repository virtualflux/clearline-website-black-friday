import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import HealthPlans from "./HealthPlans";
import Network from "./Network";
import Sponsors from "./Sponsors";
import FAQ from "./FAQs";
import BottomSection from "./BottomSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SectionOne />
      <HealthPlans />
      <Network />
      <Sponsors />
      <FAQ />
      <BottomSection />
      <Footer />
    </div>
  );
}
