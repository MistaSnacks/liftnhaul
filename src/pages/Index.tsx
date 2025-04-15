
import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { Link } from "react-router-dom";

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
        <div className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-6">Comprehensive Moving Solutions</h2>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              As the <Link to="/locations/pierce-county/tacoma" className="text-primary hover:underline">leading moving company in Tacoma</Link>, 
              we offer a complete range of services from <Link to="/services/local-moving" className="text-primary hover:underline">local moves</Link> to 
              <Link to="/services/long-distance-moving" className="text-primary hover:underline"> interstate relocations</Link>. Our team provides 
              <Link to="/services/packing-services" className="text-primary hover:underline"> professional packing services</Link> and 
              <Link to="/services/apartment-moving" className="text-primary hover:underline"> specialized apartment moving solutions</Link> throughout
              <Link to="/locations/pierce-county" className="text-primary hover:underline"> Pierce County</Link>,
              <Link to="/locations/king-county" className="text-primary hover:underline"> King County</Link>, and
              <Link to="/locations/thurston-county" className="text-primary hover:underline"> Thurston County</Link>.
            </p>
          </div>
        </div>
        <ServiceAreasSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default Index;
