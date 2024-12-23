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

      <div className="min-h-screen">
        <div className="pt-24 pb-12 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Moving Tips</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Moving doesn't have to be stressful. Follow our expert tips and advice to ensure a smooth
                and organized relocation experience.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
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

            <div className="grid md:grid-cols-3 gap-6">
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

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Cost-Saving Strategies</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Compare multiple moving quotes</li>
                <li>Move during off-peak season</li>
                <li>Declutter before moving</li>
                <li>Get free moving boxes</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Moving Day Success Tips</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Prepare an essentials box with items you'll need immediately</li>
                <li>Keep important documents and valuables with you</li>
                <li>Have cash on hand for unexpected expenses</li>
                <li>Take photos of electronics before disconnecting</li>
                <li>Label boxes clearly with contents and destination rooms</li>
                <li>Pack a separate box for first-day items</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingTips;