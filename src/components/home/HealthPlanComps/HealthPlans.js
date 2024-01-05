"use client";

import { useRef, useState } from "react";
import { healthData } from "@/utils/data";
import Sample from "./Sample";
import "animate.css";
import useIsVisible from "@/hooks/useIsVisible";

export default function HealthPlans() {
  const [activeTab, setActiveTab] = useState(0);
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);

  const healthTabs = healthData.map((health) => ({
    title: health.title,
    component: <Sample arr={health.arr} />,
  }));

  return (
    <div
      ref={elemRef}
      className={`${
        isVisible && "animate__animated animate__zoomIn"
      } px-16 max-lg:px-12 max-md:px-8`}
    >
      <div className="flex flex-col items-center pt-32 max-md:pt-12 mb-16">
        <p className="text-catalineBlue text-[32px] max-md:text-[20px]">
          Our Health Plans
        </p>
        <p className="text-[36px] max-md:text-[20px] font-bold">
          Choose the Perfect Plan for you
        </p>
        <div className="flex gap-3 bg-zircon p-2 mt-8 max-sm:overflow-auto max-sm:w-[90%]">
          {healthTabs.map((tab, idx) => (
            <p
              onClick={() => setActiveTab(idx)}
              key={idx}
              className={`${
                activeTab === idx && "!bg-catalineBlue text-white"
              } flex justify-center whitespace-nowrap font-medium py-4 px-16 max-[1350px]:px-4 cursor-pointer text-catalineBlue bg-white text-[18px] max-md:text-[12px] rounded-lg`}
            >
              {tab.title}
            </p>
          ))}
        </div>
      </div>
      <div>{healthTabs[activeTab].component}</div>
    </div>
  );
}
