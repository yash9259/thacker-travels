import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your{" "}
            <span className="text-primary">Journey?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact us today for bookings, inquiries, or customized travel plans. 
            We're here to make your travel dreams come true.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Shop No. 3, Memon Musafir Khana,<br />
                      Station Road, Bhuj, Gujarat – 370001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <div className="space-y-1">
                      <a href="tel:+919879230104" className="block text-muted-foreground hover:text-primary transition-colors">
                        +91 98792 30104
                      </a>
                      <a href="tel:+919913900040" className="block text-muted-foreground hover:text-primary transition-colors">
                        +91 99139 00040
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:thackertravels1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      thackertravels1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">
                      24 Hours / 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact person */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <p className="text-primary-foreground/80 text-sm mb-2">Contact Person</p>
              <p className="font-display text-xl font-bold">Vishal Thacker</p>
              <p className="text-primary-foreground/80 mt-1">Owner & Manager</p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Quick Book
              </h3>
              <p className="text-muted-foreground mb-8">
                Ready to book? Give us a call or send a WhatsApp message. 
                Our team will assist you with your travel requirements immediately.
              </p>
              
              <div className="space-y-4">
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <a href="tel:+919879230104" className="flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    Call: +91 98792 30104
                  </a>
                </Button>
                
                <Button variant="accent" size="xl" className="w-full" asChild>
                  <a 
                    href="https://wa.me/919879230104?text=Hello%2C%20I%20would%20like%20to%20book%20a%20taxi%20service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card h-64 lg:h-auto lg:flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d69.6669!3d23.2419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e4b!2sBhuj%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thacker Tours & Travels Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
