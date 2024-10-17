"use client";

import { Button } from "@mui/base";
import PackageTable from "../components/PackageTable";
import { useState } from "react";
import Image from "next/image";
import { Close } from "../../../../public/assets/svgs";
import BuyPlanModal from "@/components/Modal/BuyPlan";
import Link from "next/link";

const Family = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
        <div></div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-boulder text-[32px] max-md:text-[16px] text-center mb-6">
          Clearline HMO understands the importance of family health, and our
          plans reflect this commitment. With access to an extensive network of
          healthcare providers, you can rest easy knowing that each family
          member has the support they need for a healthier, happier life.
        </p>
        <div className="flex gap-4 max-sm:flex-col mb-12">
        </div>
        <div className="w-full mb-8">
          <PackageTable />
        </div>
        <div className="flex gap-4 max-sm:flex-col mb-12">
        <Link href="/kiakia.pdf" target="_blank">
          <Button
            type={"button"}
            className={
              "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
            }
          >
            View full Kia Kia plan
          </Button>
        </Link>
          <Button
            onClick={() => {
              setIsOpen(true);
              // zohoFunc();
            }}
            type={"button"}
            className={
              "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-catalineblue border-catalineBlue border !bg-[#F6F7FF]"
            }
          >
            Buy a plan
          </Button>

          <Link href="/retailplan.pdf" target="_blank">
          <Button
            type={"button"}
            className={
              "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
            }
          >
            View full plan
          </Button>
        </Link>
        </div>
      </div>

 
     </div>
 
  );
};

export default Family;
