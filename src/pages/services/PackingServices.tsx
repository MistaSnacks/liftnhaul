import { Helmet } from "react-helmet";

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Packing Services</h1>
          <p className="text-xl text-gray-600">Expert packing solutions for a stress-free move</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/ec2a8ea5-1d55-4347-83df-8a5edf55451c.png"
              alt="Professional packing service - Expert handling and secure packaging of belongings"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Comprehensive Packing Solutions</h2>
            <p className="text-gray-600">
              Our professional packing services take the stress out of preparing for your move. We use high-quality materials and proven techniques to ensure your belongings are protected throughout the entire moving process. Our experienced team handles everything from delicate china to bulky furniture with expert care and attention.
            </p>
            <p className="text-gray-600">
              Whether you need full-service packing for your entire home or partial packing for specific items, our team can accommodate your needs. We understand that each item requires different handling and protection, which is why we use specialized materials and techniques for different types of belongings.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Packing Process</h2>
          <p className="text-gray-600 mb-4">
            We follow a systematic approach to ensure all your items are packed securely and efficiently. Our process begins with an assessment of your belongings to determine the appropriate packing materials and techniques needed. We then carefully wrap and pack each item, using protective materials such as bubble wrap, packing paper, and custom boxes where necessary.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Quality Packing Materials</h2>
          <p className="text-gray-600 mb-4">
            We use only high-quality packing materials to ensure maximum protection for your belongings. Our supplies include sturdy moving boxes in various sizes, bubble wrap, packing paper, tape, and specialized containers for delicate items. We also provide wardrobe boxes for clothing and custom crating for valuable or fragile items that require extra protection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackingServices;