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
            Published on May 1, 2024 • 8 min read
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
            destination for families and professionals alike.
          </p>

          <h2 className="text-2xl font-bold mb-4">Why Choose Tacoma?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Affordable housing compared to Seattle</li>
            <li>Rich cultural scene and historic architecture</li>
            <li>Beautiful waterfront and outdoor recreation</li>
            <li>Growing job market</li>
            <li>Strong sense of community</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            Moving to Tacoma requires careful planning and consideration. From choosing
            the right neighborhood to finding reliable moving services, there are
            several factors to consider. As a local, family-owned moving company, we
            understand the unique challenges of relocating to Tacoma.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Make Your Move?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team help you with your relocation to Tacoma.
                We offer comprehensive moving services tailored to your needs.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
};

export default MovingToTacoma;