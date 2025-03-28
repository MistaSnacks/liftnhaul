
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    {
      name: "Pierce County",
      path: "/resources/service-areas/pierce-county",
      description: "Serving Tacoma, Puyallup, Lakewood, and surrounding areas",
    },
    {
      name: "King County",
      path: "/resources/service-areas/king-county",
      description: "Serving Seattle, Bellevue, Kent, and surrounding areas",
    },
    {
      name: "Thurston County",
      path: "/resources/service-areas/thurston-county",
      description: "Serving Olympia, Lacey, Tumwater, and surrounding areas",
    },
    {
      name: "Kitsap County",
      path: "/resources/service-areas/kitsap-county",
      description: "Serving Bremerton, Port Orchard, Poulsbo, and surrounding areas",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | Moving Companies Tacoma WA | LiftNHaul Movers</title>
        <meta 
          name="description" 
          content="LiftNHaul Movers provides professional moving services across Pierce, King, Thurston, and Kitsap counties. Discover our service coverage and local expertise." 
        />
        <meta
          name="keywords"
          content="moving companies tacoma wa, pierce county movers, puyallup moving services, lakewood movers, seattle area moving company, bellevue residential movers, olympia moving services"
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Service Areas</h1>
        <p className="text-lg text-gray-700 mb-8">
          Providing professional moving services across Western Washington's most populous counties. Whether you need local moving services in Tacoma, puyallup moving services, or lakewood movers, we've got you covered.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <Link key={area.name} to={area.path}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Click to learn more about our services in {area.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceAreas;
