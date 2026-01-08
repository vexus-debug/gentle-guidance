import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("facials");

  const categories = [
    {
      id: "facials",
      name: "Facial Treatments",
      description: "Customized facials and skin treatments for all skin types and concerns.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Deep Cleansing Facial", duration: "60 min", description: "Thorough cleansing and extraction for clear skin" },
        { name: "Acne Treatment Facial", duration: "60 min", description: "Targeted treatment for acne-prone skin" },
        { name: "Melasma Treatment", duration: "45-60 min", description: "Specialized treatment for hyperpigmentation" },
        { name: "Hyperpigmentation Correction", duration: "45 min", description: "Even out skin tone and reduce dark spots" },
        { name: "Anti-Aging Facial", duration: "75 min", description: "Rejuvenating treatment for mature skin" },
        { name: "Hydrating Glow Facial", duration: "60 min", description: "Deep hydration for radiant, glowing skin" },
      ],
    },
    {
      id: "massage",
      name: "Massage Therapy",
      description: "Relaxing and therapeutic massage treatments to relieve stress and tension.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Swedish Massage", duration: "60 min", description: "Classic relaxation massage" },
        { name: "Deep Tissue Massage", duration: "60 min", description: "Targeted relief for muscle tension" },
        { name: "Hot Stone Massage", duration: "75 min", description: "Heated stones for deep relaxation" },
        { name: "Aromatherapy Massage", duration: "60 min", description: "Essential oils for enhanced relaxation" },
        { name: "Back, Neck & Shoulder", duration: "30 min", description: "Focused treatment for tension areas" },
      ],
    },
    {
      id: "body",
      name: "Body Treatments",
      description: "Waxing, body scrubs, and contouring treatments for smooth, beautiful skin.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Full Body Waxing", duration: "90 min", description: "Complete hair removal treatment" },
        { name: "Brazilian Wax", duration: "30 min", description: "Professional intimate waxing" },
        { name: "Legs & Arms Wax", duration: "45 min", description: "Smooth, hair-free limbs" },
        { name: "Exfoliating Body Scrub", duration: "45 min", description: "Remove dead skin for soft, smooth skin" },
        { name: "Body Wrap", duration: "60 min", description: "Detoxifying and hydrating treatment" },
        { name: "Back Treatment", duration: "45 min", description: "Deep cleansing for back skin" },
      ],
    },
    {
      id: "advanced",
      name: "Advanced Aesthetics",
      description: "Medical-grade treatments for visible, lasting results.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Microneedling", duration: "60 min", description: "Collagen induction therapy for skin renewal" },
        { name: "Fat Dissolving Treatment", duration: "45 min", description: "Non-surgical fat reduction" },
        { name: "Chemical Peel", duration: "30-45 min", description: "Professional-grade skin resurfacing" },
        { name: "LED Light Therapy", duration: "30 min", description: "Light-based skin treatment" },
        { name: "Dermaplaning", duration: "30 min", description: "Gentle exfoliation and peach fuzz removal" },
      ],
    },
    {
      id: "skin",
      name: "Skin Concerns",
      description: "Targeted treatments for specific skin concerns and conditions.",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Acne Scar Treatment", duration: "60 min", description: "Reduce the appearance of acne scars" },
        { name: "Dark Circle Treatment", duration: "30 min", description: "Brighten under-eye area" },
        { name: "Stretch Mark Treatment", duration: "45 min", description: "Minimize stretch mark appearance" },
        { name: "Skin Tag Removal", duration: "15-30 min", description: "Safe removal of skin tags" },
        { name: "Consultation", duration: "30 min", description: "Personalized skin analysis and recommendations" },
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
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Premium Spa & Aesthetic Services
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            At ZealAesthetics, every treatment is tailored to your unique needs and goals.
            Our expert team uses premium products and techniques to deliver results that 
            enhance your natural beauty. From relaxing massages to advanced skin treatments, 
            we have something for everyone.
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-8 md:py-16 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="glass-card overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.id ? null : category.id
                    )
                  }
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted/50 transition-colors relative z-10"
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
                    "overflow-hidden transition-all duration-500",
                    expandedCategory === category.id
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-border relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden glossy-frame">
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
                                {service.duration} — {service.description}
                              </p>
                            </div>
                          </div>
                        ))}

                        <a
                          href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20a%20treatment"
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

      {/* Training Promo */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="subheading mb-4">Want to Learn These Skills?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
              Join Our Training Programs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Learn to perform these treatments professionally with our comprehensive 
              training courses. Our programs cover everything from skincare basics to 
              advanced aesthetic techniques.
            </p>
            <Link to="/training" className="btn-luxury">
              Explore Training Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us for a personalized consultation. Our experts will recommend 
            the best treatments for your specific needs and goals.
          </p>
          <a
            href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary w-full sm:w-auto"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
