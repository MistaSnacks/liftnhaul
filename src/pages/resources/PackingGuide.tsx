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
                Master the art of efficient packing with our comprehensive guide. We've compiled years of professional experience
                into detailed instructions to ensure your belongings are protected during the move. From selecting the right boxes
                to proper packing techniques, we cover everything you need to know.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Box className="mr-2 text-primary" />
                Essential Box Selection Guide
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Small Boxes (1.5 cubic feet): Perfect for heavy items like books, tools, and canned goods. The compact size prevents overloading and makes handling easier. Always reinforce the bottom with extra tape for added security. These boxes should be your go-to choice for dense, heavy items that could make larger boxes too heavy to carry safely.
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Medium Boxes (3 cubic feet): Ideal for kitchen items, toys, small appliances, and decorative items. These versatile boxes are perfect for most household items. Use plenty of packing paper or bubble wrap between items, and fill any empty spaces to prevent shifting during transport.
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Large Boxes (4.5 cubic feet): Best suited for lightweight, bulky items like bedding, pillows, towels, and clothing. Avoid putting heavy items in these boxes as they can become difficult to move. These boxes are also excellent for lampshades and other delicate, oversized items when properly padded.
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Specialty Boxes: Wardrobe boxes with hanging rods for clothing, dish pack boxes with extra reinforcement for kitchenware, and picture boxes for artwork and mirrors. These specialized containers provide extra protection for specific items and make packing and unpacking more efficient.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Package className="mr-2 text-primary" />
                    Kitchen Packing Expertise
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>When packing plates, position them vertically like records in a dish pack box. This orientation provides maximum protection against breakage. Wrap each plate individually in packing paper and use cardboard dividers between every few plates.</p>
                    <p>Utilize cell boxes specifically designed for glassware and stemware. These boxes feature individual compartments that keep each item separate and protected. Wrap each glass in packing paper and stuff hollow spaces with additional padding.</p>
                    <p>Protect appliances by wrapping them in bubble wrap and securing with tape. Remove any removable parts and pack them separately, clearly labeled. Use original boxes when available, as they're designed for optimal protection.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Box className="mr-2 text-primary" />
                    Bedroom Organization
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Maximize wardrobe box efficiency by grouping similar clothing items together. Keep hangers evenly spaced and use the bottom of the box for shoes or folded items. Consider using garment bags for extra protection on delicate items.</p>
                    <p>For clothing in drawers, consider leaving items in the drawers and wrapping the entire drawer in plastic wrap. This method saves time and packing materials while keeping items organized. Remove only what's necessary.</p>
                    <p>Pack shoes individually in their original boxes or wrap each pair in packing paper. Stuff shoes with paper to maintain their shape during the move. Consider using wine boxes with dividers for efficient shoe organization.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Archive className="mr-2 text-primary" />
                    Living Space Items
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Carefully wrap artwork and mirrors in bubble wrap, then place in picture boxes with corner protectors. Use masking tape to create an X across glass surfaces to prevent shattering. Label these boxes as fragile and store them vertically.</p>
                    <p>When disassembling furniture, keep all hardware in labeled plastic bags and tape them to the corresponding furniture piece. Take photos of the assembly for reference when rebuilding at your new home.</p>
                    <p>Organize electronics cables by taking photos of connections before disconnecting. Label each cable and consider using color-coded tape for easy identification. Keep cables with their corresponding devices.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Box Packing Techniques</h2>
              <div className="space-y-4 text-gray-700">
                <p>The foundation of proper box packing starts with preparing the box itself. Reinforce all seams with high-quality packing tape, creating an H-pattern on the bottom. This extra step prevents box failure during lifting and transport.</p>
                <p>Layer items within boxes according to weight and fragility. Place heavier items at the bottom, medium-weight items in the middle, and lighter items on top. This strategy prevents crushing and provides stability during transport.</p>
                <p>Fill all empty spaces in boxes with packing paper, bubble wrap, or other cushioning materials. Boxes should be full but not overpacked, as this can cause bulging and potential breakage. The top of the box should close flat without force.</p>
                <p>Implement a detailed labeling system that includes the room destination, general contents, and handling instructions. Mark boxes containing fragile items on all sides, and indicate which side should face up. Consider using a numbering system to track boxes.</p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Special Packing Considerations</h2>
              <div className="space-y-4 text-gray-700">
                <p>Electronics require special attention during packing. Use anti-static bubble wrap and avoid regular packing peanuts which can create static electricity. If possible, pack electronics in their original boxes with their original protective materials.</p>
                <p>When packing valuable items, document their condition with photographs and consider additional insurance coverage. Pack these items separately and keep detailed records of their whereabouts during the move.</p>
                <p>Temperature-sensitive items need special consideration. Items like candles, electronics, and certain medications should be transported in climate-controlled conditions. Pack these items separately and clearly label them for special handling.</p>
                <p>Create an inventory system for your boxes, noting the contents and value of items. This documentation is invaluable for insurance purposes and helps track the location of specific items during unpacking.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackingGuide;