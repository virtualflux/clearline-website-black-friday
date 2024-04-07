"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../../public/assets/svgs";
import { ClearlineWhiteLogo } from "../../public/assets/images";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";

export default function Footer() {
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
    <div className="text-white bg-catalineBlue px-16 max-lg:px-12 max-md:px-8 pt-12 mt-12 pb-12">
      <div className="flex justify-between flex-wrap gap-8">
        <div className="w-1/5 max-lg:w-fit flex flex-col gap-5 mb-4">
          <div className="mb-4 w-[200px] max-md:w-[120px]">
            <Image src={ClearlineWhiteLogo} alt="clearline" />
          </div>
          <p className="text-[24px] max-md:text-[16px] font-bold mb-4">
            Quick Links
          </p>
          <Link
            href={"/"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            Hospital Directory old
          </Link>
          <Link
            href={"/our-story"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            About us
          </Link>
          <Link
            href={"/resources"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            Resources
          </Link>
        </div>
        <div className="w-1/5 max-lg:w-fit flex flex-col gap-5 mb-4">
          <p className="text-[24px] max-md:text-[16px] font-bold mb-4">
            Our Health Plans
          </p>
          <Link
            href={"/corporate"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            Corporate Health insurance Policy
          </Link>
          <Link
            href={"/retail"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            Retail Health insurance Policy
          </Link>
          <Link
            href={"#"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            SME Health insurance Policy
          </Link>
          <Link
            href={"/resources"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            Tertiary Institution Social Health
          </Link>
          <Link
            href={"/resources"}
            className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]"
          >
            Insurance Program (TISHIP)
          </Link>
        </div>
        <div className="w-1/5 max-lg:w-fit flex flex-col gap-5 mb-4">
          <p className="text-[24px] max-md:text-[16px] font-bold mb-4">
            Our Health Plans
          </p>
          <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
            To receive update via our newsletter, kindly input your email
            address in the tab below:
          </p>
          <form ref={form} onSubmit={sendEmail} className="relative">
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
              <div className="absolute right-4 bottom-4 bg-catalineBlue w-[35px] h-[35px] flex justify-center items-center rounded-lg p-2">
                <div className="flex justify-center items-center">
                  {isLoading ? (
                    <ButtonLoader />
                  ) : (
                    <Image src={ArrowRight} alt="email address" />
                  )}
                </div>
              </div>
            </button>
          </form>
        </div>
        <div className="w-1/5 max-lg:w-fit flex flex-col gap-5">
          <p className="text-[24px] max-md:text-[16px] font-bold">Contact us</p>
          <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
            Clearline House:
          </p>
          <div>
            <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
              290 Ikorodu Road, Anthony. Lagos.
            </p>
            <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
              TEL: <span className="underline">0700245245245</span>,{" "}
              
              <span className="underline">09087792965</span>
            </p>
            <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
              Email: <span className="underline">hello@clearlinehmo.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
