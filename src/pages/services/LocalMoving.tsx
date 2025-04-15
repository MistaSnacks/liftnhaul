
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LocalMoving = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Local Moving Services Tacoma | Best Movers in Pierce County | LiftNHaul</title>
        <meta name="description" content="Professional local moving services in Tacoma and Pierce County. Experienced affordable movers, competitive rates, and stress-free residential moving services." />
        <meta name="keywords" content="local moving services tacoma, best movers in tacoma, tacoma moving company, pierce county movers, affordable movers tacoma, residential moving services, moving company near me" />
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/9bbecd0e-b23a-4e47-9bdb-8229de44f733.png"
            alt="Professional local moving service in Tacoma"
            className="w-full h-full object-cover opacity-20"
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
              alt="Affordable movers in Tacoma providing local moving services"
              className="w-full h-[600px] object-cover"
            />
          </div>
          
          <div className="space-y-6 prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900">Expert Local Moving Solutions</h2>
            <p className="text-gray-600">
              At LiftNHaul, we're known as one of the best movers in Tacoma, specializing in comprehensive local moving services throughout Pierce County. Our experienced team understands that every move is unique, and we tailor our services to meet your specific needs. Whether you're moving to a new apartment downtown or relocating your family home to a different neighborhood, we have the expertise and resources to ensure a smooth transition.
            </p>

            <p className="text-gray-600">
              Our local moving services in Tacoma are designed to be flexible and accommodating. We offer everything from basic moving assistance to full-service residential moving, including packing, unpacking, and furniture assembly. Our professional movers are thoroughly trained in proper lifting techniques and handling procedures, ensuring your belongings are transported safely and efficiently.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Why Choose Our Tacoma Moving Company?</h3>
            <p className="text-gray-600">
              As professional movers in Pierce County, we pride ourselves on our attention to detail and commitment to customer satisfaction. Our affordable movers arrive on time, equipped with all necessary tools and materials to handle your move professionally. We use high-quality moving blankets, straps, and padding to protect your furniture and belongings during transit. Our trucks are well-maintained and equipped with GPS tracking, allowing us to provide accurate arrival times and real-time updates throughout your move.
            </p>

            <p className="text-gray-600">
              Understanding the local area gives us a significant advantage. We're familiar with Tacoma's neighborhoods, traffic patterns, and building requirements, which helps us plan and execute moves more efficiently. Our knowledge of local regulations and building policies ensures compliance with all necessary requirements, making your move hassle-free.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">Our Local Moving Process</h3>
            <p className="text-gray-600">
              We begin with a detailed consultation to understand your specific needs and requirements. Our team creates a customized moving plan that takes into account everything from packing requirements to delivery scheduling. We provide transparent pricing with no hidden fees, and our experienced move coordinators are available to answer any questions throughout the process.
            </p>

            <div className="mt-8">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90">Get a Free Quote from Our Tacoma Movers</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalMoving;
