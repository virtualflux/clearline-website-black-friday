import Directors from "@/components/about/Directors";
import PageLayout from "@/layout";



export const metadata = {
    title: "The Board - Clearline HMO",
    alternates: {
      canonical: "/theboard/",
    },
  };
export default function  TheBoard (){
    return(
        <PageLayout>
            <div className="px-16 max-lg:px-12 max-md:px-8 pt-32 max-md:pt-24 min-h-screen">
            <Directors />
            </div>
        </PageLayout>
    )
}