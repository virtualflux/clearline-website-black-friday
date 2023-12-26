import Banner from "@/components/providers/Banner";
import SearchHospitals from "@/components/providers/SearchHospitals";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

export default function Providers() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchHospitals />
      <Footer />
    </div>
  );
}
