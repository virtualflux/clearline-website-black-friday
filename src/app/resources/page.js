import Link from "next/link";
import Button from "@/shared/Button";
import PageLayout from "@/layout";
import { resourcesData } from "@/utils/data";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

export const metadata = {
  title: "Our Resources - Clearline HMO",
  alternates: {
    canonical: "/resources",
  },
};

const blogPosts=await client.fetch (`*[_type=='post']`,{
  next:{
    revalidate:30
  }
})
const Resources = () => {
  return (
    <PageLayout>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mb-12">
        <div className="mb-6 text-center">
          <p className="text-[48px] max-lg:text-[32px] max-md:text-[24px] font-semibold">
            Resources for you
          </p>
          <p className="text-boulder text-[32px] max-md:text-[18px]">
            Learn something new today from stories and product articles
          </p>
        </div>
        <div>
          <div className="flex gap-x-4 gap-y-8 max-md:gap-y-6 justify-center flex-wrap">
            {blogPosts.map((resource)=><ResourceCard key={resource._id} resource={resource}/>)}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;

// className={`h-[320px] w-[420px] max-lg:w-[300px] max-lg:h-[200px] py-4 px-8 rounded-lg bg-resSuperFood bg-no-repeat bg-cover bg-center flex items-end`}
function ResourceCard ({resource}){
  const {title, author, slug:{current},mainImage:{alt,asset}}=resource
  return(
    <div
              className={`lg:h-[320px] lg:w-[420px] max-md:h-[300px] max-md:w-full md:w-[340px] md:h-[320px] py-4 px-8 rounded-lg flex items-end overflow-hidden relative`}
            >
              <Image src={urlForImage(asset)} fill className="object-cover -z-10" alt={alt} />
              <div className="w-full">
                <p className="text-[32px] max-lg:text-[24px] max-md:text-[20px] font-semibold text-white">
                  {title}
                </p>
                <p className="text-[20px] max-lg:text-[14px] max-md:text-base text-[#F4F4F4] mb-4">
                  {author}
                </p>
                <Link href={`/resources/${current}`}>
                  <Button
                    type={"button"}
                    className={
                      "!w-full !rounded-lg !px-4 !text-catalineBlue !h-[40px] bg-white"
                    }
                  >
                    Read more on this
                  </Button>
                </Link>
              </div>
            </div>
  )
}