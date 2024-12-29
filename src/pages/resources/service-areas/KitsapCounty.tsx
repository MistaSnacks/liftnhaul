import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const KitsapCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Kitsap County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Comprehensive moving services throughout Kitsap County, WA. Serving Bremerton, Port Orchard, Poulsbo, and surrounding areas with expert moving solutions." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Kitsap County</h1>
          
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Kitsap County</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Bremerton</li>
                  <li>Port Orchard</li>
                  <li>Poulsbo</li>
                  <li>Silverdale</li>
                  <li>Bainbridge Island</li>
                  <li>Seabeck</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Kitsap County Services</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Residential moving</li>
                  <li>Military relocations (Naval Base Kitsap)</li>
                  <li>Commercial moving</li>
                  <li>Packing and unpacking</li>
                  <li>Ferry-coordinated moves</li>
                  <li>Storage solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Peninsula Moving Expertise</h2>
                <p className="text-gray-700 mb-4">
                  Our team specializes in the unique challenges of moving on the Kitsap Peninsula. 
                  We coordinate with ferry schedules, understand military base requirements, and 
                  navigate the area's diverse terrain to ensure smooth moves for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default KitsapCounty;