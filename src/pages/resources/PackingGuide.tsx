import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const PackingGuide = () => {
  return (
    <>
      <Helmet>
        <title>Professional Packing Guide | Tacoma Moving Services</title>
        <meta name="description" content="Learn professional packing techniques for a successful move to Tacoma. Room-by-room packing guide, tips for fragile items, and essential packing supplies." />
        <meta name="keywords" content="packing guide, moving boxes, packing supplies, Tacoma moving, professional packing tips, fragile items packing" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-24 mt-16">
        <h1 className="text-4xl font-bold mb-8">Professional Packing Guide</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Essential Packing Supplies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Moving boxes in various sizes</li>
                <li>Packing tape and dispenser</li>
                <li>Bubble wrap and packing paper</li>
                <li>Markers for labeling</li>
                <li>Specialty containers for fragile items</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Room-by-Room Packing</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Kitchen</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pack plates vertically for better protection</li>
                  <li>Wrap glasses individually in packing paper</li>
                  <li>Use specialty dividers for stemware</li>
                </ul>
                
                <h3 className="text-xl font-medium">Living Room</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Disassemble furniture when possible</li>
                  <li>Wrap artwork and mirrors in bubble wrap</li>
                  <li>Label electronics cables before disconnecting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Special Items Handling</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use wardrobe boxes for hanging clothes</li>
                <li>Double-box fragile items</li>
                <li>Consider climate-controlled storage for sensitive items</li>
                <li>Use original boxes for electronics when possible</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PackingGuide;