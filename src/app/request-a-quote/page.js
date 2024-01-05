import Banner from "@/components/requestAQuote/Banner";
import QuoteForm from "@/components/requestAQuote/QuoteForm";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

export const metadata = {
  title: "Request a Quote - Clearline HMO",
  alternates: {
    canonical: "/request-a-quote/",
  },
};

const RequestAQuote = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="relative -top-[220px] max-md:-top-[150px] max-sm:top-0 flex justify-center">
        <QuoteForm />
      </div>
      <Footer />
    </div>
  );
};

export default RequestAQuote;
