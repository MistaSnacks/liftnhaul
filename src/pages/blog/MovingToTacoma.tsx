import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const MovingToTacoma = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Moving to Tacoma: Your Complete Guide
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 1, 2024 • 12 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1501286353178-1ec881214838"
            alt="Tacoma skyline"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Tacoma, often referred to as the "City of Destiny," is a vibrant port city
            located in Washington state. With its rich history, stunning natural
            surroundings, and growing economy, it's becoming an increasingly popular
            destination for families and professionals alike. This comprehensive guide
            will help you understand everything you need to know about moving to Tacoma.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Tacoma?</h2>
          <p className="mb-6">
            Tacoma offers a unique blend of urban amenities and natural beauty that makes
            it an attractive option for many. The city's affordability compared to nearby
            Seattle, combined with its strong job market and quality of life, makes it
            an excellent choice for both families and young professionals.
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li>More affordable housing market than Seattle</li>
            <li>Rich cultural scene and historic architecture</li>
            <li>Beautiful waterfront and outdoor recreation opportunities</li>
            <li>Growing job market across various sectors</li>
            <li>Strong sense of community and neighborhood pride</li>
            <li>Excellent educational institutions</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Housing Market Overview</h2>
          <p className="mb-6">
            Tacoma's housing market offers diverse options, from historic craftsman
            homes to modern apartments. While prices have increased in recent years,
            they remain more affordable than Seattle. Different neighborhoods offer
            varying styles and price points, allowing you to find the perfect fit for
            your budget and preferences.
          </p>

          <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
          <p className="mb-6">
            The city's economy is diverse and growing, with strong healthcare,
            education, and technology sectors. Major employers include MultiCare
            Health System, CHI Franciscan Health, and the Port of Tacoma. The city's
            strategic location and development initiatives continue to attract new
            businesses and create job opportunities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-6">
            Tacoma offers excellent educational options at all levels. The public
            school system includes innovative programs and magnet schools. Higher
            education institutions like University of Washington Tacoma and Pacific
            Lutheran University provide outstanding academic opportunities and
            contribute to the city's cultural vibrancy.
          </p>

          <h2 className="text-2xl font-bold mb-4">Transportation</h2>
          <p className="mb-6">
            The city's transportation infrastructure includes public transit, light
            rail, and easy access to major highways. The Sound Transit system
            connects Tacoma to Seattle and other regional destinations. The city
            also promotes bicycle-friendly initiatives and walkable neighborhoods.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Make Your Move?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Tacoma.
                We offer comprehensive moving services tailored to your needs,
                ensuring a smooth transition to your new home.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            Moving to Tacoma requires careful planning and consideration. From choosing
            the right neighborhood to finding reliable moving services, there are
            several factors to consider. As a local, family-owned moving company, we
            understand the unique challenges of relocating to Tacoma and can provide
            valuable insights and assistance throughout your move.
          </p>
        </div>
      </article>
    </div>
  );
};

export default MovingToTacoma;