import Image from "next/image";
import {
  AirPeace,
  CDK,
  CWAY,
  Greenlife,
  Vitafoam,
} from "../../../public/assets/images";

export default function Sponsors() {
  return (
    <div className="bg-zircon px-16 max-lg:px-12 max-md:px-8 py-8 my-12">
      <div className="flex flex-col items-center">
        <p className="text-[20px] max-md:text-[14px] text-center mb-8">
          Here are some of our happy clients
        </p>
        <div className="w-full flex justify-between gap-4 overflow-x-auto">
          <Image src={CDK} alt="Sponsors" />
          <Image src={Greenlife} alt="Sponsors" />
          <Image src={AirPeace} alt="Sponsors" />
          <Image src={Vitafoam} alt="Sponsors" />
          <Image src={CWAY} alt="Sponsors" />
        </div>
      </div>
    </div>
  );
}
