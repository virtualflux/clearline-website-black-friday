"use client";

import Button from "@/shared/Button";
import { countryList } from "@/utils/data";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";

const QuoteForm = () => {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

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
              toast.success("Quote sent successfully!");
              setMsg("");
              setEmail("");
              setName("");
              setBudget("");
              setPhoneNumber("");
              setCountry("");
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
    <div className="w-3/5 max-lg:w-4/5 max-sm:w-full bg-white shadow-lg rounded-lg my-12 max-sm:my-6 px-12 max-md:px-8">
      <form ref={form} onSubmit={sendEmail} className="py-12 max-sm:py-6">
        <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Company Name</p>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Company Email"
              className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Country</p>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
            >
              <option className="font-semibold text-catalineBlue" value={""}>
                -Select country-
              </option>
              {countryList.map((item, idx) => (
                <option
                  key={idx}
                  className="font-semibold text-catalineBlue"
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Phone Number</p>
            <input
              type="number"
              name="mobile"
              placeholder="Phone number"
              className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-12 max-sm:mb-4">
          <p className="text-[14px] font-bold mb-2">Estimated Budget</p>
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <div className="mb-12">
          <p className="text-[14px] font-bold mb-2">Message</p>
          <textarea
            rows="5"
            type="text"
            name="message"
            placeholder="Leave us a message..."
            className="w-full text-[14px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] p-2 rounded-md border border-pigeonPost"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <Button
            type={"submit"}
            className={
              "max-sm:!w-full !w-1/2 !rounded-lg !px-4 !text-white bg-catalineBlue"
            }
          >
            {isLoading ? <ButtonLoader /> : "Request a quote"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
