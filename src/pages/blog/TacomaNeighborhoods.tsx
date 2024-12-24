import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TacomaNeighborhoods = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Best Neighborhoods in Tacoma: A Local's Guide
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="/lovable-uploads/47be9504-23a0-448a-953d-f4138d94615d.png"
            alt="Point Ruston waterfront featuring modern luxury apartments, family-friendly bike rentals, and vibrant community spaces with colorful banners and recreational activities"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Tacoma's diverse neighborhoods each offer their own unique charm and
            character. From historic districts to waterfront communities, there's a
            perfect spot for everyone in the City of Destiny. This comprehensive
            guide will help you discover the best neighborhoods Tacoma has to offer.
          </p>

          <h2 className="text-2xl font-bold mb-4">North End</h2>
          <p className="mb-6">
            Known for its historic homes, tree-lined streets, and proximity to Point
            Defiance Park, the North End is one of Tacoma's most desirable
            neighborhoods. This area offers a perfect blend of architectural styles,
            local shops, and easy access to waterfront activities. The neighborhood
            is home to many young professionals and families who appreciate its
            walkable streets and strong sense of community.
          </p>

          <h2 className="text-2xl font-bold mb-4">Stadium District</h2>
          <p className="mb-6">
            Centered around the historic Stadium High School, this neighborhood
            combines urban amenities with historic charm. Residents enjoy walkable
            streets, local restaurants, and stunning views of Commencement Bay.
            The area is known for its mix of historic apartments and single-family
            homes, making it popular with both young professionals and families.
          </p>

          <h2 className="text-2xl font-bold mb-4">Proctor District</h2>
          <p className="mb-6">
            The Proctor District is a charming neighborhood known for its small-town
            feel within the city. It features a variety of local businesses,
            restaurants, and shops, plus a weekly farmers market. The area is
            particularly popular with families due to its excellent schools and
            safe, community-oriented atmosphere.
          </p>

          <h2 className="text-2xl font-bold mb-4">Point Ruston</h2>
          <p className="mb-6">
            Point Ruston is Tacoma's premier waterfront neighborhood, offering a modern, resort-style living experience. This vibrant community features luxury apartments, waterfront dining, shopping, and entertainment options. The Waterwalk at Point Ruston is a scenic 1-mile paved pathway perfect for walking, biking, or rollerblading while enjoying stunning views of Commencement Bay and the Olympic Mountains. The area also includes a state-of-the-art movie theater, seasonal farmers market, and various community events throughout the year.
          </p>

          <h2 className="text-2xl font-bold mb-4">University Place</h2>
          <p className="mb-6">
            University Place, often called "UP" by locals, is a sophisticated suburban neighborhood known for its excellent schools, manicured streets, and world-class Chambers Bay Golf Course - home of the 2015 U.S. Open. The area offers a mix of upscale homes, modern apartments, and beautiful parks with stunning Puget Sound views. Residents enjoy access to the scenic Grandview Drive, numerous recreational facilities, and a developing town center with local shops and restaurants. The neighborhood is perfect for families and professionals seeking a quieter, more upscale living environment while maintaining easy access to Tacoma's urban amenities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Old Town</h2>
          <p className="mb-6">
            As Tacoma's original neighborhood, Old Town offers historic charm and
            waterfront views. The area features a mix of historic homes and new
            developments, plus easy access to the waterfront promenade. Residents
            enjoy local restaurants, shops, and the nearby Old Town Dock.
          </p>

          <h2 className="text-2xl font-bold mb-4">6th Avenue District</h2>
          <p className="mb-6">
            Known for its vibrant nightlife and dining scene, the 6th Avenue
            District is popular with young professionals and artists. The area
            features a mix of historic homes and apartments, plus plenty of
            entertainment options. It's also home to many local businesses and
            artistic venues.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Moving to Tacoma?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As local moving experts, we can help you relocate to any Tacoma
                neighborhood. Our team knows the area well and can provide valuable
                insights about each neighborhood while ensuring a smooth move.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Choosing Your Neighborhood</h2>
          <p className="mb-6">
            When selecting a Tacoma neighborhood, consider factors like commute time,
            school districts, and lifestyle preferences. Each area has its own
            character and amenities, so take time to explore different neighborhoods
            before making your decision. Our team can provide additional insights
            about each area to help you make the best choice for your needs.
          </p>
        </div>
      </article>
    </div>
  );
};

export default TacomaNeighborhoods;
