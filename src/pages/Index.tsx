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
        title="Bhuj Taxi, Tour Operator & Car Rental | Kutch, White Rann & Rann Utsav"
        description="Book a trusted Bhuj travel agency for taxi services, cab booking, airport pickup, car rental, and Kutch sightseeing tours. Choose White Rann, Rann of Kutch, Mandvi Beach, Dholavira heritage tours, and custom family, group, or budget packages across Gujarat."
        keywords="Travel agency Bhuj, Tour operator Bhuj, Bhuj taxi services, Car rental Bhuj, Airport pick up Bhuj, Taxi booking Bhuj, Sightseeing tours Bhuj, Cab service in Bhuj, One-way cab Bhuj, Round trip taxi Bhuj, Local tours Kutch, Kutch tour operator, Airport transfer Kutch, Kutch sightseeing packages, Bhuj travel service provider, Taxi and tour combo packages, Best travel agency in Bhuj, Best cab service Bhuj, White Rann tours from Bhuj, Rann of Kutch tour packages, Mandvi Beach tours, Dholavira heritage tour, Kutch sightseeing tour, Kutch desert tours, Gujarat sightseeing tours, Cultural tours in Bhuj, Bhuj heritage tours, Rann Utsav tour packages, Rann Utsav taxi booking, Visit Rann Utsav from Bhuj, White Rann festival tours, Family tour packages Bhuj, Budget tour packages Bhuj, Group travel Bhuj tours, Bhuj tourism services, Custom tour packages from Bhuj, Bhuj to Ahmedabad tours, Bhuj holiday packages, Tour operators in Bhuj, Tour & travel agents in Bhuj, Best travel agent in Bhuj"
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
