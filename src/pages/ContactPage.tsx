import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Thacker Tours | Book Bhuj Taxi & Kutch Tours Today"
        description="Book Bhuj taxi, one-way and round-trip cabs, or Kutch tour packages. Contact us for airport transfers, sightseeing trips, and White Rann tours."
        keywords="Bhuj taxi booking, Bhuj cab booking, Kutch taxi booking, Kutch tour booking, one way taxi Bhuj, round trip taxi Bhuj, Bhuj airport transfer booking, Rann Utsav booking, Kutch tour packages booking"
        path="/contact"
        breadcrumbLabel="Contact"
      />
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
