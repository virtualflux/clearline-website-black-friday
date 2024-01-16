"use client";

import CLearlineModal from "@/layout/Modal";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";

const BuyPlanModal = ({ isOpen, setIsOpen }) => {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [names, setNames] = useState("");
  const [gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");

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
              setIsOpen(false);
              toast.success("Plan purchase sent successfully!");
              setPlan("");
              setEmail("");
              setSurname("");
              setNames("");
              setGender("");
              setTitle("");
              setPhoneNumber("");
              setDob("");
              setState("");
              setAddress("");
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
    <CLearlineModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col items-center">
          <p className="w-fit text-catalineBlue text-[20px] max-md:text-[12px] font-medium mb-3 border border-catalineBlue rounded-[30px] p-2">
            BUY PLAN
          </p>
          <p className="font-bold text-[32px] max-md:text-[24px] text-center mb-2">
            Fill in the form
          </p>
          <p className="text-boulder text-[24px] max-md:text-[16px] text-center">
            Make sure you input the correct information in these sections
          </p>
          <div className="my-4">
            <select
              value={plan}
              required
              onChange={(e) => setPlan(e.target.value)}
              className="rounded-2xl font-semibold text-catalineBlue border-2 border-[#008BE9] py-2 px-4"
            >
              {[
                { title: "Choose plan", value: "" },
                { title: "Silver plan", value: "Silver" },
                { title: "Bronze plan", value: "Bronze" },
                { title: "Gold plan", value: "Gold" },
                { title: "Gold plus plan", value: "Plus" },
                { title: "Platinum plan", value: "Platinum" },
                { title: "Platinum plus plan", value: "Plus" },
              ].map((item, idx) => (
                <option
                  key={idx}
                  className="font-semibold text-catalineBlue"
                  value={item.value}
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Surname
            </p>
            <input
              type="text"
              name="surname"
              placeholder="Eg ...John"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Other names
            </p>
            <input
              type="text"
              name="otherNames"
              placeholder="Eg ...Snow"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              required
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Gender
            </p>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-2 border border-[#BACCDF]"
            >
              {[
                { title: "-Select gender-", value: "" },
                { title: "Male", value: "male" },
                { title: "Female", value: "female" },
              ].map((item, idx) => (
                <option key={idx} className="" value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Title
            </p>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-2 border border-[#BACCDF]"
            >
              {[
                { title: "-Select title-", value: "" },
                { title: "Mr", value: "mr" },
                { title: "Mrs", value: "mrs" },
              ].map((item, idx) => (
                <option key={idx} className="" value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Phone number
            </p>
            <input
              type="number"
              name="phoneNumber"
              placeholder="23494888992938"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Date of Birth
            </p>
            <input
              type="date"
              name="dob"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Email
            </p>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              State of residence
            </p>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-2 border border-[#BACCDF]"
            >
              {[
                {
                  title: "-Select state-",
                  value: "",
                },
                {
                  title: "Abia",
                  value: "abia",
                },
                {
                  title: "Adamawa",
                  value: "adamawa",
                },
                {
                  title: "Akwa Ibom",
                  value: "akwa_ibom",
                },
                {
                  title: "Anambra",
                  value: "anambra",
                },
                {
                  title: "Bauchi",
                  value: "bauchi",
                },
                {
                  title: "Bayelsa",
                  value: "bayelsa",
                },
                {
                  title: "Benue",
                  value: "benue",
                },
                {
                  title: "Borno",
                  value: "borno",
                },
                {
                  title: "Cross River",
                  value: "cross_river",
                },
                {
                  title: "Delta",
                  value: "delta",
                },
                {
                  title: "Ebonyi",
                  value: "ebonyi",
                },
                {
                  title: "Edo",
                  value: "edo",
                },
                {
                  title: "Ekiti",
                  value: "ekiti",
                },
                {
                  title: "Enugu",
                  value: "enugu",
                },
                {
                  title: "Gombe",
                  value: "gombe",
                },
                {
                  title: "Imo",
                  value: "imo",
                },
                {
                  title: "Jigawa",
                  value: "jigawa",
                },
                {
                  title: "Kaduna",
                  value: "kaduna",
                },
                {
                  title: "Kano",
                  value: "kano",
                },
                {
                  title: "Katsina",
                  value: "katsina",
                },
                {
                  title: "Kebbi",
                  value: "kebbi",
                },
                {
                  title: "Kogi",
                  value: "kogi",
                },
                {
                  title: "Kwara",
                  value: "kwara",
                },
                {
                  title: "Lagos",
                  value: "lagos",
                },
                {
                  title: "Nasarawa",
                  value: "nasarawa",
                },
                {
                  title: "Niger",
                  value: "niger",
                },
                {
                  title: "Ogun",
                  value: "ogun",
                },
                {
                  title: "Ondo",
                  value: "ondo",
                },
                {
                  title: "Osun",
                  value: "osun",
                },
                {
                  title: "Oyo",
                  value: "oyo",
                },
                {
                  title: "Plateau",
                  value: "plateau",
                },
                {
                  title: "Rivers",
                  value: "rivers",
                },
                {
                  title: "Sokoto",
                  value: "sokoto",
                },
                {
                  title: "Taraba",
                  value: "taraba",
                },
                {
                  title: "Yobe",
                  value: "yobe",
                },
                {
                  title: "Zamfara",
                  value: "zamfara",
                },
              ].map((item, idx) => (
                <option key={idx} className="" value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Address
            </p>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="w-1/2">
            <Button
              type={"submit"}
              className={
                "!w-full !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
              }
            >
              {isLoading ? <ButtonLoader /> : "Proceed"}
            </Button>
          </div>
        </div>
      </form>
    </CLearlineModal>
  );
};

export default BuyPlanModal;
