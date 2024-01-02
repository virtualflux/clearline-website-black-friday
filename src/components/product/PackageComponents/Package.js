"use client";

import { useState } from "react";
import Business from "./Business";
import Family from "./Family";
import Individual from "./Individual";

export const Package = () => {
  const [activeTab, setActiveTab] = useState(0);

  const packageTabs = [
    { title: "Individual plan", component: <Individual /> },
    { title: "Plan for Family", component: <Family /> },
    { title: "Coporate/Business Plans", component: <Business /> },
  ].map((health) => ({
    title: health.title,
    component: health.component,
  }));

  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 pt-12">
      <div className="flex flex-col items-center mb-12">
        <p className="text-[40px] max-md:text-[24px] font-bold mb-6">
          Benefit package summary
        </p>
        <div className="flex gap-3 bg-zircon p-2 mt-8 max-sm:overflow-auto max-sm:w-full rounded-[60px] border border-catalineBlue">
          {packageTabs.map((tab, idx) => (
            <p
              onClick={() => setActiveTab(idx)}
              key={idx}
              className={`${
                activeTab === idx && "!bg-catalineBlue text-white"
              } flex justify-center whitespace-nowrap py-4 max-md:py-2 px-16 max-[1350px]:px-4 cursor-pointer text-catalineBlue text-[18px] max-md:text-[10px] rounded-[60px]`}
            >
              {tab.title}
            </p>
          ))}
        </div>
      </div>
      <div>{packageTabs[activeTab].component}</div>
    </div>
  );
};
