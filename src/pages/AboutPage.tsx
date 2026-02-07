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
        title="About Thacker Tours & Travels | Bhuj Taxi & Kutch Tour Experts"
        description="Learn about Thacker Tours & Travels, a trusted Bhuj travel agency offering one-way and round-trip taxi service, airport transfers, and Kutch tour packages across Gujarat."
        keywords="about Bhuj travel agency, Bhuj taxi service, Kutch tours, Kutch travel experts, Bhuj cab booking, one way taxi Bhuj, round trip taxi Bhuj, Bhuj sightseeing taxi, Kutch tour packages, Gujarat tours"
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
