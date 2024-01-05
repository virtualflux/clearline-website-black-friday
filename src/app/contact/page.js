"use client";

import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import Button from "@/shared/Button";
import useIsVisible from "@/hooks/useIsVisible";
import { useRef } from "react";
import "animate.css";

export default function Contact() {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);

  return (
    <div>
      <Navbar />
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 flex flex-col items-center">
        <div className="w-3/5 max-md:w-full">
          <div
            ref={elemRef}
            className={`${
              isVisible && "animate__animated animate__zoomIn"
            } flex flex-col items-center`}
          >
            <p className="text-catalineBlue text-[20px] max-md:text-[12px] font-medium mb-3 border border-catalineBlue rounded-[30px] p-2">
              CONTACT US
            </p>
            <p className="font-bold text-[48px] max-lg:text-[32px] max-md:text-[24px] text-center mb-2">
              Connect with Us: <br />
              Your Questions, Our Commitment.
            </p>
            <p className="text-boulder text-[32px] max-lg:text-[24px] max-md:text-[16px] text-center">
              Reach out for personalized assistance and seamless support.
            </p>
          </div>
          <form className="my-12">
            <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
              <div className="w-1/2 max-sm:w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                />
              </div>
              <div className="w-1/2 max-sm:w-full">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                />
              </div>
            </div>
            <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
              <div className="w-1/2 max-sm:w-full">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                />
              </div>
              <div className="w-1/2 max-sm:w-full">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Phone number"
                  className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-12">
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
              />
            </div>
            <Button
              type={"button"}
              className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue"}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
