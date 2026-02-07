import { Shield, Clock, MapPin, CreditCard, Users, Car } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "All our vehicles are well-maintained and drivers are professionally trained.",
  },
  {
    icon: Clock,
    title: "24×7 Availability",
    description: "Round-the-clock service availability for all your travel needs.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep knowledge of Kutch and Gujarat routes, attractions, and hidden gems.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. Clear, upfront pricing for all services.",
  },
  {
    icon: Users,
    title: "Experienced Drivers",
    description: "Professional, courteous drivers with years of local experience.",
  },
  {
    icon: Car,
    title: "Clean Vehicles",
    description: "Regularly sanitized and maintained fleet for your comfort.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Thacker{" "}
              <span className="text-primary">Bhuj Taxi</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Bhuj's most trusted taxi service with one-way and round-trip options, White Rann tours, 
              Rann Utsav packages, and expert Kutch sightseeing. 24×7 cab booking available.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">22</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Vehicles</div>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
