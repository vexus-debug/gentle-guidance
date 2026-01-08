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

const Index = () => {
  return (
    <Layout>
      <HeroSlideshow />
      <WelcomeSection />
      <DualPillars />
      <ServicesPreview />
      <StatsSection />
      <WhyChooseUs />
      <TrainingPreview />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
