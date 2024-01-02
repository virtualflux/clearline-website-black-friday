"use client";

import { Button } from "@mui/base";
import PackageTable from "../components/PackageTable";
import { useState } from "react";
import BuyPlanModal from "@/components/Modal/BuyPlan";

const Individual = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <BuyPlanModal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <p className="text-[40px] max-md:text-[24px] font-medium">
        Individual benefit package
      </p>
      <p className="text-boulder text-[32px] max-md:text-[16px] text-center font-light mb-6">
        Our individual plans prioritize your health, offering a range of
        benefits to meet your lifestyle. From routine check-ups to specialized
        care, ClearLine HMO is your steadfast partner in every step of your
        health journey. We understand the importance of flexibility, and our
        plans are designed to provide security without compromising your
        choices.
      </p>
      <div className="flex gap-4 max-sm:flex-col mb-12">
        <Button
          type={"button"}
          className={
            "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
          }
        >
          Consult an Expert
        </Button>
        <Button
          onClick={() => setIsOpen(true)}
          type={"button"}
          className={
            "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-catalineblue border-catalineBlue border !bg-[#F6F7FF]"
          }
        >
          Buy a plan online
        </Button>
      </div>
      <div className="w-full mb-8">
        <PackageTable />
      </div>
      <div className="flex gap-4 max-sm:flex-col mb-12">
        <Button
          type={"button"}
          className={
            "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
          }
        >
          View full plan
        </Button>
        <Button
          onClick={() => setIsOpen(true)}
          type={"button"}
          className={
            "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-catalineblue border-catalineBlue border !bg-[#F6F7FF]"
          }
        >
          Buy a plan
        </Button>
      </div>
    </div>
  );
};

export default Individual;
