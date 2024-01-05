import Button from "@/shared/Button";
import { countryList } from "@/utils/data";

const QuoteForm = () => {
  return (
    <div className="w-3/5 max-lg:w-4/5 max-sm:w-full bg-white shadow-lg rounded-lg my-12 max-sm:my-6 px-12 max-md:px-8">
      <form className="py-12 max-sm:py-6">
        <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Company Name</p>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Company Email"
              className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
            />
          </div>
        </div>

        <div className="flex max-sm:flex-col gap-4 mb-12 max-sm:mb-4">
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Country</p>
            <select className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost">
              <option className="font-semibold text-catalineBlue" value={""}>
                -Select country-
              </option>
              {countryList.map((item, idx) => (
                <option
                  key={idx}
                  className="font-semibold text-catalineBlue"
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <p className="text-[14px] font-bold mb-2">Phone Number</p>
            <input
              type="text"
              name="mobile"
              placeholder="Phone number"
              className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
            />
          </div>
        </div>
        <div className="mb-12 max-sm:mb-4">
          <p className="text-[14px] font-bold mb-2">Estimated Budget</p>
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="w-full text-[14px] h-[50px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] px-2 rounded-md border border-pigeonPost"
          />
        </div>
        <div className="mb-12">
          <p className="text-[14px] font-bold mb-2">Message</p>
          <textarea
            rows="5"
            type="text"
            name="message"
            placeholder="Leave us a message..."
            className="w-full text-[14px] focus:outline-none text-black font-medium placeholder:text-[16px] placeholder:text-[#BACCDF] p-2 rounded-md border border-pigeonPost"
          />
        </div>
        <div className="flex justify-center">
          <Button
            type={"button"}
            className={
              "max-sm:!w-full !rounded-lg !px-4 !text-white bg-catalineBlue"
            }
          >
            Request a quote
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
