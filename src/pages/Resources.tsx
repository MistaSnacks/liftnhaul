import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Truck, Package, Calculator, MapPin } from "lucide-react";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Moving Resources & Tips | LiftNHaul</title>
        <meta name="description" content="Comprehensive moving resources, packing guides, and moving cost calculator to help make your relocation smooth and stress-free." />
        <meta name="keywords" content="moving resources, moving tips, packing guide, moving calculator, relocation help" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Moving Resources</h1>
        <p className="text-lg text-gray-700 mb-8">
          Everything you need for a successful move, from packing tips to cost calculations.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/resources/moving-tips">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Moving Tips</CardTitle>
                <CardDescription>Essential tips and tricks for a smooth move</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn the best practices for organizing your move, from timeline planning to moving day execution.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/resources/packing-guide">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Package className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Packing Guide</CardTitle>
                <CardDescription>Room-by-room packing strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get expert advice on packing your belongings safely and efficiently for transport.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/resources/calculator">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Moving Calculator</CardTitle>
                <CardDescription>Estimate your moving costs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Calculate approximate moving costs based on distance, home size, and services needed.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/resources/service-areas">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Service Areas</CardTitle>
                <CardDescription>Areas we serve in Western WA</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn about our service coverage in Pierce, King, Thurston, and Kitsap counties.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resources;