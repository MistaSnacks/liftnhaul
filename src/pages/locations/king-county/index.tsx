
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const KingCounty = () => {
  const cities = [
    {
      name: "Seattle",
      path: "/locations/king-county/seattle",
      description: "Washington's largest city and the cultural center of the Pacific Northwest"
    },
    {
      name: "Bellevue",
      path: "/locations/king-county/bellevue",
      description: "Thriving tech hub with beautiful parks and excellent schools"
    },
    {
      name: "Kent",
      path: "/locations/king-county/kent",
      description: "Diverse community with rich agricultural heritage and modern industry"
    }
  ];

  return (
    <>
      <Helmet>
        <title>King County Moving Services | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Expert moving services throughout King County, WA. Serving Seattle, Bellevue, Kent, and surrounding areas with professional moving solutions." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <Link to="/locations" className="text-primary hover:underline mb-4 inline-flex items-center">
            &larr; Back to All Locations
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Moving Services in King County</h1>
          <p className="text-lg text-gray-700 mt-4 mb-8">
            LiftNHaul extends its professional moving services throughout King County, serving the diverse communities of Seattle, Bellevue, Kent, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/lovable-uploads/04dffb87-16a4-4fa0-afc5-479ac4deb54b.png"
              alt="Seattle skyline featuring the Space Needle"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About King County</h2>
            <p className="mb-4">
              King County is Washington's most populous county, home to over 2.2 million residents. From the iconic Seattle skyline to the tech campuses of the Eastside and the diverse communities to the south, King County offers a wide range of living experiences.
            </p>
            <p className="mb-4">
              Our team has extensive experience with King County's varied housing types and neighborhoods, from downtown high-rises to suburban homes and everything in between.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose Us for Your King County Move?</h3>
            <ul className="space-y-2">
              <li>Expert knowledge of King County's diverse neighborhoods</li>
              <li>Experience with urban moves and high-rise buildings</li>
              <li>Solutions for navigating Seattle's traffic and parking challenges</li>
              <li>Familiarity with building regulations across the county</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">King County Service Areas</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
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
          <h2 className="text-2xl font-semibold text-primary mb-4">Request a Free King County Moving Quote</h2>
          <p className="mb-4">Ready to plan your King County move? Contact us today for a free, no-obligation quote.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default KingCounty;
