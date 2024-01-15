import Banner from "@/components/providers/Banner";
import RelatedHealthCare from "@/components/providers/Related";
import SearchHospitals from "@/components/providers/SearchHospitals";
import PageLayout from "@/layout";

export const metadata = {
  title: "Hospital network - Clearline HMO",
  alternates: {
    canonical: "/providers/",
  },
};

export default function Providers() {
  return (
    <PageLayout>
      <Banner />
      <SearchHospitals />
    </PageLayout>
  );
}
