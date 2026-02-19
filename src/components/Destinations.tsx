import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const destinations = [
    {
        name: "Bhuj to Mandvi",
        description: "Visit the pristine Mandvi Beach and the historic Vijay Vilas Palace. famous for its shipbuilding yard and serene coastal vibe.",
        image: "/mandvi.png"
    },
    {
        name: "Rann of Kutch",
        description: "Journey to the White Desert. Witness the surreal beauty of the salt flats, especially during the Rann Utsav and full moon nights.",
        image: "/rann_of_kutch.png"
    },
    {
        name: "Bhuj to Dwarka",
        description: "Pilgrimage tour to the Dwarkadhish Temple. Comfortable long-distance taxi service for a spiritual journey to Lord Krishna's kingdom.",
        image: "/dwarka.png"
    },
    {
        name: "Bhuj to Ahmedabad",
        description: "Reliable intercity taxi service connecting Bhuj to Gujarat's largest city. Ideal for business travelers and airport transfers.",
        image: "/ahmedabad.png"
    },
    {
        name: "Bhuj to Somnath",
        description: "Visit the first Jyotirlinga. Our taxi service ensures a smooth ride to this sacred destination with optional stops at Junagadh.",
        image: "/somnath.png"
    }
];

const Destinations = () => {
    return (
        <section id="destinations" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Top Routes</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
                            Popular Taxi Routes from Bhuj
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Explore the best of Gujarat with our comfortable and safe taxi services.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <MapPin className="h-5 w-5" />
                                    <span className="font-bold tracking-wider text-sm uppercase">Recommended</span>
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {destination.name}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                                    {destination.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Destinations;
