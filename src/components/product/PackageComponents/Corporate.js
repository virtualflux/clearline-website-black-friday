"use client";

import { Button } from "@mui/base";
import CorporatePackageTable from "../components/CorporatePackageTable";
import { useState } from "react";
import Link from "next/link";
import { zohoFunc } from "@/utils/data";
import Image from "next/image";
import { Close } from "../../../../public/assets/svgs";
import BuyPlanModal from "@/components/Modal/BuyPlan";

const Corporate = () => {
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
        <div className="flex justify-end py-2">
        <BuyPlanModal isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Image
            src={Close}
            alt="close modal"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div id="zf_div_6lcVClC22qCknyyeB-XS0neYBhj-_VNDvhRDB0Pt0bQ"></div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-boulder text-[32px] max-md:text-[16px] text-center font-light mb-6">
          Our corporate plans prioritize your health, offering a range of
          benefits to meet your lifestyle. From routine check-ups to specialized
          care, Clearline HMO is your steadfast partner in every step of your
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
            onClick={() => {
              setIsOpen(true);
              // zohoFunc();
            }}
            type={"button"}
            className={
              "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-catalineblue border-catalineBlue border !bg-[#F6F7FF]"
            }
          >
            Buy a plan online
          </Button>
        </div>
        <div className="w-full mb-8">
          <CorporatePackageTable />
        </div>
        <div className="flex gap-4 max-sm:flex-col mb-12">
          <Link href="/corporateplan.pdf" target="_blank">
            <Button
              type={"button"}
              className={
                "!w-[200px] !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
              }
            >
              View full plan
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
        </div>
      </div>
    </div>
  );
};

export default Corporate;
