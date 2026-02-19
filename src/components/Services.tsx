import { Car, Plane, Train, Map, Camera, Compass } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Bhuj Local Taxi Service",
    description: "Reliable and punctual local taxi service for your daily commute, shopping, or business needs within Bhuj city. Our fleet ensures a comfortable ride with transparent pricing."
  },
  {
    icon: Plane,
    title: "Bhuj Airport Taxi",
    description: "Stress-free airport transfers. We monitor your flight schedule to ensure timely pickups and drop-offs at Bhuj Airport. Start your journey with our premium service."
  },
  {
    icon: Train,
    title: "Railway Station Taxi",
    description: "Convenient pickup and drop services from Bhuj Railway Station. Avoid the hassle of waiting; book your ride in advance and find our driver waiting for you."
  },
  {
    icon: Map,
    title: "Rann of Kutch Taxi",
    description: "Experience the magic of the White Desert. specialized packages for trips from Bhuj to Rann of Kutch, ensuring you catch the mesmerizing sunrise or sunset."
  },
  {
    icon: Camera,
    title: "Sightseeing Cab Service",
    description: "Explore the heritage of Bhuj with our sightseeing packages. Visit Aina Mahal, Prag Mahal, and more with our knowledgeable local drivers."
  },
  {
    icon: Compass,
    title: "Kutch Tour Packages",
    description: "Comprehensive tour packages covering Mandvi Beach, Kala Dungar, Dholavira, and other scenic spots. Customized itineraries to suit your time and budget."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Comprehensive Travel Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From local city rides to extended Kutch tours, we have a service tailored for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group hover:-translate-y-1"
            >
              <div className="h-14 w-14 bg-sand rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
