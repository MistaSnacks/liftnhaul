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
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                8 weeks before: Start planning and decluttering
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                6 weeks before: Book moving services
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                4 weeks before: Begin packing non-essentials
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                2 weeks before: Update address and utilities
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                1 week before: Pack remaining items
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Clock className="mr-2 text-primary" />
                Time-Saving Tips
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pack room by room</li>
                <li>Label boxes clearly</li>
                <li>Keep important documents separate</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Home className="mr-2 text-primary" />
                New Home Setup
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Set up utilities before moving</li>
                <li>Clean before unpacking</li>
                <li>Unpack essentials first</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <List className="mr-2 text-primary" />
                Moving Day Checklist
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Keep important items with you</li>
                <li>Do a final walkthrough</li>
                <li>Have payment ready for movers</li>
              </ul>
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

        {/* New Post-Move Organization Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Post-Move Organization</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Organizing after the move"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <div>
                <h3 className="text-xl font-medium mb-3">Getting Settled</h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Create an unpacking schedule</li>
                  <li>Set up essential rooms first</li>
                  <li>Organize as you unpack</li>
                  <li>Document any damages for claims</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MovingTips;