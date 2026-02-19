import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Bhuj Taxi Services, Airport Transfers & Kutch Tours | One-Way & Round Trip"
        description="Taxi booking in Bhuj with one-way cabs, round-trip taxi, airport transfer, and local sightseeing tours. Explore White Rann, Rann of Kutch, Mandvi Beach, Dholavira heritage, and Gujarat sightseeing packages with a trusted Kutch tour operator."
        keywords="Bhuj taxi services, Taxi booking Bhuj, Cab service in Bhuj, One-way cab Bhuj, Round trip taxi Bhuj, Airport pick up Bhuj, Airport transfer Kutch, Kutch tour operator, Kutch sightseeing tour, Kutch desert tours, White Rann tours from Bhuj, Rann of Kutch tour packages, Rann Utsav taxi booking, Mandvi Beach tours, Dholavira heritage tour, Gujarat sightseeing tours, Local tours Kutch, Bhuj tourism services, Bhuj travel service provider, Taxi and tour combo packages, Car rental Bhuj"
        path="/services"
        image="/image.webp"
        breadcrumbLabel="Services"
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
