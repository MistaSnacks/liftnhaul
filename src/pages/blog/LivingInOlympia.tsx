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
          content="Discover everything you need to know about living in Olympia, Washington's capital city. From neighborhoods to lifestyle, culture, and more." 
        />
        <meta 
          name="keywords" 
          content="Olympia WA, living in Olympia, move to Olympia, Olympia neighborhoods, Olympia culture, Washington state capital" 
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
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            alt="Olympia Washington scenic view"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Olympia, Washington's capital city, offers a unique blend of government activity, cultural richness, and natural beauty. As the seat of state government and a vibrant community in its own right, Olympia presents an attractive option for those seeking a balance between urban amenities and natural surroundings. This comprehensive guide will help you understand what makes Olympia special and what to expect when moving to this historic city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Olympia?</h2>
          <p className="mb-6">
            Olympia stands out for its strong sense of community, environmental consciousness, and rich cultural scene. The city's location at the southern tip of Puget Sound provides stunning waterfront views and outdoor recreation opportunities, while its position as the state capital ensures a stable economy and diverse employment options. With a population of around 55,000 residents, Olympia maintains a smaller-city feel while offering many big-city amenities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Location and Climate</h2>
          <p className="mb-6">
            Situated at the southern end of Puget Sound, Olympia enjoys a strategic location with easy access to both Seattle and Portland. The city experiences a typical Pacific Northwest climate, with mild winters and warm summers. While the region does see significant rainfall, this contributes to the lush greenery that makes the area so beautiful. The city's position between the Cascade Mountains and the Olympic Peninsula provides numerous opportunities for outdoor adventures.
          </p>

          <h2 className="text-2xl font-bold mb-4">Housing Market</h2>
          <p className="mb-6">
            Olympia's housing market offers more affordable options compared to larger Pacific Northwest cities like Seattle and Portland. The city features a mix of historic homes, modern developments, and waterfront properties. Popular neighborhoods include the South Capitol area, known for its historic homes and proximity to the capitol campus, and the West Side, which offers a mix of housing options and easy access to shopping and dining.
          </p>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            As the state capital, government employment is a significant sector in Olympia. However, the city's economy is diverse, with growing healthcare, education, and technology sectors. Major employers include the State of Washington, Providence St. Peter Hospital, and The Evergreen State College. The city's strategic location also makes it possible to commute to Tacoma or even Seattle for additional employment opportunities.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Olympia?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Olympia. We understand the local area and can ensure a smooth transition to your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            Olympia boasts excellent educational options at all levels. The Olympia School District is well-regarded, and the city is home to The Evergreen State College, known for its innovative approach to liberal arts education. South Puget Sound Community College provides additional higher education opportunities and workforce training programs.
          </p>

          <h2 className="text-2xl font-bold mb-4">Culture and Recreation</h2>
          <p className="mb-6">
            The city's cultural scene is vibrant and diverse, featuring numerous theaters, galleries, and museums. The Hands On Children's Museum, State Capital Museum, and Washington Center for the Performing Arts are popular attractions. Olympia's commitment to the arts is evident in its numerous festivals, including the Procession of the Species and Capital City Pride.
          </p>

          <h2 className="text-2xl font-bold mb-4">Outdoor Activities</h2>
          <p className="mb-6">
            Outdoor enthusiasts will find plenty to love about Olympia. The city maintains numerous parks and trails, including Priest Point Park and the Woodland Trail. The nearby Nisqually National Wildlife Refuge offers excellent bird watching opportunities, while the Olympic National Park and Mount Rainier are within easy driving distance for weekend adventures.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            When planning your move to Olympia, consider the city's seasonal weather patterns and try to schedule your move during the drier summer months if possible. Research different neighborhoods to find the one that best suits your lifestyle and needs. Our team can provide valuable insights about specific areas and help ensure a smooth relocation process.
          </p>
        </div>
      </article>
    </div>
  );
};

export default LivingInOlympia;