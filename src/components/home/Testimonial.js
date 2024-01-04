"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { GreenArrowLeft, GreenArrowRight } from "../../../public/assets/svgs";

const Testimonial = () => {
  const testi = [
    {
      component: (
        <TestimonialCard
          text="“It’s been years of a beneficial relationship with Clearline and we can only rate beyond 5 stars! Everything about your services exceeds ones wildest imagination. From the quality of service to excellent customer service delivery, your team has provided us at Tomsey with the best. We very much appreciate the efforts and efficiency of all your staff and the company as a whole. You do it just right by us in the hospitality business.”"
          name="Oluwatobi Busola Alao"
          title="Team Lead, HR & Admin - Tomsey Engineering and Services International Limited."
        />
      ),
    },
    {
      component: (
        <TestimonialCard
          text="Clearline came at a point when we really needed the burden of employees medical needs to be taken off us… their customer service is exceptional especially with seamless onboarding of clients. It’s been great partnering with Clearline HMO."
          name="Fatimah Musa"
          title="Head HR, - DirectBridge MFB."
        />
      ),
    },
    {
      component: (
        <TestimonialCard
          text="Clearline HMO has been our family for the past 7 years and their services has met our expectations. Actually, we really enjoy the services rendered by clearline HMO, your responses to calls and issue are good. The delivery we had on 23 may 2016 through cesarean section (CS) was fine with grace of God."
          name="Mr. Joachim Rotimi"
          title="LOA Architects."
        />
      ),
    },
  ];

  const [currentData, setCurrentData] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 6000;

  const handlePrevClick = () => {
    if (currentData === 0) {
      setCurrentData(testi.length - 1);
    } else {
      setCurrentData((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (currentData === testi.length - 1) {
      setCurrentData(0);
    } else {
      setCurrentData((prev) => prev + 1);
    }
  };

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
          currentData === testi.length - 1 ? 0 : currentData + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [testi.length, currentData]);

  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 my-12 max-md:my-8 pt-12">
      <div className="flex flex-col items-center mb-12 max-md:mb-6">
        <p className="text-catalineBlue text-[32px] max-lg:text-[24px] max-md:text-[16px] mb-6">
          Testimonials
        </p>
        <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-medium">
          What people say about us
        </p>
      </div>
      <div className="overflow-hidden max-w-full mt-0 mx-auto">
        <div
          className="whitespace-nowrap"
          style={{
            transform: `translate3d(${-currentData * 100}%, 0, 0)`,
            transition: "ease 1000ms",
          }}
        >
          {testi.map(({ component }, idx) => (
            <div key={idx} className="inline-block w-full whitespace-normal">
              <div className="flex justify-center">
                <div className="w-4/5 flex justify-between max-md:w-full">
                  <Image
                    src={GreenArrowLeft}
                    alt="green arrow left"
                    className="cursor-pointer"
                    onClick={handlePrevClick}
                  />
                  {component}
                  <Image
                    src={GreenArrowRight}
                    alt="green arrow right"
                    className="cursor-pointer"
                    onClick={handleNextClick}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
