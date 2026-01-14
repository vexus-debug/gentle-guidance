const brandLogos = [
  "Allergan",
  "Galderma",
  "Merz",
  "Revance",
  "Evolus",
  "Sculptra",
  "Juvederm",
  "Restylane",
  "Dysport",
  "Xeomin",
];

const BrandMarquee = () => {
  return (
    <section className="py-12 bg-secondary/50 overflow-hidden border-y border-border">
      <div className="flex animate-marquee">
        {/* Double the items for seamless loop */}
        {[...brandLogos, ...brandLogos].map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-12 md:px-16"
          >
            <span className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground font-medium whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;
