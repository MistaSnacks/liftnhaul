import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const MovingTips = () => {
  return (
    <>
      <Helmet>
        <title>Essential Moving Tips | Tacoma Moving Services</title>
        <meta name="description" content="Expert moving tips and advice for a smooth relocation to Tacoma. Learn packing strategies, organization tips, and how to prepare for your move." />
        <meta name="keywords" content="moving tips, Tacoma moving advice, packing tips, relocation guide, moving preparation, moving organization" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-24 mt-16">
        <h1 className="text-4xl font-bold mb-8">Essential Moving Tips</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Before the Move</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create a moving timeline and checklist 8 weeks before your move</li>
                <li>Research and book your moving company early</li>
                <li>Start decluttering and organizing room by room</li>
                <li>Begin collecting packing supplies</li>
                <li>Notify important parties of your address change</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Packing Strategies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pack room by room to stay organized</li>
                <li>Label boxes clearly with contents and destination room</li>
                <li>Use proper packing materials for fragile items</li>
                <li>Keep essential items in a separate box</li>
                <li>Take photos of electronic setups before disconnecting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Moving Day Tips</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep important documents and valuables with you</li>
                <li>Have a plan for children and pets during the move</li>
                <li>Keep water and snacks readily available</li>
                <li>Do a final walkthrough of your old home</li>
                <li>Have payment ready for movers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MovingTips;