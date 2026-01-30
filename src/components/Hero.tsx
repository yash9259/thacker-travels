import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-desert.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="White Rann of Kutch desert at sunset with camels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Serving Kutch, Bhuj & All Gujarat</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Discover the Magic of{" "}
            <span className="text-terracotta-light">Kutch & Gujarat</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up animation-delay-200">
            Your trusted partner for taxi services, hotel bookings, and customized tour packages. 
            Experience the White Rann, Rann Utsav, Statue of Unity & more with our expert local guides.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-10 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta-light text-terracotta-light" />
                ))}
              </div>
              <span className="text-sm">Trusted by 1000+ Travelers</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">24×7 Service Available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+919879230104" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +91 98792 30104
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/fleet">View Fleet</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
