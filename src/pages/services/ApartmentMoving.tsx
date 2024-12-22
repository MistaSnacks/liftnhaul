import { Helmet } from "react-helmet";
import { Home } from "lucide-react";

const ApartmentMoving = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Apartment Moving Services Tacoma | LiftNHaul</title>
        <meta name="description" content="Specialized apartment moving services in Tacoma. Expert handling of stairs, elevators, and tight spaces for a smooth apartment relocation." />
        <meta name="keywords" content="apartment moving, Tacoma apartment movers, residential moving, elevator moving" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Home className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apartment Moving Services</h1>
          <p className="text-xl text-gray-600">Specialized solutions for apartment relocations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Apartment moving service"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Apartment Moving</h2>
            <p className="text-gray-600">
              Our apartment moving services are specifically designed to handle the unique challenges of apartment relocations. We're experienced in navigating stairs, elevators, and tight spaces while protecting your belongings and the building's property.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Experienced in multi-story buildings</li>
              <li>✓ Elevator and stairway specialists</li>
              <li>✓ Property protection measures</li>
              <li>✓ Efficient space management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentMoving;