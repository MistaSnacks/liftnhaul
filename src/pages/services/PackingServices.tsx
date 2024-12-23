import { Helmet } from "react-helmet";

const PackingServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Professional Packing Services | LiftNHaul Tacoma</title>
        <meta name="description" content="Expert packing services in Tacoma. Professional packers, quality materials, and secure handling of your belongings for a worry-free move." />
        <meta name="keywords" content="packing services, professional packers, moving supplies, Tacoma packing, secure packing" />
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/ec2a8ea5-1d55-4347-83df-8a5edf55451c.png"
            alt="Professional packing service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Packing Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Expert packing solutions for a stress-free move
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/ec2a8ea5-1d55-4347-83df-8a5edf55451c.png"
              alt="Professional packing service"
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900">Comprehensive Packing Solutions</h2>
              <p className="text-gray-600">
                Our professional packing services take the stress out of preparing for your move. We use high-quality materials and proven techniques to ensure your belongings are protected throughout the entire moving process. Our experienced team handles everything from delicate china to bulky furniture with expert care and attention.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Quality Packing Materials</h2>
              <p className="text-gray-600">
                We use only high-quality packing materials to ensure maximum protection for your belongings. Our supplies include sturdy moving boxes in various sizes, bubble wrap, packing paper, tape, and specialized containers for delicate items. We also provide wardrobe boxes for clothing and custom crating for valuable or fragile items that require extra protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingServices;