
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 md:py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/00db380c-9d3f-4dad-8001-ed4022c567d8.png"
          alt="Professional moving services - LiftNHaul mover in action"
          className="w-full h-full object-cover opacity-10"
          width={isMobile ? "750" : "1920"}
          height={isMobile ? "500" : "1080"}
          loading="lazy"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
          Ready to Make Your Move?
        </h2>
        <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90" asChild>
          <Link to="/contact">Get Free Quote</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
