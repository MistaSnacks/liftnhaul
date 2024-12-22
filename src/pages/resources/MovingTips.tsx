import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Calendar, FileText, CheckCircle } from "lucide-react";

const MovingTips = () => {
  return (
    <>
      <Helmet>
        <title>Essential Moving Tips & Tricks | LiftNHaul</title>
        <meta
          name="description"
          content="Expert moving tips and tricks to help you plan and execute your move efficiently. Learn how to make your relocation stress-free."
        />
        <meta
          name="keywords"
          content="moving tips, moving advice, relocation tips, moving checklist, moving organization"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-6">Essential Moving Tips</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Make your move smoother and more organized with our expert moving tips.
              From planning to execution, we've got you covered with practical advice.
            </p>
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Moving day preparation"
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
                8 weeks before: Start planning and researching
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                6 weeks before: Book moving company
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                4 weeks before: Start packing non-essentials
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                2 weeks before: Change address and utilities
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
                <FileText className="mr-2 text-primary" />
                Planning Phase
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Create a detailed moving checklist</li>
                <li>Research moving companies early</li>
                <li>Start decluttering your home</li>
                <li>Collect packing supplies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Calendar className="mr-2 text-primary" />
                Two Weeks Before
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Transfer utilities and update address</li>
                <li>Schedule elevator usage if needed</li>
                <li>Arrange for pet care during move</li>
                <li>Begin packing room by room</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Truck className="mr-2 text-primary" />
                Moving Day Tips
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Keep important documents with you</li>
                <li>Pack an essentials box</li>
                <li>Take photos of electronics setup</li>
                <li>Label boxes clearly</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Additional Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Color-code boxes by room</li>
                  <li>Take photos of valuable items</li>
                  <li>Keep a moving day survival kit</li>
                  <li>Plan for delays and unexpected issues</li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Moving day organization"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MovingTips;