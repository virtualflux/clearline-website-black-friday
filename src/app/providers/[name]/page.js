import PageLayout from "@/layout";
import Image from "next/image";
import {
  Calling,
  DummyHospital,
  LocationPointer,
} from "../../../../public/assets/images";
import RelatedHealthCare from "@/components/providers/Related";
import { Rating } from "@mui/material";

export default function Page() {
  return (
    <PageLayout>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mb-3">
        <p className="text-[48px] max-md:text-[32px] font-bold mb-3">
          Hospital full details
        </p>
        <div className="flex max-md:flex-col gap-8 mb-6">
          <div className="w-1/2 max-md:w-full h-[438px] max-md:h-[227px]">
            <Image
              src={DummyHospital}
              alt="Hospital full details"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 max-md:w-full">
            <p className="text-[36px] max-md:text-[24px] font-bold mb-2">
              Jama medical center
            </p>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[21px] h-[21px] rounded-full flex justify-center items-center bg-[#E7EEFF]">
                <Image src={LocationPointer} alt="location" />
              </div>
              <p className="text-boulder text-[20px] max-md:text-[12px] font-light">
                101 Newton Road Ikeja, Lagos
              </p>
            </div>
            <p className="text-boulder text-[20px] max-md:text-[12px] font-light mb-6">
              Jama Medical Center: Delivering quality care with compassion. Your
              health, our priority.
            </p>
            <p className="text-[20px] max-md:text-[12px]">Rate this Hospital</p>
            <p className="text-boulder text-[20px] max-md:text-[12px] font-light mb-4">
              Only users of this hospitals can give ratings
            </p>
            <Rating
              name="simple-controlled"
              size="large"
              // value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            />
          </div>
        </div>
        <p className="text-[32px] max-md:text-[24px] font-bold mb-3">
          Contact Information
        </p>
        <div className="mb-8">
          <div className="flex max-md:flex-col gap-8 mb-8">
            <div className="w-1/2 max-md:w-full">
              <p className="text-[20px] max-md:text-[12px] font-bold mb-2">
                Address
              </p>
              <input
                type="text"
                name="address"
                className="w-full rounded-lg text-[14px] h-[60px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4  bg-[#F6F7FF] border border-[#BACCDF]"
                disabled
                value="101 Newton Road Ikeja, Lagos Nigeria"
              />
            </div>
            <div className="w-1/2 max-md:w-full">
              <p className="text-[20px] max-md:text-[12px] font-bold mb-2">
                Mail Address
              </p>
              <input
                type="text"
                name="mailAddress"
                className="w-full rounded-lg text-[14px] h-[60px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 bg-[#F6F7FF] border border-[#BACCDF]"
                disabled
                value="thispeople@gmail.com"
              />
            </div>
          </div>
          <div className="flex max-md:flex-col gap-8 mb-8">
            <div className="w-1/2 max-md:w-full flex gap-4 flex-wrap">
              {Array.from({ length: 5 }).map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[30px] px-6 py-2 flex justify-center items-center bg-[#F6F7FF] border border-[#BACCDF]"
                >
                  <p>Senior plans</p>
                </div>
              ))}
            </div>
            <div className="w-1/2 max-md:w-full">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[20px] max-md:text-[12px] font-bold">
                  Customer Care
                </p>
                <Image src={Calling} alt="Calling" />
              </div>
              <input
                type="text"
                name="mailAddress"
                className="w-full rounded-lg text-[14px] h-[60px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 bg-[#F6F7FF] border border-[#BACCDF]"
                disabled
                value="thispeople@gmail.com"
              />
            </div>
          </div>
        </div>
        <RelatedHealthCare className="!px-0 max-lg:!px-0 max-md:!px-0" />
      </div>
    </PageLayout>
  );
}
