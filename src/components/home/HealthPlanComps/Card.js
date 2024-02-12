"use client";

import Button from "@/shared/Button";
import {
  ArrowRight,
  BlueArrowRight,
  LightTickCircle,
  TickCircle,
} from "../../../../public/assets/svgs";
import Image from "next/image";
import { useState } from "react";
import { zohoFunc } from "@/utils/data";

const Card = ({ title, list, superb }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 z-20 h-full overflow-y-scroll w-[90%] mt-[15%] lg:mt-[5%] rounded-lg shadow-lg bg-white flex flex-col items-center`}
      >
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
        <div id="zf_div_rsR01cS1IfC6MV9SiPur7GmXGOcnndXI4TGD7kmcQBA"></div>
      </div>

      <div
        className={`flex flex-col gap-2 border border-[#BACCDF] rounded-[30px] px-16 max-md:px-12 py-8 ${
          superb && "bg-catalineBlue"
        }`}
      >
        <div
          className={`rounded-[30px] border ${
            superb
              ? "bg-[#224291] border-[#6C96FF]"
              : "bg-[#E9F4FF] border-catalineBlue"
          } px-12 py-2 w-fit mb-2`}
        >
          <p className={`${superb && "text-white"}`}>{title}</p>
        </div>
        <div>
          {list.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Image src={superb ? LightTickCircle : TickCircle} alt="item" />
              <p
                className={`text-[20px] max-md:text-[14px] mb-2 font-light ${
                  superb && "text-white"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        <Button
          onClick={() => {
            setIsOpen(true);
            zohoFunc();
          }}
          className={`!w-fit !rounded-lg px-4 ${
            superb ? "bg-white" : "bg-catalineBlue"
          }`}
        >
          <div className="flex gap-4 items-center">
            <p
              className={`text-[18px] max-md:text-[14px] ${
                superb ? "text-catalineBlue" : "text-white"
              }`}
            >
              Buy a plan
            </p>
            <Image
              src={superb ? BlueArrowRight : ArrowRight}
              alt="buy a plan"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
