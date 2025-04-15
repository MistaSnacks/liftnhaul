
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ThurstonCounty = () => {
  const cities = [
    {
      name: "Olympia",
      path: "/locations/thurston-county/olympia",
      description: "Washington's capital city with beautiful waterfront and historic buildings"
    },
    {
      name: "Lacey",
      path: "/locations/thurston-county/lacey",
      description: "Growing community with excellent parks and recreation opportunities"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Thurston County Moving Services | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Reliable moving services in Thurston County, WA. Serving Olympia, Lacey, and surrounding areas with expert local and long-distance moving solutions." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <Link to="/locations" className="text-primary hover:underline mb-4 inline-flex items-center">
            &larr; Back to All Locations
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Moving Services in Thurston County</h1>
          <p className="text-lg text-gray-700 mt-4 mb-8">
            LiftNHaul provides comprehensive moving services throughout Thurston County, including Olympia, Lacey, and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/lovable-uploads/d854d334-cecc-4759-a38e-e7c325286122.png"
              alt="Olympia waterfront showcasing port facilities"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Thurston County</h2>
            <p className="mb-4">
              Thurston County is home to Washington's capital city, Olympia, and has a population of over 290,000 residents. Known for its natural beauty, government presence, and strong community values, Thurston County offers a wonderful quality of life.
            </p>
            <p className="mb-4">
              From historic neighborhoods near the Capitol campus to newer developments in Lacey and Tumwater, our team has the experience to handle moves throughout the county.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose Us for Your Thurston County Move?</h3>
            <ul className="space-y-2">
              <li>Local knowledge of Thurston County's unique areas</li>
              <li>Experience with state government and office relocations</li>
              <li>Efficient service throughout the South Sound region</li>
              <li>Comprehensive moving solutions for homes of all sizes</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">Thurston County Service Areas</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {cities.map((city) => (
            <Card key={city.name} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <CardTitle>{city.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{city.description}</p>
                <Link to={city.path}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Request a Free Thurston County Moving Quote</h2>
          <p className="mb-4">Ready to plan your Thurston County move? Contact us today for a free, no-obligation quote.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThurstonCounty;
