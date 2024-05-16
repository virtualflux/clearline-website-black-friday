import { Button } from "@mui/base";
import Link from "next/link";

const Business = ({formFunc}) => {
  return (

    <div className="flex flex-col">
      <p className="text-boulder text-[26px] max-md:text-[18px] font-light mb-6">
        Our tailored solutions are designed to elevate not just the health but
        also the productivity and overall morale of your team. With
        comprehensive health coverage, we go beyond the basics, reinforcing a
        workplace culture that prioritizes the holistic well-being of your
        employees. Choose Clearline HMO for a corporate partnership that invests
        in the health and vitality of your workforce, fostering a resilient and
        thriving business environment.
      </p>
      <div className="flex gap-4 max-sm:flex-col">
          <Button
            type={"button"}
            onClick={formFunc}
            className={
              "!rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue max-md:text-base text-[20px] font-light"
            }
          >
            Request a quote{" "}
          </Button>
      </div>
    </div>
  );
};

export default Business;
