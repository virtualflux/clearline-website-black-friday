import PageLayout from "@/layout";
import HomeContainer from "@/components/home";
import { client } from "../../sanity/lib/client";

export const metadata = {
  title: "Clearline HMO - The future of healthcare starts today",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {

  return (
    <PageLayout>
      <HomeContainer />
    </PageLayout>
  );
}
