"use client"
import React from "react";
import { usePathname } from "next/navigation";
import { packagePlans } from "@/utils/data";
import PageLayout from "@/layout";
import Banner from "@/components/product/Banner";

const Page = () => {
    const pathname=usePathname()
    const planDetails=packagePlans.find(({title})=>title==pathname.replace("/",""))
    return (
    <PageLayout>
      <Banner/>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-12">
      <div className="flex flex-col items-center mb-3">
        <p className="text-[40px] max-md:text-[24px] font-bold mb-3 capitalize text-catalineBlue">
          Our {planDetails.title} Plan
        </p>
      </div>
      <div>{planDetails.component}</div>
    </div>
    </PageLayout>
  );
};
export default Page;