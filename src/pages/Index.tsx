import Layout from "@/components/layout/Layout";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import WelcomeSection from "@/components/home/WelcomeSection";
import DualPillars from "@/components/home/DualPillars";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrainingPreview from "@/components/home/TrainingPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import LocationSection from "@/components/home/LocationSection";
import CTASection from "@/components/home/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <Layout>
      <HeroSlideshow />
      
      <ScrollReveal animation="fade-up">
        <WelcomeSection />
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in" delay={100}>
        <DualPillars />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <ServicesPreview />
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in">
        <StatsSection />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={100}>
        <WhyChooseUs />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-left">
        <TrainingPreview />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <TestimonialsSection />
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in">
        <FAQSection />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <LocationSection />
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in" delay={100}>
        <CTASection />
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
