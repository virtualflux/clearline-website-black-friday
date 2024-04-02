"use client";

import Button from "@/shared/Button";
import {
  ArrowRight,
  BlueArrowRight,
  LightTickCircle,
  TickCircle,
} from "../../../../public/assets/svgs";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
const Card = ({ title, list, superb, onClick }) => {
  return (
    <div>
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
              {superb?<GoCheckCircle className="text-white" size={23}/>:<GoCheckCircle className="text-catalineBlue" size={23}/>}
              
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
          onClick={onClick}
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
            {superb?<FaArrowRightLong className="text-catalineBlue" size={18}/>:<FaArrowRightLong className="text-white" size={18}/>}
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
