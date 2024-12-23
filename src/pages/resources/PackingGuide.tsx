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

      <div className="min-h-screen">
        <div className="pt-24 pb-12 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Packing Guide</h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Follow our comprehensive packing guide to ensure your belongings are protected during the move.
                Our expert tips will help you pack efficiently and minimize the risk of damage.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Box className="mr-2 text-primary" />
                Essential Packing Supplies
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Moving boxes in various sizes
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Packing tape and dispenser
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Bubble wrap and packing paper
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Markers for labeling
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Furniture blankets and padding
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Package className="mr-2 text-primary" />
                    Kitchen Packing
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Pack plates vertically</p>
                    <p>Use cell boxes for glasses</p>
                    <p>Wrap appliances in bubble wrap</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Box className="mr-2 text-primary" />
                    Bedroom Items
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Use wardrobe boxes</p>
                    <p>Keep clothing in drawers</p>
                    <p>Pack shoes individually</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Archive className="mr-2 text-primary" />
                    Living Room
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Protect artwork carefully</p>
                    <p>Disassemble furniture</p>
                    <p>Label electronics cables</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Room-by-Room Guide</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Kitchen</h3>
                  <p className="text-gray-700">
                    The kitchen often contains the most fragile items. Use dish pack boxes and plenty of packing
                    paper. Pack plates vertically and wrap each glass individually.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Living Room</h3>
                  <p className="text-gray-700">
                    Start with decorative items and books. Use picture boxes for artwork
                    and mirrors. Disassemble furniture when possible and keep hardware
                    together in labeled bags.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Bedroom</h3>
                  <p className="text-gray-700">
                    Use wardrobe boxes for hanging clothes. Pack off-season items first.
                    Consider vacuum bags for bulky bedding and clothing items.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Special Items Packing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Electronics</h3>
                  <p className="text-gray-700">
                    Take photos of wire connections before disconnecting. Use original
                    boxes when possible, or similar-sized boxes with plenty of padding.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Artwork and Mirrors</h3>
                  <p className="text-gray-700">
                    Use picture boxes and corner protectors. Mark boxes as fragile and
                    pack them separately from other items.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Valuable Items</h3>
                  <p className="text-gray-700">
                    Keep important documents, jewelry, and other valuables with you
                    during the move. Consider insurance for high-value items.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackingGuide;