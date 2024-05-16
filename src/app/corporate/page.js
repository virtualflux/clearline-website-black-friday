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
        <iframe aria-label='Request a Quote on Corporate'   src='https://forms.zohopublic.com/clearlinehmo/form/RequestaQuoteonCorporate1/formperma/rLmDb3ZoGt7PatQB5t-wWR6KitVTjBexJN0fggVboW0' className="max-md:w-full w-[99%] h-[932px] border-0"></iframe>
        </div>
      </div>
    <PageLayout>
      <div className="min-h-screen px-16 max-lg:px-12 max-md:px-8 pt-16 flex max-md:flex-col flex-row-reverse justify-center max-md:gap-10 gap-12 items-center mb-8">
      <div className="flex flex-col gap-3 w-2/3 max-md:w-full">
        <p className="text-7xl max-md:text-[40px] font-bold mb-3 capitalize text-catalineBlue">
          Our {planDetails.title} Plan
        </p>
        <Corporate formFunc={()=>{
          setOpenCorpQuote(true)
        }}/>
      </div>
      <div className="max-md:w-full w-[35%] aspect-video shrink-0 relative max-md:overflow-hidden">
      
      <div className="w-full absolute top-1/2 -translate-y-1/2 left-0 aspect-square rounded-md overflow-clip grid grid-cols-3 auto-rows-auto">
        <Image src={"/assets/images/requestQuote.jpg"} className="object-cover -z-10" fill alt="coporate-plan"/>
       <div className="border-2 border-t-0 border-l-0 border-white"></div>
       <div className="border-2 border-t-0 border-white"></div>
       <div className="border-2 border-t-0 border-r-0 border-white"></div>
       <div className="border-2 border-l-0 border-white"></div>
       <div className="border-2 border-white"></div>
       <div className="border-2 border-r-0 border-white"></div>
       <div className="border-2 border-b-0 border-l-0 border-white"></div>
       <div className="border-2 border-b-0  border-white"></div>
       <div className="border-2 border-b-0 border-r-0 border-white"></div>
      </div>
      </div>
    </div>
    </PageLayout>
      </>
  );
};
export default Page