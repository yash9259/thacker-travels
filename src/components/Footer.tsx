import { Facebook, Instagram, Twitter, ChevronRight } from "lucide-react";
import { PrivacyPolicy } from "./legal/PrivacyPolicy";
import { TermsOfService } from "./legal/TermsOfService";
import { RefundPolicy } from "./legal/RefundPolicy";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Thacker Tours" className="h-12 w-auto brightness-0 invert opacity-90" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Your trusted partner for safe, reliable, and affordable taxi services in Bhuj and premium Kutch tour packages.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Destinations', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="h-3 w-3 text-primary/50 group-hover:text-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Local Taxi Service', 'Airport Transfer', 'Railway Station Pickup', 'Kutch Tour Packages', 'Corporate Car Rental'].map((item) => (
                <li key={item} className="text-gray-400 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <PrivacyPolicy>
                  <button className="hover:text-primary transition-colors text-left">Privacy Policy</button>
                </PrivacyPolicy>
              </li>
              <li>
                <TermsOfService>
                  <button className="hover:text-primary transition-colors text-left">Terms of Service</button>
                </TermsOfService>
              </li>
              <li>
                <RefundPolicy>
                  <button className="hover:text-primary transition-colors text-left">Refund Policy</button>
                </RefundPolicy>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Thacker Tours & Travels. All rights reserved.</p>
          <p>Designed with <a href="https://codinghunters.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">codinghunters</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
