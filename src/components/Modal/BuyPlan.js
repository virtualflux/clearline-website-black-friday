import CLearlineModal from "@/layout/Modal";
import { Button } from "@mui/material";

const BuyPlanModal = ({ isOpen, setIsOpen }) => {
  return (
    <CLearlineModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col items-center">
          <p className="w-fit text-catalineBlue text-[20px] max-md:text-[12px] font-medium mb-3 border border-catalineBlue rounded-[30px] p-2">
            BUY PLAN
          </p>
          <p className="font-bold text-[32px] max-md:text-[24px] text-center mb-2">
            Fill in the form
          </p>
          <p className="text-boulder text-[24px] max-md:text-[16px] text-center">
            Make sure you input the correct information in these sections
          </p>
          <div className="my-4">
            <select className="rounded-2xl font-semibold text-catalineBlue border-2 border-[#008BE9] py-2 px-4">
              {[
                { title: "Silver plan" },
                { title: "Bronze plan" },
                { title: "Gold plan" },
                { title: "Gold plus plan" },
                { title: "Platinum plan" },
                { title: "Platinum plus plan" },
              ].map((item, idx) => (
                <option
                  key={idx}
                  className="font-semibold text-catalineBlue"
                  value={item.title}
                >
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <form>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Surname
            </p>
            <input
              type="text"
              name="surname"
              placeholder="Eg ...John"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Other names
            </p>
            <input
              type="text"
              name="otherNames"
              placeholder="Eg ...Snow"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Gender
            </p>
            <select className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-2 border border-[#BACCDF]">
              {[
                { title: "-Select gender-" },
                { title: "Male" },
                { title: "Female" },
              ].map((item, idx) => (
                <option key={idx} className="" value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Title
            </p>
            <select className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-2 border border-[#BACCDF]">
              {[
                { title: "-Select title-" },
                { title: "Mr" },
                { title: "Mrs" },
              ].map((item, idx) => (
                <option key={idx} className="" value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Phone number
            </p>
            <input
              type="text"
              name="phoneNumber"
              placeholder="+23494888992938"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Date of Birth
            </p>
            <input
              type="date"
              name="dob"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Email
            </p>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
            />
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              State of residence
            </p>
            <select className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-2 border border-[#BACCDF]">
              {[
                {
                  title: "-Select state-",
                  value: "",
                },
                {
                  title: "Abia",
                  value: "abia",
                },
                {
                  title: "Adamawa",
                  value: "adamawa",
                },
                {
                  title: "Akwa Ibom",
                  value: "akwa_ibom",
                },
                {
                  title: "Anambra",
                  value: "anambra",
                },
                {
                  title: "Bauchi",
                  value: "bauchi",
                },
                {
                  title: "Bayelsa",
                  value: "bayelsa",
                },
                {
                  title: "Benue",
                  value: "benue",
                },
                {
                  title: "Borno",
                  value: "borno",
                },
                {
                  title: "Cross River",
                  value: "cross_river",
                },
                {
                  title: "Delta",
                  value: "delta",
                },
                {
                  title: "Ebonyi",
                  value: "ebonyi",
                },
                {
                  title: "Edo",
                  value: "edo",
                },
                {
                  title: "Ekiti",
                  value: "ekiti",
                },
                {
                  title: "Enugu",
                  value: "enugu",
                },
                {
                  title: "Gombe",
                  value: "gombe",
                },
                {
                  title: "Imo",
                  value: "imo",
                },
                {
                  title: "Jigawa",
                  value: "jigawa",
                },
                {
                  title: "Kaduna",
                  value: "kaduna",
                },
                {
                  title: "Kano",
                  value: "kano",
                },
                {
                  title: "Katsina",
                  value: "katsina",
                },
                {
                  title: "Kebbi",
                  value: "kebbi",
                },
                {
                  title: "Kogi",
                  value: "kogi",
                },
                {
                  title: "Kwara",
                  value: "kwara",
                },
                {
                  title: "Lagos",
                  value: "lagos",
                },
                {
                  title: "Nasarawa",
                  value: "nasarawa",
                },
                {
                  title: "Niger",
                  value: "niger",
                },
                {
                  title: "Ogun",
                  value: "ogun",
                },
                {
                  title: "Ondo",
                  value: "ondo",
                },
                {
                  title: "Osun",
                  value: "osun",
                },
                {
                  title: "Oyo",
                  value: "oyo",
                },
                {
                  title: "Plateau",
                  value: "plateau",
                },
                {
                  title: "Rivers",
                  value: "rivers",
                },
                {
                  title: "Sokoto",
                  value: "sokoto",
                },
                {
                  title: "Taraba",
                  value: "taraba",
                },
                {
                  title: "Yobe",
                  value: "yobe",
                },
                {
                  title: "Zamfara",
                  value: "zamfara",
                },
              ].map((item, idx) => (
                <option key={idx} className="" value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[30%] max-md:w-full">
            <p className="text-[16px] max-md:text-[12px] font-medium mb-2">
              Address
            </p>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
            />
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <div className="w-1/2">
            <Button
              type={"button"}
              className={
                "!w-full !rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
              }
            >
              Proceed
            </Button>
          </div>
        </div>
      </form>
    </CLearlineModal>
  );
};

export default BuyPlanModal;
