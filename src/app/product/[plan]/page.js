import Banner from "@/components/product/Banner";
import PageLayout from "@/layout";
import { packagePlans } from "@/utils/data";
export const metadata = {
  title: "Our Products - Clearline HMO",
  alternates: {
    canonical: "/products/",
  },
};
export async function generateStaticParams() {
    return packagePlans.map(({title})=>({plan:title}))
    
  }
const Page = ({params:{plan}}) => {
    const planDetails=packagePlans.find(({title})=>title==plan)
  return (
    <PageLayout>
      <Banner />
      <div className="px-16 max-lg:px-12 max-md:px-8 pt-12">
      <div className="flex flex-col items-center mb-3">
        <p className="text-[40px] max-md:text-[24px] font-bold mb-3 capitalize text-catalineBlue">
          Our {plan.toUpperCase()} Plan
        </p>
      </div>
      <div>{planDetails.component}</div>
    </div>
    </PageLayout>
  );
};

export default Page;