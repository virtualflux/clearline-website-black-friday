import React from "react"
import PageLayout from "@/layout";
import AboutBanner from "@/components/about/Banner";
import MissionVision from "@/components/about/MissionVision";
import FAQ from "@/components/about/FAQs";
import {
    evercare,
    isalu,
    lagoon,
    lifeline,
    rjolad,
  } from "../../../public/assets/images";
  import Image from "next/image";

  export const metadata = {
    title: "Our Story - Clearline HMO",
    alternates: {
      canonical: "/our-story/",
    },
  };
export default function  OurStory (){
    const clients = [rjolad, lagoon, lifeline, evercare, isalu];
    return(
        <PageLayout>
            <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 min-h-screen">
            <AboutBanner />
            <MissionVision />
            <div className="bg-zircon px-16 max-lg:px-12 max-md:px-8 py-16 my-24">
        <div className="flex flex-col items-center">
          <p className="text-[20px] max-md:text-[14px] text-center mb-8">
            Some of our partners and supportive providers
          </p>
          <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(187px,_200px))] justify-center auto-cols-auto gap-2 overflow-x-auto">
            {clients.map((client, idx) => (
              <Image key={idx} src={client} alt="Sponsors" />
            ))}
          </div>
        </div>
      </div>
            <FAQ/>
            </div>
        </PageLayout>
    )
}