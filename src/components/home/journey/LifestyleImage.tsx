const LifestyleImage = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <img
        src="/placeholder.svg"
        alt="Luxe Aesthetics clients"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
    </section>
  );
};

export default LifestyleImage;
