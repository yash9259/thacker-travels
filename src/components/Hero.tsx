import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.png"
          alt="Taxi on scenic Kutch road at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white font-medium text-sm mb-6 animate-fade-in backdrop-blur-sm border border-white/10">
            #1 Taxi Service in Bhuj & Kutch
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in [animation-delay:200ms]">
            Explore Kutch with <br />
            <span className="text-primary">Thacker Tours</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in [animation-delay:400ms] leading-relaxed">
            Reliable taxi service in Bhuj offering premium car rentals, airport transfers, and customized Kutch tour packages. Experience the White Rann and beyond with our expert local drivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-2 border-primary transition-all">
              <a href="tel:+919879230104" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white hover:text-charcoal bg-transparent transition-all">
              <a href="https://wa.me/919879230104" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <span className="text-sm opacity-80">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
