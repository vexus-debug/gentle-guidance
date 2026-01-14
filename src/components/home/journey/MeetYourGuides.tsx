import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import aboutImage from "@/assets/about-professional.jpg";

const teamCredentials = [
  "Board Certified",
  "Advanced Training",
  "International Experience",
];

const AnimatedCounter = ({ value, suffix = "", isDecimal = false }: { value: number; suffix?: string; isDecimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
              setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated, isDecimal]);

  return (
    <div ref={ref}>
      <span className="tabular-nums">
        {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </span>
    </div>
  );
};

const MeetYourGuides = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20 dark:to-muted/10">
      {/* Organic background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-spa-beige/40 dark:from-spa-beige/15 to-transparent blur-3xl transform translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with organic frame */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Our expert team"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 dark:from-background/40 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border-2 border-primary/20 dark:border-primary/30 hidden lg:block" />
            <div className="absolute top-10 -left-10 w-20 h-20 rounded-full bg-spa-gold/20 blur-2xl hidden lg:block" />
            
            {/* Stats badge */}
            <div className="absolute bottom-8 left-8 bg-card/95 dark:bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hidden md:block border dark:border-border/50">
              <p className="text-4xl font-serif text-primary mb-1">50+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Combined Experience</p>
            </div>
            
            {/* Credentials badge */}
            <div className="absolute top-8 right-8 bg-card/95 dark:bg-card/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl hidden lg:flex flex-wrap gap-2 max-w-[180px] border dark:border-border/50">
              {teamCredentials.map((cred, i) => (
                <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {cred}
                </span>
              ))}
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <p className="subheading mb-4">Meet Your Guides</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary dark:text-foreground mb-6 leading-tight">
              Your Beauty, Our <span className="text-primary italic">Passion</span>
            </h2>
            
            <div className="w-16 h-[2px] mb-8 bg-gradient-to-r from-primary/60 to-transparent" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At ZealAesthetics, our exceptional team embodies the very heart of your aesthetic journey. 
              With decades of combined expertise, our globally trained specialists seamlessly blend 
              medical precision with refined artistry.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              This distinguished collective of physicians, nurses, and licensed aesthetic providers 
              brings incredible mastery to advanced treatments. We craft comprehensive, personalized 
              plans for your holistic well-being.
            </p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10 p-6 rounded-2xl bg-gradient-to-r from-muted/50 to-transparent border border-border/30">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary opacity-70" />
                  <p className="text-2xl md:text-3xl font-serif text-secondary dark:text-foreground">
                    <AnimatedCounter value={10000} suffix="+" />
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">Procedures</p>
              </div>
              
              <div className="text-center border-x border-border/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary opacity-70" />
                  <p className="text-2xl md:text-3xl font-serif text-secondary dark:text-foreground">
                    <AnimatedCounter value={200} suffix="+" />
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">Monthly</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-spa-gold opacity-70" />
                  <p className="text-2xl md:text-3xl font-serif text-secondary dark:text-foreground">
                    <AnimatedCounter value={4.9} suffix="★" isDecimal />
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Meet the Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourGuides;