import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import Banner from "../components/home/Banner";
import SectionOne from "../components/home/SectionOne";
import HealthPlans from "../components/home/HealthPlanComps/HealthPlans";
import Network from "../components/home/Network";
import Sponsors from "../components/home/Sponsors";
import FAQ from "../components/home/FAQs";
import BottomSection from "../components/home/BottomSection";

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
