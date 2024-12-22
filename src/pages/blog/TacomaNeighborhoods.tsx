import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const TacomaNeighborhoods = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Best Neighborhoods in Tacoma: A Local's Guide
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 2, 2024 • 10 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
            alt="Tacoma neighborhood"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Tacoma's diverse neighborhoods each offer their own unique charm and
            character. From historic districts to waterfront communities, there's a
            perfect spot for everyone in the City of Destiny.
          </p>

          <h2 className="text-2xl font-bold mb-4">North End</h2>
          <p className="mb-6">
            Known for its historic homes, tree-lined streets, and proximity to Point
            Defiance Park, the North End is one of Tacoma's most desirable
            neighborhoods. This area offers a mix of architectural styles, local
            shops, and easy access to waterfront activities.
          </p>

          <h2 className="text-2xl font-bold mb-4">Stadium District</h2>
          <p className="mb-6">
            Centered around the historic Stadium High School, this neighborhood
            combines urban amenities with historic charm. Residents enjoy walkable
            streets, local restaurants, and stunning views of Commencement Bay.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Moving to Tacoma?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                As local moving experts, we can help you relocate to any Tacoma
                neighborhood. Contact us for personalized moving services.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
};

export default TacomaNeighborhoods;