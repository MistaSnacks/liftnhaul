import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const MovingTips = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Moving Tips & Tricks
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 3, 2024 • 7 min read
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <img
            src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
            alt="Moving boxes and supplies"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <p className="text-lg mb-6">
            Moving doesn't have to be stressful. With proper planning and the right
            approach, you can make your relocation smooth and efficient. Here are our
            top tips from years of moving experience in the Tacoma area.
          </p>

          <h2 className="text-2xl font-bold mb-4">Essential Moving Tips</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Start planning at least 8 weeks before your move</li>
            <li>Create a detailed moving checklist</li>
            <li>Declutter before packing</li>
            <li>Label boxes clearly with contents and destination room</li>
            <li>Pack an essentials box for your first night</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Professional Packing Tips</h2>
          <p className="mb-6">
            Proper packing is crucial for protecting your belongings during the move.
            Use quality materials and take extra care with fragile items. Consider
            professional packing services for valuable or delicate items.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Need Professional Moving Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Let our experienced team handle your move with care. We offer full-service
                moving solutions including packing, transportation, and unpacking.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                Schedule Your Move
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
};

export default MovingTips;