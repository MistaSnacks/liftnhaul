import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import EditableText from "@/components/ui/editable-text";

const ServiceAreasSection = () => {
  const areas = [
    {
      name: "Pierce County",
      description: "Tacoma, Puyallup, Lakewood",
      path: "/resources/service-areas/pierce-county"
    },
    {
      name: "King County",
      description: "Seattle, Bellevue, Kent",
      path: "/resources/service-areas/king-county"
    },
    {
      name: "Thurston County",
      description: "Olympia, Lacey, Tumwater",
      path: "/resources/service-areas/thurston-county"
    },
    {
      name: "Kitsap County",
      description: "Bremerton, Port Orchard, Poulsbo",
      path: "/resources/service-areas/kitsap-county"
    }
  ];

  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502175353174-a7a70e73b362"
          alt="Mount Rainier and Tacoma Skyline"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <EditableText
            id="service-areas-title"
            defaultText="Our Service Areas"
            className="text-3xl font-bold"
            as="h2"
          />
          <EditableText
            id="service-areas-subtitle"
            defaultText="Professional moving services across Western Washington"
            className="mt-4 text-xl text-gray-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-12 h-12 mb-4 mx-auto" />
              <EditableText
                id={`area-name-${index}`}
                defaultText={area.name}
                className="text-xl font-semibold mb-2"
                as="h3"
              />
              <EditableText
                id={`area-description-${index}`}
                defaultText={area.description}
                className="text-gray-200 mb-4"
              />
              <Link to={area.path}>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;