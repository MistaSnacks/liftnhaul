
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Olympia = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Olympia, WA | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional moving services in Olympia, WA. Local experts providing residential and commercial moving, packing services, and more throughout the state capital." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <Link to="/locations/thurston-county" className="text-primary hover:underline mb-4 inline-flex items-center">
            &larr; Back to Thurston County
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Moving Services in Olympia</h1>
          <p className="text-lg text-gray-700 mt-4 mb-8">
            LiftNHaul provides comprehensive moving services throughout Olympia, from the historic Capitol Campus area to the west side neighborhoods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Olympia</h2>
            <p className="mb-4">
              As Washington's capital city, Olympia combines historic charm with the energy of a government center. Located at the southern tip of Puget Sound, Olympia offers beautiful waterfront views, a vibrant downtown, and a strong sense of community.
            </p>
            <p className="mb-4">
              Our team has extensive experience with Olympia's diverse neighborhoods, from historic homes near the Capitol to modern developments on the west side.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Our Olympia Moving Services</h3>
            <p>Coming soon: Complete information about our specialized moving services in Olympia.</p>
          </div>
          <div>
            <img
              src="/lovable-uploads/d854d334-cecc-4759-a38e-e7c325286122.png"
              alt="Olympia waterfront showcasing port facilities"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Plan Your Olympia Move?</h2>
          <p className="mb-4">Contact us today for a free, no-obligation quote for your Olympia moving needs.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Olympia;
