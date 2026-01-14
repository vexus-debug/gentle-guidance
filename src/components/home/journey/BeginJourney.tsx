import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const BeginJourney = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-spa-beige/40 to-spa-gold/10 dark:from-spa-chocolate/40 dark:via-spa-beige/20 dark:to-spa-gold/5" />
      
      {/* Organic decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 dark:from-primary/5 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-spa-gold/15 dark:from-spa-gold/10 to-transparent blur-3xl transform translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Special Offer Banner */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-spa-gold/20 via-spa-gold/30 to-spa-gold/20 border border-spa-gold/40 animate-pulse">
              <Sparkles className="w-5 h-5 text-spa-gold" />
              <span className="text-sm font-medium text-secondary dark:text-foreground">
                Book This Week — <span className="text-spa-gold">Free Consultation</span>
              </span>
              <Sparkles className="w-5 h-5 text-spa-gold" />
            </div>
          </div>
          
          <div className="text-center">
            <p className="subheading mb-6">Begin Your Journey</p>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary dark:text-foreground mb-6 leading-tight">
              Your Radiance <span className="text-primary italic">Awaits</span>
            </h2>
            
            <div className="w-24 h-[2px] mx-auto mb-10 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              Take the first step towards revealing your most confident, radiant self. 
              Schedule a private consultation and let us craft a personalized path to your beauty goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="btn-luxury rounded-full inline-flex items-center gap-3"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white transition-all duration-300 text-sm uppercase tracking-[0.1em] shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            
            {/* Contact info cards - Larger and more prominent */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href="https://maps.google.com/?q=33+Tunis+Street+Wuse+Zone+6+Abuja+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 rounded-3xl bg-card/80 dark:bg-card/60 backdrop-blur-sm shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg text-secondary dark:text-foreground mb-2">Visit Us</h4>
                <p className="text-sm text-muted-foreground text-center">
                  33 Tunis Street, Wuse Zone 6<br />Abuja, Nigeria
                </p>
              </a>
              
              <div className="flex flex-col items-center p-8 rounded-3xl bg-card/80 dark:bg-card/60 backdrop-blur-sm shadow-lg border border-border/50">
                <div className="w-14 h-14 rounded-2xl bg-spa-gold/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-spa-gold" />
                </div>
                <h4 className="font-serif text-lg text-secondary dark:text-foreground mb-2">Hours</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Mon – Sat: 10AM – 7PM<br />
                  <span className="text-xs text-primary">Next Available: Today</span>
                </p>
              </div>
              
              <a 
                href="tel:+2349015012285"
                className="group flex flex-col items-center p-8 rounded-3xl bg-card/80 dark:bg-card/60 backdrop-blur-sm shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-serif text-lg text-secondary dark:text-foreground mb-2">Call Us</h4>
                <p className="text-sm text-muted-foreground text-center">
                  +234 901 501 2285<br />
                  <span className="text-xs text-primary">Tap to call</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,70 1200,60 L1200,120 L0,120 Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default BeginJourney;