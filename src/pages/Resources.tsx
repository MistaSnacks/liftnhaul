import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, CheckSquare, FileText } from "lucide-react";
import { Helmet } from "react-helmet";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Moving Resources | Tacoma Moving Services</title>
        <meta name="description" content="Access our comprehensive moving resources including a cost calculator, packing guides, and expert moving tips for your Tacoma relocation." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-24 mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Moving Resources</h1>
        <p className="text-lg text-center text-muted-foreground mb-12">
          Everything you need to plan your move to Tacoma
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calculator className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Moving Cost Calculator</CardTitle>
              <CardDescription>
                Estimate your moving costs with our easy-to-use calculator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources/calculator" className="block">
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                  Calculate Costs
                </button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckSquare className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Moving Tips</CardTitle>
              <CardDescription>
                Expert advice for a smooth and efficient move
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources/moving-tips" className="block">
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                  View Tips
                </button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Packing Guide</CardTitle>
              <CardDescription>
                Learn professional packing techniques and tips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources/packing-guide" className="block">
                <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                  Read Guide
                </button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Resources;