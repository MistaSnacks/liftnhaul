import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MovingTips = () => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Moving Tips & Tricks
          </h1>
          <p className="text-lg text-gray-600">
            Published on May 3, 2024 • 10 min read
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
            comprehensive tips from years of moving experience in the Tacoma area,
            designed to help you navigate every aspect of your move successfully.
          </p>

          <h2 className="text-2xl font-bold mb-4">Planning Your Move</h2>
          <p className="mb-6">
            The key to a successful move is thorough planning. Start preparing at
            least 8 weeks before your moving date to ensure you have enough time to
            organize everything properly. Create a detailed timeline and checklist
            to keep track of all tasks and deadlines.
          </p>

          <h2 className="text-2xl font-bold mb-4">Essential Moving Tips</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Start planning at least 8 weeks before your move</li>
            <li>Create a detailed moving checklist and timeline</li>
            <li>Declutter before packing - donate or sell unused items</li>
            <li>Label boxes clearly with contents and destination room</li>
            <li>Pack an essentials box for your first night</li>
            <li>Keep important documents with you during the move</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Professional Packing Tips</h2>
          <p className="mb-6">
            Proper packing is crucial for protecting your belongings during the move.
            Use quality materials and take extra care with fragile items. Consider
            professional packing services for valuable or delicate items to ensure
            maximum protection during transit.
          </p>

          <h2 className="text-2xl font-bold mb-4">Moving Day Preparation</h2>
          <p className="mb-6">
            Being well-prepared for moving day can make the process much smoother.
            Have all your boxes packed and labeled before the movers arrive. Keep
            important items and documents with you, and ensure clear access to all
            rooms and hallways for the moving team.
          </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Need Professional Moving Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Let our experienced team handle your move with care. We offer full-service
            moving solutions including packing, transportation, and unpacking.
            Our professional movers are trained to handle all types of items
            with expertise and care.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleQuoteClick}>
            <Phone className="mr-2 h-4 w-4" />
            Schedule Your Move
          </Button>
        </CardContent>
      </Card>

          <h2 className="text-2xl font-bold mb-4">After the Move</h2>
          <p className="mb-6">
            Once you've arrived at your new home, take time to organize and settle in
            properly. Start with essential rooms like the kitchen and bathroom, then
            work your way through the rest of the house systematically. Don't forget
            to update your address and set up utilities in your new location.
          </p>

          <h2 className="text-2xl font-bold mb-4">Special Considerations</h2>
          <p className="mb-6">
            Different types of moves may require special planning. Whether you're
            moving an apartment, house, or office, make sure to consider specific
            requirements like elevator reservations, parking permits, or special
            equipment needs. Our team can help you plan for these specific situations.
          </p>
        </div>
      </article>
    </div>
  );
};

export default MovingTips;
