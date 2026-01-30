import Header from "@/components/Header";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
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
