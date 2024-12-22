import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const PackingGuide = () => {
  return (
    <>
      <Helmet>
        <title>Professional Packing Guide | LiftNHaul Tacoma</title>
        <meta name="description" content="Learn professional packing techniques and tips for a safe move. Room-by-room guide to properly pack and protect your belongings." />
        <meta name="keywords" content="packing guide, packing tips, moving boxes, packing supplies, safe packing" />
      </Helmet>

      <div className="container mx-auto px-4 py-24 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Professional Packing Guide</h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Learn how to pack like a pro with our comprehensive guide
        </p>

        <Alert className="max-w-3xl mx-auto mb-8">
          <Info className="h-4 w-4" />
          <AlertTitle>Essential Packing Supplies</AlertTitle>
          <AlertDescription>
            Gather boxes of various sizes, packing tape, bubble wrap, packing paper, markers, and scissors before starting.
          </AlertDescription>
        </Alert>

        <div className="grid gap-8 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Kitchen Packing Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Wrap dishes individually and stack vertically</p>
              <p>• Use bottle/wine boxes for glasses</p>
              <p>• Pack appliances in original boxes if possible</p>
              <p>• Label boxes as "FRAGILE" when necessary</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bedroom Packing Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Use wardrobe boxes for hanging clothes</p>
              <p>• Keep clothing in drawers by wrapping with plastic</p>
              <p>• Pack shoes individually in original boxes</p>
              <p>• Roll clothes to save space</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Living Room Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Disassemble furniture when possible</p>
              <p>• Wrap artwork and mirrors in bubble wrap</p>
              <p>• Pack electronics in original boxes</p>
              <p>• Take photos of wire connections</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bathroom Essentials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Pack a separate box of essentials</p>
              <p>• Seal toiletries in plastic bags</p>
              <p>• Keep medications with you</p>
              <p>• Use small boxes for heavy items</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PackingGuide;