import Banner from "../components/home/Banner";
import SectionOne from "../components/home/SectionOne";
import HealthPlans from "../components/home/HealthPlanComps/HealthPlans";
import Network from "../components/home/Network";
import Sponsors from "../components/home/Sponsors";
import FAQ from "../components/home/FAQs";
import BottomSection from "../components/home/BottomSection";
import PageLayout from "@/layout";
import Testimonial from "@/components/home/Testimonial";

export const metadata = {
  title: "Clearline HMO - The future of healthcare starts today",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <PageLayout>
      <Banner />
      <SectionOne />
      <HealthPlans />
      <Network />
      <Testimonial />
      <Sponsors />
      <FAQ />
      <BottomSection />
    </PageLayout>
  );
}
