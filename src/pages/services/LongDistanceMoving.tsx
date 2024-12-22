import { Helmet } from "react-helmet";
import { Truck } from "lucide-react";

const LongDistanceMoving = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Long Distance Moving Services | LiftNHaul Tacoma</title>
        <meta name="description" content="Professional long distance moving services from Tacoma. Reliable interstate moving, expert handling, and comprehensive logistics for your long-distance relocation." />
        <meta name="keywords" content="long distance moving, interstate moving, cross country movers, Tacoma long distance" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Truck className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Long Distance Moving Services</h1>
          <p className="text-xl text-gray-600">Reliable interstate and long-distance relocations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8"
              alt="Long distance moving service"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Comprehensive Long Distance Solutions</h2>
            <p className="text-gray-600">
              Our long distance moving services provide comprehensive solutions for interstate relocations. With experienced drivers, modern equipment, and detailed logistics planning, we ensure your belongings arrive safely at your new destination.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Interstate moving specialists</li>
              <li>✓ GPS tracking available</li>
              <li>✓ Climate-controlled transport</li>
              <li>✓ Dedicated truck options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongDistanceMoving;