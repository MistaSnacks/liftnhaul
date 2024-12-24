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
        <title>Living in Port Orchard, WA: Your Ultimate Guide | LiftNHaul</title>
        <meta 
          name="description" 
          content="Explore life in Port Orchard, Washington. From waterfront living to community events, discover everything about this charming Kitsap Peninsula city." 
        />
        <meta 
          name="keywords" 
          content="Port Orchard WA, living in Port Orchard, Kitsap Peninsula, waterfront living, Port Orchard community, moving to Port Orchard" 
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Port Orchard: Your Ultimate Living Guide
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="/lovable-uploads/6962ae5a-1011-4fb4-8245-5c2c1bb5c41a.png"
            alt="Downtown Port Orchard waterfront featuring local businesses, marina with boats, and scenic hillside homes overlooking Sinclair Inlet"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Port Orchard, the charming county seat of Kitsap County, offers a unique 
            blend of waterfront living, small-town atmosphere, and convenient access 
            to major urban centers. Situated along the Sinclair Inlet with views of 
            the Olympic Mountains, this growing community provides residents with an 
            exceptional quality of life while maintaining its distinctive maritime character.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Port Orchard?</h2>
          <p className="mb-6">
            Port Orchard attracts residents with its combination of natural beauty, 
            affordable living, and strong community spirit. The city offers a more 
            relaxed pace of life compared to nearby urban areas while providing easy 
            access to Seattle via the ferry system. Whether you're seeking waterfront 
            living, outdoor recreation, or a family-friendly community, Port Orchard 
            has something to offer.
          </p>

          <h2 className="text-2xl font-bold mb-4">Location and Transportation</h2>
          <p className="mb-6">
            Strategically located on the Kitsap Peninsula, Port Orchard offers multiple 
            transportation options. The foot ferry provides direct access to Bremerton, 
            connecting to Seattle's ferry system. This makes commuting to Seattle or 
            other Puget Sound destinations convenient while allowing residents to enjoy 
            a more peaceful, suburban lifestyle. The city is also well-connected by 
            highways, providing easy access to Olympic National Park and other regional 
            attractions.
          </p>

          <h2 className="text-2xl font-bold mb-4">Housing Market Overview</h2>
          <p className="mb-6">
            Port Orchard's housing market offers diverse options at more competitive 
            prices than many Puget Sound communities. From waterfront properties and 
            historic homes to new developments, the city provides housing choices for 
            various preferences and budgets. Popular neighborhoods include the historic 
            downtown area, Manchester, and McCormick Woods, each offering its own 
            unique character and amenities.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Moving to Port Orchard?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our experienced team can help make your move to Port Orchard smooth 
                and stress-free. We know the area well and can provide valuable 
                insights for your relocation.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Employment and Economy</h2>
          <p className="mb-6">
            Port Orchard's economy benefits from its proximity to major employers 
            including the Puget Sound Naval Shipyard and Naval Base Kitsap. The city 
            also supports a growing small business sector, particularly in retail, 
            services, and tourism. The combination of government stability and private 
            sector growth provides diverse employment opportunities for residents.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            The South Kitsap School District serves Port Orchard with a commitment 
            to academic excellence and student success. The district offers various 
            programs and activities to support student development. Higher education 
            options are available nearby, including Olympic College in Bremerton and 
            several institutions in the greater Seattle area, accessible via the 
            ferry system.
          </p>

          <h2 className="text-2xl font-bold mb-4">Lifestyle and Recreation</h2>
          <p className="mb-6">
            Port Orchard offers abundant recreational opportunities, from waterfront 
            activities to parks and trails. The city's downtown area features unique 
            shops, restaurants, and regular community events. Residents enjoy easy 
            access to golf courses, marinas, and numerous outdoor activities. The 
            strong sense of community is evident in local festivals, farmers markets, 
            and various community gatherings throughout the year.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            Relocating to Port Orchard requires consideration of various factors, 
            from choosing the right neighborhood to understanding the ferry system 
            and local services. Our team of moving experts can provide valuable 
            assistance and information to ensure your transition to Port Orchard 
            is smooth and successful. We understand the unique aspects of moving 
            to this waterfront community and can help you navigate every step of 
            the process.
          </p>
        </div>
      </article>
    </div>
  );
};

export default PortOrchardGuide;
