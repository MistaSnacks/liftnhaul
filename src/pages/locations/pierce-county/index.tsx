
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PierceCounty = () => {
  const cities = [
    {
      name: "Tacoma",
      path: "/locations/pierce-county/tacoma",
      description: "Pierce County's largest city and the county seat"
    },
    {
      name: "Puyallup",
      path: "/locations/pierce-county/puyallup",
      description: "Home of the Washington State Fair and beautiful valley views"
    },
    {
      name: "Lakewood",
      path: "/locations/pierce-county/lakewood",
      description: "Pierce County's second largest city with beautiful lakes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pierce County Moving Services | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Expert moving services throughout Pierce County, WA. Serving Tacoma, Puyallup, Lakewood, and surrounding areas with professional moving solutions." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <Link to="/locations" className="text-primary hover:underline mb-4 inline-flex items-center">
            &larr; Back to All Locations
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Moving Services in Pierce County</h1>
          <p className="text-lg text-gray-700 mt-4 mb-8">
            As Pierce County's premier moving company, LiftNHaul provides comprehensive moving services throughout the area. Our deep understanding of the local region enables us to deliver efficient and reliable moving solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/lovable-uploads/c35016d1-350c-441e-89bb-b88afd43d6c7.png"
              alt="Scenic Tacoma waterfront featuring Commencement Bay"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Pierce County</h2>
            <p className="mb-4">
              Pierce County is the second-most populous county in Washington state, home to over 900,000 residents. The county seat is Tacoma, a vibrant city with a rich history and stunning views of Commencement Bay and Mount Rainier.
            </p>
            <p className="mb-4">
              From urban neighborhoods to rural communities, Pierce County offers diverse living options. Our team has extensive experience moving families and businesses throughout the entire county.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Why Choose Us for Your Pierce County Move?</h3>
            <ul className="space-y-2">
              <li>Deep knowledge of Pierce County neighborhoods and communities</li>
              <li>Familiarity with local building requirements and regulations</li>
              <li>Efficient routes that save you time and money</li>
              <li>Full-service options tailored to your specific needs</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-6">Pierce County Service Areas</h2>
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
          <h2 className="text-2xl font-semibold text-primary mb-4">Request a Free Pierce County Moving Quote</h2>
          <p className="mb-4">Ready to plan your Pierce County move? Contact us today for a free, no-obligation quote.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PierceCounty;
