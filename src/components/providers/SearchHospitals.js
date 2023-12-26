import Image from "next/image";
import { SearchIcon } from "../../../public/assets/svgs";
import Button from "@/shared/Button";

const SearchHospitals = () => {
  return (
    <div className="">
      <form className="px-16 max-[970px]:px-0">
        <div className="w-full max-[970px]:mb-10 relative -top-[60px] max-[970px]:top-0 bg-white rounded-lg shadow-lg flex max-[970px]:flex-col max-[970px]:items-start items-end gap-3 p-8">
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Search</p>
            <div className="relative">
              <input
                type="text"
                name="keyword"
                placeholder="Search keyword"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Location</p>
            <div className="relative">
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Clinic</p>
            <div className="relative">
              <input
                type="text"
                name="clinic"
                placeholder="Maternity Clinics"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <p className="text-[14px] font-bold mb-2">Plans</p>
            <div className="relative">
              <input
                type="text"
                name="plans"
                placeholder="Senior Plans"
                className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[14px] placeholder:text-[#6C7780] rounded-lg border border-pigeonPost pl-8"
              />
              <div className="absolute left-2 bottom-4">
                <Image src={SearchIcon} alt="Search keyword" />
              </div>
            </div>
          </div>
          <div className="w-1/5 max-[970px]:w-full">
            <Button
              type={"button"}
              className={"!w-full !rounded-lg px-4 !text-white bg-catalineBlue"}
            >
              <p className="text-[14px] max-md:text-[12px]">Search</p>
            </Button>
          </div>
        </div>
      </form>
      <div className="px-16 max-lg:px-12 max-md:px-8">
        <p className="text-[32px] max-md:text-[24px] font-bold">
          Hospitals near you
        </p>
      </div>
    </div>
  );
};

export default SearchHospitals;
