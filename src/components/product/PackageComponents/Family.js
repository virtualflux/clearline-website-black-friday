"use client";

import { Button } from "@mui/base";
import PackageTable from "../components/PackageTable";
import { useState } from "react";
import { zohoFunc } from "@/utils/data";
import Image from "next/image";
import { Close } from "../../../../public/assets/svgs";

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

      <div className="flex flex-col items-center">
        <p className="text-[40px] max-md:text-[24px] font-medium">
          Family plan
        </p>
        <p className="text-boulder text-[32px] max-md:text-[16px] text-center font-light mb-6">
          ClearLine HMO understands the importance of family health, and our
          plans reflect this commitment. With access to an extensive network of
          healthcare providers, you can rest easy knowing that each family
          member has the support they need for a healthier, happier life
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
              zohoFunc();
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
            onClick={() => {
              setIsOpen(true);
              zohoFunc();
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

export default Family;
