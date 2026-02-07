import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CarPackages from "@/components/CarPackages";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Bhuj Taxi Service & Kutch Tours | Thacker Tours & Travels"
        description="Book Bhuj taxi service, one-way and round-trip cab booking, airport transfers, and Kutch tour packages. Trusted Bhuj travel agency for White Rann, Rann Utsav, Mandvi, and Gujarat trips."
        keywords="Bhuj taxi service, Bhuj cab booking, Kutch taxi, Kutch cab service, one way taxi Bhuj, round trip taxi Bhuj, Bhuj to White Rann taxi, Rann Utsav taxi booking, Kutch tour packages, Bhuj sightseeing taxi, Mandvi beach taxi, Bhuj airport transfer, Bhuj travel agency, Kutch tours, car rental Bhuj, Tempo Traveller Bhuj, Innova taxi Bhuj"
        path="/"
        image="/image.webp"
        breadcrumbLabel="Home"
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <CarPackages />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
