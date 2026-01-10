import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import consultationMarkings from "@/assets/gallery/consultation-markings.jpg";
import botoxInjection from "@/assets/gallery/botox-injection.jpg";
import glowingResult from "@/assets/gallery/glowing-result.jpg";

const heroImages = [
  {
    src: consultationMarkings,
    alt: "Professional aesthetic consultation with facial markings",
  },
  {
    src: botoxInjection,
    alt: "Expert botox injection treatment",
  },
  {
    src: glowingResult,
    alt: "Beautiful glowing skin result after treatment",
  },
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image.src}')` }}
          aria-hidden={index !== currentIndex}
        />
      ))}
      
      {/* Overlay */}
      <div className="hero-overlay" />
      <div className="absolute inset-0 oily-sheen" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="subheading text-white/80 mb-4 animate-fade-in">
          Welcome to ZealAesthetics
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6 leading-tight">
          ELEVATE YOUR <span className="text-spa-gold">NATURAL BEAUTY</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
          A luxurious sanctuary dedicated to your beauty and wellness. 
          Experience premium skincare and aesthetic treatments tailored to your unique needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-spa-gold text-white hover:bg-spa-gold/90"
          >
            Book Your Experience
          </a>
          <Link
            to="/training"
            className="flex items-center gap-2 text-white text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity pearl-border px-6 py-3"
          >
            Explore Training Programs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-spa-gold w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
