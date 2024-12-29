import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const PierceCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Pierce County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional moving services throughout Pierce County, WA. Serving Tacoma, Puyallup, Lakewood, and surrounding areas with expert local and long-distance moving solutions." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Pierce County</h1>
          
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Pierce County</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Tacoma - Including North End, South End, and East Side</li>
                  <li>Puyallup - Including South Hill and Downtown</li>
                  <li>Lakewood</li>
                  <li>University Place</li>
                  <li>Gig Harbor</li>
                  <li>Bonney Lake</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Pierce County Services</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Local residential moves</li>
                  <li>Commercial relocations</li>
                  <li>Apartment moving</li>
                  <li>Packing and unpacking services</li>
                  <li>Storage solutions</li>
                  <li>Military moves (JBLM)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Pierce County Move?</h2>
                <p className="text-gray-700 mb-4">
                  As local Pierce County movers, we understand the unique challenges of moving in this area. 
                  From navigating downtown Tacoma's historic districts to handling suburban moves in Puyallup, 
                  our experienced team ensures a smooth relocation experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PierceCounty;