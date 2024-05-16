"use client"
import React,{useEffect, useRef,useState} from "react"
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
    
    return(
        <PageLayout>
            <JoinBanner />
            <div className="relative flex justify-center">
            <div className="w-3/5 max-lg:w-4/5 max-sm:w-full bg-white my-6 max-sm:my-3 px-12 max-md:px-8 flex flex-col gap-2">
                <div className="">
                <iframe aria-label='Sign up as a Provider' style={{height:"780px",width:"80%",border:"none"}} src='https://forms.zohopublic.com/clearlinehmo/form/SignupasaProvider1/formperma/pUNfBJhijjeg-gkfCvcZjlmsz2idc7HEbnvf26y3aOQ'></iframe>
                </div>
    </div>
            </div>
            
      </PageLayout>
    )
}


export default Page