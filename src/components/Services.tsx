import { Car, Hotel, MapPin, Tent, Mountain, Plane, Home, Clock } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "24×7 Car Rental",
    description: "Comfortable vehicles with professional drivers for local and outstation travel across Kutch and Gujarat.",
  },
  {
    icon: Clock,
    title: "One Way Taxi",
    description: "Affordable one-way taxi service from Bhuj to anywhere in Gujarat & India, saving your cost and time.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Budget to luxury hotel bookings in Bhuj, Rann Utsav Tent City, and all major tourist destinations.",
  },
  {
    icon: MapPin,
    title: "Kutch Tour Packages",
    description: "Explore White Rann, Kala Dungar, Mandvi Beach, Bhuj attractions with customized tour packages.",
  },
  {
    icon: Tent,
    title: "Rann Utsav Booking",
    description: "Book your Rann Utsav Tent City stay for a hassle-free cultural and desert experience.",
  },
  {
    icon: Home,
    title: "Traditional Bhunga",
    description: "Experience authentic Kutchi culture with traditional Bhunga stay bookings.",
  },
  {
    icon: Mountain,
    title: "Statue of Unity Tour",
    description: "Complete tour packages including taxi, hotel, and itinerary planning for the world's tallest statue.",
  },
  {
    icon: Plane,
    title: "Domestic Tours",
    description: "Planning a trip outside Gujarat? We offer comprehensive domestic travel packages across India.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Travel Solutions in{" "}
            <span className="text-primary">Kutch & Gujarat</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From airport transfers to curated tour packages, we handle every aspect of your journey 
            with professionalism and care.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
