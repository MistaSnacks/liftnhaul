import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BellevueGuide = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Moving to Bellevue: A Complete Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Everything you need to know about moving to Bellevue, WA. Learn about neighborhoods, tech opportunities, lifestyle, and more in this comprehensive guide." 
        />
        <meta 
          name="keywords" 
          content="Bellevue WA, moving to Bellevue, Bellevue tech hub, Eastside living, Bellevue neighborhoods, Seattle suburbs" 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Moving to Bellevue: A Complete Guide
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 15, 2024 • 15 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
            alt="Bellevue skyline"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Bellevue, Washington's fifth-largest city, has transformed from a quiet suburb into a thriving tech hub with a distinctive urban core. This comprehensive guide will help you understand what makes Bellevue special and what to expect when moving to this dynamic city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Bellevue?</h2>
          <p className="mb-6">
            Bellevue offers a perfect blend of urban sophistication and natural beauty. Known for its excellent schools, thriving tech sector, and high quality of life, the city attracts professionals and families seeking a balance of career opportunities and lifestyle amenities. Its location provides easy access to both Seattle and outdoor recreation areas.
          </p>

          <h2 className="text-2xl font-bold mb-4">Bellevue Neighborhoods</h2>
          <p className="mb-6">
            Each Bellevue neighborhood has its distinct character. Downtown offers luxury high-rise living and urban amenities. West Bellevue features established neighborhoods with waterfront access. Crossroads provides cultural diversity and community events. Somerset offers hillside homes with stunning views, while Eastgate combines affordability with convenient location.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Planning Your Bellevue Move?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our experienced team can help make your move to Bellevue smooth and efficient. We understand the unique challenges of moving in the Eastside area and can provide valuable insights for your relocation.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Housing Market</h2>
          <p className="mb-6">
            Bellevue's housing market reflects its status as a premium destination. While prices are higher than many other areas, the market offers diverse options from luxury condos to single-family homes. New developments continue to add housing inventory, particularly in the downtown area. Investment in property here often shows strong appreciation over time.
          </p>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            The city is a major tech hub, hosting offices of Microsoft, Amazon, and numerous other technology companies. Beyond tech, Bellevue offers opportunities in healthcare, finance, and retail sectors. The presence of these major employers has created a robust ecosystem for professional growth and innovation.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <p className="mb-6">
            Bellevue's transportation infrastructure includes extensive bus service and the upcoming East Link light rail connection to Seattle. The city's location provides easy access to I-405 and I-90. While traffic can be challenging during peak hours, ongoing transportation improvements continue to enhance mobility options.
          </p>

          <h2 className="text-2xl font-bold mb-4">Culture and Entertainment</h2>
          <p className="mb-6">
            The city offers rich cultural experiences through the Bellevue Arts Museum, Meydenbauer Center, and numerous festivals. The Bellevue Collection and The Shops at Bravern provide luxury shopping experiences. Outdoor enthusiasts enjoy the Bellevue Botanical Garden, numerous parks, and proximity to hiking trails.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            Bellevue School District consistently ranks among the state's best, with high achievement rates and strong STEM programs. The presence of Bellevue College provides higher education opportunities. Several private schools, including international schools, offer additional educational options.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            When planning your Bellevue move, consider the city's traffic patterns and weather conditions. Summer months offer the best moving conditions. Research neighborhoods thoroughly, considering commute times and lifestyle preferences. Our team can provide specific insights about different areas and help coordinate your move effectively.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BellevueGuide;