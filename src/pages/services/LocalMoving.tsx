import { Helmet } from "react-helmet";
import { Truck } from "lucide-react";

const LocalMoving = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Local Moving Services in Tacoma | LiftNHaul</title>
        <meta name="description" content="Professional local moving services in Tacoma and Pierce County. Experienced movers, competitive rates, and stress-free relocations within the area." />
        <meta name="keywords" content="local moving, Tacoma movers, Pierce County moving services, residential moving, local relocation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Truck className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Moving Services</h1>
          <p className="text-xl text-gray-600">Professional moving services in Tacoma and Pierce County</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b"
              alt="Local moving service"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Local Moving Solutions</h2>
            <p className="text-gray-600">
              Our local moving services are designed to make your relocation within Tacoma and Pierce County seamless and stress-free. With years of experience and a dedicated team of professional movers, we ensure your belongings are handled with the utmost care.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Experienced and professional moving crew</li>
              <li>✓ Fully equipped modern moving trucks</li>
              <li>✓ Comprehensive insurance coverage</li>
              <li>✓ Flexible scheduling options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalMoving;