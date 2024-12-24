import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
          alt="Professional moving services - LiftNHaul moving truck being loaded"
          className="w-full h-full object-cover opacity-20"
          width="1920"
          height="1080"
          fetchPriority="high"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional Moving Services in Tacoma
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Trusted movers serving Pierce County and beyond. Licensed, insured, and committed to making your move stress-free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;