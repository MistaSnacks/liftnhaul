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
        <title>Living in Port Orchard, WA: Your Ultimate Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Discover everything about living in Port Orchard, Washington. From waterfront living to community life, find your complete guide to this charming maritime city." 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Port Orchard: Your Ultimate Guide
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="/lovable-uploads/6962ae5a-1011-4fb4-8245-5c2c1bb5c41a.png"
            alt="Downtown Port Orchard waterfront featuring local businesses and marina"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-lg mb-6">
            Port Orchard, the county seat of Kitsap County, offers a perfect blend 
            of small-town charm and maritime character. With its beautiful waterfront, 
            friendly community, and convenient location, Port Orchard provides a 
            unique living experience in the Puget Sound region.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Port Orchard?</h2>
          <p className="mb-6">
            Port Orchard attracts residents with its affordable housing, scenic 
            waterfront location, and strong sense of community. The city offers 
            easy access to Seattle via ferry, while maintaining its peaceful, 
            small-town atmosphere.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Port Orchard?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Port Orchard. 
                We understand the local area and can ensure a smooth transition to 
                your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Location and Transportation</h2>
          <p className="mb-6">
            Port Orchard's strategic location offers convenient access to both the 
            Olympic Peninsula and the Seattle metropolitan area. The foot ferry 
            provides quick access to Bremerton, connecting residents to Seattle 
            via the fast ferry service.
          </p>

          <h2 className="text-2xl font-bold mb-4">Community and Lifestyle</h2>
          <p className="mb-6">
            The city is known for its active community life, featuring events like 
            the Farmers Market and Fathoms O' Fun Festival. Residents enjoy waterfront 
            dining, local shops, and numerous parks and recreation opportunities 
            throughout the year.
          </p>
        </div>
      </article>
    </div>
  );
};

export default PortOrchardGuide;