const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-terracotta-light/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <picture>
                  <source srcSet="/about.webp" type="image/webp" />
                  <img src="/about.png" alt="About Thacker Tours" className="w-96 h-96 rounded-3xl shadow-lg object-contain" />
                </picture>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-terracotta-light/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bhuj Taxi Service &{" "}
              <span className="text-primary">Kutch Tours</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Thacker Tours & Travels is a trusted Bhuj-based travel agency offering one-way and round-trip taxi service, 
                airport transfers, Kutch tour packages, and specialized White Rann, Rann Utsav, and Mandvi Beach trips.
              </p>
              <p>
                Our experienced local drivers and cab fleet (Toyota Innova, Ertiga, Swift Dzire, Tempo Traveller, Force Urbania) 
                ensure safe, comfortable travel across Kutch and Gujarat. We specialize in Bhuj taxi booking for tourists, families, 
                and business travelers.
              </p>
              <p>
                With years of local expertise, we are Kutch's most trusted travel agency. Book our one-way or round-trip taxi service 
                for White Rann exploration, Rann Utsav packages, Statue of Unity tours, and comprehensive Gujarat travel solutions.
              </p>
            </div>

            {/* Key points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-xl">
                <p className="font-display font-bold text-xl text-primary">Bhuj Taxi Experts</p>
                <p className="text-sm text-muted-foreground">24×7 cab booking</p>
              </div>
              <div className="bg-background p-4 rounded-xl">
                <p className="font-display font-bold text-xl text-primary">Kutch Tours</p>
                <p className="text-sm text-muted-foreground">White Rann & tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
