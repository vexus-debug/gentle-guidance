import Layout from "@/components/layout/Layout";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import ScrollReveal from "@/components/ScrollReveal";
import {
  WelcomeEmbrace,
  BrandMarquee,
  BeautyDestinations,
  TransformationArt,
  LifestyleImage,
  NurturingExpertise,
  MeetYourGuides,
  TreatmentsIntro,
  ServiceAccordions,
  VoicesOfConfidence,
  CredentialsTrust,
  BeginJourney,
} from "@/components/home/journey";

const Index = () => {
  return (
    <Layout>
      {/* Hero - Unchanged */}
      <HeroSlideshow />
      
      {/* Section 1: Welcome Introduction */}
      <ScrollReveal animation="fade-up">
        <WelcomeEmbrace />
      </ScrollReveal>
      
      {/* Section 2: Brand Partners Marquee */}
      <BrandMarquee />
      
      {/* Section 3: Services Grid */}
      <ScrollReveal animation="fade-up">
        <BeautyDestinations />
      </ScrollReveal>
      
      {/* Section 4: Mission/About Dark Section */}
      <ScrollReveal animation="fade-up">
        <TransformationArt />
      </ScrollReveal>
      
      {/* Section 5: Lifestyle Image */}
      <LifestyleImage />
      
      {/* Section 6: Meet Our Founder */}
      <ScrollReveal animation="fade-up">
        <NurturingExpertise />
      </ScrollReveal>
      
      {/* Section 7: Meet Our Team */}
      <ScrollReveal animation="fade-up">
        <MeetYourGuides />
      </ScrollReveal>
      
      {/* Section 8: Treatments Intro Banner */}
      <ScrollReveal animation="zoom-in">
        <TreatmentsIntro />
      </ScrollReveal>
      
      {/* Section 9: Service Accordions */}
      <ServiceAccordions />
      
      {/* Section 10: Testimonials */}
      <ScrollReveal animation="fade-up">
        <VoicesOfConfidence />
      </ScrollReveal>
      
      {/* Section 11: Credentials/Trust */}
      <ScrollReveal animation="fade-up">
        <CredentialsTrust />
      </ScrollReveal>
      
      {/* Section 12: CTA - Begin Journey */}
      <ScrollReveal animation="zoom-in">
        <BeginJourney />
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
