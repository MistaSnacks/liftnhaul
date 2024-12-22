import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, FileText, CheckSquare } from "lucide-react";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Moving Resources & Tips | LiftNHaul Tacoma</title>
        <meta name="description" content="Access comprehensive moving resources, cost calculator, and expert tips for your move to Tacoma. Get organized with our moving checklist and packing guides." />
        <meta name="keywords" content="moving resources, moving calculator, packing tips, moving checklist, Tacoma moving guide" />
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
                Get an instant estimate for your moving costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources/calculator">
                <Button className="w-full">Calculate Costs</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckSquare className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Moving Tips</CardTitle>
              <CardDescription>
                Expert advice for a smooth moving experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources/moving-tips">
                <Button className="w-full">View Tips</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileText className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Packing Guide</CardTitle>
              <CardDescription>
                Learn how to pack efficiently and safely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/resources/packing-guide">
                <Button className="w-full">Read Guide</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Resources;