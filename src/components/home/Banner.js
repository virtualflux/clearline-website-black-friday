"use client";

import Button from "@/shared/Button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import {
  HomeBanner,
  HomeBanner3,
  HomeBanner2,
} from "../../../public/assets/images";
import { ArrowRight } from "../../../public/assets/svgs";
import { useEffect, useMemo, useRef, useState } from "react";
import "animate.css";
 

export default function Banner({ onClick }) {
  const bannerData = useMemo(
    () => [
      {
        text1: "Health Empowered,",
        text2: "Tomorrow Secured.",
        text3: "Clearline HMO",
        subtext:
          "Elevate Your Health, Secure Your Future: Welcome to ClearlineHMO, Where Comprehensive Coverage Meets Peace of Mind",
        img: HomeBanner,
      },
      {
        text1: "Fostering the Health,",
        text2: "And Happiness.",
        text3: "Of Your Family",
        subtext:
          "Where comprehensive healthcare meets peace of mind, ensuring your loved ones thrive in a world of well-being",
        img: HomeBanner2,
      },
      {
        text1: "Promoting your staff",
        text2: "Well-being through",
        text3: "Clearline HMO",
        subtext:
          "By prioritizing employee well-being, organizations can foster a healthier, happier, and more productive workforce",
        img: HomeBanner3,
      },
    ],
    []
  );

  const [currentData, setCurrentData] = useState(0);

  const timeoutRef = useRef(null);

  const delay = 3000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentData(() =>
          currentData === bannerData.length - 1 ? 0 : currentData + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [bannerData, currentData]);

  return (
    <div className="flex gap-8 justify-between max-lg:flex-col max-md:gap-6 px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mt-0">
      <div className="w-1/2 max-lg:w-full flex flex-col gap-4">
        <p className="animate__animated animate__jackInTheBox w-fit text-[16px] text-green border border-green bg-sugarCane px-[40px] max-lg:px-[30px] py-3 rounded-lg">
          Health insurance
        </p>
        <p className="text-ebonyClay font-extrabold text-[50px] max-[1200px]:text-[40px] max-lg:text-[32px]">
          {bannerData[currentData].text1}
          <br />{" "}
          <span className="text-gradient">{bannerData[currentData].text2}</span>
          <br /> {bannerData[currentData].text3}
        </p>
        <p className="h-[90px] text-boulder text-[24px] max-md:text-[16px] mb-0">
          {bannerData[currentData].subtext}
        </p>

        {/* Black Friday Offer */}
        <div className="relative p-6 rounded-lg shadow-lg overflow-hidden bg-black animate__animated animate__pulse animate__infinite">
          <div className="absolute inset-0 opacity-10 bg-black bg-blend-overlay" />
          <div className="relative z-10 flex flex-col items-center text-center text-white">
            <h1 className="text-[40px] font-extrabold mb-2 uppercase tracking-wide max-md:text-[30px]">
              Black Friday Offer!!!!
            </h1>
            <p className="text-[20px] font-medium mb-6 italic max-md:text-[16px]">
              Grab unbeatable discounts on all health plans. Don’t miss out!
            </p>

            <div className="flex gap-3 max-md:flex-col">
              <Button
                onClick={onClick}
                className={"!rounded-full px-4 bg-catalineBlue"}
              >
                <div className="flex gap-4 items-center">
                  <p className="text-[14px] max-md:text-[12px] text-white">
                    Buy a plan
                  </p>

                  <FaArrowRight size={18} />
                </div>
              </Button>

              <Button
                onClick={() => (window.location.href = "/retail")}
                className={
                  "!rounded-full bg-white px-6 py-3 font-semibold text-[16px]  hover:text-white transition-all shadow-lg max-md:px-4 max-md:text-[14px]"
                }
              >
                <div className="flex items-center gap-2 text-catalineBlue">
                  <p>View Plans</p>
                  <FaArrowRight size={16} />
                </div>
              </Button>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 bg-yellow-400 rounded-full w-32 h-32 animate-bounce shadow-lg" />
          <div className="absolute -bottom-10 -left-10 bg-red-400 rounded-full w-40 h-40 animate-bounce delay-150 shadow-lg" />
        </div>
      </div>

      <div className="w-1/2 relative max-lg:w-full">
        <div className="overflow-hidden max-w-full mt-0 mx-auto">
          <div
            className="whitespace-nowrap"
            style={{
              transform: `translate3d(${-currentData * 100}%, 0, 0)`,
              transition: "ease-in-out 1000ms",
            }}
          >
            {bannerData.map(({ img }, idx) => (
              <div
                key={idx}
                className="inline-block w-full h-[640px] max-lg:h-[400px] whitespace-normal relative"
              >
                <Image
                  src={img}
                  alt="Health Unleashed"
                  fill
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
