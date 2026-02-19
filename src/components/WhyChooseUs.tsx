import { Shield, Clock, Users, BadgeIndianRupee, ThumbsUp, Star } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Expert Local Drivers",
        description: "Our drivers are locals who know every route, shortcut, and sightseeing spot in Kutch."
    },
    {
        icon: ThumbsUp,
        title: "Premium Fleet",
        description: "We maintain a fleet of spotless, air-conditioned cars ensuring a hygienic and relaxing journey."
    },
    {
        icon: BadgeIndianRupee,
        title: "Best Price Guarantee",
        description: "Transparent pricing with no hidden charges. We offer the best rates for car rentals in the region."
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "We are always available. Whether it's a late-night pickup or an early morning drop, count on us."
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "Safety is our priority. Our vehicles are tracked, and drivers are verified for your peace of mind."
    },
    {
        icon: Star,
        title: "Top Rated Service",
        description: "Consistently rated 5-stars by our customers for our punctuality and hospitality."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 md:py-32 bg-charcoal text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                        Your Journey, Our Priority
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We don't just provide taxis; we deliver experiences. Here is why travelers trust Thacker Tours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="bg-gradient-to-br from-primary to-orange-600 p-3.5 rounded-xl h-fit text-white shrink-0 shadow-lg shadow-orange-900/20">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
