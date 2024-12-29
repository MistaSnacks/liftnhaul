import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const BellevueGuide = () => {
  return (
    <>
      <Helmet>
        <title>Living in Bellevue Guide | Moving to Bellevue WA | LiftNHaul</title>
        <meta 
          name="description" 
          content="Everything you need to know about living in Bellevue, WA. Discover neighborhoods, lifestyle, schools, and essential tips for moving to Bellevue." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Living in Bellevue: Your Complete Guide</h1>
          
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Bellevue?</h2>
                <p className="text-gray-700 mb-4">
                  Bellevue combines the best of urban living with suburban comfort. Known for its excellent schools, 
                  growing tech presence, and beautiful parks, Bellevue offers a high quality of life for families 
                  and professionals alike.
                </p>
                <img
                  src="/lovable-uploads/46dac536-d0a0-4fe7-a8ef-7d3a9530bd42.png"
                  alt="Bellevue downtown skyline with Mount Rainier in background"
                  className="w-full h-[400px] object-cover rounded-lg mb-4"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Popular Neighborhoods</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Downtown Bellevue - Urban core with luxury apartments and shopping</li>
                  <li>West Bellevue - Prestigious area with waterfront properties</li>
                  <li>Crossroads - Diverse community with great amenities</li>
                  <li>Somerset - Hill-top homes with stunning views</li>
                  <li>Lake Hills - Family-friendly with great schools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <p className="text-gray-700 mb-4">
                  Bellevue School District is consistently ranked among the best in Washington State, 
                  making it a top choice for families. The city also hosts Bellevue College and 
                  satellite campuses of major universities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Lifestyle & Recreation</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Bellevue Square - Premier shopping destination</li>
                  <li>Bellevue Downtown Park - Urban green space</li>
                  <li>Mercer Slough Nature Park - Environmental education</li>
                  <li>Meydenbauer Beach Park - Waterfront recreation</li>
                  <li>Numerous hiking and biking trails</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BellevueGuide;