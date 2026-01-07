import { Star, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      treatment: "Lip Enhancement",
      rating: 5,
      text: "The team at Flawless truly understands beauty. My skin has never looked better, and I feel more confident than ever. This is now my go-to spa for everything!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Jennifer L.",
      treatment: "HydraFacial",
      rating: 5,
      text: "I've been coming here for over two years now. The results speak for themselves - my friends keep asking what my secret is. It's Flawless!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Amanda R.",
      treatment: "Botox",
      rating: 5,
      text: "Dr. Chen and her team are absolute artists. They take the time to understand what you want and deliver results that look completely natural.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Michelle K.",
      treatment: "Body Contouring",
      rating: 5,
      text: "The body contouring results exceeded my expectations. The staff made me feel comfortable throughout the entire process. Highly recommend!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Rebecca T.",
      treatment: "Chemical Peel",
      rating: 5,
      text: "After just one treatment, I could see a noticeable difference in my skin texture. The spa is beautiful and relaxing. A true luxury experience.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Christina W.",
      treatment: "Dermal Fillers",
      rating: 5,
      text: "I was nervous about getting fillers for the first time, but the team at Flawless put me completely at ease. The results are subtle and beautiful.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const stats = [
    { value: "500+", label: "5-Star Reviews" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "4.9", label: "Google Rating" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">Client Love</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Testimonials
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl mb-1">
                  {stat.value}
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Real Stories, Real Results
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our clients' satisfaction is our greatest achievement. Read what they
            have to say about their experience at Flawless Med Spa.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-spa-gold text-spa-gold"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We love hearing from our clients! If you've had a great experience at
            Flawless, we'd appreciate your review.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="btn-luxury"
            >
              Write a Review
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border border-secondary text-secondary text-sm uppercase tracking-[0.2em] font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Review Us on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Join Our Happy Clients
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Experience the Flawless difference for yourself. Book your
            consultation today.
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

export default Testimonials;