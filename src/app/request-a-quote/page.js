import Banner from "@/components/requestAQuote/Banner";
import QuoteForm from "@/components/requestAQuote/QuoteForm";
import PageLayout from "@/layout";

export const metadata = {
  title: "Request a Quote - Clearline HMO",
  alternates: {
    canonical: "/request-a-quote/",
  },
};

const RequestAQuote = () => {
  return (
    <PageLayout>
      <Banner />
      <div className="relative -top-[220px] max-md:-top-[150px] max-sm:top-0 flex justify-center">
        <QuoteForm />
      </div>
    </PageLayout>
  );
};

export default RequestAQuote;
