import Banner from "@/components/providers/Banner";
import RelatedHealthCare from "@/components/providers/Related";
import RelatedCard from "@/components/providers/RelatedCard";
import SearchHospitals from "@/components/providers/SearchHospitals";
import PageLayout from "@/layout";

export default function Providers() {
  return (
    <PageLayout>
      <Banner />
      <SearchHospitals />
      <RelatedHealthCare />
    </PageLayout>
  );
}
