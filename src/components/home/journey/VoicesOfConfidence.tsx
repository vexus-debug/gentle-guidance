import { Link } from "react-router-dom";
import { ArrowRight, Quote, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "The experience at ZealAesthetics was absolutely transformative. The team made me feel so comfortable and the results exceeded my expectations. I've never felt more confident in my own skin.",
    name: "Amara O.",
    treatment: "Facial Rejuvenation",
    image: testimonial1,
    rating: 5,
    featured: true,
  },
  {
    quote: "From the moment I walked in, I knew I was in good hands. The attention to detail, the warmth of the staff, and the exceptional results have made me a client for life.",
    name: "Chidinma E.",
    treatment: "Skin Boosters",
    image: testimonial2,
    rating: 5,
  },
  {
    quote: "Professional, caring, and incredibly skilled. ZealAesthetics understands that true beauty comes from feeling your best, and they deliver that experience every single visit.",
    name: "Fatima B.",
    treatment: "Injectable Treatments",
    image: testimonial3,
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-spa-gold text-spa-gold' : 'text-muted-foreground/30'}`} 
      />
    ))}
  </div>
);

const VoicesOfConfidence = () => {
  const [featured, ...others] = testimonials;
  
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-spa-beige/30 dark:from-spa-beige/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-primary/10 dark:from-primary/5 to-transparent blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Aggregate Rating Banner */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-spa-gold/10 via-spa-gold/20 to-spa-gold/10 border border-spa-gold/30">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-spa-gold text-spa-gold" />
              <span className="font-serif text-2xl text-secondary dark:text-foreground">4.9</span>
            </div>
            <div className="w-px h-6 bg-spa-gold/30" />
            <span className="text-sm text-muted-foreground">from <span className="font-medium text-foreground dark:text-foreground">200+ reviews</span></span>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <p className="subheading mb-4">Voices of Confidence</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary dark:text-foreground mb-6">
            Real Stories, Real <span className="text-primary italic">Radiance</span>
          </h2>
          <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large Testimonial */}
          <div className="lg:col-span-5 relative bg-gradient-to-br from-card to-spa-beige/40 dark:from-card dark:to-spa-beige/15 rounded-[2rem] p-8 lg:p-10 shadow-xl border border-border/50">
            {/* Quote icon */}
            <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-spa-gold flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>
            
            <div className="pt-6">
              <StarRating rating={featured.rating} />
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed my-6 italic">
                "{featured.quote}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-secondary dark:text-foreground">{featured.name}</h4>
                  <p className="text-sm text-muted-foreground">{featured.treatment}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Testimonials */}
          <div className="lg:col-span-7 grid gap-6">
            {others.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-card to-spa-beige/30 dark:from-card dark:to-spa-beige/10 rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote icon */}
                <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Quote className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                
                <div className="pt-3 flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <StarRating rating={testimonial.rating} />
                    <p className="text-muted-foreground leading-relaxed mt-3 mb-4 italic line-clamp-3">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 md:flex-col md:items-end md:justify-center md:border-l md:border-border/50 md:pl-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:text-right">
                      <h4 className="font-serif text-base text-secondary dark:text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-14">
          <Link 
            to="/testimonials" 
            className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium">Read More Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VoicesOfConfidence;
