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
                Moving doesn't have to be stressful. Our comprehensive guide provides expert tips and detailed advice to ensure a smooth
                and organized relocation experience. With years of experience in the moving industry, we've compiled the most effective strategies
                to make your move successful.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 text-primary" />
                Comprehensive Moving Timeline
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Eight weeks before moving day, begin your preparation by creating a detailed inventory of your belongings. This is the perfect time to start decluttering your home. Go through each room methodically, deciding what to keep, donate, sell, or discard. Consider organizing a garage sale or listing valuable items online.
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Six weeks before the move, research and book your moving services. Take time to compare different moving companies, read reviews, and get detailed quotes. This is also when you should start collecting packing supplies and begin packing items you won't need before the move.
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Four weeks before moving, focus on packing non-essential items and rooms you use less frequently. Start transferring or canceling utilities, updating your address, and notifying important contacts about your move. This includes your bank, credit card companies, and subscription services.
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Two weeks before the move, schedule utility connections at your new home and discontinue services at your current residence. Begin packing your everyday items, leaving out only the essentials you'll need until moving day. Create a detailed inventory of valuable items.
                </p>
                <p className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  The week of the move requires careful attention to final details. Pack remaining items, prepare an essentials box, and confirm all arrangements with your moving company. Clean your current home as you pack and take photos of valuable items and electronics before disconnecting them.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Clock className="mr-2 text-primary" />
                    Time-Saving Strategies
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Implement a systematic room-by-room packing strategy to maintain organization and efficiency throughout the moving process. This methodical approach helps prevent overwhelming situations and ensures nothing is overlooked.</p>
                    <p>Create a detailed labeling system for your boxes, including the room destination and a brief list of contents. This investment in organization will save countless hours during unpacking.</p>
                    <p>Keep essential documents in a designated folder or box that stays with you during the move. This includes contracts, financial documents, medical records, and school transcripts.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <Home className="mr-2 text-primary" />
                    New Home Preparation
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Schedule utility connections well in advance to ensure services are active when you arrive. Consider setting up internet service early to avoid delays in getting connected.</p>
                    <p>Thoroughly clean your new home before bringing in furniture and boxes. This is much easier to do in an empty space and creates a fresh start for your family.</p>
                    <p>Plan the layout of your furniture before moving day. This helps movers place items in their final positions, reducing the need for rearrangement later.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3 flex items-center">
                    <List className="mr-2 text-primary" />
                    Moving Day Essentials
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Prepare a comprehensive moving day kit with essential items you'll need immediate access to, including basic tools, cleaning supplies, and personal care items.</p>
                    <p>Conduct thorough initial and final walkthroughs of both properties, documenting any existing damage or concerns. Take photos for your records.</p>
                    <p>Have payment ready for movers and keep some extra cash on hand for unexpected expenses or tips. Prepare drinks and snacks for everyone involved in the moving process.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Cost-Saving Strategies</h2>
              <div className="space-y-3 text-gray-700">
                <p>Research and compare multiple moving companies to find the best value for your needs. Consider factors beyond just price, such as insurance coverage, reputation, and included services.</p>
                <p>Plan your move during off-peak seasons when moving companies typically offer lower rates. Moving mid-month or mid-week can also result in better pricing.</p>
                <p>Reduce moving costs by decluttering before your move. The less you have to move, the lower your expenses will be. Consider selling unwanted items to offset moving costs.</p>
                <p>Source free moving boxes from local businesses, online marketplaces, or community groups. Many stores are happy to give away their boxes rather than recycling them.</p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Moving Day Success Tips</h2>
              <div className="space-y-3 text-gray-700">
                <p>Pack an essentials box containing items you'll need immediately upon arrival at your new home. Include toiletries, basic cleaning supplies, phone chargers, and a change of clothes.</p>
                <p>Keep important documents and valuable items with you during the move rather than packing them with other belongings. This ensures their safety and immediate accessibility.</p>
                <p>Maintain a reserve of cash for unexpected expenses that may arise during moving day. This can include additional packing materials, food for helpers, or last-minute supplies.</p>
                <p>Document the condition of electronics and other valuable items before packing. Take photos of serial numbers and existing damage for insurance purposes.</p>
                <p>Develop a clear labeling system that indicates both contents and destination rooms. This makes the unpacking process more efficient and helps movers place boxes in the correct locations.</p>
                <p>Create a separate box for first-day essentials in your new home, including basic tools, paper products, and cleaning supplies. This prevents the need to search through multiple boxes for necessary items.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingTips;