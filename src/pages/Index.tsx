import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Package, Clock, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Professional Moving Services in Tacoma
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Trusted movers serving Pierce County and beyond. Licensed, insured, and committed to making your move stress-free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive moving solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Local Moving",
                description: "Professional moving services in Tacoma and Pierce County area",
              },
              {
                icon: Package,
                title: "Packing Services",
                description: "Expert packing and unpacking for a stress-free move",
              },
              {
                icon: Clock,
                title: "Same Day Service",
                description: "Quick and efficient moving solutions when you need them",
              },
              {
                icon: Shield,
                title: "Licensed & Insured",
                description: "Your belongings are protected throughout the move",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Make Your Move?
          </h2>
          <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;