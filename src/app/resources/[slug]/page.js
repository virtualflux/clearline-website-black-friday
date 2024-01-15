import Image from "next/image";
import { ResourcesImage } from "../../../../public/assets/images";
import PageLayout from "@/layout";
import { resourcesData } from "@/utils/data";

export async function generateMetadata({ params }) {
  const article = resourcesData?.find(({ slug }) => slug === params.slug);

  return {
    title: `${article?.title} article - Clearline HMO`,
  };
}

export default function Page({ params }) {
  const article = resourcesData?.find(({ slug }) => slug === params.slug);

  return (
    <PageLayout>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mb-3">
        <p className="text-[48px] max-lg:text-[32px] max-md:text-[24px] font-semibold">
          Clearline HMO Newsletter
        </p>
        <div className="flex max-lg:flex-col gap-4 mb-8">
          <div className="w-1/2 max-lg:w-full">
            <Image
              src={article.img}
              alt="Clearline HMO Newsletter"
              className="object-cover w-full h-full max-lg:h-[400px] max-md:h-[280px] rounded-md"
            />
          </div>
          <div className="w-1/2 max-lg:w-full rounded-lg bg-[#f6f7ff] p-8 max-md:p-4">
            <p className="text-catalineBlue text-[48px] max-lg:text-[32px] max-md:text-[24px] font-medium">
              {article.article.didYouKnow.title}
            </p>
            <div className="text-[20px] max-md:text-[13px] italic">
              {article.article.didYouKnow.list?.map((item, idx) => (
                <p className="mb-2" key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-12">
            <p className="text-[40px] max-md:text-[24px] font-semibold">
              {article.title}
            </p>
            <p className="text-boulder text-[32px] max-md:text-[16px] mb-10">
              {article.article.articleQuestion}
            </p>
            <p className="text-[28px] max-md:text-[14px]">
              {article.article.text1}
            </p>
            <p className="text-[28px] max-md:text-[14px]">
              {article.article.text2}
            </p>
          </div>
          <div>
            {article.article.foodList?.map(({ title, text }, idx) => (
              <p className="text-[24px] max-md:text-[12px] mb-6" key={idx}>
                {title}
                {text && ":"} <span className="text-boulder">{text}</span>
              </p>
            ))}
          </div>
        </div>
        {article.article.foodList1 && (
          <div>
            <div className="mb-12">
              <p className="text-[40px] max-md:text-[24px] font-semibold">
                {article.title}
              </p>
              <p className="text-boulder text-[32px] max-md:text-[16px] mb-10">
                {article.article.articleQuestion1}
              </p>
            </div>
            <div>
              {article.article.foodList1?.map(({ title, text }, idx) => (
                <p className="text-[24px] max-md:text-[12px] mb-6" key={idx}>
                  {title}: <span className="text-boulder">{text}</span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
