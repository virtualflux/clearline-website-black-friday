import Button from "@/shared/Button";
import Image from "next/image";
import { HomeBanner } from "../../../public/assets/images";
import { ArrowRight, ChatCircle } from "../../../public/assets/svgs";

export default function Banner() {
  return (
    <div className="flex gap-8 justify-between max-lg:flex-col max-md:gap-6 px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24">
      <div className="w-1/2 max-lg:w-full flex flex-col gap-4">
        <p className="w-fit text-[16px] text-green border border-green bg-sugarCane px-[40px] max-lg:px-[30px] py-3 rounded-lg">
          Health insurance
        </p>
        <p className="typing text-ebonyClay font-extrabold text-[50px] max-[1200px]:text-[40px] max-lg:text-[32px]">
          Health Empowered,
          <br /> <span className="text-gradient">Tomorrow Secured.</span>
          <br /> ClearlineHMO
        </p>
        <p className="text-boulder text-[24px] max-md:text-[16px] mb-4">
          Elevate Your Health, Secure Your Future: Welcome to ClearlineHMO,
          Where Comprehensive Coverage Meets Peace of Mind
        </p>
        <div className="flex gap-3">
          <Button className={"!rounded-lg px-4 bg-catalineBlue"}>
            <div className="flex gap-4 items-center">
              <p className="text-[14px] max-md:text-[12px] text-white">
                Buy a plan
              </p>
              <Image src={ArrowRight} alt="buy a plan" />
            </div>
          </Button>
        </div>
      </div>
      <div className="w-1/2 relative max-lg:w-full">
        <Image
          src={HomeBanner}
          alt="Health Unleashed"
          className="w-full h-full object-cover"
        />
        <div className="cursor-pointer absolute bottom-3 right-4 w-[70px] h-[70px] max-md:w-[50px] max-md:h-[50px] rounded-full flex justify-center items-center bg-catalineBlue">
          <Image src={ChatCircle} alt="Elevate Your Health" className="w-3/5" />
        </div>
      </div>
    </div>
  );
}
