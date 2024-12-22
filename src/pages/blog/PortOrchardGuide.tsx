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
          content="Complete guide to moving to Port Orchard, WA. Discover neighborhoods, lifestyle, and everything you need to know about this charming waterfront community." 
        />
        <meta 
          name="keywords" 
          content="Port Orchard WA, moving to Port Orchard, Kitsap Peninsula, waterfront living, Port Orchard neighborhoods, Washington state living" 
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
            src="https://images.unsplash.com/photo-1527576539890-dfa815648363"
            alt="Port Orchard waterfront"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Port Orchard, nestled on the Kitsap Peninsula, offers a perfect blend of small-town charm and maritime beauty. This comprehensive guide will help you understand what makes Port Orchard special and what to expect when moving to this picturesque waterfront community.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Port Orchard?</h2>
          <p className="mb-6">
            Port Orchard combines affordable living with stunning waterfront views and easy access to both Seattle and Tacoma via the ferry system. The city's strong sense of community, growing downtown area, and proximity to outdoor recreation make it an attractive option for families and professionals seeking a quieter pace of life while maintaining connections to urban amenities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Port Orchard Neighborhoods</h2>
          <p className="mb-6">
            Port Orchard offers diverse neighborhoods to suit different lifestyles. Downtown provides waterfront living and easy access to shops and restaurants. McCormick Woods features upscale homes and a golf course community. The Manchester area offers water views and beach access, while South Kitsap provides more rural settings with larger lots.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Port Orchard?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our experienced team can help make your move to Port Orchard seamless. We understand the unique aspects of relocating to the Kitsap Peninsula and can provide valuable insights for your move.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Housing Market</h2>
          <p className="mb-6">
            Port Orchard's housing market offers more affordable options compared to Seattle and its immediate suburbs. From waterfront condos to suburban homes and rural properties, the market provides diverse options for different budgets. The city's growth and development plans suggest continued appreciation potential.
          </p>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            The Puget Sound Naval Shipyard in nearby Bremerton is a major employer. Healthcare, education, and retail sectors also provide significant employment. Many residents commute to Seattle or Tacoma via ferry, enjoying the best of both worlds with lower living costs and access to major job markets.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <p className="mb-6">
            Port Orchard's transportation system includes Kitsap Transit buses and foot ferries to Bremerton. The Seattle-Bremerton ferry provides a scenic commute option to Seattle. Highway 16 connects to Tacoma, while local roads are well-maintained and typically less congested than urban areas.
          </p>

          <h2 className="text-2xl font-bold mb-4">Culture and Entertainment</h2>
          <p className="mb-6">
            The city offers a growing arts scene, waterfront festivals, and community events throughout the year. The historic downtown features unique shops, restaurants, and antique stores. Outdoor enthusiasts enjoy nearby parks, beaches, and water activities. The proximity to Olympic National Park provides additional recreation opportunities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            South Kitsap School District serves Port Orchard with several well-regarded schools. The district emphasizes technology integration and offers various programs. Olympic College's nearby presence provides higher education opportunities. Several private schools in the area offer additional educational options.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            When planning your Port Orchard move, consider the ferry schedules and local traffic patterns. Summer months provide the best moving conditions. Research neighborhoods thoroughly, considering commute options and lifestyle preferences. Our team can provide specific insights about different areas and help coordinate your move effectively.
          </p>
        </div>
      </article>
    </div>
  );
};

export default PortOrchardGuide;