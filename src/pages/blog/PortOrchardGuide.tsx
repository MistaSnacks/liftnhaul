import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const PortOrchardGuide = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Port Orchard: Your Ultimate Moving Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Everything you need to know about moving to Port Orchard, WA. Discover neighborhoods, lifestyle, and what makes this waterfront city special." 
        />
        <meta 
          name="keywords" 
          content="Port Orchard WA, moving to Port Orchard, Port Orchard neighborhoods, Kitsap Peninsula, waterfront living, Seattle commute" 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Port Orchard: Your Ultimate Moving Guide
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 15, 2024 • 15 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1504893524553-b855bce32c67"
            alt="Port Orchard waterfront"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Port Orchard, the charming county seat of Kitsap County, offers a perfect blend of small-town atmosphere and modern amenities. Situated on the Sinclair Inlet with stunning views of the Olympic Mountains, this waterfront community provides an excellent quality of life for residents seeking a more relaxed pace while maintaining easy access to major urban centers.
          </p>

          <h2 className="text-2xl font-bold mb-4">Location and Accessibility</h2>
          <p className="mb-6">
            One of Port Orchard's major advantages is its strategic location on the Kitsap Peninsula. The city offers convenient access to Seattle via the Southworth Ferry, making it an attractive option for commuters. Additionally, the proximity to major military installations, including Naval Base Kitsap, makes it a popular choice for military families and defense contractors.
          </p>

          <h2 className="text-2xl font-bold mb-4">Housing Market Overview</h2>
          <p className="mb-6">
            Port Orchard's housing market offers diverse options at more affordable prices compared to Seattle and its immediate suburbs. From waterfront properties with stunning views to cozy inland neighborhoods, the city provides various housing styles to suit different preferences and budgets. New developments continue to add modern housing options while maintaining the city's character.
          </p>

          <h2 className="text-2xl font-bold mb-4">Notable Neighborhoods</h2>
          <p className="mb-6">
            The city features several distinct neighborhoods, each with its own character. Downtown Port Orchard offers historic charm and waterfront views, while neighborhoods like McCormick Woods provide newer homes in a planned community setting. The Manchester area combines water views with a village atmosphere, and Sidney offers a mix of housing options with easy access to amenities.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Moving to Port Orchard?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our team specializes in moves to and from Port Orchard. Let us help make your relocation smooth and stress-free with our local expertise and professional service.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Education and Schools</h2>
          <p className="mb-6">
            The South Kitsap School District serves Port Orchard with several well-regarded schools. South Kitsap High School is known for its comprehensive programs, including strong STEM offerings and vocational education. The area also provides easy access to Olympic College's Bremerton campus for higher education opportunities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Local Economy and Employment</h2>
          <p className="mb-6">
            Port Orchard's economy benefits from its proximity to major employers in the region. Naval Base Kitsap provides significant employment opportunities, while the Puget Sound Naval Shipyard offers civilian positions. The city also supports a growing small business sector, particularly in the downtown area, and its location allows for commuting to Bremerton, Tacoma, or Seattle for additional employment options.
          </p>

          <h2 className="text-2xl font-bold mb-4">Lifestyle and Recreation</h2>
          <p className="mb-6">
            The city offers numerous recreational opportunities, from waterfront activities to parks and trails. The Port Orchard Marina and waterfront pathway provide spaces for walking, fishing, and enjoying marine activities. Local parks like South Kitsap Regional Park offer extensive trails and facilities for outdoor recreation. The downtown area features unique shops, restaurants, and regular community events that contribute to the city's small-town charm.
          </p>

          <h2 className="text-2xl font-bold mb-4">Community and Culture</h2>
          <p className="mb-6">
            Port Orchard maintains a strong sense of community through various events and activities throughout the year. The Fathoms O' Fun Festival, farmers market, and regular downtown events bring residents together and celebrate local culture. The city's historic downtown area hosts art galleries, boutiques, and restaurants that contribute to its cultural vibrancy.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            When planning your move to Port Orchard, consider factors like commute options if you'll be working in another city, and familiarize yourself with the ferry schedules if you'll be using them regularly. Research different neighborhoods to find the one that best matches your lifestyle and needs. Our team can provide valuable insights about specific areas and help ensure a smooth relocation process.
          </p>
        </div>
      </article>
    </div>
  );
};

export default PortOrchardGuide;