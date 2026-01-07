import { Link } from "react-router-dom";
import { ArrowRight, Star, Award, Users, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="subheading text-white/80 mb-4">Welcome to Flawless</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6 leading-tight">
            BE FLAWLESS
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Where science meets artistry. Experience the pinnacle of aesthetic
            excellence in a serene, luxurious environment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-white text-secondary"
            >
              Schedule Consultation
            </a>
            <Link
              to="/services"
              className="flex items-center gap-2 text-white text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="subheading mb-4">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary mb-6">
              Experience True Rejuvenation
            </h2>
            <div className="divider-elegant bg-primary" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Flawless, we believe that true beauty lies in the harmony of
              nature and science. Our expert team of aestheticians and medical
              professionals work together to enhance your natural radiance,
              using the most advanced treatments available today.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subheading mb-4">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              Our Signature Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Injectables & Fillers",
                description:
                  "Botox, dermal fillers, and lip enhancements for a refreshed, youthful appearance.",
                image:
                  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Facial Treatments",
                description:
                  "Customized facials, chemical peels, and microneedling for glowing, healthy skin.",
                image:
                  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Body Contouring",
                description:
                  "Non-invasive body sculpting and skin tightening treatments for your best silhouette.",
                image:
                  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
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

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Calendar, value: "15+", label: "Years Experience" },
              { icon: Award, value: "50+", label: "Treatments" },
              { icon: Users, value: "10K+", label: "Happy Clients" },
              { icon: Star, value: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-spa-gold" />
                <div className="font-serif text-4xl md:text-5xl mb-2">
                  {stat.value}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="subheading mb-4">About Flawless</p>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
                Where Beauty Meets Expertise
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded with a passion for enhancing natural beauty, Flawless
                Med Spa has been a sanctuary for those seeking the finest
                aesthetic treatments. Our state-of-the-art facility combines
                cutting-edge technology with a warm, welcoming atmosphere.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Led by our team of board-certified professionals, we offer
                personalized treatment plans tailored to your unique needs and
                goals. Every visit is designed to leave you feeling refreshed,
                confident, and truly flawless.
              </p>
              <Link to="/about" className="btn-luxury">
                Meet Our Team
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80"
                  alt="Flawless Med Spa Interior"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 md:p-8">
                  <div className="font-serif text-3xl md:text-4xl">15+</div>
                  <p className="text-xs uppercase tracking-[0.15em] mt-1">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="subheading mb-4">Client Love</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-12">
              What Our Clients Say
            </h2>

            <div className="bg-card p-8 md:p-12 shadow-sm">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-spa-gold text-spa-gold"
                  />
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl text-secondary mb-6 italic leading-relaxed">
                "The team at Flawless truly understands beauty. My skin has
                never looked better, and I feel more confident than ever. This
                is now my go-to spa for everything!"
              </blockquote>
              <div>
                <p className="font-medium text-secondary">Sarah M.</p>
                <p className="text-sm text-muted-foreground">Verified Client</p>
              </div>
            </div>

            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 mt-8 text-primary text-sm uppercase tracking-[0.1em] hover:gap-3 transition-all"
            >
              Read More Reviews
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Feel Flawless?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book your complimentary consultation today and take the first step
            towards your most radiant self.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;