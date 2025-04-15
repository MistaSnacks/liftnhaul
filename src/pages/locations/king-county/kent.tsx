
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Kent = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Kent, WA | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional moving services in Kent, WA. Local experts providing residential and commercial moving, packing services, and more throughout Kent." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <Link to="/locations/king-county" className="text-primary hover:underline mb-4 inline-flex items-center">
            &larr; Back to King County
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Moving Services in Kent</h1>
          <p className="text-lg text-gray-700 mt-4 mb-8">
            LiftNHaul provides comprehensive moving services throughout Kent, including East Hill and Kent Valley areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Kent</h2>
            <p className="mb-4">
              Located in the heart of the Green River Valley, Kent is King County's third-largest city. With a diverse community, strong industrial base, and family-friendly neighborhoods, Kent offers affordable living options with convenient access to Seattle and Tacoma.
            </p>
            <p className="mb-4">
              Our team has extensive experience with Kent's diverse housing market, from apartments downtown to single-family homes on East Hill.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Our Kent Moving Services</h3>
            <p>Coming soon: Complete information about our specialized moving services in Kent.</p>
          </div>
          <div>
            <img
              src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
              alt="Professional movers loading a moving truck"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg opacity-90"
            />
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Plan Your Kent Move?</h2>
          <p className="mb-4">Contact us today for a free, no-obligation quote for your Kent moving needs.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Kent;
