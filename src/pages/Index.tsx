import { Link } from "react-router-dom";
import { ArrowRight, Star, Award, Users, Calendar, GraduationCap, Sparkles } from "lucide-react";
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
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="subheading text-white/80 mb-4">Welcome to ZealAesthetics</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide mb-6 leading-tight">
            INSTITUTE & SPA
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Premium spa services and professional aesthetic training in the heart of Abuja.
            Where beauty meets expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-white text-secondary"
            >
              Book a Treatment
            </a>
            <Link
              to="/training"
              className="flex items-center gap-2 text-white text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
            >
              Explore Training Programs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Value Proposition */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="subheading mb-4">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary mb-6">
              Beauty & Excellence
            </h2>
            <div className="divider-elegant" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              At ZealAesthetics, we're more than a spa — we're a complete health and beauty destination. 
              Whether you're seeking transformative treatments or building your career in aesthetics, 
              our expert team delivers exceptional results in every experience.
            </p>
          </div>

          {/* Two Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spa Services */}
            <div className="glass-card p-8 md:p-10 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl text-secondary mb-4 relative z-10">Spa Services</h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Indulge in our range of premium treatments designed to rejuvenate, refresh, and restore. 
                From facials to body contouring, we bring out your natural beauty.
              </p>
              <Link to="/services" className="btn-luxury">
                View Services
              </Link>
            </div>

            {/* Professional Training */}
            <div className="glass-card p-8 md:p-10 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-3xl text-secondary mb-4 relative z-10">Professional Training</h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                Launch or advance your career with our comprehensive aesthetic training programs. 
                Learn from industry experts and gain hands-on experience.
              </p>
              <Link to="/training" className="btn-luxury">
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-muted oily-sheen">
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
                title: "Facial Treatments",
                description:
                  "Customized facials targeting acne, melasma, hyperpigmentation, and more for radiant, healthy skin.",
                image:
                  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Massage Therapy",
                description:
                  "Relaxing and therapeutic massage treatments to relieve stress and rejuvenate your body.",
                image:
                  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Advanced Aesthetics",
                description:
                  "Microneedling, fat dissolving treatments, and other advanced procedures for visible results.",
                image:
                  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group glass-card overflow-hidden transition-all duration-500 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden glossy-frame">
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

      {/* Stats Section */}
      <section className="py-20 glossy-dark text-secondary-foreground">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Calendar, value: "5+", label: "Years Experience" },
              { icon: Award, value: "30+", label: "Treatments" },
              { icon: Users, value: "1000+", label: "Happy Clients" },
              { icon: GraduationCap, value: "500+", label: "Trained Professionals" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="glossy-icon w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-spa-gold" />
                </div>
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

      {/* Training Preview */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="subheading mb-4">Professional Training</p>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
                Launch Your Career in Aesthetics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our comprehensive training programs are designed to equip you with the skills 
                and knowledge needed to excel in the beauty and aesthetics industry. Learn from 
                experienced professionals in a hands-on environment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Aesthetic Training Programs",
                  "Clinical Skincare Product Development",
                  "Beauty & Spa Therapy Courses",
                  "Facials, Waxing & Massage Techniques",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Star className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/training" className="btn-luxury">
                View Training Programs
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative glossy-frame">
                <img
                  src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80"
                  alt="ZealAesthetics Training"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 glass-card text-secondary p-6 md:p-8">
                  <div className="font-serif text-3xl md:text-4xl relative z-10">500+</div>
                  <p className="text-xs uppercase tracking-[0.15em] mt-1 text-muted-foreground relative z-10">
                    Graduates Trained
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 md:py-32 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="subheading mb-4">Client Love</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-12">
              What Our Clients Say
            </h2>

            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center justify-center gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-spa-gold text-spa-gold"
                  />
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl text-secondary mb-6 italic leading-relaxed relative z-10">
                "ZealAesthetics transformed not just my skin, but my confidence. 
                The team is professional, knowledgeable, and truly cares about results. 
                Best spa experience in Abuja!"
              </blockquote>
              <div className="relative z-10">
                <p className="font-medium text-secondary">Adaeze N.</p>
                <p className="text-sm text-muted-foreground">Facial Treatment Client</p>
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

      {/* Location Section */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="subheading mb-4">Visit Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
              Located in Wuse Zone 6, Abuja
            </h2>
            <div className="divider-elegant" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Find us at 33 Tunis Street, Wuse Zone 6, Abuja. We're open Monday through 
              Saturday, 10 AM to 7 PM. We look forward to welcoming you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
              >
                Book Appointment
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 text-secondary text-sm uppercase tracking-[0.15em] hover:text-primary transition-colors"
              >
                Get Directions
                <ArrowRight size={16} />
              </Link>
            </div>
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
        <div className="absolute inset-0 glossy-dark opacity-90" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're seeking premium spa treatments or professional training, 
            ZealAesthetics is here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-white text-secondary"
            >
              Book a Treatment
            </a>
            <Link
              to="/training"
              className="flex items-center gap-2 text-white text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity pearl-border px-6 py-3"
            >
              Enroll in Training
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
