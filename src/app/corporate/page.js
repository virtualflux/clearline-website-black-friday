"use client"
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { packagePlans } from "@/utils/data";
import PageLayout from "@/layout";
import Image from "next/image";
import Corporate from "@/components/product/PackageComponents/Corporate";
import { Close } from "../../../public/assets/svgs";
const Page = () => {
    const pathname=usePathname()
    const planDetails=packagePlans.find(({title})=>title==pathname.replace("/",""))
    const [openCorpQuote,setOpenCorpQuote]=useState(false)
    
    return (
      <>
      <div
        className={`${
          openCorpQuote ? "block" : "hidden"
        } fixed top-0 left-1/2 -translate-x-1/2 z-30 h-full overflow-y-scroll w-[80%] rounded-lg shadow-lg bg-white`}
      >
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setOpenCorpQuote(false)}
        ></div>
        <div className="flex justify-end py-2">
          <Image
            src={Close}
            alt="close modal"
            className="cursor-pointer"
            onClick={() => setOpenCorpQuote(false)}
          />
        </div>
        <div className="w-full"> 
        <iframe aria-label='Request a Quote on Corporate' src='https://forms.zohopublic.com/clearlinehmo/form/RequestaQuoteonCorporate1/formperma/rLmDb3ZoGt7PatQB5t-wWR6KitVTjBexJN0fggVboW0' className="max-md:w-full w-[99%] h-[932px] border-0"></iframe>
        </div>
      </div>
    <PageLayout>
    <div className="h-[650px] max-md:h-[450px] bg-requestQuoteBanner bg-no-repeat bg-cover bg-center px-16 max-lg:px-12 max-md:px-8 bg-blend-soft-light bg-opacity-60 bg-catalineBlue">
      <div className="h-full flex flex-col justify-center text-white">
        <p className="text-[64px] max-lg:text-[50px] max-md:text-[32px] font-bold">
          Our Plans
        </p>
        <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px]">
          We have the best plans for you
        </p>
      </div>
    </div>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-12 mb-8">
      <div className="flex flex-col items-center gap-3">
        <p className="text-[40px] max-md:text-[30px] font-bold mb-3 capitalize text-center text-catalineBlue">
          Our {planDetails.title} Plan
        </p>
        <Corporate formFunc={()=>{
          setOpenCorpQuote(true)
        }}/>
      </div>
     
    </div>
    </PageLayout>
      </>
  );
};
export default Page