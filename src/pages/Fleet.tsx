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
        title="Bhuj Taxi Fleet & Car Rental | Innova, Ertiga, Tempo Traveller, Urbania"
        description="Choose Bhuj taxi and car rental options for Kutch tours, one-way and round-trip travel, airport transfers, and sightseeing. Our fleet includes Innova, Ertiga, Swift Dzire, Tempo Traveller, and Force Urbania for family, group, and budget packages."
        keywords="Bhuj taxi fleet, Car rental Bhuj, Bhuj taxi services, Bhuj cab booking, One-way cab Bhuj, Round trip taxi Bhuj, Airport pick up Bhuj, Kutch tour vehicles, Tempo Traveller Bhuj, Force Urbania Bhuj, Innova taxi Bhuj, Ertiga taxi Bhuj, Swift Dzire cab Bhuj, Group travel Bhuj tours, Family tour packages Bhuj"
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
