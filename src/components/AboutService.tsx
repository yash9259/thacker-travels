const AboutService = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sand/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?q=80&w=2069&auto=format&fit=crop"
                                alt="Bhuj Taxi Service"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative box */}
                        <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 border-2 border-primary/20 rounded-2xl -z-0 hidden md:block"></div>
                    </div>

                    <div className="lg:w-1/2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">About Us</span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-8 leading-tight">
                            Best Taxi Service in Bhuj – Thacker Tours & Travels
                        </h2>

                        <div className="prose prose-lg text-gray-600 space-y-6">
                            <p>
                                Welcome to <span className="text-charcoal font-semibold">Thacker Tours & Travels</span>, your most trusted partner for <strong>taxi service in Bhuj</strong> and exploring the enchanting landscapes of Kutch. With years of experience, we pride ourselves on offering reliable, safe, and affordable transportation solutions.
                            </p>
                            <p>
                                Whether you need a quick <strong>car rental in Bhuj</strong> for business or a leisure trip with family, our diverse fleet is at your service. We understand that travel is about the journey, which is why our <strong>cab service in Bhuj</strong> comes with professional drivers who are also knowledgeable local guides.
                            </p>
                            <p>
                                From seamless airport transfers to customized tour packages for Rann of Kutch, Mandvi, and Dholavira, we help you discover Gujarat with comfort and ease. Choose us for a hassle-free travel experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutService;
