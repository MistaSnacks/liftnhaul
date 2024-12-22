import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const LivingInOlympia = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Living in Olympia: A Comprehensive Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Discover everything about living in Olympia, WA. From neighborhoods to lifestyle, culture, and essential tips for new residents." 
        />
        <meta 
          name="keywords" 
          content="Olympia WA, living in Olympia, Olympia neighborhoods, Washington state capital, Olympia culture, Olympia jobs, Pacific Northwest living" 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Living in Olympia: A Comprehensive Guide
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 15, 2024 • 15 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Olympia Washington State Capitol"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Olympia, Washington's capital city, offers a unique blend of government activity, cultural richness, and natural beauty. This comprehensive guide will help you understand what makes Olympia special and what to expect when moving to this historic Pacific Northwest city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Olympia?</h2>
          <p className="mb-6">
            As the state capital, Olympia provides stable government employment opportunities while maintaining a smaller-city feel. The city's commitment to environmental sustainability, thriving arts scene, and proximity to both the Puget Sound and Olympic National Park make it an attractive destination for those seeking a balance between urban amenities and natural beauty.
          </p>

          <h2 className="text-2xl font-bold mb-4">Olympia Neighborhoods</h2>
          <p className="mb-6">
            Each Olympia neighborhood has its own character. The South Capitol neighborhood showcases historic homes and tree-lined streets, while downtown offers urban living with access to government offices, restaurants, and shops. The Eastside provides family-friendly communities, and the Westside features excellent schools and shopping districts. The Boston Harbor area offers waterfront living with stunning views of Puget Sound.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Planning Your Olympia Move?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help make your move to Olympia smooth and stress-free. We understand the unique aspects of relocating to the state capital and can provide valuable insights for your move.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Housing Market</h2>
          <p className="mb-6">
            Olympia's housing market offers more affordable options compared to larger Pacific Northwest cities. From historic homes in established neighborhoods to modern apartments downtown, the market provides diverse options for different budgets and preferences. The city's steady government employment base helps maintain stable property values.
          </p>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            While state government is the largest employer, Olympia's economy is diversifying. Healthcare, education, and technology sectors are growing. The city also supports a vibrant small business community and creative enterprises. The presence of The Evergreen State College and South Puget Sound Community College contributes to educational and cultural opportunities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <p className="mb-6">
            Olympia offers multiple transportation options, including an extensive bus system and bike-friendly infrastructure. The city's location provides easy access to I-5, connecting residents to Seattle and Portland. Commuting within the city is relatively easy, with most destinations reachable within 15-20 minutes.
          </p>

          <h2 className="text-2xl font-bold mb-4">Culture and Entertainment</h2>
          <p className="mb-6">
            The city boasts a rich cultural scene with the Washington Center for the Performing Arts, Hands On Children's Museum, and numerous galleries. The Olympia Farmers Market, one of the state's largest, operates year-round. Outdoor enthusiasts enjoy easy access to Priest Point Park, Watershed Park, and nearby state parks.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            Olympia School District is known for its strong academic programs and community involvement. The presence of The Evergreen State College provides unique educational opportunities and contributes to the city's progressive atmosphere. Several private schools offer additional educational options.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            When planning your Olympia move, consider the city's rainy climate and plan accordingly. Summer months (July-September) offer the best moving conditions. Research neighborhoods thoroughly, considering commute times and lifestyle preferences. Our team can provide specific insights about different areas and help coordinate your move effectively.
          </p>
        </div>
      </article>
    </div>
  );
};

export default LivingInOlympia;