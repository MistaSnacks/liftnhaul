import { Helmet } from "react-helmet";
import { Box } from "lucide-react";

const PackingServices = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Professional Packing Services | LiftNHaul Tacoma</title>
        <meta name="description" content="Expert packing services in Tacoma. Professional packers, quality materials, and secure handling of your belongings for a worry-free move." />
        <meta name="keywords" content="packing services, professional packers, moving supplies, Tacoma packing, secure packing" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Box className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Packing Services</h1>
          <p className="text-xl text-gray-600">Expert packing solutions for a stress-free move</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
              alt="Professional packing service"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Comprehensive Packing Solutions</h2>
            <p className="text-gray-600">
              Our professional packing services take the stress out of preparing for your move. We use high-quality materials and proven techniques to ensure your belongings are protected throughout the entire moving process.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ High-quality packing materials</li>
              <li>✓ Professional packing techniques</li>
              <li>✓ Fragile item specialization</li>
              <li>✓ Full or partial packing options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingServices;