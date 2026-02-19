import { useState } from "react";
import { Users, Fuel } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Car {
    id: number;
    name: string;
    type: string;
    capacity: string;
    features: string[];
    image: string;
}

const cars: Car[] = [
    {
        id: 1,
        name: "Toyota Innova Crysta",
        type: "Premium SUV",
        capacity: "6+1 Seater",
        features: ["AC", "Push Back Seats", "Music System", "Ample Boot Space"],
        image: "/Toyota%20Innova.png"
    },
    {
        id: 2,
        name: "Maruti Suzuki Ertiga",
        type: "SUV",
        capacity: "6+1 Seater",
        features: ["AC", "Comfortable Seating", "Music System", "Budget Friendly"],
        image: "/Maruti%20Ertiga.png"
    },
    {
        id: 3,
        name: "Swift Dzire",
        type: "Sedan",
        capacity: "4+1 Seater",
        features: ["AC", "Comfortable", "Music System", "Perfect for Small Family"],
        image: "/Swift%20Dzire.png"
    },
    {
        id: 4,
        name: "Tempo Traveller",
        type: "Minibus",
        capacity: "13/17/26 Seater",
        features: ["AC", "Push Back Seats", "Music System", "USB Charging"],
        image: "/Tempo%20Traveller.png"
    },
    {
        id: 5,
        name: "Force Urbania",
        type: "Luxury Van",
        capacity: "10/13/17 Seater",
        features: ["AC", "Luxury Seats", "Ample Space", "Premium Experience"],
        image: "/Force%20Urbania.png"
    },
    {
        id: 6,
        name: "Honda Amaze",
        type: "Sedan",
        capacity: "4+1 Seater",
        features: ["AC", "Comfortable", "Music System", "Smooth Ride"],
        image: "/Honda%20Amaze.png"
    }
];

const Fleet = () => {
    const [openBooking, setOpenBooking] = useState(false);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);

    const handleBookClick = (car: Car) => {
        setSelectedCar(car);
        setOpenBooking(true);
    };

    const handleWhatsAppBooking = () => {
        if (!selectedCar) return;
        const message = `Hi, I am interested in booking the ${selectedCar.name}. Please provide more details.`;
        window.open(`https://wa.me/919879230104?text=${encodeURIComponent(message)}`, "_blank");
        setOpenBooking(false);
    };

    return (
        <section id="fleet" className="py-16 md:py-24 bg-gradient-to-b from-white to-sand/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        Our Premium Fleet
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        Clean, Comfortable & Reliable Vehicles
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from our wide range of well-maintained cars for a safe and comfortable journey across Kutch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <div key={car.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col">
                            <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                                {/* Fallback for image since we might not have actual files yet. Using a generic car icon if image fails or just a placeholder div */}
                                <div className="text-gray-400 flex flex-col items-center">
                                    {/* In a real scenario, we'd use the image. For now, creating a nice placeholder if image missing, or assuming images exist from previous structure */}
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"; // Better fallback
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-charcoal shadow-sm">
                                        {car.type}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="font-display text-xl font-bold text-charcoal">{car.name}</h3>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                    <Users className="h-4 w-4" />
                                    <span>{car.capacity}</span>
                                    <span className="mx-2">•</span>
                                    <Fuel className="h-4 w-4" />
                                    <span>Diesel/Petrol</span>
                                </div>

                                <div className="space-y-2 mb-8 flex-1">
                                    {car.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary/60"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    onClick={() => handleBookClick(car)}
                                    className="w-full bg-charcoal hover:bg-primary text-white transition-colors"
                                >
                                    Book This Car
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={openBooking} onOpenChange={setOpenBooking}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Book {selectedCar?.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <p className="text-sm text-gray-500">
                            To ensure the fastest booking, we recommend connecting directly via WhatsApp.
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            <Button onClick={handleWhatsAppBooking} className="bg-[#25D366] hover:bg-[#128C7E] w-full text-white">
                                Book via WhatsApp
                            </Button>
                            <Button variant="outline" onClick={() => window.location.href = `tel:+919879230104`} className="w-full">
                                Call Now: +91 98792 30104
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Fleet;
