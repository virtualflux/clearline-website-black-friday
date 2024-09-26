import Image from "next/image";
import PageLayout from "@/layout";
import { resourcesData } from "@/utils/data";
import { PortableText } from "next-sanity";

// export async function generateMetadata({ params:{slug} }) {
//   // const blogpost=await client.fetch(`*[_type=='post' && slug.current=='${slug}'][0]`)
//   return {
//     title: `${blogpost?.title} - Clearline HMO`,
//   };
// }

// export async function generateStaticParams() {
//   return resourcesData.map(({ slug }) => ({
//     slug,
//   }));
// }


export const revalidate=0
export default async function Page({ params:{slug} }) {
  // const blogpost=await client.fetch(`*[_type=='post' && slug.current=='${slug}'][0]`)
  // const {mainImage:{asset,alt},title,body}=blogpost

  return (
    <PageLayout>
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 mb-3">
        <p className="text-[48px] max-lg:text-[32px] max-md:text-[24px] font-semibold text-catalineBlue">
          Clearline HMO Newsletter
        </p>
        {/* <div className="flex max-lg:flex-col gap-4 mb-8">
          <div className="w-1/2 max-lg:w-full">
            <Image
              src={urlForImage(asset)}
              alt={alt}
              width={200}
              height={200}
              className="object-cover w-full h-full max-lg:h-[400px] max-md:h-[280px] rounded-md"
            />
          </div>
          <div className="w-1/2 max-lg:w-full rounded-lg max-md:bg-[#f6f7ff] p-8 max-md:p-4 flex justify-center items-center">
            <p className="text-catalineBlue text-[48px] max-lg:text-[32px] max-md:text-[24px] font-medium">
              {title}
            </p>
          </div>
        </div>
        <div>
          <div className="mb-12 [&>h4]:font-bold [&>h4]:text-xl">
              {body.map(item=><PortableText value={item} key={item._key} />)}
              
          </div>
        </div> */}
        
      </div>
    </PageLayout>
  );
}
