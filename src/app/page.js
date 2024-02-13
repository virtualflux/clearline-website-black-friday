import PageLayout from "@/layout";
import HomeContainer from "@/components/home";

export const metadata = {
  title: "Clearline HMO - The future of healthcare starts today",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <PageLayout>
      <HomeContainer />
    </PageLayout>
  );
}
