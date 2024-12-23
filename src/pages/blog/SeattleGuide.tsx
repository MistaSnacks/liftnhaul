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
        <title>Living in Seattle: Your Complete Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Everything you need to know about living in Seattle, WA. From neighborhoods and culture to employment and lifestyle, discover life in the Emerald City." 
        />
        <meta 
          name="keywords" 
          content="Seattle WA, living in Seattle, Seattle neighborhoods, Seattle culture, Emerald City, Seattle lifestyle, moving to Seattle" 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Seattle Living Guide: Your Gateway to the Emerald City
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 15, 2024 • 15 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="/lovable-uploads/d50cf589-a248-43a2-8c27-084bd0aa0016.png"
            alt="Aerial view of downtown Seattle featuring the iconic Space Needle, modern skyscrapers, and Puget Sound with Mount Rainier visible in the distance"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Seattle, known as the Emerald City, stands as a vibrant metropolis 
            surrounded by natural beauty. From its iconic Space Needle to the bustling 
            Pike Place Market, Seattle combines urban sophistication with outdoor 
            adventure opportunities. This comprehensive guide will help you understand 
            what makes Seattle unique and what to expect when moving to this dynamic city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Seattle?</h2>
          <p className="mb-6">
            Seattle attracts residents with its strong job market, particularly in 
            technology and innovation, combined with its rich cultural scene and 
            outdoor lifestyle opportunities. The city's commitment to sustainability, 
            diverse neighborhoods, and proximity to both mountains and water make it 
            an attractive destination for professionals and families seeking a high 
            quality of life.
          </p>

          <h2 className="text-2xl font-bold mb-4">Location and Climate</h2>
          <p className="mb-6">
            Nestled between Puget Sound and Lake Washington, Seattle enjoys a 
            temperate maritime climate. While the city is known for its rainfall, 
            it actually receives less annual precipitation than many major U.S. cities. 
            The mild temperatures and lush environment create perfect conditions for 
            year-round outdoor activities, from hiking and biking to water sports.
          </p>

          <h2 className="text-2xl font-bold mb-4">Housing Market Overview</h2>
          <p className="mb-6">
            Seattle's housing market is known for its competitiveness, reflecting 
            the city's strong economy and desirability. From modern downtown 
            condominiums to charming craftsman homes in residential neighborhoods, 
            the city offers diverse housing options. Popular neighborhoods include 
            Capitol Hill, Ballard, Queen Anne, and West Seattle, each with its own 
            distinct character and amenities.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Planning Your Seattle Move?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Seattle. 
                We understand the unique challenges of moving in the city and can 
                ensure a smooth transition to your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            Seattle's job market is dominated by technology companies, including 
            Amazon and Microsoft, along with aerospace giant Boeing. The city also 
            supports thriving healthcare, education, and creative sectors. This 
            diverse economy provides numerous career opportunities and contributes 
            to the city's innovation-driven culture.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <p className="mb-6">
            Seattle offers comprehensive public transportation options, including 
            buses, light rail, and the iconic ferry system. The city is also 
            known for its walkability and bicycle-friendly infrastructure. While 
            traffic can be challenging during peak hours, many residents find 
            alternative transportation methods effective for daily commuting.
          </p>

          <h2 className="text-2xl font-bold mb-4">Culture and Lifestyle</h2>
          <p className="mb-6">
            Seattle's cultural scene is rich and diverse, from world-class museums 
            and theaters to intimate music venues and art galleries. The city's 
            food scene celebrates local ingredients and global influences, while 
            the famous coffee culture keeps residents energized. Outdoor 
            enthusiasts appreciate easy access to hiking trails, water activities, 
            and skiing within a short drive.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            Moving to Seattle requires careful planning and consideration of 
            various factors, from choosing the right neighborhood to understanding 
            the local climate and transportation options. Our team of moving 
            experts can provide valuable assistance and information to ensure 
            your transition to Seattle is smooth and successful. We understand 
            the unique aspects of moving to this dynamic city and can help you 
            navigate every step of the process.
          </p>
        </div>
      </article>
    </div>
  );
};

export default SeattleGuide;