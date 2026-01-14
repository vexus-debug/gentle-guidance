import { Link } from "react-router-dom";
import { ArrowRight, Play, ImageIcon } from "lucide-react";
import { useState } from "react";
import galleryImage1 from "@/assets/gallery/before-after.jpg";
import galleryImage2 from "@/assets/gallery/glowing-result.jpg";
import galleryImage3 from "@/assets/gallery/facial-treatment-device.jpg";
import galleryImage4 from "@/assets/gallery/skincare-result-1.jpg";
import galleryImage5 from "@/assets/gallery/skincare-result-2.jpg";

const galleryImages = [
  { src: galleryImage1, alt: "Before and after transformation", size: "large" },
  { src: galleryImage2, alt: "Glowing skin result", size: "medium" },
  { src: galleryImage3, alt: "Treatment in progress", size: "small" },
  { src: galleryImage4, alt: "Skincare result", size: "small" },
  { src: galleryImage5, alt: "Beautiful result", size: "small" },
];

const TransformationArt = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Soft organic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-spa-beige/30 dark:from-spa-beige/10 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dynamic Masonry Gallery */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl mb-4 group">
              <img
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 dark:from-background/40 to-transparent" />
              
              {/* View count badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm shadow-lg">
                <ImageIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary dark:text-foreground">50+ Results</span>
              </div>
            </div>
            
            {/* Thumbnail strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    activeImage === index 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              <Link
                to="/gallery"
                className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-spa-gold/20 border-2 border-dashed border-primary/40 flex items-center justify-center hover:border-primary transition-colors duration-300"
              >
                <div className="text-center">
                  <ArrowRight className="w-5 h-5 text-primary mx-auto mb-1" />
                  <span className="text-[10px] text-primary font-medium">View All</span>
                </div>
              </Link>
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-primary/20 dark:border-primary/30 hidden lg:block" />
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <p className="subheading mb-4">The Art of Transformation</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary dark:text-foreground mb-6 leading-tight">
              Witness the <span className="text-primary italic">Magic</span> of Expert Care
            </h2>
            
            <div className="w-16 h-[2px] mb-8 bg-gradient-to-r from-primary/60 to-transparent" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every transformation tells a story — of renewed confidence, of self-love embraced, 
              of beauty revealed. Our gallery showcases the artistry of our skilled practitioners 
              and the radiant results our clients have achieved.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              From subtle enhancements to remarkable rejuvenations, each before and after 
              reflects our commitment to personalized care and exceptional results.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10 p-6 rounded-2xl bg-gradient-to-r from-muted/50 to-transparent border border-border/30">
              <div className="text-center">
                <p className="text-3xl font-serif text-secondary dark:text-foreground">50+</p>
                <p className="text-xs text-muted-foreground">Gallery Images</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-serif text-secondary dark:text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Real Results</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-serif text-secondary dark:text-foreground">Zero</p>
                <p className="text-xs text-muted-foreground">Filters Used</p>
              </div>
            </div>
            
            <Link 
              to="/gallery" 
              className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Explore Our Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationArt;