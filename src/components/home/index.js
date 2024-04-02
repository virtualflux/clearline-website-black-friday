"use client";

import { useState } from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import HealthPlans from "./HealthPlanComps/HealthPlans";
import Network from "./Network";
import Testimonial from "./Testimonial";
import Sponsors from "./Sponsors";
import BottomSection from "./BottomSection";
import { Close } from "../../../public/assets/svgs";
import Image from "next/image";
import { zohoFunc } from "@/utils/data";
import BuyPlanModal from "../Modal/BuyPlan";
import AboutBottom from "../about/AboutBottom";

const HomeContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto h-full">
      <div className="w-full flex justify-center">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed top-0 z-20 h-full overflow-y-scroll w-[90%] mt-[15%] lg:mt-[5%] rounded-lg shadow-lg bg-white flex flex-col`}
        >
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <BuyPlanModal isOpen={isOpen} setIsOpen={setIsOpen}/>
          <div className="flex justify-end py-2">
            <Image
              src={Close}
              alt="close modal"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div id="zf_div_6lcVClC22qCknyyeB-XS0neYBhj-_VNDvhRDB0Pt0bQ"></div>
        </div>
      </div>
      <Banner
        onClick={() => {
          setIsOpen(true);
          // zohoFunc();
        }}
      />
      <SectionOne />
      {/* <AboutBottom/> */}
      {/* <HealthPlans
        onClick={() => {
          setIsOpen(true);
          // zohoFunc();
        }}
      /> */}
      <Network />
      <Testimonial />
      <Sponsors />
      <BottomSection />
    </div>
  );
};

export default HomeContainer;
