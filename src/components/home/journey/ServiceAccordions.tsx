import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    id: "injectables",
    title: "Injectables & Toxins",
    subtitle: "KOREAN & AMERICAN NEUROMODULATORS",
    heading: "Refined Elegance",
    description: "Our premium collection of neuromodulators includes both Korean innovations like Nabota and Innotox, and trusted American brands like Botox and Dysport. Each treatment is precisely administered to soften expression lines while maintaining natural facial movement.",
    link: "/services/korean-injectables",
    linkText: "View All Injectables",
  },
  {
    id: "fillers",
    title: "Dermal Fillers",
    subtitle: "PREMIUM HYALURONIC ACID FILLERS",
    heading: "Sculpted Beauty",
    description: "From subtle lip enhancement to full facial rejuvenation, our dermal filler collection includes Juvederm, Restylane, Sculptra, and premium Korean options. Our artists create natural-looking volume and contour tailored to your unique features.",
    link: "/services/american-fillers",
    linkText: "View All Fillers",
  },
  {
    id: "skin-boosters",
    title: "Skin Boosters",
    subtitle: "DEEP HYDRATION TREATMENTS",
    heading: "Luminous Glow",
    description: "Experience the next level of skin hydration with Profhilo, Skinvive, and other advanced skin boosters. These treatments work beneath the surface to improve skin quality, elasticity, and radiance from within.",
    link: "/services/skin-boosters",
    linkText: "View All Skin Boosters",
  },
  {
    id: "facial",
    title: "Facial Treatments",
    subtitle: "ADVANCED SKINCARE SOLUTIONS",
    heading: "Radiant Revival",
    description: "Our facial menu includes HydraFacial, microneedling, chemical peels, PRP therapy, and more. Each treatment is customized to address your specific skin concerns, from aging and acne to hyperpigmentation and texture.",
    link: "/services/facial-treatments",
    linkText: "View All Facials",
  },
  {
    id: "body",
    title: "Body Sculpting",
    subtitle: "NON-INVASIVE CONTOURING",
    heading: "Sculpted Silhouette",
    description: "Achieve your body goals without surgery. Our body sculpting services include wood therapy, lymphatic drainage, radiofrequency treatments, and targeted fat reduction technologies for a contoured, toned appearance.",
    link: "/services/body-sculpting",
    linkText: "View All Body Treatments",
  },
  {
    id: "iv-therapy",
    title: "IV Therapy",
    subtitle: "WELLNESS INFUSIONS",
    heading: "Inner Vitality",
    description: "Replenish your body from the inside out with our curated IV therapy menu. From energy-boosting vitamin infusions to skin-glowing glutathione treatments, experience wellness at the cellular level.",
    link: "/services/iv-therapy",
    linkText: "View All IV Therapies",
  },
  {
    id: "wellness",
    title: "Wellness",
    subtitle: "HOLISTIC REJUVENATION",
    heading: "Complete Harmony",
    description: "Beyond aesthetics, we offer comprehensive wellness treatments including hormone optimization, sexual wellness therapies, and regenerative medicine. Enhance your quality of life with our integrative approach.",
    link: "/services/wellness",
    linkText: "View All Wellness Services",
  },
];

const ServiceAccordions = () => {
  const [openId, setOpenId] = useState<string | null>("injectables");

  return (
    <section className="py-16 md:py-24 bg-section-dark text-section-dark-foreground">
      <div className="section-container">
        <div className="divide-y divide-section-dark-foreground/10">
          {serviceCategories.map((category) => (
            <div key={category.id} className="py-6">
              {/* Accordion Header */}
              <button
                onClick={() => setOpenId(openId === category.id ? null : category.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <h3 className="font-serif text-2xl md:text-3xl font-light group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
                <ChevronDown 
                  size={24} 
                  className={cn(
                    "transition-transform duration-300 text-section-dark-foreground/60",
                    openId === category.id && "rotate-180"
                  )}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={cn(
                  "grid transition-all duration-500 ease-in-out",
                  openId === category.id 
                    ? "grid-rows-[1fr] opacity-100 mt-8" 
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-section-dark-foreground/50">
                        {category.subtitle}
                      </p>
                      <h4 className="font-serif text-3xl md:text-4xl font-light italic">
                        {category.heading}
                      </h4>
                      <p className="text-section-dark-foreground/70 leading-relaxed">
                        {category.description}
                      </p>
                      <Link
                        to={category.link}
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest 
                                   text-section-dark-foreground hover:text-accent transition-colors mt-4
                                   relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px 
                                   after:bg-accent after:scale-x-0 after:origin-right after:transition-transform 
                                   after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                      >
                        {category.linkText}
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-section-dark-foreground/10">
                      <img
                        src="/placeholder.svg"
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAccordions;
