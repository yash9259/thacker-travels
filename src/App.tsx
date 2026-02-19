import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutService from "./components/AboutService";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import ContactLocation from "./components/ContactLocation";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col font-body">
          <Navbar />
          <Hero />
          <AboutService />
          <Services />
          <Fleet />
          <Destinations />
          <WhyChooseUs />
          <FAQ />
          <ContactLocation />
          <Footer />
        </div>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
