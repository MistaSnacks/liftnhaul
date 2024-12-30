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
        <title>Living in Bellevue: A Modern City Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Discover life in Bellevue, Washington's tech hub. From luxury living to outdoor recreation, explore what makes this Eastside city special." 
        />
        <meta 
          name="keywords" 
          content="Bellevue WA, living in Bellevue, Bellevue tech hub, Eastside Seattle, Bellevue lifestyle, moving to Bellevue" 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bellevue: A Modern Living Guide
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="/lovable-uploads/077af8e9-9606-44bf-b639-b953b106b55c.png"
            alt="Aerial view of downtown Bellevue featuring modern skyscrapers, Downtown Park with its circular walking path, and signature water features, surrounded by urban development and green spaces"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Bellevue, Washington's fifth-largest city, has transformed from a quiet 
            suburban community into a thriving urban center. Known for its high-tech 
            industry, luxury shopping, and excellent schools, Bellevue offers residents 
            a perfect blend of urban amenities and natural beauty. This comprehensive 
            guide will help you understand what makes Bellevue special and what to 
            expect when moving to this dynamic city.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Bellevue?</h2>
          <p className="mb-6">
            Bellevue attracts residents with its exceptional quality of life, 
            top-rated schools, and robust job market. The city's clean, safe 
            streets, abundant parks, and proximity to both Seattle and outdoor 
            recreation areas make it particularly attractive to families and 
            professionals seeking a balanced lifestyle.
          </p>

          <h2 className="text-2xl font-bold mb-4">Location and Environment</h2>
          <p className="mb-6">
            Situated between Lake Washington and Lake Sammamish, Bellevue enjoys 
            stunning natural surroundings while maintaining easy access to Seattle. 
            The city's position on the Eastside provides convenient access to the 
            Cascade Mountains for skiing and hiking, while numerous local parks 
            and trails offer outdoor recreation within city limits.
          </p>

          <h2 className="text-2xl font-bold mb-4">Housing Market Overview</h2>
          <p className="mb-6">
            Bellevue's housing market reflects its status as a premier Eastside 
            community. The city offers a range of housing options, from luxury 
            high-rise condominiums in downtown to spacious single-family homes 
            in established neighborhoods. Popular areas include Downtown Bellevue, 
            West Bellevue, Woodridge, and Somerset, each offering unique advantages 
            and lifestyle options.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Bellevue?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our experienced team can help make your move to Bellevue smooth 
                and efficient. We understand the local area and can ensure a 
                seamless transition to your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Employment and Economy</h2>
          <p className="mb-6">
            Bellevue's economy is driven by technology and professional services, 
            with major employers including Microsoft, T-Mobile, and Amazon. The 
            city's downtown core continues to grow with new office towers and 
            mixed-use developments, creating additional employment opportunities. 
            The strong job market and growing economy contribute to the city's 
            prosperity and continued development.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education Excellence</h2>
          <p className="mb-6">
            The Bellevue School District is consistently ranked among the best in 
            Washington state, making the city particularly attractive to families. 
            The district's commitment to academic excellence, technology integration, 
            and student success creates exceptional educational opportunities. 
            Additionally, the presence of Bellevue College and nearby universities 
            provides excellent higher education options.
          </p>

          <h2 className="text-2xl font-bold mb-4">Lifestyle and Culture</h2>
          <p className="mb-6">
            Bellevue offers a sophisticated urban lifestyle with numerous cultural 
            attractions, shopping destinations, and dining options. The Bellevue 
            Collection and The Shops at Bravern provide luxury retail experiences, 
            while the Bellevue Arts Museum and numerous galleries support a thriving 
            arts scene. The city's diverse population contributes to a rich cultural 
            environment and varied dining options.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            Moving to Bellevue requires careful consideration of various factors, 
            from choosing the right neighborhood to understanding the local 
            transportation options and amenities. Our team of moving experts can 
            provide valuable assistance and information to ensure your transition 
            to Bellevue is smooth and successful. We understand the unique aspects 
            of moving to this dynamic city and can help you navigate every step 
            of the process.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BellevueGuide;
