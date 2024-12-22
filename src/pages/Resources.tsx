import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Truck, Package, MapPin, File, Grid } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Moving Tips",
      path: "/resources/moving-tips",
      description: "Essential tips and tricks for a smooth move",
      icon: <Truck className="w-8 h-8 text-primary mb-2" />,
      content: "Learn the best practices for organizing your move, from timeline planning to moving day execution."
    },
    {
      title: "Packing Guide",
      path: "/resources/packing-guide",
      description: "Room-by-room packing strategies",
      icon: <Package className="w-8 h-8 text-primary mb-2" />,
      content: "Get expert advice on packing your belongings safely and efficiently for transport."
    },
    {
      title: "Service Areas",
      path: "/resources/service-areas",
      description: "Areas we serve in Western WA",
      icon: <MapPin className="w-8 h-8 text-primary mb-2" />,
      content: "Learn about our service coverage in Pierce, King, Thurston, and Kitsap counties."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Moving Resources & Tips | LiftNHaul</title>
        <meta 
          name="description" 
          content="Comprehensive moving resources, packing guides, and service area information to help make your relocation smooth and stress-free." 
        />
        <meta 
          name="keywords" 
          content="moving resources, moving tips, packing guide, service areas, relocation help" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">Moving Resources</h1>
          <p className="text-lg text-gray-700 mb-8">
            Everything you need for a successful move, from packing tips to service area information.
          </p>
          
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            alt="People collaborating on moving plans"
            className="w-full h-[400px] object-cover rounded-lg mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link key={resource.title} to={resource.path}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    {resource.icon}
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{resource.content}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;