import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Box, Package, Truck, CheckCircle, Archive } from "lucide-react";

const PackingGuide = () => {
  return (
    <>
      <Helmet>
        <title>Complete Packing Guide | LiftNHaul</title>
        <meta
          name="description"
          content="Room-by-room packing guide with professional tips on how to pack your belongings safely and efficiently for moving."
        />
        <meta
          name="keywords"
          content="packing guide, packing tips, moving boxes, how to pack, moving supplies"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-6">Professional Packing Guide</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Follow our comprehensive packing guide to ensure your belongings are protected during the move.
              Our expert tips will help you pack efficiently and minimize the risk of damage.
            </p>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Person planning their packing strategy"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Box className="mr-2 text-primary" />
              Essential Packing Supplies
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Moving boxes in various sizes
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Packing tape and dispenser
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Bubble wrap and packing paper
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Markers for labeling
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Furniture blankets and padding
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Package className="mr-2 text-primary" />
                Kitchen Packing
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pack plates vertically for better protection</li>
                <li>Use cell boxes for glasses and stemware</li>
                <li>Wrap appliances in bubble wrap</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Box className="mr-2 text-primary" />
                Bedroom Items
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use wardrobe boxes for hanging clothes</li>
                <li>Keep clothing in dresser drawers</li>
                <li>Pack shoes individually in original boxes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <Truck className="mr-2 text-primary" />
                Loading Tips
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Load heaviest items first</li>
                <li>Create tiers to maximize space</li>
                <li>Keep essential items easily accessible</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Pro Packing Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Fill boxes completely to prevent collapse</li>
                  <li>Keep box weight under 50 pounds</li>
                  <li>Label boxes on multiple sides</li>
                  <li>Pack an essentials box for first-day items</li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Person organizing moving boxes"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Room-by-Room Packing Guide</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Kitchen</h3>
              <p className="text-gray-700">
                The kitchen often contains the most fragile items and requires special
                attention during packing. Use dish pack boxes and plenty of packing
                paper. Pack plates vertically and wrap each glass individually.
              </p>

              <h3 className="text-xl font-medium">Living Room</h3>
              <p className="text-gray-700">
                Start with decorative items and books. Use picture boxes for artwork
                and mirrors. Disassemble furniture when possible and keep hardware
                together in labeled bags.
              </p>

              <h3 className="text-xl font-medium">Bedroom</h3>
              <p className="text-gray-700">
                Use wardrobe boxes for hanging clothes. Pack off-season items first.
                Consider vacuum bags for bulky bedding and clothing items.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Special Items Packing</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Electronics</h3>
              <p className="text-gray-700">
                Take photos of wire connections before disconnecting. Use original
                boxes when possible, or similar-sized boxes with plenty of padding.
              </p>

              <h3 className="text-xl font-medium">Artwork and Mirrors</h3>
              <p className="text-gray-700">
                Use picture boxes and corner protectors. Mark boxes as fragile and
                pack them separately from other items.
              </p>

              <h3 className="text-xl font-medium">Valuable Items</h3>
              <p className="text-gray-700">
                Keep important documents, jewelry, and other valuables with you
                during the move. Consider insurance for high-value items.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PackingGuide;
