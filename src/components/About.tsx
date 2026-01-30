const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-terracotta-light/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/about.png" alt="About Thacker Tours" className="w-96 h-96 rounded-3xl shadow-lg object-contain" />
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
              Your Gateway to{" "}
              <span className="text-primary">Kutch's Beauty</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Thacker Tours & Travels is a locally owned and operated travel agency in Bhuj, Gujarat, 
                dedicated to providing high-quality travel solutions for tourists, families, business 
                travelers, and pilgrims.
              </p>
              <p>
                Our goal is to deliver safe, reliable, and customer-friendly travel services while 
                promoting the rich culture and tourism of Kutch and Gujarat. We take pride in 
                showcasing the unique heritage, stunning landscapes, and warm hospitality of our region.
              </p>
              <p>
                With years of experience and deep local expertise, we have become the preferred choice 
                for travelers visiting Kutch. From the ethereal White Rann to the magnificent Statue 
                of Unity, we ensure every journey is memorable.
              </p>
            </div>

            {/* Key points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-xl">
                <p className="font-display font-bold text-xl text-primary">Local Experts</p>
                <p className="text-sm text-muted-foreground">Born & raised in Kutch</p>
              </div>
              <div className="bg-background p-4 rounded-xl">
                <p className="font-display font-bold text-xl text-primary">Family Owned</p>
                <p className="text-sm text-muted-foreground">Personal touch in service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
