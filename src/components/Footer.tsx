import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md">
                <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
                <span className="text-[10px] text-terracotta mt-1">Since 2003</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">Thacker</h3>
                <p className="text-xs text-primary-foreground/60">Tours & Travels</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for taxi services, hotel bookings, and customized 
              tour packages in Kutch, Gujarat, and across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-terracotta-light transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-terracotta-light transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-terracotta-light transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-terracotta-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/70">Car Rental (24×7)</li>
              <li className="text-primary-foreground/70">Hotel Booking</li>
              <li className="text-primary-foreground/70">Kutch Tour Packages</li>
              <li className="text-primary-foreground/70">Rann Utsav Booking</li>
              <li className="text-primary-foreground/70">Statue of Unity Tour</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta-light shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Shop No. 3, Memon Musafir Khana,<br />
                  Station Road, Bhuj, Gujarat – 370001
                </span>
              </li>
              <li>
                <a href="tel:+919879230104" className="flex items-center gap-3 text-primary-foreground/70 hover:text-terracotta-light transition-colors">
                  <Phone className="w-5 h-5 text-terracotta-light" />
                  +91 98792 30104
                </a>
              </li>
              <li>
                <a href="mailto:thackertravels1@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-terracotta-light transition-colors">
                  <Mail className="w-5 h-5 text-terracotta-light" />
                  thackertravels1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Thacker Tours & Travels. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-terracotta-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-terracotta-light transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
