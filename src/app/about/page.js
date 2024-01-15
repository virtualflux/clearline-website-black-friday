import AboutBanner from "@/components/about/Banner";
import MissionVision from "@/components/about/MissionVision";
import Directors from "@/components/about/Directors";
import AboutBottom from "@/components/about/AboutBottom";
import PageLayout from "@/layout";
import {
  evercare,
  isalu,
  lagoon,
  lifeline,
  rjolad,
} from "../../../public/assets/images";
import Image from "next/image";
import FAQ from "@/components/about/FAQs";

export const metadata = {
  title: "About us - Clearline HMO",
  alternates: {
    canonical: "/about/",
  },
};

export default function About() {
  const clients = [rjolad, lagoon, lifeline, evercare, isalu];
  return (
    <PageLayout>
      <AboutBanner />
      <MissionVision />
      <Directors />
      <div className="bg-zircon px-16 max-lg:px-12 max-md:px-8 py-16 my-24">
        <div className="flex flex-col items-center">
          <p className="text-[20px] max-md:text-[14px] text-center mb-8">
            Some of our partners and supportive providers
          </p>
          <div className="w-full flex justify-between gap-4 overflow-x-auto">
            {clients.map((client, idx) => (
              <Image key={idx} src={client} alt="Sponsors" />
            ))}
          </div>
        </div>
      </div>
      <FAQ />
      <AboutBottom />
    </PageLayout>
  );
}
