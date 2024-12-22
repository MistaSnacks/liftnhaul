import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Package, Home, Box } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
            alt="Moving background"
            className="w-full h-full object-cover opacity-20"
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
              <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20" asChild>
                <Link to="/about">Learn More</Link>
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
                image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b",
                path: "/services/local-moving"
              },
              {
                icon: Box,
                title: "Packing Services",
                description: "Expert packing and unpacking for a stress-free move",
                image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
                path: "/services/packing-services"
              },
              {
                icon: Home,
                title: "Apartment Moving",
                description: "Specialized solutions for apartment relocations",
                image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
                path: "/services/apartment-moving"
              },
              {
                icon: Truck,
                title: "Long Distance Moving",
                description: "Reliable interstate and long-distance relocations",
                image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
                path: "/services/long-distance-moving"
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <Button size="lg" className="bg-secondary text-black hover:bg-secondary/90">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
