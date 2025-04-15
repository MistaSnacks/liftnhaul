
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Locations = () => {
  const counties = [
    {
      name: "Pierce County",
      path: "/locations/pierce-county",
      description: "Tacoma, Puyallup, Lakewood, and surrounding areas",
      cities: ["Tacoma", "Puyallup", "Lakewood"]
    },
    {
      name: "King County",
      path: "/locations/king-county",
      description: "Seattle, Bellevue, Kent, and surrounding areas",
      cities: ["Seattle", "Bellevue", "Kent"]
    },
    {
      name: "Thurston County",
      path: "/locations/thurston-county",
      description: "Olympia, Lacey, and surrounding areas",
      cities: ["Olympia", "Lacey"]
    },
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
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Service Locations</h1>
        <h2 className="text-2xl mb-8">Best Movers in Tacoma & Western Washington</h2>
        <p className="text-lg text-gray-700 mb-8">
          LiftNHaul offers professional moving services throughout Western Washington's most populous counties. Whether you need local moving services in Tacoma, residential moving services in Seattle, or affordable movers in Olympia, we've got you covered.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counties.map((county) => (
            <Link key={county.name} to={county.path}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>{county.name}</CardTitle>
                  <CardDescription>{county.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Our service areas include:</p>
                  <div className="space-y-1">
                    {county.cities.map(city => (
                      <p key={city}>{city}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Locations;
