import Image from "next/image";
import {
  tripleGreenArrowLeft,
  tripleGreenArrowRight,
} from "../../../public/assets/svgs";
import Button from "@/shared/Button";
import {
  AppleLogo,
  PhonesImage,
  PlayStoreLogo,
} from "../../../public/assets/images";

export default function BottomSection() {
  return (
    <div>
      <div className="bg-catalineBlue px-16 max-lg:px-12 max-md:px-8 my-12">
        <div className="flex max-[900px]:flex-col gap-8 max-md:gap-0">
          <div className="w-1/2 max-[900px]:w-full">
            <Image src={PhonesImage} alt="Clearline app" className="" />
          </div>
          <div className="w-1/2 max-[900px]:w-full py-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={tripleGreenArrowRight}
                alt="Introducing Our Revamped Mobile App"
              />
              <p className="text-[20px] max-md:text-[16px]">
                Introducing Our Revamped Mobile App
              </p>
              <Image
                src={tripleGreenArrowLeft}
                alt="Introducing Our Revamped Mobile App"
              />
            </div>
            <p className="text-[28px] max-md:text-[16px] font-medium mb-4">
              Your Health Insurance, Right in Your Pocket
            </p>
            <p className="text-[16px] max-md:text-[12px]">
              Our mobile app provides convenient access to your policy details,
              claims processing, and healthcare resources, empowering you to
              manage your health insurance effortlessly on the go.
            </p>
            <div className="flex gap-8 flex-wrap mt-6">
              <Button className="!bg-white !text-black !flex !items-center !gap-2 !rounded-lg !py-2 !px-4">
                <Image src={PlayStoreLogo} alt="google play" />
                <div className="flex flex-col items-start font-semibold">
                  <p className="text-[6px]">GET IT ON</p>
                  <p className="text-[12px]">Google Play</p>
                </div>
              </Button>
              <Button className="!bg-white !text-black !flex !items-center !gap-2 !rounded-lg !py-2 !px-4">
                <Image src={AppleLogo} alt="apple store" />
                <div className="flex flex-col items-start font-semibold">
                  <p className="text-[6px]">Download on the</p>
                  <p className="text-[12px]">App Store</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>hmm</div>
    </div>
  );
}
