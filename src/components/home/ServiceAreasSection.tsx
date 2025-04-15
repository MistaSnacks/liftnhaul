
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreasSection = () => {
  const areas = [
    {
      name: "Pierce County",
      description: "Tacoma, Puyallup, Lakewood",
      path: "/resources/service-areas/pierce-county",
      cities: [
        { name: "Tacoma", path: "/locations/pierce-county/tacoma" },
        { name: "Puyallup", path: "/locations/pierce-county/puyallup" },
        { name: "Lakewood", path: "/locations/pierce-county/lakewood" }
      ]
    },
    {
      name: "King County",
      description: "Seattle, Bellevue, Kent",
      path: "/resources/service-areas/king-county",
      cities: [
        { name: "Seattle", path: "/locations/king-county/seattle" },
        { name: "Bellevue", path: "/locations/king-county/bellevue" },
        { name: "Kent", path: "/locations/king-county/kent" }
      ]
    },
    {
      name: "Thurston County",
      description: "Olympia, Lacey, Tumwater",
      path: "/resources/service-areas/thurston-county",
      cities: [
        { name: "Olympia", path: "/locations/thurston-county/olympia" },
        { name: "Lacey", path: "/locations/thurston-county/lacey" }
      ]
    },
    {
      name: "Kitsap County",
      description: "Bremerton, Port Orchard, Poulsbo",
      path: "/resources/service-areas/kitsap-county",
      cities: []
    }
  ];

  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1920&q=80"
          alt="Mount Rainier and Tacoma Skyline"
          className="w-full h-full object-cover opacity-10"
          width="1920"
          height="1080"
          loading="lazy"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Service Areas</h2>
          <p className="mt-4 text-xl text-gray-200">
            Professional moving services across Western Washington
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
              <p className="text-gray-200 mb-4">{area.description}</p>
              <Link to={area.path}>
                <Button variant="secondary" className="w-full mb-3">
                  Learn More
                </Button>
              </Link>
              
              {area.cities.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/20">
                  <p className="text-sm font-medium mb-2">Popular Cities:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {area.cities.map((city) => (
                      <Link 
                        key={city.name}
                        to={city.path} 
                        className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
