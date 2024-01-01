import Banner from "@/components/product/Banner";
import { Package } from "@/components/product/PackageComponents/Package";
import PageLayout from "@/layout";

const page = () => {
  return (
    <PageLayout>
      <Banner />
      <Package />
    </PageLayout>
  );
};

export default page;
