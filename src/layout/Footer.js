"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../../public/assets/svgs";
import { ClearlineWhiteLogo } from "../../public/assets/images";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ButtonLoader from "@/shared/ButtonLoader";
import { toast } from "react-toastify";
import { FaInstagramSquare, FaFacebookSquare, 
  FaRegHandPointRight, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import google from '../../public/assets/images/google-play-icon.png'
import apple from '../../public/assets/images/apple-icon.png'

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
    <div className="text-white bg-catalineBlue px-16 max-lg:px-12 max-md:px-8 pt-12 pb-12">
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
          <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-xl text-white font-bold'>
                        Download Our App
                    </h2>
                    <div className='flex items-center gap-1'>
                        <Link target='_blank' href={'https://play.google.com/store/apps/details?id=com.clear.line&hl=en&pli=1'} 
                        className='flex items-center gap-2 p-2 px-2 bg-white 
                        rounded-md shadow-md'>
                            <Image src={google} width={30} height={30}
                            className='w-[30px] h-[30px] object-contain'/>
                            <p className='text-[10px] text-black text-left'>Get it on <br/> 
                                <span className='text-xs font-semibold'>Google Play</span>
                            </p>
                        </Link>
                        <Link target='_blank' href={'https://apps.apple.com/ng/app/clearline-hmo-mobile/id1612468880'} 
                        className='flex items-center gap-2 p-2 px-2 bg-white 
                        rounded-md shadow-md'>
                            <Image src={apple} width={30} height={30}
                            className='w-[30px] h-[30px] object-contain'/>
                            <p className='text-[10px] text-black text-left'>Download on<br/> 
                                <span className='text-xs font-semibold'>Appstore</span>
                            </p>
                        </Link>
                    </div>
                </div>
        </div>
        <div className="w-1/5 max-lg:w-fit flex flex-col gap-5">
          <p className="text-[24px] max-md:text-[16px] font-bold">Contact us</p>
          <div>
          <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
            Clearline House:
          </p>
            <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
              290 Ikorodu Road, Anthony. Lagos.
            </p>
            <p className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">
              TEL: <span className="underline">0700245245245</span>,{" "}
              
              <span className="underline">09087792965</span>
            </p>
            <Link href="mailto:hello@clearlinehmo.com" className="text-[18px] max-md:text-[12px] font-light text-[#dcdbdb]">

              Email: <span className="underline">hello@clearlinehmo.com</span>
            </Link>
              {/* SOCIAL LINKS */}
              <div className='flex items-center gap-3'>
                        <FaRegHandPointRight className='text-white text-5xl'/>
                        <div className='flex flex-col items-start gap-0'>
                            <h4 className='text-lg text-white'>
                                Follow Us
                            </h4>
                            <div className='flex items-center gap-1'>
                                <Link href={'https://www.facebook.com/profile.php?id=61556669715106&mibextid=LQQJ4d'} 
                                target="_blank"
                                className='text-gray-100 text-base'>
                                    <FaFacebookSquare size={30}/>
                                </Link>
                                <Link href={'https://www.instagram.com/clearlinehmo?utm_source=qr '} 
                                target='_blank'
                                className='text-gray-100 text-base'>
                                    <FaInstagramSquare size={30}/>
                                </Link>
                                <Link href={'https://x.com/clearlinehmo1?s=21'} 
                                target='_blank'
                                className='text-gray-100 text-base'>
                                    <FaSquareXTwitter size={30}/>
                                </Link>
                                <Link href={'https://www.linkedin.com/company/clearline-hmo/'} 
                                target='_blank'
                                className='text-gray-100 text-base'>
                                    <FaLinkedin size={30}/>
                                </Link>
                                <Link href={'https://youtube.com/@clearline_?si=lzMrgPawO2q_f_E8'} 
                                target='_blank'
                                className='text-gray-100 text-base'>
                                    <FaYoutubeSquare size={30}/>
                                </Link>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
