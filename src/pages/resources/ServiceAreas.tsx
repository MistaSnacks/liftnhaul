
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceAreas = () => {
  const areas = [
    {
      name: "Pierce County",
      path: "/resources/service-areas/pierce-county",
      description: "Serving Tacoma, Puyallup, Lakewood, and surrounding areas",
      cities: [
        { name: "Tacoma", path: "/locations/pierce-county/tacoma" },
        { name: "Puyallup", path: "/locations/pierce-county/puyallup" },
        { name: "Lakewood", path: "/locations/pierce-county/lakewood" }
      ],
      services: [
        { name: "Local Moving", path: "/services/local-moving" },
        { name: "Apartment Moving", path: "/services/apartment-moving" }
      ]
    },
    {
      name: "King County",
      path: "/resources/service-areas/king-county",
      description: "Serving Seattle, Bellevue, Kent, and surrounding areas",
      cities: [
        { name: "Seattle", path: "/locations/king-county/seattle" },
        { name: "Bellevue", path: "/locations/king-county/bellevue" },
        { name: "Kent", path: "/locations/king-county/kent" }
      ],
      services: [
        { name: "Long Distance Moving", path: "/services/long-distance-moving" },
        { name: "Packing Services", path: "/services/packing-services" }
      ]
    },
    {
      name: "Thurston County",
      path: "/resources/service-areas/thurston-county",
      description: "Serving Olympia, Lacey, Tumwater, and surrounding areas",
      cities: [
        { name: "Olympia", path: "/locations/thurston-county/olympia" },
        { name: "Lacey", path: "/locations/thurston-county/lacey" }
      ],
      services: [
        { name: "Local Moving", path: "/services/local-moving" },
        { name: "Long Distance Moving", path: "/services/long-distance-moving" }
      ]
    },
    {
      name: "Kitsap County",
      path: "/resources/service-areas/kitsap-county",
      description: "Serving Bremerton, Port Orchard, Poulsbo, and surrounding areas",
      cities: [],
      services: [
        { name: "Packing Services", path: "/services/packing-services" },
        { name: "Apartment Moving", path: "/services/apartment-moving" }
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | Moving Services in Western Washington | LiftNHaul</title>
        <meta 
          name="description" 
          content="LiftNHaul provides professional moving services across Pierce, King, Thurston, and Kitsap counties. Discover our service coverage and local expertise." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Service Areas</h1>
        <p className="text-lg text-gray-700 mb-8">
          Providing professional moving services across Western Washington's most populous counties. Whether you need <Link to="/services/local-moving" className="text-primary hover:underline">local moving</Link>, <Link to="/services/long-distance-moving" className="text-primary hover:underline">long-distance moving</Link>, or <Link to="/services/packing-services" className="text-primary hover:underline">professional packing services</Link>, we've got you covered.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <Card key={area.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle>{area.name}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {area.cities.length > 0 && (
                  <>
                    <p className="text-gray-700 font-medium mb-2">Cities we serve:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.cities.map(city => (
                        <Link
                          key={city.name}
                          to={city.path}
                          className="inline-flex bg-gray-100 text-gray-800 hover:bg-primary/10 px-2 py-1 rounded-full text-sm transition-colors"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
                
                {area.services.length > 0 && (
                  <>
                    <p className="text-gray-700 font-medium mb-2">Popular services:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.services.map(service => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="inline-flex bg-primary/10 text-primary hover:bg-primary/20 px-2 py-1 rounded-full text-sm transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
                
                <p className="text-gray-600 mt-2">
                  <Link to={area.path} className="text-primary hover:underline">
                    Learn more about our services in {area.name}
                  </Link>
                </p>
              </CardContent>
              <CardFooter>
                <Link to={`/locations${area.path.substring(area.path.lastIndexOf("/"))}`.replace(/service-areas\//, "")} className="w-full">
                  <Button variant="outline" className="w-full">View {area.name} Locations</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">Need Help Finding Your Location?</h2>
          <p className="mb-4">
            If you don't see your specific area listed, don't worry! We likely still service your location. 
            Contact us today to discuss your moving needs and get a free quote.
          </p>
          <div className="flex gap-4 mt-6">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
            </Link>
            <Link to="/locations">
              <Button variant="outline">View All Locations</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreas;
