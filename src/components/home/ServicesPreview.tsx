import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import serviceAdvanced from "@/assets/service-advanced.jpg";

const services = [
  {
    title: "Facial Treatments",
    description:
      "Customized facials targeting acne, fine lines, uneven tone, and more. Our treatments are tailored to your unique needs to reveal your natural radiance.",
    image: serviceFacial,
  },
  {
    title: "Massage Therapy",
    description:
      "Relaxing and therapeutic massage treatments to relieve stress, ease muscle tension, and rejuvenate your body and spirit in our serene environment.",
    image: serviceMassage,
  },
  {
    title: "Advanced Aesthetics",
    description:
      "Microneedling, fat dissolving treatments, and other advanced procedures performed with precision for visible, lasting results.",
    image: serviceAdvanced,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-muted oily-sheen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="subheading mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary">
            Signature Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every treatment is personalized to your needs, combining luxury with 
            science-backed results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden glossy-frame">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="font-serif text-2xl text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.1em] hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-luxury">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
