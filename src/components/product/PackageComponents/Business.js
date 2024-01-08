import { Button } from "@mui/base";
import Link from "next/link";

const Business = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[40px] max-md:text-[24px] font-medium">
        Corporate/Business plan
      </p>
      <p className="text-boulder text-[32px] max-md:text-[16px] text-center font-light mb-6">
        Our tailored solutions are designed to elevate not just the health but
        also the productivity and overall morale of your team. With
        comprehensive health coverage, we go beyond the basics, reinforcing a
        workplace culture that prioritizes the holistic well-being of your
        employees. Choose ClearLine HMO for a corporate partnership that invests
        in the health and vitality of your workforce, fostering a resilient and
        thriving business environment.
      </p>
      <div className="">
        <Link href="request-a-quote">
          <Button
            type={"button"}
            className={
              "!rounded-lg !h-[60px] max-md:!h-[40px] !px-4 !text-white !bg-catalineBlue"
            }
          >
            Request a quote{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Business;
