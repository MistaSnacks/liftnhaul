import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const OlympiaGuide = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Living in Olympia, WA: A Comprehensive Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Discover everything about living in Olympia, Washington. From lifestyle and culture to housing and activities, your complete guide to life in the state capital." 
        />
        <meta 
          name="keywords" 
          content="Olympia WA, living in Olympia, Olympia housing, Olympia lifestyle, Washington state capital, Olympia culture, moving to Olympia" 
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
            src="/lovable-uploads/3e62240c-5e1e-496b-83f2-dea72304b102.png"
            alt="Aerial view of Olympia's port and waterfront at dusk"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Olympia, Washington's capital city, offers a unique blend of government activity, 
            natural beauty, and small-city charm. Nestled at the southern tip of Puget Sound, 
            Olympia provides residents with a high quality of life, abundant outdoor 
            recreation opportunities, and a strong sense of community. This comprehensive 
            guide will help you understand what makes Olympia special and what to expect 
            when moving to this historic city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Olympia?</h2>
          <p className="mb-6">
            Olympia stands out for its perfect balance of urban amenities and natural 
            surroundings. As the state capital, it offers stable government employment 
            opportunities while maintaining a relaxed, small-city atmosphere. The city's 
            commitment to sustainability, thriving arts scene, and proximity to outdoor 
            recreation make it an attractive destination for families and professionals alike.
          </p>

          <h2 className="text-2xl font-bold mb-4">Location and Climate</h2>
          <p className="mb-6">
            Located at the southern end of Puget Sound, Olympia enjoys a mild maritime 
            climate with moderate temperatures year-round. While the region experiences 
            regular rainfall, it creates the lush, green environment that characterizes 
            the Pacific Northwest. The city's strategic location provides easy access to 
            major urban centers like Seattle and Portland, as well as natural attractions 
            including Mount Rainier and the Olympic Peninsula.
          </p>

          <h2 className="text-2xl font-bold mb-4">Housing Market Overview</h2>
          <p className="mb-6">
            Olympia's housing market offers diverse options at more affordable prices 
            compared to nearby Seattle. From historic homes in established neighborhoods 
            to modern developments in growing areas, the city provides housing choices 
            for various preferences and budgets. Popular neighborhoods include the 
            historic South Capitol area, the waterfront community of West Bay Drive, 
            and the family-friendly Southeast Olympia region.
          </p>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            As the state capital, government employment forms a significant portion of 
            Olympia's job market. However, the city also supports a growing private 
            sector, particularly in healthcare, education, and professional services. 
            The stable government presence helps maintain economic stability, while 
            emerging industries provide diverse career opportunities for residents.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Olympia?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Olympia. 
                We understand the local area and can ensure a smooth transition to 
                your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            Olympia takes pride in its quality education system, from public schools 
            to higher education institutions. The Olympia School District consistently 
            ranks well in state evaluations, and the presence of The Evergreen State 
            College and South Puget Sound Community College provides excellent higher 
            education opportunities. These institutions contribute to the city's 
            intellectual atmosphere and provide valuable community resources.
          </p>

          <h2 className="text-2xl font-bold mb-4">Lifestyle and Culture</h2>
          <p className="mb-6">
            Olympia's vibrant cultural scene includes numerous festivals, farmers 
            markets, and artistic venues. The city is known for its support of local 
            businesses, environmental consciousness, and active community engagement. 
            Residents enjoy access to numerous parks, walking trails, and waterfront 
            areas, making it easy to maintain an active, outdoor-oriented lifestyle.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            Moving to Olympia requires careful planning and consideration of various 
            factors. From choosing the right neighborhood to understanding the local 
            climate and lifestyle, there are many aspects to consider. As your local 
            moving experts, we can provide valuable insights and assistance throughout 
            your relocation process, ensuring a smooth transition to your new home in 
            Washington's capital city.
          </p>
        </div>
      </article>
    </div>
  );
};

export default OlympiaGuide;