import Header from "@/components/Header";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="About Thacker Tours & Travels | Bhuj Travel Agency & Kutch Tour Operator"
        description="Thacker Tours & Travels is a Bhuj travel agency and Kutch tour operator providing taxi services, car rental, airport pickup, and custom tour packages for White Rann, Mandvi Beach, Dholavira heritage, and Gujarat sightseeing."
        keywords="Bhuj travel agency, Tour operator Bhuj, Kutch tour operator, Bhuj taxi services, Car rental Bhuj, Airport pick up Bhuj, Bhuj sightseeing tours, Kutch sightseeing packages, White Rann tours from Bhuj, Mandvi Beach tours, Dholavira heritage tour, Bhuj heritage tours, Cultural tours in Bhuj, Gujarat sightseeing tours, Custom tour packages from Bhuj"
        path="/about"
        image="/about.webp"
        breadcrumbLabel="About"
      />
      <Header />
      <main>
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
