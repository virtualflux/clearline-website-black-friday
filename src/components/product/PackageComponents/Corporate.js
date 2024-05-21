"use client";

import { Button } from "@mui/base";
import CorporatePackageTable from "../components/CorporatePackageTable";
import { useState } from "react";
import Link from "next/link";
import { zohoFunc } from "@/utils/data";
import Image from "next/image";
import { Close } from "../../../../public/assets/svgs";
import BuyPlanModal from "@/components/Modal/BuyPlan";

const Corporate = ({formFunc}) => {
  return (
      <>
      <div className="flex flex-col items-center w-full">
        <p className="text-boulder text-[26px] max-md:text-[16px] font-light mb-6 text-center">
          Our corporate plans prioritize your health, offering a range of
          benefits to meet your lifestyle. From routine check-ups to specialized
          care, Clearline HMO is your steadfast partner in every step of your
          health journey. We understand the importance of flexibility, and our
          plans are designed to provide security without compromising your
          choices.
        </p>
          </div>
          <CorporatePackageTable/>
        <div className="flex gap-4 max-sm:flex-col">
          <Button
            type={"button"}
            onClick={formFunc}
            className={
              "!rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue max-md:text-base text-[20px] font-light"
            }
            >
            Request a quote
          </Button>
          <Link href="/corporateplan.pdf" target="_blank">
          <Button
            type={"button"}
            className={
              "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-catalineblue border-catalineBlue border !bg-[#F6F7FF]"
            }
            >
              View full plan
          </Button>
            </Link>
        </div>
              </>
  );
};

export default Corporate;
