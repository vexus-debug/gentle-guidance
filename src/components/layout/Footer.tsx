import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl tracking-wide">Flawless</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Where science meets artistry. Experience the pinnacle of aesthetic excellence
              in a serene, luxurious environment.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Services</h4>
            <nav className="space-y-3">
              {[
                "Injectables & Fillers",
                "Facial Treatments",
                "Body Contouring",
                "Skin Rejuvenation",
                "Laser Treatments",
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@flawlessspa.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>info@flawlessspa.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  123 Beauty Lane<br />
                  Suite 100<br />
                  Beverly Hills, CA 90210
                </span>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white text-secondary text-xs uppercase tracking-[0.15em] font-medium transition-opacity hover:opacity-90"
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>© {currentYear} Flawless Med Spa. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;