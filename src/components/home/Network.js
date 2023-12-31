import Image from "next/image";
import { DoctorSmiling } from "../../../public/assets/images";
import Button from "@/shared/Button";
import { BlueArrowRight } from "../../../public/assets/svgs";
import Link from "next/link";

export default function Network() {
  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 pt-16">
      <div className="flex max-lg:flex-col-reverse">
        <div className="w-3/5 max-lg:w-full p-24 max-lg:p-16 max-md:p-8 bg-catalineBlue text-white">
          <p className="text-[50px] max-lg:text-[350px] max-md:text-[20px] font-bold text-white mb-6">
            Our wide Hospital <br /> Network.
          </p>
          <p className="text-[24px] max-md:text-[16px] mb-10">
            We have a network of over 1,400+ partner hospitals nationwide, to
            ensure that our enrollees have access to quality medical care
            wherever they might be.
          </p>
          <p className="text-[50px] max-lg:text-[40px] max-md:text-[30px] font-bold">
            1400+
          </p>
          <p className="text-[24px] max-md:text-[16px] mb-16">
            Partner Hospitals
          </p>
          <Button className={`!w-fit !rounded-lg px-4 bg-white`}>
            <Link href={"/providers"}>
              <div className="flex gap-4 items-center">
                <p
                  className={`text-[18px] max-md:text-[14px] !text-catalineBlue`}
                >
                  See our Hospital Network
                </p>
                <Image src={BlueArrowRight} alt="buy a plan" />
              </div>
            </Link>
          </Button>
        </div>
        <div className="w-2/5 max-lg:w-full max-lg:h-[450px] bg-pigeonPost flex justify-center">
          <Image
            src={DoctorSmiling}
            alt="our wide hospital"
            className="object-fill"
          />
        </div>
      </div>
    </div>
  );
}
