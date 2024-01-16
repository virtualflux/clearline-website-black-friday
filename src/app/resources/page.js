import Link from "next/link";
import Button from "@/shared/Button";
import PageLayout from "@/layout";
import { resourcesData } from "@/utils/data";

export const metadata = {
  title: "Our Resources - Clearline HMO",
  alternates: {
    canonical: "/resources",
  },
};

const Resources = () => {
  return (
    <PageLayout>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mb-12">
        <div className="mb-6">
          <p className="text-[48px] max-lg:text-[32px] max-md:text-[24px] font-semibold">
            Resources for you
          </p>
          <p className="text-boulder text-[32px] max-md:text-[16px]">
            Learn something new today from stories and product articles
          </p>
        </div>
        <div>
          <div className="flex gap-x-4 gap-y-8 max-md:gap-y-4 flex-wrap">
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resSuperFood bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Super Food
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  Why you should eat
                </p>
                <Link href={`/resources/super-food`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resAlcohol bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Alcoholism
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  subtitle
                </p>
                <Link href={`/resources/alcoholism`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resCovid bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Living with covid
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  Put on your nose masks
                </p>
                <Link href={`/resources/living-with-covid`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resImmune bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Boosting your Immune system
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  Eat healthy stay healthy
                </p>
                <Link href={`/resources/boosting-your-immune-system`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resHandWashing bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Hand Washing
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  Wash your hand
                </p>
                <Link href={`/resources/hand-washing`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resWorkplace bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Workplace Ergonomics
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  Workplace Ergonomics
                </p>
                <Link href={`/resources/workplace-ergonomics`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resHepatitis bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Hepatitis
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  Stay safe
                </p>
                <Link href={`/resources/hepatitis`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resChildhood bg-no-repeat bg-cover bg-center flex items-end`}
            >
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                  Childhood Obesity
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                  Getting in shape
                </p>
                <Link href={`/resources/childhood-obesity`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-4/5 !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;
