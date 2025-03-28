
import { Helmet } from "react-helmet";

const LocalMoving = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Local Moving Services in Tacoma | LiftNHaul Movers</title>
        <meta name="description" content="Professional local moving services in Tacoma and Pierce County. Experienced movers, competitive rates, and stress-free relocations within the area." />
        <meta name="keywords" content="local moving services tacoma, tacoma moving company, pierce county movers, best movers in tacoma, moving company near me, affordable movers tacoma, residential moving services, professional movers pierce county" />
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/9bbecd0e-b23a-4e47-9bdb-8229de44f733.png"
            alt="Professional local moving service - LiftNHaul movers loading a truck in Tacoma"
            className="w-full h-full object-cover opacity-20"
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Local Moving Services Tacoma</h1>
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
              alt="Professional local moving service - LiftNHaul movers in Tacoma"
              className="w-full h-[600px] object-cover"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="space-y-6 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Local Moving Solutions in Tacoma</h2>
            <p className="text-gray-600">
              At LiftNHaul Movers, we specialize in providing comprehensive local moving services throughout Tacoma and Pierce County. Our experienced team understands that every move is unique, and we tailor our services to meet your specific needs. Whether you're moving to a new apartment downtown or relocating your family home to a different neighborhood, we have the expertise and resources to ensure a smooth transition.
            </p>

            <p className="text-gray-600">
              Our local moving services are designed to be flexible and accommodating. We offer everything from basic moving assistance to full-service relocations, including packing, unpacking, and furniture assembly. Our team is thoroughly trained in proper lifting techniques and handling procedures, ensuring your belongings are transported safely and efficiently.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Why Choose Our Tacoma Moving Company?</h3>
            <p className="text-gray-600">
              We pride ourselves on our attention to detail and commitment to customer satisfaction. Our movers arrive on time, equipped with all necessary tools and materials to handle your move professionally. We use high-quality moving blankets, straps, and padding to protect your furniture and belongings during transit. Our trucks are well-maintained and equipped with GPS tracking, allowing us to provide accurate arrival times and real-time updates throughout your move.
            </p>

            <p className="text-gray-600">
              Understanding the local area gives us a significant advantage. We're familiar with Tacoma's neighborhoods, traffic patterns, and building requirements, which helps us plan and execute moves more efficiently. Our knowledge of local regulations and building policies ensures compliance with all necessary requirements, making your move hassle-free.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Professional Pierce County Movers</h3>
            <p className="text-gray-600">
              We begin with a detailed consultation to understand your specific needs and requirements. Our team creates a customized moving plan that takes into account everything from packing requirements to delivery scheduling. We provide transparent pricing with no hidden fees, and our experienced move coordinators are available to answer any questions throughout the process.
            </p>

            <p className="text-gray-600">
              On moving day, our professional team arrives with all necessary equipment and supplies. We take extra care with fragile items and valuable possessions, using specialized packing materials when needed. Throughout the move, we maintain clear communication, keeping you informed of progress and addressing any concerns that may arise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalMoving;
