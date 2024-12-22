import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SeattleLivingGuide = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Seattle Living: What to Know Before Moving | LiftNHaul</title>
        <meta 
          name="description" 
          content="Essential information about moving to Seattle, WA. Learn about neighborhoods, lifestyle, culture, and everything you need for a successful relocation." 
        />
        <meta 
          name="keywords" 
          content="Seattle WA, moving to Seattle, Seattle neighborhoods, Seattle culture, Seattle jobs, Pacific Northwest living" 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Seattle Living: What to Know Before Moving
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 15, 2024 • 15 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            alt="Seattle skyline"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Seattle, the Emerald City, stands as a beacon of innovation, culture, and natural beauty in the Pacific Northwest. Known for its thriving tech industry, vibrant arts scene, and stunning natural surroundings, Seattle offers a unique living experience that attracts people from around the world. This comprehensive guide will help you understand what to expect when moving to this dynamic city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Seattle?</h2>
          <p className="mb-6">
            Seattle combines career opportunities, especially in tech and aerospace, with an exceptional quality of life. The city's commitment to sustainability, outdoor recreation opportunities, and rich cultural scene make it an attractive destination for professionals and families alike. Despite its reputation for rain, Seattle actually receives less annual rainfall than many major U.S. cities, though it does have more cloudy days.
          </p>

          <h2 className="text-2xl font-bold mb-4">Seattle Neighborhoods</h2>
          <p className="mb-6">
            Each Seattle neighborhood has its own distinct character. Capitol Hill offers vibrant nightlife and cultural venues, while Queen Anne provides stunning city views and historic homes. Ballard combines Scandinavian heritage with trendy restaurants and shops, and West Seattle offers a more relaxed, beachy atmosphere. South Lake Union has emerged as a tech hub, while Fremont maintains its artistic, quirky vibe.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Planning Your Seattle Move?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our experienced team can help make your move to Seattle smooth and efficient. We understand the unique challenges of moving in the Seattle area and can provide valuable insights for your relocation.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Housing Market</h2>
          <p className="mb-6">
            Seattle's housing market is competitive, reflecting the city's strong economy and desirable location. While prices are higher than many other U.S. cities, the market offers various options from modern downtown condos to classic Craftsman homes in residential neighborhoods. Many newcomers choose to rent initially while getting to know different areas of the city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            The city's job market is robust, particularly in technology, aerospace, and healthcare. Major employers include Amazon, Microsoft, Boeing, and numerous startups. The presence of these companies has created a strong ecosystem for innovation and career growth. The city also supports a thriving small business community and creative sector.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <p className="mb-6">
            Seattle offers multiple transportation options, including an expanding light rail system, buses, and ferries. While traffic can be challenging, many residents choose to live without cars, relying on public transit and bicycle infrastructure. The city's commitment to improving public transportation continues with ongoing light rail expansion projects.
          </p>

          <h2 className="text-2xl font-bold mb-4">Culture and Entertainment</h2>
          <p className="mb-6">
            Seattle's cultural scene is diverse and engaging, from the iconic Space Needle and Pike Place Market to numerous museums, theaters, and music venues. The city's food scene reflects its international character and access to fresh seafood and local produce. Sports fans can enjoy professional football, baseball, soccer, and hockey, while outdoor enthusiasts have easy access to hiking, skiing, and water activities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            The city offers excellent educational opportunities at all levels. The University of Washington is a world-renowned research institution, and Seattle's public schools include some of the state's top-performing schools. The area also features numerous private schools and specialized educational programs.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            When planning your Seattle move, consider the city's unique geography and weather patterns. Summer months (July-September) offer the best moving conditions with less rainfall. Research neighborhoods thoroughly, considering commute times and your preferred lifestyle. Our team can provide specific insights about different areas and help coordinate your move effectively.
          </p>
        </div>
      </article>
    </div>
  );
};

export default SeattleLivingGuide;