import { Link, useLocation } from "react-router-dom";
import { X, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string }[];
}

const MobileNav = ({ isOpen, onClose, navLinks }: MobileNavProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-secondary text-secondary-foreground animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-serif text-2xl tracking-wide">Menu</span>
            <button
              onClick={onClose}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-6 py-4 text-lg font-serif tracking-wide transition-colors",
                  isActive(link.path)
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                <span>{link.name}</span>
                <span className="text-white/50">→</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 space-y-4">
            {/* Contact */}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Phone size={18} />
              <span>(123) 456-7890</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-white text-secondary text-sm uppercase tracking-[0.15em] font-medium transition-opacity hover:opacity-90"
            >
              <MessageCircle size={18} />
              Schedule Appointment
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;