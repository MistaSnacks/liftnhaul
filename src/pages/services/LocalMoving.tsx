import { Helmet } from "react-helmet";

const LocalMoving = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Local Moving Services in Tacoma | LiftNHaul</title>
        <meta name="description" content="Professional local moving services in Tacoma and Pierce County. Experienced movers, competitive rates, and stress-free relocations within the area." />
        <meta name="keywords" content="local moving, Tacoma movers, Pierce County moving services, residential moving, local relocation" />
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/9bbecd0e-b23a-4e47-9bdb-8229de44f733.png"
            alt="Professional local moving service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Local Moving Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Professional moving services in Tacoma and Pierce County
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/9bbecd0e-b23a-4e47-9bdb-8229de44f733.png"
              alt="Professional local moving service"
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900">Expert Local Moving Solutions</h2>
              <p className="text-gray-600">
                Our local moving services are designed to make your relocation within Tacoma and Pierce County seamless and stress-free. With years of experience and a dedicated team of professional movers, we ensure your belongings are handled with the utmost care and attention to detail.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Our Local Moving Process</h2>
              <p className="text-gray-600">
                We've developed a streamlined process to ensure your local move goes smoothly from start to finish. Our approach begins with a detailed consultation to understand your specific needs and requirements. We then create a customized moving plan that takes into account everything from packing requirements to delivery scheduling.
              </p>

              <p className="text-gray-600">
                Our team arrives on time with all necessary equipment and supplies, ensuring efficient packing and loading of your belongings. We take extra care with fragile items and valuable possessions, using specialized packing materials when needed. Throughout the move, our team maintains clear communication, keeping you informed of progress and addressing any concerns that may arise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalMoving;