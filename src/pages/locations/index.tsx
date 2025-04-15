
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Locations = () => {
  const counties = [
    {
      name: "Pierce County",
      path: "/locations/pierce-county",
      description: "Tacoma, Puyallup, Lakewood, and surrounding areas",
      cities: [
        { name: "Tacoma", path: "/locations/pierce-county/tacoma" },
        { name: "Puyallup", path: "/locations/pierce-county/puyallup" },
        { name: "Lakewood", path: "/locations/pierce-county/lakewood" }
      ]
    },
    {
      name: "King County",
      path: "/locations/king-county",
      description: "Seattle, Bellevue, Kent, and surrounding areas",
      cities: [
        { name: "Seattle", path: "/locations/king-county/seattle" },
        { name: "Bellevue", path: "/locations/king-county/bellevue" },
        { name: "Kent", path: "/locations/king-county/kent" }
      ]
    },
    {
      name: "Thurston County",
      path: "/locations/thurston-county",
      description: "Olympia, Lacey, and surrounding areas",
      cities: [
        { name: "Olympia", path: "/locations/thurston-county/olympia" },
        { name: "Lacey", path: "/locations/thurston-county/lacey" }
      ]
    },
  ];

  const services = [
    { name: "Local Moving", path: "/services/local-moving" },
    { name: "Long Distance Moving", path: "/services/long-distance-moving" },
    { name: "Packing Services", path: "/services/packing-services" },
    { name: "Apartment Moving", path: "/services/apartment-moving" }
  ];

  return (
    <>
      <Helmet>
        <title>Moving Services Near Me | Professional Movers in Western Washington | LiftNHaul</title>
        <meta 
          name="description" 
          content="Looking for moving companies near me? LiftNHaul provides professional and affordable moving services across Western Washington including Tacoma, Seattle, and Olympia." 
        />
        <meta
          name="keywords"
          content="moving company near me, tacoma moving company, pierce county movers, seattle area moving company, bellevue residential movers, olympia moving services"
        />
        <link rel="canonical" href="https://liftnhaul.com/locations" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Service Locations</h1>
        <h2 className="text-2xl mb-8">Best Movers in Tacoma & Western Washington</h2>
        <p className="text-lg text-gray-700 mb-8">
          LiftNHaul offers professional moving services throughout Western Washington's most populous counties. Whether you need <Link to="/services/local-moving" className="text-primary hover:underline">local moving services in Tacoma</Link>, <Link to="/services/long-distance-moving" className="text-primary hover:underline">long-distance moving</Link> across Washington state, or <Link to="/services/apartment-moving" className="text-primary hover:underline">apartment moving services</Link>, we've got you covered.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {counties.map((county) => (
            <Link key={county.name} to={county.path}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" aria-hidden="true" />
                  <CardTitle>{county.name}</CardTitle>
                  <CardDescription>{county.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Our service areas include:</p>
                  <div className="space-y-2">
                    {county.cities.map(city => (
                      <Link 
                        key={city.name} 
                        to={city.path} 
                        className="block text-primary hover:underline"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Services</h2>
          <p className="mb-4">No matter where you're moving in Western Washington, LiftNHaul offers comprehensive moving services tailored to your needs:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {services.map((service) => (
              <Link 
                key={service.name} 
                to={service.path}
                className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all text-center"
              >
                <span className="font-medium text-primary">{service.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-semibold text-primary mb-4">Request a Quote</h2>
          <p className="mb-6">Ready to plan your move? Contact us today for a free, no-obligation quote.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Locations;
