"use client";

import Button from "@/shared/Button";
import useIsVisible from "@/hooks/useIsVisible";
import "animate.css";
import PageLayout from "@/layout";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";
import Head from "next/head";
export default function Contact() {
  const elemRef = useRef();
  const form = useRef();

  const isVisible = useIsVisible(elemRef);

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
              toast.success("Thank you for contacting us!");
              setMsg("");
              setEmail("");
              setFirstName("");
              setLastName("");
              setPhoneNumber("");
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
    
    <PageLayout>
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
          <form ref={form} onSubmit={sendEmail} className="my-12">
            <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
              <div className="w-1/2 max-sm:w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2 max-sm:w-full">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2 max-sm:w-full">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Phone number"
                  className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex gap-4 mb-12">
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="w-full text-[18px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-black border-b border-pigeonPost"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
              />
            </div>
            <Button
              type={"submit"}
              className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue"}
            >
              {isLoading ? <ButtonLoader /> : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
