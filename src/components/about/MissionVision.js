import Image from "next/image";
import { MissionImage } from "../../../public/assets/images";

const MissionVision = () => {
  return (
    <div className="mt-[300px] max-[1300px]:mt-[400px] max-[900px]:mt-[500px] max-[780px]:mt-[600px] max-[768px]:mt-[300px] max-[570px]:mt-[400px] max-[490px]:mt-[480px] max-[450px]:mt-[520px] max-[410px]:mt-[580px] max-[400px]:mt-[650px] px-16 max-lg:px-12 max-md:px-8 flex max-[900px]:flex-wrap justify-between gap-8 max-md:gap-4">
      <div>
        <Image
          src={MissionImage}
          alt="Mission vision"
          className="h-[450px] max-md:h-[258px] object-cover"
        />
      </div>
      <div>
        <p className="text-catalineBlue font-bold text-[40px] max-lg:text-[30px] max-md:text-[24px]">
          Our Mission
        </p>
        <p className="text-boulder text-[24px] max-md:text-[14px] mb-6">
          To provide access to prompt, qualitative and value-added medical care
          for our clients using healthcare financing management and other
          multi-disciplinary techniques.
        </p>
        <p className="text-catalineBlue font-bold text-[40px] max-lg:text-[30px] max-md:text-[24px]">
          Our Vision
        </p>
        <p className="text-boulder text-[24px] max-md:text-[14px] mb-6">
          To be the most responsive HMO.
        </p>
        <div className="flex justify-between gap-8 max-md:gap-4">
          <div className="w-1/3">
            <p className="text-catalineBlue font-bold text-[24px] max-md:text-[14px]">
              30 Yrs of experience
            </p>
            <p className="text-boulder text-[16px] max-md:text-[12px]">
              Almost 3 decades of offering quality and affordable health plans
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-catalineBlue font-bold text-[24px] max-md:text-[14px]">
              1,400+ Health providers
            </p>
            <p className="text-boulder text-[16px] max-md:text-[12px]">
              Get access to quality healthcare from any provider of choice
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-catalineBlue font-bold text-[24px] max-md:text-[14px]">
              1 Billion Naira Capital Base
            </p>
            <p className="text-boulder text-[16px] max-md:text-[12px]">
              as against the capital requirement of 400 Million Naira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
