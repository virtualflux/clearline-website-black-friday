import Banner from "@/components/product/Banner";
import { Package } from "@/components/product/PackageComponents/Package";
import PageLayout from "@/layout";

export const metadata = {
  title: "Our Products - Clearline HMO",
  alternates: {
    canonical: "/products/",
  },
};

const page = () => {
  return (
    <PageLayout>
      <Banner />
      <Package />
    </PageLayout>
  );
};

export default page;
