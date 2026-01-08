import { Heart, Leaf, Crown } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="py-20 md:py-32 glossy-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="subheading mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary mb-6">
            A Sanctuary for <span className="text-primary">Black Beauty</span>
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            At ZealAesthetics, we understand that melanin-rich skin has unique needs that deserve 
            specialized attention and expertise. Founded with a deep passion for celebrating Black beauty, 
            our spa is more than a treatment center — it's a haven where you can embrace your natural 
            radiance while receiving care that truly understands your skin.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">
            Our team of skilled aestheticians are trained specifically in treatments designed for 
            darker skin tones, using products formulated to address concerns like hyperpigmentation, 
            melasma, and uneven skin tone without causing harm or irritation.
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2 relative z-10">
                Culturally Conscious
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                We celebrate and understand the unique beauty of Black women
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2 relative z-10">
                Melanin-Safe Products
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                Premium formulations specifically designed for darker skin tones
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2 relative z-10">
                Expert Care
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                Trained professionals who specialize in treating melanin-rich skin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
