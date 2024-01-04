import Image from "next/image";
import { SectionOneImage } from "../../../public/assets/images";

export default function SectionOne() {
  return (
    <div className="flex gap-8 max-lg:flex-col-reverse px-16 max-lg:px-12 max-md:px-8 pt-24 max-md:pt-12">
      <div className="w-1/2 max-lg:w-full">
        <Image
          src={SectionOneImage}
          alt="Here is why Clearline is the Best for you"
          className="object-cover rounded-lg max-md:h-[400px] w-full h-[500px]"
        />
      </div>
      <div className="w-1/2 max-lg:w-full">
        <p className="font-bold text-[32px] max-lg:text-[24px]">
          Here is why Clearline is the Best for you
        </p>
        <div className="min-h-3/5 max-lg:min-h-4/5 flex gap-4">
          <div className="mt-5 relative w-[30px] bg-zircon min-h-full py-4 ">
            <div className="absolute top-[20px] -left-[8px] w-[20px] h-[20px] rounded-full bg-catalineBlue"></div>
            <div className="absolute top-1/2 -left-[8px] w-[20px] h-[20px] rounded-full bg-catalineBlue"></div>
            <div className="absolute bottom-[20px] -left-[8px] w-[20px] h-[20px] rounded-full bg-catalineBlue"></div>
          </div>
          <div className="">
            <div className="mb-10 mt-5">
              <p className="text-[20px] max-md:text-[16px] text-boulder font-light">
                <span className="text-catalineBlue font-medium">
                  Improved wellbeing of your employees:
                </span>{" "}
                Enhance your workforce&apos;s vitality with our HMO, ensuring
                improved well-being for your employees. Our comprehensive health
                plans promote a healthier, more productive workplace,
                prioritizing the holistic health of your team.
              </p>
            </div>
            <div className="mb-10">
              <p className="text-[20px] max-md:text-[16px] text-boulder font-light">
                <span className="text-catalineBlue font-medium">
                  Discover personalized health excellence with ClearLine HMO:
                </span>{" "}
                Tailored plans, a vast provider network, and seamless access to
                quality care – because your well-being deserves the best.
              </p>
            </div>
            <div className="">
              <p className="text-[20px] max-md:text-[16px] text-boulder font-light">
                <span className="text-catalineBlue font-medium">
                  Elevate your family&apos;s health with ClearLineHMO:
                </span>{" "}
                Our tailored plans and extensive provider network ensure quality
                care, because your loved ones deserve the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
