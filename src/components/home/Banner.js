"use client";

import Button from "@/shared/Button";
import Image from "next/image";
import {
  HomeBanner,
  HomeBanner3,
  HomeBanner2,
} from "../../../public/assets/images";
import { ArrowRight } from "../../../public/assets/svgs";
import { useEffect, useMemo, useRef, useState } from "react";
import BuyPlanModal from "../Modal/BuyPlan";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function Banner() {
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
        text1: "Fostering Student",
        text2: "Wellness with",
        text3: "ClearLine HMO",
        subtext:
          "ClearLineHMO promotes student wellness by offering access to a healthcare network, empowering academic success with comprehensive health support.",
        img: HomeBanner3,
      },
    ],
    []
  );

  const [isOpen, setIsOpen] = useState(false);
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
    <div className="flex gap-8 justify-between max-lg:flex-col max-md:gap-6 px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24">
      <BuyPlanModal isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <div className="w-1/2 max-lg:w-full flex flex-col gap-4">
        <p className="w-fit text-[16px] text-green border border-green bg-sugarCane px-[40px] max-lg:px-[30px] py-3 rounded-lg">
          Health insurance
        </p>
        <p className="text-ebonyClay font-extrabold text-[50px] max-[1200px]:text-[40px] max-lg:text-[32px]">
          {bannerData[currentData].text1}
          <br />{" "}
          <span className="text-gradient">{bannerData[currentData].text2}</span>
          <br /> {bannerData[currentData].text3}
        </p>
        <p className="h-[90px] text-boulder text-[24px] max-md:text-[16px] mb-4">
          {bannerData[currentData].subtext}
        </p>
        <div className="flex gap-3">
          <Button
            onClick={() => setIsOpen(true)}
            className={"!rounded-lg px-4 bg-catalineBlue"}
          >
            <div className="flex gap-4 items-center">
              <p className="text-[14px] max-md:text-[12px] text-white">
                Buy a plan
              </p>
              <Image src={ArrowRight} alt="buy a plan" />
            </div>
          </Button>
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
              <div key={idx} className="inline-block w-full whitespace-normal">
                <Image
                  src={img}
                  alt="Health Unleashed"
                  className="w-full h-full max-lg:h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTYID}
        widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGETID}
      />
    </div>
  );
}
