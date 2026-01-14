import { Shield, Award, Star, CheckCircle, BadgeCheck, Verified } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const credentials = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "All practitioners are fully licensed with continuous advanced training",
  },
  {
    icon: BadgeCheck,
    title: "FDA-Approved Products",
    description: "Only internationally certified, premium-grade products",
  },
  {
    icon: Star,
    title: "Excellence Standards",
    description: "Adherence to the highest international medical spa standards",
  },
  {
    icon: Verified,
    title: "Verified Results",
    description: "Documented transformations with proven safety record",
  },
];

const partnerBrands = [
  "Allergan", "Galderma", "Juvederm", "Restylane", "Sculptra", "Profhilo"
];

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const CredentialsTrust = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-muted/40 via-background to-muted/40 dark:from-muted/20 dark:via-background dark:to-muted/20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="subheading mb-4">Credentials & Trust</p>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary dark:text-foreground mb-4">
            Your Safety, Our <span className="text-primary italic">Promise</span>
          </h2>
          <div className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/30 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-spa-gold/10 dark:from-primary/20 dark:to-spa-gold/15 mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <credential.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-secondary dark:text-foreground mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{credential.description}</p>
            </div>
          ))}
        </div>
        
        {/* Partner Brands */}
        <div className="mt-16">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">Trusted Product Partners</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {partnerBrands.map((brand, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-full bg-card/60 dark:bg-card/40 border border-border/30 hover:border-primary/30 transition-colors duration-300"
              >
                <span className="text-sm font-medium text-muted-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-8 px-8 py-8 rounded-3xl bg-gradient-to-r from-card via-spa-beige/30 dark:via-spa-beige/10 to-card border border-border/50 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-serif text-3xl text-secondary dark:text-foreground">
                  <AnimatedCounter value={2500} suffix="+" />
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-border" />
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-spa-gold/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-spa-gold" />
              </div>
              <div className="text-left">
                <p className="font-serif text-3xl text-secondary dark:text-foreground">4.9★</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Average Rating</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-border" />
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-serif text-3xl text-secondary dark:text-foreground">
                  <AnimatedCounter value={10000} suffix="+" />
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Procedures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsTrust;