import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello, my name is ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(123) 456-7890",
      href: "tel:+1234567890",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@flawlessspa.com",
      href: "mailto:info@flawlessspa.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Beauty Lane, Suite 100\nBeverly Hills, CA 90210",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Sat: 9am - 7pm\nSunday: 10am - 5pm",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <p className="subheading mb-4">Reach Out</p>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
                We'd Love to Hear from You
              </h2>
              <div className="divider-elegant !mx-0" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have questions about our services, want to book an
                appointment, or just want to say hello, we're here for you.
                Reach out through any of the channels below.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="glossy-icon flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.1em] text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-secondary hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-secondary whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-luxury bg-green-600 hover:bg-green-700"
                style={{
                  background: 'linear-gradient(145deg, hsl(142 70% 35%) 0%, hsl(142 70% 30%) 50%, hsl(142 70% 35%) 100%)',
                }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-serif text-2xl text-secondary mb-6 relative z-10">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary pearl-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary pearl-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary pearl-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals or ask any questions..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary resize-none pearl-border"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-luxury flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will be sent through WhatsApp for a quick
                  response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted relative oily-sheen">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center glass-card p-8">
            <div className="glossy-icon w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground relative z-10">
              123 Beauty Lane, Suite 100
              <br />
              Beverly Hills, CA 90210
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary text-sm uppercase tracking-[0.1em] hover:underline relative z-10"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
