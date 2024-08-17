"use client";

import CLearlineModal from "@/layout/Modal";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";
import { usePaymentGateway } from "@/hooks/usePaystack";
import { useFormik } from "formik";
import { validateForm } from "@/utils/validateForm";
import { genderList, planList, stateList, titleList } from "@/utils/data";

const BuyPlanModal = ({ isOpen, setIsOpen }) => {
  const form = useRef();
  const formik=useFormik({
    initialValues:{
      plan:"",
      email:"",
      surname:"",
      otherNames:"",
      gender:"",
      title:"",
      phoneNumber:"",
      dob:"",
      state:"",
      address:"",
    },
    onSubmit,
    validate:validateForm,
    initialErrors:{
      plan:"Select a plan",
      email:"Please enter your email address",
      surname:"Please enter surname",
      otherNames:"Please enter other names",
      gender:"Please select your gender",
      title:"Please Select a title",
      phoneNumber:"Please enter phone number",
      dob:"Please enter a birth date",
      state:"Please select a state",
      address:"Please enter your address"
    }
  })
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  ).toISOString().split("T")[0]; 

  const {initializePayment, onClose, onSuccess}=usePaymentGateway(formik)
  
  async function onSubmit (values)  {
    initializePayment(onSuccess, onClose)
    try {
      await emailjs
        .send(
          "contact_service",
          "contact_form",
          {...values},
          "OTdU-O6vdb3nS4UFz"
        )
        .then(
          ({ status }) => {
            if (status === 200) {
              setIsOpen(false);
              toast.success("Plan purchase sent successfully!");
              formik.resetForm()
            }
          },
          (error) => {
            toast.error(`Oh no, ${error.text}!`);
          }
        );
    } catch (error) {
      console.log(error);
    }
    setIsOpen(false)
  };

  return (
    <CLearlineModal isOpen={isOpen} onClose={() =>{ 
      setIsOpen(false)
      formik.resetForm()
    }}>
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col items-center">
          <p className="w-fit text-catalineBlue text-[20px] max-md:text-[12px] 
          font-medium mb-3 border border-catalineBlue rounded-[30px] p-2">
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
              name="plan"
              defaultValue={""}
              onChange={formik.getFieldProps("plan").onChange}
              className="rounded-lg font-semibold text-catalineBlue border-2 border-[#008BE9] py-2 px-4"
            >
              {planList.map((item, idx) => (
                <option
                  key={idx}
                  className="font-semibold text-catalineBlue"
                  value={item.value}
                  disabled={idx==0}
                >
                  {item.title}
                </option>
              ))}
            </select>
            {formik.touched.plan && formik.errors.plan &&<p className="text-red-500 text-xs mt-1">{formik.errors.plan}</p>}
          </div>
        </div>
      </div>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Surname
            </p>
            <input
              type="text"
              name="surname"
              placeholder="e.g ...John"
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-4 border ${formik.touched.surname && formik.errors.surname?"border-red-500":"border-[#BACCDF]"} `}
              {...formik.getFieldProps("surname")}
            />
          {formik.touched.surname && formik.errors.surname &&<p className="text-red-500 text-xs mt-1">{formik.errors.surname}</p>}
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Other names
            </p>
            <input
              type="text"
              name="otherNames"
              placeholder="Eg ...Snow"
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-4 border ${formik.touched.otherNames && formik.errors.otherNames? "border-red-500":"border-[#BACCDF]"} `}
              {...formik.getFieldProps("otherNames")}
              
            />
            {formik.touched.otherNames && formik.errors.otherNames &&<p className="text-red-500 text-xs mt-1">{formik.errors.otherNames}</p>}
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Gender
            </p>
            <select
              name="gender"
              defaultValue={""}
              onChange={formik.getFieldProps("gender").onChange}
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-2 border ${formik.touched.gender && formik.errors.gender ?"border-red-500":"border-[#BACCDF]"}`}
            >
              {genderList.map((item, idx) => (
                <option key={idx} className="" value={item.value} disabled={idx==0}>
                  {item.title}
                </option>
              ))}
            </select>
            {formik.touched.gender && formik.errors.gender &&<p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Title
            </p>
            <select
              name="title"
              onChange={formik.getFieldProps("title").onChange}
              defaultValue={""}
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-2 border ${formik.touched.tittle && formik.errors.title ?"border-red-500":"border-[#BACCDF]"}`}
            >
              {titleList.map((item, idx) => (
                <option key={idx} className="" value={item.value} disabled={idx==0}>
                  {item.title}
                </option>
              ))}
            </select>
            {formik.errors.tittle && formik.errors.title &&<p className="text-red-500 text-xs mt-1">{formik.errors.title}</p>}
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Phone number
            </p>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="2349000000000"
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-4 border ${formik.touched.phoneNumber && formik.errors.phoneNumber?"border-red-500": "border-[#BACCDF]"}`}
              {...formik.getFieldProps("phoneNumber")}
    
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber &&<p className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</p>}
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Date of Birth
            </p>
            <input
              type="date"
              name="dob"
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-4 border ${formik.touched.dob && formik.errors.dob?"border-red-500":"border-[#BACCDF]"}`}
              {...formik.getFieldProps("dob")}
              max={minDate}
            />
            {formik.touched.dob && formik.errors.dob &&<p className="text-red-500 text-xs mt-1">{formik.errors.dob}</p>}
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
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-4 border ${formik.touched.email && formik.errors.email?"border-red-500":"border-[#BACCDF]"}`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email &&<p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              State of residence
            </p>
            <select
              name="state"
              onChange={formik.getFieldProps("state").onChange}
              defaultValue={""}
      
            
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-2 border ${formik.touched.state && formik.errors.state?"border-red-500":"border-[#BACCDF]"}`}
            >
              {stateList.map((item, idx) => (
                <option key={idx} className="" value={item.value} disabled={idx==0}>
                  {item.title}
                </option>
              ))}
            </select>
            {formik.touched.state && formik.errors.state &&<p className="text-red-500 text-xs mt-1">{formik.errors.state}</p>}
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Address
            </p>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              className={`w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-neutral-400 px-4 border ${formik.touched.address && formik.errors.address?"border-red-500":"border-[#BACCDF]"}`}
              {...formik.getFieldProps("address")}
  
            />
            {formik.touched.address && formik.errors.address &&<p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>}
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="w-1/2">
            <Button
              type={"submit"}
              className={
                "!w-full !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
              }
              disabled={formik.isSubmitting}
              
            >
              {formik.isSubmitting ? <ButtonLoader /> : "Proceed"}
            </Button>
          </div>
        </div>
      </form>
    </CLearlineModal>
  );
};

export default BuyPlanModal;
