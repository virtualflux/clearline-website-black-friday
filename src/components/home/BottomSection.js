"use client";

import Image from "next/image";
import {
  tripleGreenArrowLeft,
  tripleGreenArrowRight,
} from "../../../public/assets/svgs";
import Button from "@/shared/Button";
import {
  AppleLogo,
  Healthpriority,
  PhonesImage,
  PlayStoreLogo,
} from "../../../public/assets/images";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";

export default function BottomSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          form.current,
          "OTdU-O6vdb3nS4UFz"
        )
        .then(
          ({ status }) => {
            if (status === 200) {
              toast.success("Thank you for subscribing to our newsletter!");
              setEmail("");
            }
          },
          (error) => {
            toast.error(`Oh no, ${error.text}!`);
          }
        );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className="bg-catalineBlue h-[350px] max-[1000px]:h-fit px-16 max-lg:px-12 max-md:px-8 mb-12 min-[900px]:mt-[300px] mt-12">
        <div className="h-full flex max-[900px]:flex-col gap-8 max-md:gap-0">
          <div className="w-1/2 max-[900px]:w-full relative">
            <Image
              src={PhonesImage}
              alt="Clearline app"
              className="min-[900px]:absolute bottom-0 h-[600px] max-md:h-[350px] w-full object-auto"
            />
          </div>
          <div className="w-1/2 max-[900px]:w-full py-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={tripleGreenArrowRight}
                alt="Introducing Our Revamped Mobile App"
              />
              <p className="text-[20px] max-md:text-[16px] text-center">
                Introducing Our Revamped Mobile App
              </p>
              <Image
                src={tripleGreenArrowLeft}
                alt="Introducing Our Revamped Mobile App"
              />
            </div>
            <p className="text-[28px] max-md:text-[16px] font-medium mb-4">
              Your Health Insurance, Right in Your Pocket
            </p>
            <p className="text-[16px] max-md:text-[12px]">
              Our mobile app provides convenient access to your policy details,
              claims processing, and healthcare resources, empowering you to
              manage your health insurance effortlessly on the go.
            </p>
            <div className="flex gap-8 flex-wrap mt-6">
              <Button className="!bg-white !text-black !flex !items-center !gap-2 !rounded-lg !py-2 !px-4">
                <Image src={PlayStoreLogo} alt="google play" />
                <div className="flex flex-col items-start font-semibold">
                  <p className="text-[6px]">GET IT ON</p>
                  <p className="text-[12px]">Google Play</p>
                </div>
              </Button>
              <Button className="!bg-white !text-black !flex !items-center !gap-2 !rounded-lg !py-2 !px-4">
                <Image src={AppleLogo} alt="apple store" />
                <div className="flex flex-col items-start font-semibold">
                  <p className="text-[6px]">Download on the</p>
                  <p className="text-[12px]">App Store</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 max-lg:px-16 max-md:px-12 mt-32 max-lg:mt-16">
        <div className="relative flex max-[900px]:flex-col gap-8 rounded-3xl bg-[#5F81D5] h-[400px] w-full max-[900px]:h-fit shadow-lg">
          <div className="absolute h-[300px] max-[900px]:h-fit w-full rounded-3xl bg-[#7092E6] top-[50px] -right-[40px] -z-10 shadow-lg"></div>
          <div className="w-1/2 max-[900px]:w-full">
            <div className="relative bottom-4 -left-12 max-lg:-left-4 w-4/5 h-full max-[900px]:w-full py-8 text-white rounded-3xl bg-catalineBlue p-6">
              <p className="text-[32px] max-md:text-[24px] font-bold my-4">
                Your Health is our
                <br /> Priority
              </p>
              <p className="text-[20px] max-md:text-[12px] mb-8 text-[#dcdbdb]">
                Sign up for our Health Newsletter to get health tips & Benefits,
                Directly in your Inbox
              </p>
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="relative w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="w-full rounded-lg text-[14px] h-[60px] focus:outline-none text-black placeholder:text-xs placeholder:text-black pl-2 pr-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button>
                      {true ? (
                        <div className="absolute right-4 bottom-3 bg-catalineBlue flex justify-center items-center rounded-lg p-2">
                          <div className="w-[75px] max-md:w-[50px] h-[20px] flex justify-center items-center">
                            <ButtonLoader />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute right-4 bottom-3 bg-catalineBlue flex justify-center items-center rounded-lg p-2">
                          <p className="text-[16px] max-md:text-[12px]">
                            Subscribe
                          </p>
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="max-[900px]:hidden w-1/3 max-[900px]:w-full relative">
            <Image
              src={Healthpriority}
              alt="Clearline app"
              // className="min-[900px]:absolute bottom-0 h-[500px] max-md:h-[350px] object-auto"
              className="h-full object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
