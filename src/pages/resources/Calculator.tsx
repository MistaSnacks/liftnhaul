import { Helmet } from "react-helmet";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Calculator = () => {
  const { toast } = useToast();
  const [distance, setDistance] = useState("");
  const [homeSize, setHomeSize] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateMovingCost = () => {
    if (!distance || !homeSize || !moveDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your moving cost.",
        variant: "destructive",
      });
      return;
    }

    // Base rate per mile
    const mileRate = 2.5;
    // Base rates for different home sizes
    const homeSizeRates: { [key: string]: number } = {
      "studio": 400,
      "1bed": 600,
      "2bed": 800,
      "3bed": 1000,
      "4bed": 1200,
      "5bed": 1400,
    };

    // Calculate base cost
    const distanceCost = parseFloat(distance) * mileRate;
    const homeSizeCost = homeSizeRates[homeSize];
    
    // Calculate total cost
    const total = distanceCost + homeSizeCost;

    setEstimatedCost(Math.round(total));
    
    toast({
      title: "Estimate Calculated",
      description: "Your moving cost estimate has been calculated below.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Moving Cost Calculator | LiftNHaul Tacoma</title>
        <meta name="description" content="Calculate your moving costs with our easy-to-use moving calculator. Get instant estimates based on distance, home size, and moving date." />
        <meta name="keywords" content="moving calculator, moving cost estimate, Tacoma moving costs, moving price calculator" />
      </Helmet>

      <div className="container mx-auto px-4 py-24 mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Moving Cost Calculator</CardTitle>
            <CardDescription>
              Get an estimate for your move. Please note that this is a basic estimate and actual costs may vary.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="distance">Moving Distance (miles)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="Enter distance in miles"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="homeSize">Home Size</Label>
              <Select value={homeSize} onValueChange={setHomeSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select home size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="1bed">1 Bedroom</SelectItem>
                  <SelectItem value="2bed">2 Bedrooms</SelectItem>
                  <SelectItem value="3bed">3 Bedrooms</SelectItem>
                  <SelectItem value="4bed">4 Bedrooms</SelectItem>
                  <SelectItem value="5bed">5+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="moveDate">Planned Moving Date</Label>
              <Input
                id="moveDate"
                type="date"
                value={moveDate}
                onChange={(e) => setMoveDate(e.target.value)}
              />
            </div>

            <Button onClick={calculateMovingCost} className="w-full">
              Calculate Cost
            </Button>

            {estimatedCost !== null && (
              <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Estimated Moving Cost</h3>
                <p className="text-3xl font-bold text-primary">${estimatedCost}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  This is a basic estimate. Contact us for a detailed quote.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Calculator;