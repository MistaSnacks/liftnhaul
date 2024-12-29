import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SeattleGuide = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Living in Seattle, WA: Your Complete Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Discover everything about living in Seattle, Washington. From lifestyle and culture to housing and activities, your complete guide to life in the Emerald City." 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Seattle Living Guide: Your Complete Resource
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="/lovable-uploads/41d87ca9-1d61-4978-9725-fd85bfd3b431.png"
            alt="Aerial view of downtown Seattle featuring the iconic Space Needle"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-lg mb-6">
            Seattle, known as the Emerald City, offers a unique blend of urban sophistication 
            and natural beauty. From its iconic Space Needle to the bustling Pike Place Market, 
            Seattle provides residents with a high quality of life, abundant career opportunities, 
            and access to the stunning Pacific Northwest landscape.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Seattle?</h2>
          <p className="mb-6">
            Seattle stands out for its thriving tech industry, rich cultural scene, and 
            commitment to sustainability. The city offers diverse neighborhoods, each with 
            its own character, excellent public transportation, and proximity to outdoor 
            recreation opportunities.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Seattle?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Seattle. 
                We understand the local area and can ensure a smooth transition to 
                your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            Seattle is home to major tech companies like Amazon and Microsoft, as well as 
            a thriving startup ecosystem. The city also has strong healthcare, aerospace, 
            and creative sectors, providing diverse career opportunities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Lifestyle and Culture</h2>
          <p className="mb-6">
            From world-class dining to outdoor markets, Seattle offers endless entertainment 
            options. The city is known for its coffee culture, music scene, and commitment 
            to the arts. Residents enjoy easy access to hiking trails, water activities, 
            and weekend getaways to nearby destinations.
          </p>
        </div>
      </article>
    </div>
  );
};

export default SeattleGuide;