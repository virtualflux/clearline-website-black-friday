import Image from "next/image";
import { AboutBannerImage } from "../../../public/assets/images";

const AboutBanner = () => {
  return (
    <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24">
      <div className="flex max-sm:flex-col justify-between items-center gap-8 max-md:gap-4 mb-16 max-md:mb-6">
        <div className="w-2/5 max-sm:w-full text-[40px] max-lg:text-[30px] max-md:text-[24px] font-bold">
          Welcome to
          <br /> ClearlineHMO Limited
        </div>
        <p className="w-1/2 max-sm:w-full text-boulder text-[24px] max-md:text-[14px]">
          At ClearlineHMO Limited, we pride ourselves on offering innovative and
          comprehensive health solutions tailored to meet your unique needs.
        </p>
      </div>
      <div className="relative w-full h-[500px] max-md:h-[230px] flex flex-col items-center">
        <Image
          src={AboutBannerImage}
          alt="about image"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-[200px] max-md:top-[110px] w-4/5 px-24 py-12 max-lg:px-12 max-lg:py-6 max-md:px-6 max-md:py-3  bg-catalineBlue text-white">
          <p className="text-[40px] max-lg:text-[30px] max-md:text-[24px] mb-4 font-medium">
            Partnering with you to provide robust and affordable healthcare to
            you and your loved ones
          </p>
          <p className="text-[24px] max-md:text-[14px]">
            At Clear Line HMO, we take pride in our commitment to being your
            trusted partner in healthcare. Our mission is to provide not just
            healthcare coverage but a comprehensive and affordable solution for
            you and your loved ones. By partnering with Clear Line HMO,
            you&apos;re gaining access to a network of top-notch healthcare
            providers without the hefty price tag.
          </p>
          <p className="text-[24px] max-md:text-[14px]">
            We understand the importance of robust healthcare that doesn&apos;t
            break the bank. Our plans are designed to be not only cost-effective
            but also inclusive, ensuring that you and your family receive the
            quality care you deserve without compromising on financial peace of
            mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
