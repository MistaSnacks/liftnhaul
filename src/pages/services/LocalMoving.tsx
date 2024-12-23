import { Helmet } from "react-helmet";

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Moving Services</h1>
          <p className="text-xl text-gray-600">Professional moving services in Tacoma and Pierce County</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/9bbecd0e-b23a-4e47-9bdb-8229de44f733.png"
              alt="Professional local moving service - Experienced mover carefully handling boxes during a local move in Tacoma"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Local Moving Solutions</h2>
            <p className="text-gray-600">
              Our local moving services are designed to make your relocation within Tacoma and Pierce County seamless and stress-free. With years of experience and a dedicated team of professional movers, we ensure your belongings are handled with the utmost care and attention to detail.
            </p>
            <p className="text-gray-600">
              Whether you're moving to a new home across town or relocating your business within Pierce County, our experienced team has the expertise and equipment to handle your move efficiently and professionally. We understand that every move is unique, which is why we offer customized solutions tailored to your specific needs.
            </p>
            <p className="text-gray-600">
              Our comprehensive local moving services include careful packing of your belongings, safe transportation in our well-maintained trucks, and professional unpacking at your new location. We use high-quality packing materials and proven techniques to ensure your items arrive safely at their destination.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Local Moving Service?</h2>
          <div className="space-y-2 text-gray-600 mb-6">
            <p>Experienced and professional moving crew with extensive local knowledge</p>
            <p>Fully equipped modern moving trucks with proper padding and securing equipment</p>
            <p>Comprehensive insurance coverage for peace of mind</p>
            <p>Flexible scheduling options to accommodate your timeline</p>
            <p>Transparent pricing with no hidden fees</p>
            <p>Local expertise in navigating Tacoma and Pierce County areas</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Local Moving Process</h2>
          <p className="text-gray-600 mb-4">
            We've developed a streamlined process to ensure your local move goes smoothly from start to finish. Our approach begins with a detailed consultation to understand your specific needs and requirements. We then create a customized moving plan that takes into account everything from packing requirements to delivery scheduling.
          </p>
          <p className="text-gray-600 mb-4">
            Our team arrives on time with all necessary equipment and supplies, ensuring efficient packing and loading of your belongings. We take extra care with fragile items and valuable possessions, using specialized packing materials when needed. Throughout the move, our team maintains clear communication, keeping you informed of progress and addressing any concerns that may arise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalMoving;