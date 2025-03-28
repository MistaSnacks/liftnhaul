
import { Truck, Box, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Local Moving",
      description: "Professional moving services in Tacoma and Pierce County area",
      image: "/lovable-uploads/9bbecd0e-b23a-4e47-9bdb-8229de44f733.png",
      alt: "Tacoma-local-moving-services-LiftNHaul",
      path: "/services/local-moving"
    },
    {
      icon: Box,
      title: "Packing Services",
      description: "Expert packing and unpacking for a stress-free move",
      image: "/lovable-uploads/ec2a8ea5-1d55-4347-83df-8a5edf55451c.png",
      alt: "Professional-packing-services-Tacoma-LiftNHaul",
      path: "/services/packing-services"
    },
    {
      icon: Home,
      title: "Apartment Moving",
      description: "Specialized solutions for apartment relocations",
      image: "/lovable-uploads/be984819-5b89-4169-a886-620a3dde6bcf.png",
      alt: "Apartment-moving-specialists-Tacoma-LiftNHaul",
      path: "/services/apartment-moving"
    },
    {
      icon: Truck,
      title: "Long Distance Moving",
      description: "Reliable interstate and long-distance relocations",
      image: "/lovable-uploads/f57c2395-b4e9-410f-ab9f-46613cf6f480.png",
      alt: "Long-distance-moving-Tacoma-Washington-LiftNHaul",
      path: "/services/long-distance-moving"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive moving solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <div className="h-40 mb-4 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="800"
                  height="600"
                  decoding="async"
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
  );
};

export default ServicesSection;
