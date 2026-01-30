import Header from "@/components/Header";
import CarPackages from "@/components/CarPackages";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Fleet = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CarPackages />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Fleet;
