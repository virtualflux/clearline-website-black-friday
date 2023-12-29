import Banner from "@/components/providers/Banner";
import SearchHospitals from "@/components/providers/SearchHospitals";
import PageLayout from "@/layout";

export default function Providers() {
  return (
    <PageLayout>
      <Banner />
      <SearchHospitals />
    </PageLayout>
  );
}
