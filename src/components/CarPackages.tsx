import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Users, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Car {
  id: number;
  name: string;
  capacity: string;
  image: string;
}

interface BookingForm {
  name: string;
  phone: string;
  date: string;
  pickupLocation: string;
  dropLocation: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Innova",
    capacity: "7–8 Seating",
    image: "/Toyota%20Innova.png",
  },
  {
    id: 2,
    name: "Toyota Innova Crysta",
    capacity: "7-8 Seating",
    image: "/Toyota%20Innova.png",
  },
  {
    id: 3,
    name: "Maruti Ertiga",
    capacity: "7 Seating",
    image: "/Maruti%20Ertiga.png",
  },
  {
    id: 4,
    name: "Swift Dzire",
    capacity: "5 Seating",
    image: "/Swift%20Dzire.png",
  },
  {
    id: 5,
    name: "Honda Amaze",
    capacity: "5 Seating",
    image: "/Honda%20Amaze.png",
  },
  {
    id: 6,
    name: "Tempo Traveller",
    capacity: "9–26 Seating",
    image: "/Tempo%20Traveller.png",
  },
  {
    id: 7,
    name: "Force Urbania",
    capacity: "9–17 Seating",
    image: "/Force%20Urbania.png",
  },
];

const CarPackages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [formData, setFormData] = useState<BookingForm>({
    name: "",
    phone: "",
    date: "",
    pickupLocation: "",
    dropLocation: "",
  });

  const handleBookNow = (car: Car) => {
    const whatsappNumber = "919879230104"; // Updated WhatsApp number
    const message = `Hello, I want to inquire about ${car.name}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello, I would like to book a ${selectedCar?.name}
    
*Booking Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Pickup Location: ${formData.pickupLocation}
Drop Location: ${formData.dropLocation}
Vehicle: ${selectedCar?.name} (${selectedCar?.capacity})`;

    const whatsappNumber = "919825058433"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset form and close dialog
    setIsDialogOpen(false);
    setFormData({
      name: "",
      phone: "",
      date: "",
      pickupLocation: "",
      dropLocation: "",
    });
  };

  const goToPrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCars = () => {
    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const cars_list = [];
    for (let i = 0; i < visibleCount; i++) {
      cars_list.push(cars[(currentIndex + i) % cars.length]);
    }
    return cars_list;
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Fleet
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium <span className="text-primary">Vehicle Fleet</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our diverse range of well-maintained vehicles, perfect for every group size and travel need.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(${direction === 'right' ? '-' : ''}0px)`,
              }}
            >
              {getVisibleCars().map((car) => (
                <div
                  key={car.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                          {car.name}
                        </h3>
                        
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <Users className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Capacity</p>
                            <p className="text-lg font-semibold text-foreground">
                              {car.capacity}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-6 pt-6 border-t border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Premium comfort seating
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Professional drivers
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Air conditioning available
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button 
                        onClick={() => handleBookNow(car)}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-6 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Previous car"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-6 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Next car"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {cars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-primary w-8 h-3"
                    : "bg-slate-300 w-3 h-3 hover:bg-slate-400"
                }`}
                aria-label={`Go to car ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-slate-200">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              {cars.length}+
            </div>
            <p className="text-muted-foreground text-lg">Premium Vehicles</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              24/7
            </div>
            <p className="text-muted-foreground text-lg">Availability</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              100%
            </div>
            <p className="text-muted-foreground text-lg">Reliable Service</p>
          </div>
        </div>
      </div>

      {/* Booking Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Book {selectedCar?.name}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Travel Date *</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pickup">Pickup Location *</Label>
              <Input
                id="pickup"
                placeholder="Enter pickup location"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="drop">Drop Location *</Label>
              <Input
                id="drop"
                placeholder="Enter drop location"
                value={formData.dropLocation}
                onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                required
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CarPackages;
