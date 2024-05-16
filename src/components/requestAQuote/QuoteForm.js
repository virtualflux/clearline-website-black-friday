"use client";

import Button from "@/shared/Button";
import { countryList } from "@/utils/data";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { validateForm } from "@/utils/validateQuoteRequest";
const QuoteForm = () => {
  const form = useRef();
  const formik=useFormik({
    initialValues:{
      msg:"",
      email:"",
      name:"",
      country:"",
      phoneNumber:"",
      budget:"" 
    },
    onSubmit:sendEmail,
    validate:validateForm
  })


  async function sendEmail (values){
    // try {
    //   await emailjs
    //     .send(
    //       "contact_service",
    //       "contact_form",
    //       {...values,budget:values.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")},
    //       "OTdU-O6vdb3nS4UFz"
    //     )
    //     .then(
    //       ({ status }) => {
    //         if (status === 200) {
    //           toast.success("Quote sent successfully!");
    //          formik.resetForm()
    //         }
    //       },
    //       (error) => {
    //         toast.error(`Oh no, ${error.text}!`);
    //       }
    //     );
    // } catch (error) {
    //   console.log(error);
    // }

    setIsLoading(false);
  };

  return (
    <div className="w-3/5 max-lg:w-4/5 max-sm:w-full bg-white shadow-lg rounded-lg my-12 max-sm:my-6 px-12 max-md:px-8">
      <form ref={form} onSubmit={formik.handleSubmit} className="py-12 max-sm:py-6">
        <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Company Name</p>
            <input
              type="text"
              name="name"
              placeholder="Company Name"
              className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border  ${formik.touched.name && formik.errors.name?"border-red-500":"border-pigeonPost"}`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.companyName && formik.errors.companyName &&<p className="text-red-500 text-xs mt-1">{formik.errors.companyName}</p>}
          </div>
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Company Email"
              className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border ${formik.touched.email && formik.errors.email?"border-red-500":"border-pigeonPost"}`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email &&<p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
          </div>
        </div>

        <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Country</p>
            <select
              name="country"
              onChange={formik.getFieldProps("country").onChange}
              defaultValue={""}
              className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border ${formik.errors.country ?"border-red-500":"border-pigeonPost"}`}
            >
              <option className="font-semibold text-catalineBlue" value={""} disabled>
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
            {formik.errors.country &&<p className="text-red-500 text-xs mt-1">{formik.errors.country}</p>}
          </div>
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Phone Number</p>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border ${formik.touched.phoneNumber && formik.errors.phoneNumber?"border-red-500":"border-pigeonPost"}`}
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber &&<p className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</p>}
          </div>
        </div>
        <div className="mb-12 max-sm:mb-4">
          <p className="text-[14px] font-bold mb-2">Estimated Budget</p>
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border removescroll ${formik.touched.budget && formik.errors.budget?"border-red-500":"border-pigeonPost"}`}
            {...formik.getFieldProps("budget")}
          />
          {formik.touched.budget && formik.errors.budget &&<p className="text-red-500 text-xs mt-1">{formik.errors.budget}</p>}
        </div>
        <div className="mb-12">
          <p className="text-[14px] font-bold mb-2">Message</p>
          <textarea
            rows="5"
            type="text"
            name="message"
            placeholder="Leave us a message..."
            className="w-full text-[14px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] p-2 rounded-md border border-pigeonPost resize-none"
           {...formik.getFieldProps("msg")}
          />
        </div>
        <div className="flex justify-center">
          <Button
            type={"submit"}
            className={
              "max-sm:!w-full !w-1/2 !rounded-lg !px-4 !text-white bg-catalineBlue"
            }
          >
            {formik.isSubmitting ? <ButtonLoader /> : "Request a quote"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
