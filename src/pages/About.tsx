import { Link } from "react-router-dom";
import { Award, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const team = [
    {
      name: "Dr. Emily Chen",
      title: "Founder & Medical Director",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      bio: "Board-certified dermatologist with over 20 years of experience in aesthetic medicine.",
    },
    {
      name: "Sarah Williams",
      title: "Lead Aesthetician",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Certified master aesthetician specializing in advanced facial treatments.",
    },
    {
      name: "Michael Torres",
      title: "Injection Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
      bio: "Expert in injectables with a keen eye for natural, harmonious results.",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We pursue the highest standards in every treatment and interaction.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every client with genuine care and understanding.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Our team continuously advances their skills and knowledge.",
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
              "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            About Flawless
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="glossy-frame">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Flawless Med Spa"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <p className="subheading mb-4">Our Beginning</p>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
                A Vision of Beauty
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Flawless Med Spa was born from a simple yet powerful vision: to
                  create a sanctuary where clients could experience transformative
                  aesthetic treatments in an atmosphere of luxury and care.
                </p>
                <p>
                  Founded in 2009 by Dr. Emily Chen, our practice has grown from a
                  small boutique clinic to a premier destination for those seeking
                  the finest in aesthetic medicine. Dr. Chen's philosophy of
                  combining medical expertise with an artistic eye has shaped every
                  aspect of our practice.
                </p>
                <p>
                  Today, Flawless stands as a testament to that original vision. We
                  continue to push the boundaries of aesthetic innovation while
                  maintaining the intimate, personalized approach that has earned us
                  the trust of thousands of clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subheading mb-4">What Drives Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center glass-card p-8">
                <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 relative z-10">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-secondary mb-3 relative z-10">
                  {value.title}
                </h3>
                <p className="text-muted-foreground relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subheading mb-4">Curated Mastery</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              Meet Our Expert Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6 glossy-frame">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl text-secondary mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm uppercase tracking-[0.1em] mb-3">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Experience the Flawless Difference
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have discovered their best
            selves at Flawless Med Spa.
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

export default About;
