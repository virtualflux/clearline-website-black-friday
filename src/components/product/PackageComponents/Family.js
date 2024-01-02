"use client";

import { Button } from "@mui/base";
import PackageTable from "../components/PackageTable";
import { useState } from "react";
import BuyPlanModal from "@/components/Modal/BuyPlan";

const Family = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <BuyPlanModal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <p className="text-[40px] max-md:text-[24px] font-medium">
        Family package
      </p>
      <p className="text-boulder text-[32px] max-md:text-[16px] text-center font-light mb-6">
        ClearLine HMO understands the importance of family health, and our plans
        reflect this commitment. With access to an extensive network of
        healthcare providers, you can rest easy knowing that each family member
        has the support they need for a healthier, happier life
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

export default Family;
