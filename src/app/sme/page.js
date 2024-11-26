"use client"
import React,{useState} from "react";
import { usePathname } from "next/navigation";
import { packagePlans } from "@/utils/data";
import PageLayout from "@/layout";
import Banner from "@/components/product/Banner";
import Image from "next/image";
import { Close } from "../../../public/assets/svgs";
import Business from "@/components/product/PackageComponents/Sme";

const Page = () => {
    const pathname=usePathname()
    const planDetails=packagePlans.find(({title})=>title==pathname.replace("/",""))
    const [openSMEQuote,setOpenSMEQuote]=useState(false)
    
    return (
      <>
       <div
        className={`${
          openSMEQuote ? "block" : "hidden"
        } fixed top-0 left-1/2 -translate-x-1/2 z-30 h-full overflow-y-scroll w-[80%] rounded-lg shadow-lg bg-white`}
      >
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setOpenSMEQuote(false)}
        ></div>
        <div className="flex justify-end py-2">
          <Image
            src={Close}
            alt="close modal"
            className="cursor-pointer"
            onClick={() => setOpenSMEQuote(false)}
          />
        </div>
       <div className="w-full">
       <iframe aria-label='Request a Quote on SME' src='https://forms.zohopublic.com/clearlinehmo/form/RequestaQuoteonSME1/formperma/qyaUAcF-8A6WynAXvLuApiU5xqcgGcAiOZEy6gegbTg' className="max-md:w-full w-[99%] h-[932px] border-0"></iframe>
       </div>
      </div>
    <PageLayout>
      <div className="min-h-screen px-16 max-lg:px-12 max-md:px-8 py-16 max-md:flex-col flex gap-10 justify-center items-center mb-8">
      <div className="flex flex-col gap-3 items-start w-2/3 max-md:w-full">
        <p className="text-7xl max-md:text-[40px] font-bold mb-3 capitalize text-catalineBlue">
          Our {planDetails.title.toUpperCase()} Plan
        </p>
        {/* {planDetails.component } */}
        <Business formFunc={()=>{
            setOpenSMEQuote(true)
        }}/>
      </div>
      <div className="max-md:w-full w-1/3 aspect-video shrink-0 relative max-md:overflow-hidden">

      <div className="w-full absolute top-1/2 -translate-y-1/2 left-0 aspect-square bg-pigeonPost rounded-md -rotate-12 max-md:hidden">
      </div>
      <div className="w-full absolute top-1/2 -translate-y-1/2 left-0 aspect-square bg-catalineBlue rounded-md rotate-12 max-md:hidden">
      </div>
      <div className="w-full absolute top-1/2 -translate-y-1/2 left-0 aspect-square rounded-md overflow-clip">
        <Image src={"/assets/images/requestQuote2.jpg"} fill 
        className="object-cover" alt="object-cover"/>
      </div>
      </div>
    </div>
    </PageLayout>
      </>
  );
};
export default Page