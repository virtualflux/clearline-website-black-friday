import Image from "next/image";
import { QuotationLeft, QuotationRight } from "../../../public/assets/images";

const TestimonialCard = ({ text, name, title }) => {
  return (
    <div className="w-[650px] max-md:h-[320px] max-lg:w-[400px] max-md:w-[350px] px-10 py-10 max-md:px-6 shadow-lg rounded-xl flex flex-col items-center">
      <div className="flex">
        <div className="w-[50px]">
          <Image
            src={QuotationLeft}
            alt="testimonial"
            className="h-[15px] max-lg:h-[10px] w-full"
          />
        </div>
        <p className="text-center text-[#43464B] text-[16px] max-md:text-[11px]">
          {text}
        </p>
        <div className="h-full w-[50px] flex items-end">
          <Image
            src={QuotationRight}
            alt="testimonial"
            className="h-[15px] max-lg:h-[10px] w-full"
          />
        </div>
      </div>
      <div>
        <p className="mt-6 text-catalineBlue text-[16px] max-md:text-[11px] font-bold text-center">
          {name}
        </p>
        <p className="text-catalineBlue text-[14px] max-md:text-[10px] text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
