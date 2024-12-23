import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Truck, Box, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Local Moving",
      description: "Professional moving services within Tacoma and Pierce County",
      icon: Truck,
      path: "/services/local-moving",
      image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
    },
    {
      title: "Packing Services",
      description: "Expert packing solutions for a stress-free move",
      icon: Box,
      path: "/services/packing-services",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115"
    },
    {
      title: "Apartment Moving",
      description: "Specialized solutions for apartment relocations",
      icon: Home,
      path: "/services/apartment-moving",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    {
      title: "Long Distance Moving",
      description: "Reliable interstate and long-distance relocations",
      icon: Truck,
      path: "/services/long-distance-moving",
      image: "/lovable-uploads/f57c2395-b4e9-410f-ab9f-46613cf6f480.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Moving Services in Tacoma | LiftNHaul</title>
        <meta name="description" content="Comprehensive moving services in Tacoma including local moving, packing, apartment moving, and long distance relocations. Professional and reliable moving solutions." />
        <meta name="keywords" content="moving services, Tacoma movers, local moving, packing services, apartment moving, long distance moving" />
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
            alt="Moving services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to your needs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                </div>
                <div className="relative p-8 text-white">
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;