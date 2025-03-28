
import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>LiftNHaul Movers - Professional Moving Services in Tacoma, WA</title>
        <meta name="description" content="LiftNHaul provides professional moving services in Tacoma, WA. Trusted local & long-distance moving, packing services, and apartment relocation experts serving Pierce County and beyond." />
        <meta name="keywords" content="LiftNHaul, LiftNHaul Movers, Tacoma movers, moving services tacoma, local movers pierce county, tacoma moving company, best movers in tacoma, moving company near me, affordable movers tacoma, professional movers pierce county, packing services washington, residential moving services" />
        <link rel="canonical" href="https://liftnhaul.com/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <ServiceAreasSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
