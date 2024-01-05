import Link from "next/link";
import Button from "@/shared/Button";
import PageLayout from "@/layout";

export const metadata = {
  title: "Our Resources - Clearline HMO",
  alternates: {
    canonical: "/resources",
  },
};

const Resources = () => {
  const resourcesData = [
    {
      title: "Super Food",
      subtitle: "Why you should eat",
      imageUrl: "bg-resSuperFood",
    },
    {
      title: "Alcoholism",
      subtitle: "How to Avoid/Moderate it",
      imageUrl: "bg-resAlcohol",
    },
    {
      title: "Living with covid",
      subtitle: "Put on your nose masks",
      imageUrl: "bg-resCovid",
    },
    {
      title: "Boosting your Immune system",
      subtitle: "Eat healthy stay healthy",
      imageUrl: "bg-resImmune",
    },
    {
      title: "Hand Washing",
      subtitle: "Wash your hand",
      imageUrl: "bg-resHandWashing",
    },
    {
      title: "Workplace Ergonomics",
      subtitle: "Workplace Ergonomics",
      imageUrl: "bg-resWorkplace",
    },
    {
      title: "Hepatitis",
      subtitle: "Stay safe",
      imageUrl: "bg-resHepatitis",
    },
    {
      title: "Childhood Obesity",
      subtitle: "Getting in shape",
      imageUrl: "bg-resChildhood",
    },
  ];

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
            {resourcesData.map(({ title, subtitle, imageUrl }, idx) => (
              <div
                key={idx}
                className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg ${imageUrl} bg-no-repeat bg-cover bg-center flex items-end`}
              >
                <div className="w-full">
                  <p className="text-[32px] max-lg:text-[24px] max-md:text-[16px] font-semibold text-white">
                    {title}
                  </p>
                  <p className="text-[20px] max-lg:text-[14px] max-md:text-[11px] text-[#F4F4F4] mb-4">
                    {subtitle}
                  </p>
                  <Link href={`/resources/${title}`}>
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
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;
