import { Sparkles } from "lucide-react";

const TreatmentsIntro = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent/20 via-gold/20 to-accent/20">
      <div className="section-container text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 mb-4">
          <Sparkles className="w-6 h-6 text-accent" />
        </div>
        <p className="subheading mb-3">
          PERSONALIZED TREATMENTS IN BEVERLY HILLS
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground">
          Elegant <span className="italic">Harmony</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive range of aesthetic treatments, each designed 
          to bring out your best self with precision and care.
        </p>
      </div>
    </section>
  );
};

export default TreatmentsIntro;
