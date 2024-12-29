import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const ThurstonCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Thurston County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Expert moving services throughout Thurston County, WA. Serving Olympia, Lacey, Tumwater, and surrounding areas with professional moving solutions." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Thurston County</h1>
          
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Thurston County</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Olympia - Including Downtown and West Side</li>
                  <li>Lacey</li>
                  <li>Tumwater</li>
                  <li>Yelm</li>
                  <li>Rochester</li>
                  <li>Rainier</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Thurston County Services</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Residential moving services</li>
                  <li>Office and commercial relocations</li>
                  <li>Government and state agency moves</li>
                  <li>Professional packing services</li>
                  <li>Storage solutions</li>
                  <li>Specialty item moving</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Local Expertise</h2>
                <p className="text-gray-700 mb-4">
                  Our team's extensive knowledge of Thurston County ensures efficient moves throughout the area. 
                  We understand the local regulations and requirements for moving in state government buildings, 
                  historic districts, and residential areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThurstonCounty;