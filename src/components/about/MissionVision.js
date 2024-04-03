"use client";

import Image from "next/image";
import { MissionImage } from "../../../public/assets/images";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


const MissionVision = () => {
  
  return (
    <div className="mt-[400px] max-[1300px]:mt-[500px] max-[1000px]:mt-[400px] max-[900px]:mt-[400px] max-[768px]:mt-[250px] max-[570px]:mt-[300px] max-[490px]:mt-[380px] max-[450px]:mt-[450px] max-[400px]:mt-[500px] max-[330px]:mt-[700px] px-16 max-lg:px-12 max-md:px-8 flex max-[950px]:flex-col justify-between gap-16 max-md:gap-4">
      <div className="w-2/5 max-[950px]:w-full">
        <Image
          src={MissionImage}
          alt="Mission vision"
          className="h-[450px] max-md:h-[258px] object-cover rounded-lg"
        />
      </div>
      <div className="w-3/5 max-[950px]:w-full">
        <p className="text-catalineBlue font-bold text-[40px] max-lg:text-[30px] max-md:text-[24px]">
          Our Mission
        </p>
        <p className="text-boulder text-[24px] max-md:text-[14px] mb-6">
          To provide quality and accessible healthcare to all.
        </p>
        <p className="text-catalineBlue font-bold text-[40px] max-lg:text-[30px] max-md:text-[24px]">
          Our Vision
        </p>
        <p className="text-boulder text-[24px] max-md:text-[14px] mb-6">
          To redefine healthcare for a healthier future.
        </p>
        <div className="flex justify-between gap-8 max-md:gap-4">
          <div className="w-1/3">
            <CountUp end={30} suffix=" years of experience" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span
                    className="text-catalineBlue font-bold text-[24px] max-md:text-[14px]"
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <p className="text-boulder text-[16px] max-md:text-[12px]">
              Almost 3 decades of offering quality and affordable health plans
            </p>
          </div>
          <div className="w-1/3">
            <CountUp end={1800} suffix="+ Health providers" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span
                    className="text-catalineBlue font-bold text-[24px] max-md:text-[14px]"
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <p className="text-boulder text-[16px] max-md:text-[12px]">
              Get access to quality healthcare from any provider of choice
            </p>
          </div>
          <div className="w-1/3">
            <CountUp
              end={1}
              suffix=" Billion Naira Capital Base"
              delay={2}
              redraw={true}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span
                    className="text-catalineBlue font-bold text-[24px] max-md:text-[14px]"
                    ref={countUpRef}
                  />
                </VisibilitySensor>
              )}
            </CountUp>
            <p className="text-boulder text-[16px] max-md:text-[12px]">
              as against the capital requirement of 400 Million Naira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
