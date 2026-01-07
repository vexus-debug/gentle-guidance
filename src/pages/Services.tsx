import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("injectables");

  const categories = [
    {
      id: "injectables",
      name: "Injectables & Fillers",
      description: "Restore volume, smooth wrinkles, and enhance your natural features with precision injectables.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Botox & Dysport", duration: "30 min", price: "From $12/unit" },
        { name: "Dermal Fillers", duration: "45 min", price: "From $650" },
        { name: "Lip Enhancement", duration: "30 min", price: "From $550" },
        { name: "Jawline Contouring", duration: "45 min", price: "From $800" },
        { name: "Under-Eye Filler", duration: "30 min", price: "From $700" },
      ],
    },
    {
      id: "facials",
      name: "Facial Treatments",
      description: "Revitalize your skin with customized facial treatments designed for your unique needs.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Signature Flawless Facial", duration: "60 min", price: "$175" },
        { name: "HydraFacial", duration: "45 min", price: "$225" },
        { name: "Chemical Peel", duration: "30 min", price: "From $150" },
        { name: "Microneedling", duration: "60 min", price: "From $350" },
        { name: "LED Light Therapy", duration: "30 min", price: "$75" },
      ],
    },
    {
      id: "body",
      name: "Body Contouring",
      description: "Sculpt and define your silhouette with our advanced non-invasive body treatments.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "CoolSculpting", duration: "60 min", price: "From $750" },
        { name: "Radiofrequency Skin Tightening", duration: "45 min", price: "From $400" },
        { name: "Cellulite Treatment", duration: "45 min", price: "From $350" },
        { name: "Body Sculpting Package", duration: "90 min", price: "From $1,200" },
      ],
    },
    {
      id: "laser",
      name: "Laser Treatments",
      description: "Advanced laser technology for hair removal, skin resurfacing, and rejuvenation.",
      image: "https://images.unsplash.com/photo-1598524588066-4cb0473bc4d6?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Laser Hair Removal", duration: "30-60 min", price: "From $150" },
        { name: "Laser Skin Resurfacing", duration: "60 min", price: "From $500" },
        { name: "IPL Photofacial", duration: "45 min", price: "From $350" },
        { name: "Tattoo Removal", duration: "30 min", price: "From $200" },
      ],
    },
    {
      id: "skin",
      name: "Skin Rejuvenation",
      description: "Turn back time with our comprehensive skin rejuvenation and anti-aging treatments.",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "PRP Facial (Vampire Facial)", duration: "60 min", price: "$650" },
        { name: "Microcurrent Lifting", duration: "45 min", price: "$200" },
        { name: "Oxygen Infusion", duration: "45 min", price: "$175" },
        { name: "Dermaplaning", duration: "30 min", price: "$125" },
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Universal Beauty, Personalized Care
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every treatment at Flawless is tailored to your unique needs and goals.
            Our expert team combines cutting-edge technology with artistic precision
            to deliver results that enhance your natural beauty.
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-8 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-card overflow-hidden shadow-sm"
              >
                {/* Category Header */}
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.id ? null : category.id
                    )
                  }
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-secondary mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm hidden md:block">
                      {category.description}
                    </p>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>

                {/* Expanded Content */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    expandedCategory === category.id
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Services List */}
                      <div className="space-y-4">
                        {category.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-3 border-b border-border last:border-0"
                          >
                            <div>
                              <h4 className="font-medium text-secondary">
                                {service.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {service.duration}
                              </p>
                            </div>
                            <span className="text-primary font-medium">
                              {service.price}
                            </span>
                          </div>
                        ))}

                        <a
                          href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20a%20treatment"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 btn-luxury"
                        >
                          Book This Service
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our experts to create a
            personalized treatment plan tailored to your goals.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;