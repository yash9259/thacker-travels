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
        title="Taxi Services in Bhuj | One Way, Round Trip & Kutch Tours"
        description="Bhuj taxi service for one-way, round-trip, airport transfers, local sightseeing, and Kutch tours. Book cabs for White Rann, Rann Utsav, Mandvi, and Gujarat packages."
        keywords="Bhuj taxi service, one way taxi Bhuj, round trip taxi Bhuj, Bhuj cab booking, Kutch cab service, Bhuj airport transfer, Bhuj to White Rann taxi, Rann Utsav taxi booking, Bhuj sightseeing taxi, Mandvi beach taxi, Kutch tour packages, Kutch travels, car rental Bhuj"
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
