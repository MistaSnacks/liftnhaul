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
              Our long distance moving services provide comprehensive solutions for interstate relocations. With experienced drivers, modern equipment, and detailed logistics planning, we ensure your belongings arrive safely at your new destination. We understand the complexities of long-distance moves and have developed systems to make the process as smooth as possible.
            </p>
            <p className="text-gray-600">
              Whether you're moving across state lines or across the country, our team has the expertise to handle every aspect of your long-distance move. We provide detailed planning, transparent pricing, and constant communication throughout the entire process.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Long Distance Moving Process</h2>
          <p className="text-gray-600 mb-4">
            Our long-distance moving process begins with a detailed consultation to understand your specific needs and timeline. We create a comprehensive moving plan that includes everything from packing schedules to delivery dates. Our team provides regular updates throughout the move, ensuring you're always informed about the status of your belongings.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Interstate Moving Expertise</h2>
          <p className="text-gray-600 mb-4">
            As licensed and insured interstate movers, we handle all the complexities of cross-state moves. Our team is familiar with state regulations and requirements, ensuring your move complies with all necessary guidelines. We maintain all required permits and insurance coverage for interstate transportation.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            <li>GPS tracking for shipment monitoring</li>
            <li>Climate-controlled transport options</li>
            <li>Full-value protection coverage</li>
            <li>Storage solutions at origin or destination</li>
            <li>Custom crating for valuable items</li>
            <li>Vehicle transportation services</li>
          </ul>

          <p className="text-gray-600 mb-4">
            Our long-distance moving services are designed to provide peace of mind during what can be a stressful time. We handle every aspect of your move with professionalism and care, ensuring your belongings arrive safely and on schedule at your new home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LongDistanceMoving;