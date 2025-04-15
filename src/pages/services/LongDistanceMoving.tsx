
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LongDistanceMoving = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Long Distance Moving Washington State | Interstate Movers Tacoma | LiftNHaul</title>
        <meta name="description" content="Professional long distance moving services from Tacoma. Reliable interstate movers, cross country moving services, and comprehensive state to state movers for your long-distance relocation." />
        <meta name="keywords" content="long distance moving washington state, interstate movers tacoma, cross country moving services, washington state long distance movers, professional long distance moving, state to state movers" />
      </Helmet>

      <div className="pt-24 pb-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/f57c2395-b4e9-410f-ab9f-46613cf6f480.png"
            alt="Professional long distance moving service"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Long Distance Moving Washington State</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Reliable interstate and cross country moving services
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/f57c2395-b4e9-410f-ab9f-46613cf6f480.png"
              alt="Professional interstate movers Tacoma providing long distance moving services"
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900">Comprehensive Long Distance Solutions</h2>
              <p className="text-gray-600">
                Our long distance moving services provide comprehensive solutions for interstate relocations. As Washington state long distance movers with experienced drivers, modern equipment, and detailed logistics planning, we ensure your belongings arrive safely at your new destination. We understand the complexities of cross country moving services and have developed systems to make the process as smooth as possible.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Interstate Movers Tacoma</h2>
              <p className="text-gray-600">
                As licensed and insured interstate movers, we handle all the complexities of cross-state moves. Our team is familiar with state regulations and requirements, ensuring your move complies with all necessary guidelines. We maintain all required permits and insurance coverage for interstate transportation.
              </p>

              <p className="text-gray-600">
                Our professional long distance moving services are designed to provide peace of mind during what can be a stressful time. Our state to state movers handle every aspect of your move with professionalism and care, ensuring your belongings arrive safely and on schedule at your new home.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Cross Country Moving Services</h2>
              <p className="text-gray-600">
                Moving across the country requires careful planning and execution. Our cross country moving specialists coordinate every detail of your relocation to ensure a smooth transition to your new home. We provide dedicated trucks and drivers for long-distance moves, giving you peace of mind knowing exactly who is handling your belongings throughout the journey.
              </p>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Request a Long Distance Moving Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongDistanceMoving;
