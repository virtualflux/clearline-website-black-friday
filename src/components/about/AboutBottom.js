"use client";

import Button from "@/shared/Button";
import Image from "next/image";
import { AboutBottomBg } from "../../../public/assets/images";
import { useState } from "react";
import BuyPlanModal from "../Modal/BuyPlan";

const AboutBottom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 pt-12 max-md:mt-8">
      <BuyPlanModal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <div className="relative text-white rounded-lg h-[424px] max-md:h-[270px] max-[330px]:h-[300px] flex justify-center items-center">
        <Image
          src={AboutBottomBg}
          alt="Get started on your path"
          className="w-full h-full"
        />
        <div className="absolute w-1/2 max-md:w-3/4 flex flex-col justify-center items-center">
          <p className="text-[48px] max-lg:text-[36px] max-md:text-[24px] font-bold text-center mb-12">
            Get started on your path to redefined healthcare with us
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className={
              "!rounded-lg px-4 bg-white !w-[140px] flex justify-center items-center"
            }
          >
            <div className="flex gap-4 items-center">
              <p className="text-[14px] max-md:text-[12px] text-catalineBlue">
                Buy a plan
              </p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
