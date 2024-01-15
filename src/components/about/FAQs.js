"use client";

import Image from "next/image";
import { useState } from "react";
import { Add, Minus } from "../../../public/assets/svgs";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const FAQs = [
    {
      question: "What is Clearline HMO?",
      answer:
        "Clearline HMO is a health maintenance organization that provides comprehensive health insurance plans. We offer a range of coverage options to ensure you have access to quality healthcare services.",
    },
    {
      question: "How do I enroll in Clearline HMO health insurance?",
      answer:
        "You can enroll to Clearline HMO health insurance by choosing your plan and filling the form. We will get back to you within 24hrs after submission.",
    },
    {
      question: "What services are covered by Clearline HMO?",
      answer:
        "We offer a range of coverage options to ensure you have access to quality healthcare services for Individuals, corporate and students. Kindly take a look at our plan and select the best option for you.",
    },
    {
      question: "Can I book my insurance physically?",
      answer:
        "Sure! CelarlineHMO has its physical office located at 290 Ikorodu Road, Anthony. Lagos.",
    },
  ];

  return (
    <div className="px-16 max-lg:px-12 max-md:px-8">
      <div className="flex flex-col items-center pt-16 max-md:pt-8">
        <p className="text-catalineBlue text-[32px] max-md:text-[20px]">FAQ</p>
        <p className="text-[50px] max-lg:text-[32px] max-md:text-[20px] font-bold text-center">
          Frequently Asked Questions
        </p>
        <p className="text-boulder text-[36px] max-lg:text-[24px] max-md:text-[16px] text-center">
          We give answers to various kinds of questions from our users
        </p>
      </div>
      <div className="mt-12">
        {FAQs.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer p-6 max-md:p-3 mb-4 rounded-lg ${
              index === activeIndex
                ? "bg-catalineBlue text-white"
                : "bg-zircon text-black"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between">
              <div className="max-w-[90%]">
                <p className="text-[20px] max-md:text-[12px]">
                  {item.question}
                </p>
                {index === activeIndex && (
                  <p className="pt-4 text-[#DADADA] text-[16px] max-md:text-[10px]">
                    {item.answer}
                  </p>
                )}
              </div>
              <div>
                {index === activeIndex ? (
                  <Image src={Add} alt="open" />
                ) : (
                  <Image src={Minus} alt="close" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
