import Header from "@/components/Header";
import CarPackages from "@/components/CarPackages";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Fleet = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Fleet for Bhuj Taxi & Kutch Tours | Innova, Ertiga, Tempo Traveller"
        description="Explore our Bhuj taxi fleet for Kutch tours: Toyota Innova, Ertiga, Swift Dzire, Tempo Traveller, and Force Urbania. Perfect for one-way, round-trip, and sightseeing trips."
        keywords="Bhuj taxi fleet, Innova taxi Bhuj, Ertiga taxi Bhuj, Swift Dzire cab Bhuj, Tempo Traveller Bhuj, Force Urbania Bhuj, Kutch tour vehicles, Bhuj cab booking, one way taxi Bhuj, round trip taxi Bhuj"
        path="/fleet"
        image="/Toyota%20Innova.webp"
        breadcrumbLabel="Fleet"
      />
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
