import CLearlineModal from "@/layout/Modal";

const BuyPlanModal = ({ isOpen, setIsOpen }) => {
  return (
    <CLearlineModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex justify-center">
        <div className="w-1/2 flex flex-col items-center">
          <p className="w-fit text-catalineBlue text-[20px] max-md:text-[12px] font-medium mb-3 border border-catalineBlue rounded-[30px] p-2">
            BUY PLAN
          </p>
          <p className="font-bold text-[48px] max-lg:text-[32px] max-md:text-[24px] text-center mb-2">
            Fill in the form
          </p>
          <p className="text-boulder text-[32px] max-lg:text-[24px] max-md:text-[16px] text-center">
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
        <div className="flex flex-wrap gap-3">
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
            <input
              type="text"
              name="mailAddress"
              placeholder="Eg ...John"
              className="w-full rounded-lg text-[14px] h-[40px] focus:outline-none text-black placeholder:text-xs placeholder:text-black px-4 border border-[#BACCDF]"
            />
          </div>
        </div>
      </form>
    </CLearlineModal>
  );
};

export default BuyPlanModal;
