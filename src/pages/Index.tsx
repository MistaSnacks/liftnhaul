
import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LiftNHaul Movers - Professional Moving Services in Tacoma</title>
        <meta 
          name="description" 
          content="Professional moving services in Tacoma, WA. Local & long-distance moving, packing services, and apartment relocation experts serving Pierce County and beyond." 
        />
        <meta 
          name="keywords" 
          content="moving company near me, tacoma moving company, local movers pierce county, packing services washington, apartment moving tacoma" 
        />
        <link rel="canonical" href="https://liftnhaul.com/" />
      </Helmet>
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ServiceAreasSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default Index;
