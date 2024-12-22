import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Package, Clock, Shield } from "lucide-react";

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
                image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
              },
              {
                icon: Package,
                title: "Packing Services",
                description: "Expert packing and unpacking for a stress-free move",
                image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
              },
              {
                icon: Clock,
                title: "Same Day Service",
                description: "Quick and efficient moving solutions when you need them",
                image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302"
              },
              {
                icon: Shield,
                title: "Licensed & Insured",
                description: "Your belongings are protected throughout the move",
                image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
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
              </div>
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