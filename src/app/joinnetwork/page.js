"use client"
import React,{useRef,useState} from "react"
import {JoinBanner} from "@/components/providers/Banner"
import PageLayout from "@/layout"
import { useFormik } from "formik"
import { validateForm } from "@/utils/validateProviderRequest"
import ButtonLoader from "@/shared/ButtonLoader"
import Button from "@/shared/Button"
import { toast } from "react-toastify"
import emailjs from "@emailjs/browser"

const Page=()=>{
    const[isLoading,setIsLoading]=useState(false)
    const form =useRef()
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            address:"",
            phoneNumber:"",
            specialty:""
        },
        onSubmit,
        validate:validateForm
    })
    async function onSubmit(values){
        setIsLoading(true);
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
              toast.success("Quote sent successfully!");
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

    setIsLoading(false);
    }
    return(
        <PageLayout>
            <JoinBanner />
            <div className="relative flex justify-center">
            <div className="w-3/5 max-lg:w-4/5 max-sm:w-full bg-white my-6 max-sm:my-3 px-12 max-md:px-8">
                <div className="text-4xl pt-12  max-sm:pt-4 text-catalineBlue font-extrabold text-center">
                    Join Our Provider Network
                </div>
        <form ref={form} onSubmit={formik.handleSubmit} className="py-12 max-sm:py-6">
        <div className="flex max-sm:flex-col gap-4 mb-6 max-sm:mb-4">
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Hospital / Clinic Name</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border  ${formik.touched.name && formik.errors.name?"border-red-500":"border-pigeonPost"}`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name &&<p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>}
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

        <div className="flex max-sm:flex-col gap-4 mb-6 max-sm:mb-4">
        <div className="w-1/2 max-sm:w-full">
          <p className="text-[14px] font-bold mb-2">Specialty</p>
          <select
              name="specialty"
              onChange={formik.getFieldProps("specialty").onChange}
              defaultValue={""}
              className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border ${formik.errors.specialty ?"border-red-500":"border-pigeonPost"}`}
            >
              <option className="font-semibold" value={""} disabled>
                -Select specialty-
              </option>
              {["Medical","Dental","Gym & Spa","Optical","Diagnostics"].map((item, idx) => (
                <option
                  key={idx}
                  className=""
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
         
          {formik.errors.specialty&&<p className="text-red-500 text-xs mt-1">{formik.errors.specialty}</p>}
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
            <p className="text-[14px] font-bold mb-2">Address</p>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className={`w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border ${formik.touched.address && formik.errors.address?"border-red-500":"border-pigeonPost"}`}
              {...formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address &&<p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>}
          </div>
        <div className="flex justify-center">
          <Button
            type={"submit"}
            className={
              "max-sm:!w-full !w-1/2 !rounded-lg !px-4 !text-white bg-catalineBlue"
            }
          >
            {isLoading ? <ButtonLoader /> : "Sign Up"}
          </Button>
        </div>
      </form>
    </div>
            </div>
            
      </PageLayout>
    )
}


export default Page