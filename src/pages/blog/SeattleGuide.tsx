import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const SeattleGuide = () => {
  return (
    <>
      <Helmet>
        <title>Living in Seattle Guide | Moving to Seattle WA | LiftNHaul</title>
        <meta 
          name="description" 
          content="Comprehensive guide to living in Seattle, WA. Learn about neighborhoods, lifestyle, cost of living, and everything you need to know about moving to Seattle." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Living in Seattle: Your Complete Guide</h1>
          
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Why Move to Seattle?</h2>
                <p className="text-gray-700 mb-4">
                  Seattle, known for its vibrant tech scene, stunning natural beauty, and rich cultural heritage, 
                  offers a unique blend of urban amenities and outdoor adventures. From the iconic Space Needle 
                  to the bustling Pike Place Market, the city provides endless opportunities for both work and leisure.
                </p>
                <img
                  src="/lovable-uploads/04dffb87-16a4-4fa0-afc5-479ac4deb54b.png"
                  alt="Seattle skyline featuring Space Needle and downtown buildings"
                  className="w-full h-[400px] object-cover rounded-lg mb-4"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Popular Seattle Neighborhoods</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Capitol Hill - Known for its vibrant nightlife and diverse community</li>
                  <li>Ballard - Historic district with excellent restaurants and breweries</li>
                  <li>Queen Anne - Featuring stunning city views and historic homes</li>
                  <li>South Lake Union - Tech hub with modern amenities</li>
                  <li>West Seattle - Beach community with great views</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Cost of Living</h2>
                <p className="text-gray-700 mb-4">
                  Seattle's cost of living is higher than the national average, primarily due to housing costs. 
                  However, the city offers high-paying job opportunities, especially in the tech sector, 
                  which can help offset these expenses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Transportation</h2>
                <p className="text-gray-700 mb-4">
                  Seattle offers various transportation options including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Link Light Rail</li>
                  <li>Metro Bus System</li>
                  <li>Streetcars</li>
                  <li>Water Taxis</li>
                  <li>Extensive bike lanes and trails</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeattleGuide;