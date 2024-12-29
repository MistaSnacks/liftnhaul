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
        <title>Living in Bellevue, WA: Modern Living Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Everything you need to know about living in Bellevue, Washington. Discover the city's amenities, neighborhoods, and lifestyle in this comprehensive guide." 
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
            alt="Aerial view of downtown Bellevue featuring modern skyscrapers"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <p className="text-lg mb-6">
            Bellevue, Washington's fifth-largest city, combines urban sophistication 
            with suburban comfort. Known for its high-tech industry, excellent schools, 
            and beautiful parks, Bellevue offers residents a high quality of life in 
            the heart of the Eastside.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Bellevue?</h2>
          <p className="mb-6">
            Bellevue offers the perfect balance of urban amenities and natural beauty. 
            The city features a growing downtown core, top-rated schools, and easy 
            access to outdoor recreation, making it ideal for families and professionals.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Move to Bellevue?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Bellevue. 
                We understand the local area and can ensure a smooth transition to 
                your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Employment and Economy</h2>
          <p className="mb-6">
            Bellevue's economy is driven by technology companies, with major employers 
            including Microsoft, T-Mobile, and numerous startups. The city's strategic 
            location and business-friendly environment continue to attract new companies 
            and talent.
          </p>

          <h2 className="text-2xl font-bold mb-4">Lifestyle and Recreation</h2>
          <p className="mb-6">
            From the Bellevue Collection's luxury shopping to the tranquil Bellevue 
            Botanical Garden, residents enjoy diverse entertainment options. The city's 
            park system, including the Downtown Park and Mercer Slough Nature Park, 
            provides ample opportunities for outdoor recreation.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BellevueGuide;