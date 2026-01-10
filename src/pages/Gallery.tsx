import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

import facialTreatmentDevice from "@/assets/gallery/facial-treatment-device.jpg";
import glowingResult from "@/assets/gallery/glowing-result.jpg";
import prfTreatment from "@/assets/gallery/prf-treatment.jpg";
import consultationMarkings from "@/assets/gallery/consultation-markings.jpg";
import botoxInjection from "@/assets/gallery/botox-injection.jpg";
import foreheadInjection from "@/assets/gallery/forehead-injection.jpg";
import beforeAfter from "@/assets/gallery/before-after.jpg";
import skincareResultFront from "@/assets/gallery/skincare-result-front.jpg";
import skincareResultLeft from "@/assets/gallery/skincare-result-left.jpg";
import skincareResultRight from "@/assets/gallery/skincare-result-right.jpg";
import facialTreatmentSession1 from "@/assets/gallery/facial-treatment-session-1.jpg";
import facialTreatmentSession2 from "@/assets/gallery/facial-treatment-session-2.jpg";
import facialTreatmentSession3 from "@/assets/gallery/facial-treatment-session-3.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "treatments", name: "Treatments" },
    { id: "results", name: "Results" },
    { id: "skincare-results", name: "Skincare Results" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "treatments",
      title: "Facial Treatment with Device",
      image: facialTreatmentDevice,
    },
    {
      id: 2,
      category: "results",
      title: "Glowing Skin Result",
      image: glowingResult,
    },
    {
      id: 3,
      category: "treatments",
      title: "PRF Biotherapy",
      image: prfTreatment,
    },
    {
      id: 4,
      category: "treatments",
      title: "Consultation & Markings",
      image: consultationMarkings,
    },
    {
      id: 5,
      category: "treatments",
      title: "Botox Injection",
      image: botoxInjection,
    },
    {
      id: 6,
      category: "treatments",
      title: "Forehead Treatment",
      image: foreheadInjection,
    },
    {
      id: 7,
      category: "results",
      title: "Before & After",
      image: beforeAfter,
    },
    {
      id: 8,
      category: "skincare-results",
      title: "Glowing Skin - Front View",
      image: skincareResultFront,
    },
    {
      id: 9,
      category: "skincare-results",
      title: "Glowing Skin - Side Profile",
      image: skincareResultLeft,
    },
    {
      id: 10,
      category: "skincare-results",
      title: "Glowing Skin - Right Profile",
      image: skincareResultRight,
    },
    {
      id: 11,
      category: "treatments",
      title: "Facial Treatment Session",
      image: facialTreatmentSession1,
    },
    {
      id: 12,
      category: "treatments",
      title: "Professional Skincare Application",
      image: facialTreatmentSession2,
    },
    {
      id: 13,
      category: "treatments",
      title: "Expert Facial Massage",
      image: facialTreatmentSession3,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${facialTreatmentDevice})`,
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">Visual Stories</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            A Glimpse Into ZealAesthetics
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Explore our gallery showcasing our beautiful spa facilities, treatment rooms, 
            training sessions, and the amazing transformations we create. Every image tells 
            a story of beauty, expertise, and dedication.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-8 md:py-16 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-6 py-2 text-sm uppercase tracking-[0.15em] transition-all duration-500 relative overflow-hidden",
                  selectedCategory === category.id
                    ? "btn-luxury"
                    : "bg-transparent text-muted-foreground hover:text-secondary pearl-border hover:border-secondary"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden glass-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 oily-sheen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm capitalize">
                    {item.category}
                  </p>
                </div>
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
            Ready to Experience ZealAesthetics?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Book a treatment or inquire about our training programs today. 
            Your journey to beauty and excellence starts here.
          </p>
          <a
            href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary"
          >
            Book Your Visit
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
