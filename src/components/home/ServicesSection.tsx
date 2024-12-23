import { Truck, Box, Home } from "lucide-react";
import { Link } from "react-router-dom";
import EditableText from "@/components/ui/editable-text";

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Local Moving",
      description: "Professional moving services in Tacoma and Pierce County area",
      image: "/lovable-uploads/9bbecd0e-b23a-4e47-9bdb-8229de44f733.png",
      path: "/services/local-moving"
    },
    {
      icon: Box,
      title: "Packing Services",
      description: "Expert packing and unpacking for a stress-free move",
      image: "/lovable-uploads/ec2a8ea5-1d55-4347-83df-8a5edf55451c.png",
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
      image: "/lovable-uploads/f57c2395-b4e9-410f-ab9f-46613cf6f480.png",
      path: "/services/long-distance-moving"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <EditableText
            id="services-title"
            defaultText="Our Services"
            className="text-3xl font-bold text-gray-900"
            as="h2"
          />
          <EditableText
            id="services-subtitle"
            defaultText="Comprehensive moving solutions tailored to your needs"
            className="mt-4 text-xl text-gray-600"
          />
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
                  alt={`${service.title} - Professional moving service in Tacoma featuring ${service.description.toLowerCase()}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <service.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
              <EditableText
                id={`service-title-${index}`}
                defaultText={service.title}
                className="text-xl font-semibold mb-2"
                as="h3"
              />
              <EditableText
                id={`service-description-${index}`}
                defaultText={service.description}
                className="text-gray-600"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;