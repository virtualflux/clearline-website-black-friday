import Image from "next/image";
import { DummyHospital } from "../../../public/assets/images";
import Button from "@/shared/Button";

const RelatedCard = () => {
  return (
    <div className="w-[400px] max-md:w-[280px] flex-shrink-0 rounded-lg border border-pigeonPost">
      <div className="h-[186px] w-full">
        <Image
          src={DummyHospital}
          alt={"hospital"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-2 justify-between items-end mb-3">
          <div>
            <p className="text-[16px] max-md:text-[12px] font-semibold mb-2">
              Jama Medical Center
            </p>
            <p className="text-[12px] max-md:text-[10px] text-catalineBlue">
              101 Newton Road Ikeja
            </p>
          </div>
          <p className="text-[12px] max-md:text-[10px] text-catalineBlue underline">
            copy address
          </p>
        </div>
        <div>
          <Button
            type={"button"}
            className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue"}
          >
            <p className="text-[14px] max-md:text-[12px]">Full details</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
