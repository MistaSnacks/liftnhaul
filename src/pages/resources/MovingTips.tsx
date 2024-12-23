import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, Home, List } from "lucide-react";

const MovingTips = () => {
  return (
    <>
      <Helmet>
        <title>Expert Moving Tips | LiftNHaul</title>
        <meta
          name="description"
          content="Professional moving tips and advice to help make your relocation smooth and stress-free. Learn from our years of experience."
        />
        <meta
          name="keywords"
          content="moving tips, relocation advice, moving checklist, moving day tips, moving help"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-6">Expert Moving Tips</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Moving doesn't have to be stressful. Follow our expert tips and advice to ensure a smooth
              and organized relocation experience.
            </p>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Planning a move"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 text-primary" />
              Moving Timeline
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                8 weeks before: Start planning and decluttering
              </p>
              <p className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                6 weeks before: Book moving services
              </p>
              <p className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                4 weeks before: Begin packing non-essentials
              </p>
              <p className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                2 weeks before: Update address and utilities
              </p>
              <p className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                1 week before: Pack remaining items
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Clock className="mr-2 text-primary" />
                Time-Saving Tips
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Pack room by room</p>
                <p>Label boxes clearly</p>
                <p>Keep important documents separate</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Home className="mr-2 text-primary" />
                New Home Setup
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Set up utilities before moving</p>
                <p>Clean before unpacking</p>
                <p>Unpack essentials first</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <List className="mr-2 text-primary" />
                Moving Day Checklist
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Keep important items with you</p>
                <p>Do a final walkthrough</p>
                <p>Have payment ready for movers</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Cost-Saving Strategies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Compare multiple moving quotes</li>
                  <li>Move during off-peak season</li>
                  <li>Declutter before moving</li>
                  <li>Get free moving boxes</li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Planning moving costs"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Moving Day Success Tips</h2>
            <p className="text-gray-700 mb-4">
              Being prepared for moving day is crucial for a successful relocation.
              Here are some additional tips to ensure everything goes smoothly:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Prepare an essentials box with items you'll need immediately</li>
              <li>Keep important documents and valuables with you</li>
              <li>Have cash on hand for unexpected expenses</li>
              <li>Take photos of electronics before disconnecting</li>
              <li>Label boxes clearly with contents and destination rooms</li>
              <li>Pack a separate box for first-day items</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Special Items Handling</h2>
            <p className="text-gray-700 mb-4">
              Different items require different handling approaches. Here's how to
              handle special items during your move:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Use wardrobe boxes for hanging clothes</li>
              <li>Wrap furniture in moving blankets</li>
              <li>Pack electronics in original boxes if possible</li>
              <li>Use specialty boxes for dishes and glassware</li>
              <li>Consider climate-controlled storage for sensitive items</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MovingTips;
