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
          content="Your comprehensive guide to moving to Bellevue, WA. Discover neighborhoods, schools, lifestyle, and everything you need to know about this thriving city." 
        />
        <meta 
          name="keywords" 
          content="Bellevue WA, moving to Bellevue, Bellevue neighborhoods, tech hub, Seattle eastside, luxury living" 
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
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            alt="Bellevue skyline"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Bellevue, Washington's fifth-largest city, has transformed from a quiet suburban community into a thriving urban center. Known for its excellent schools, growing tech presence, and high quality of life, Bellevue offers a perfect blend of urban amenities and natural beauty. This comprehensive guide will help you understand what makes Bellevue special and what to expect when moving to this dynamic city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Bellevue?</h2>
          <p className="mb-6">
            Bellevue consistently ranks among the best places to live in the United States, known for its excellent schools, safe neighborhoods, and strong economy. The city offers a more relaxed alternative to Seattle while maintaining easy access to big-city amenities. Its position as a tech hub, combined with outstanding public services and beautiful parks, makes it particularly attractive to professionals and families.
          </p>

          <h2 className="text-2xl font-bold mb-4">Location and Climate</h2>
          <p className="mb-6">
            Located east of Seattle across Lake Washington, Bellevue enjoys a strategic position in the Puget Sound region. The city experiences a mild Pacific Northwest climate, with comfortable summers and cool winters. While the region sees regular rainfall, Bellevue actually receives less precipitation than Seattle due to the "rain shadow" effect of the Olympic Mountains.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Bellevue?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help make your move to Bellevue smooth and efficient. We understand the local area and can ensure a successful relocation.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Neighborhoods</h2>
          <p className="mb-6">
            Bellevue's neighborhoods offer diverse living options. Downtown Bellevue provides urban living with luxury high-rises and excellent shopping. West Bellevue, including Medina and Clyde Hill, features some of the region's most exclusive properties. Crossroads offers more affordable options and cultural diversity, while neighborhoods like Somerset provide hillside homes with stunning views.
          </p>

          <h2 className="text-2xl font-bold mb-4">Housing Market</h2>
          <p className="mb-6">
            The Bellevue housing market reflects the city's desirability and strong economy. While prices are higher than many other U.S. cities, the market offers various options from luxury condos to single-family homes. New developments continue to add housing inventory, particularly in the downtown area and along the future light rail corridor.
          </p>

          <h2 className="text-2xl font-bold mb-4">Economy and Employment</h2>
          <p className="mb-6">
            Bellevue's economy is robust and diverse, with a strong focus on technology and professional services. Major employers include Microsoft, T-Mobile, Amazon, and numerous tech startups. The city's business-friendly environment and strategic location continue to attract new companies and create employment opportunities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            The Bellevue School District is consistently ranked among the best in Washington state. The city's public schools excel in academics, sports, and extracurricular activities. Higher education options include Bellevue College, which offers both two-year and four-year degrees, and easy access to the University of Washington and other Seattle-area institutions.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <p className="mb-6">
            Transportation options in Bellevue are expanding with the upcoming East Link light rail connection to Seattle. The city is served by an extensive bus system and offers good bicycle infrastructure. While many residents drive, ongoing transit improvements are making car-free living increasingly viable.
          </p>

          <h2 className="text-2xl font-bold mb-4">Lifestyle and Recreation</h2>
          <p className="mb-6">
            Bellevue offers numerous recreational opportunities, from shopping at Bellevue Square to hiking in the Cascade Mountains. The city maintains over 2,700 acres of parks and open spaces, including the Bellevue Botanical Garden and Mercer Slough Nature Park. Cultural attractions include the Bellevue Arts Museum and regular community events throughout the year.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            When planning your move to Bellevue, consider factors like commute times and your preferred lifestyle when choosing a neighborhood. Research school districts if you have children, and familiarize yourself with the city's various areas. Our team can provide valuable insights about specific neighborhoods and help ensure a smooth relocation process.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BellevueGuide;