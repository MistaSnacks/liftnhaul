import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501286353178-1ec881214838"
          alt="Moving CTA background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-8">
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