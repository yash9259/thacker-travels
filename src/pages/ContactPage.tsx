import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Thacker Tours | Bhuj Taxi Booking, Airport Transfer & Kutch Tours"
        description="Contact us for Bhuj taxi booking, airport pickup, one-way and round-trip cabs, and Kutch sightseeing tours. Reserve White Rann, Rann Utsav, Mandvi Beach, and Dholavira heritage packages for families, groups, or budgets."
        keywords="Taxi booking Bhuj, Bhuj taxi services, Bhuj cab booking, Airport pick up Bhuj, Airport transfer Kutch, One-way cab Bhuj, Round trip taxi Bhuj, Kutch tour packages, Rann Utsav tour packages, White Rann tours from Bhuj, Mandvi Beach tours, Dholavira heritage tour, Family tour packages Bhuj, Budget tour packages Bhuj, Group travel Bhuj tours"
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
