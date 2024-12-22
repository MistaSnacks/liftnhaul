import { Helmet } from "react-helmet";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Calculator = () => {
  const [distance, setDistance] = useState("");
  const [rooms, setRooms] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    const baseRate = 1000; // Base moving cost
    const distanceRate = 0.75; // Per mile
    const roomRate = 200; // Per room
    
    const total = baseRate + (Number(distance) * distanceRate) + (Number(rooms) * roomRate);
    setEstimate(Math.round(total));
  };

  return (
    <>
      <Helmet>
        <title>Moving Cost Calculator | LiftNHaul</title>
        <meta name="description" content="Calculate your estimated moving costs based on distance, home size, and services needed. Get an instant quote for your move." />
        <meta name="keywords" content="moving calculator, moving cost estimate, moving quote, relocation costs" />
      </Helmet>

      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-6">Moving Cost Calculator</h1>
        
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Estimate Your Moving Costs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="distance">Moving Distance (miles)</Label>
              <Input
                id="distance"
                type="number"
                placeholder="Enter distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rooms">Number of Rooms</Label>
              <Input
                id="rooms"
                type="number"
                placeholder="Enter number of rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>

            <Button onClick={calculateEstimate} className="w-full">
              Calculate Estimate
            </Button>

            {estimate !== null && (
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Estimated Cost</h3>
                <p className="text-3xl font-bold text-primary">${estimate}</p>
                <p className="text-sm text-gray-500 mt-2">
                  *This is a rough estimate. Contact us for a detailed quote.
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