
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Tacoma = () => {
  return (
    <>
      <Helmet>
        <title>Best Movers in Tacoma, WA | Affordable Local Moving Services | LiftNHaul</title>
        <meta 
          name="description" 
          content="Looking for a Tacoma moving company? LiftNHaul offers affordable movers in Tacoma with professional residential moving services throughout Pierce County." 
        />
        <meta 
          name="keywords" 
          content="tacoma moving company, local moving services tacoma, best movers in tacoma, affordable movers tacoma, pierce county movers, moving company near me" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <Link to="/locations/pierce-county" className="text-primary hover:underline mb-4 inline-flex items-center">
            &larr; Back to Pierce County
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Tacoma Moving Company</h1>
          <p className="text-lg text-gray-700 mt-4 mb-8">
            LiftNHaul provides comprehensive local moving services throughout Tacoma, from the historic North End to the developing South End neighborhoods. As one of the best movers in Tacoma, we're committed to making your move stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/lovable-uploads/c35016d1-350c-441e-89bb-b88afd43d6c7.png"
              alt="Tacoma skyline with Mount Rainier in the background"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Tacoma</h2>
            <p className="mb-4">
              Known as the "City of Destiny," Tacoma is Pierce County's largest city and the county seat. With a population of over 220,000 residents, Tacoma offers urban amenities with a more relaxed pace than its northern neighbor, Seattle.
            </p>
            <p className="mb-4">
              From the stunning waterfront along Commencement Bay to the historic architecture of the Stadium and Proctor districts, Tacoma has a rich character that makes it a wonderful place to call home.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Popular Tacoma Neighborhoods We Serve</h3>
            <ul className="space-y-2">
              <li>North End (including Proctor and Stadium districts)</li>
              <li>Downtown and Hilltop</li>
              <li>South End and South Tacoma</li>
              <li>West End and University Place</li>
              <li>Eastside and Browns Point</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">Professional Moving Services in Tacoma</h2>
            <p className="mb-4">
              As Tacoma's trusted moving company, we offer a comprehensive range of affordable moving services designed to make your move stress-free and efficient:
            </p>
            <ul className="space-y-2">
              <li><strong>Local Moving Services</strong> - Professional movers in Pierce County for relocations within Tacoma and surrounding areas</li>
              <li><strong>Long-Distance Moves</strong> - Interstate movers when you're moving to or from Tacoma</li>
              <li><strong>Apartment Moving</strong> - Tacoma specialists in navigating elevators, stairs, and narrow hallways</li>
              <li><strong>Residential Moving Services</strong> - Full-service options for homes of all sizes</li>
              <li><strong>Commercial Moving Tacoma</strong> - Office relocation services with minimal disruption</li>
              <li><strong>Packing Services</strong> - Professional packing services to save you time</li>
            </ul>
            <p className="mt-4">
              We understand Tacoma's unique neighborhoods and housing styles, from historic craftsman homes in the North End to modern condos downtown. Our team is experienced with the challenges of each area and can provide a smooth moving experience.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
              alt="LiftNHaul movers carefully loading a moving truck in Tacoma"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg opacity-90"
            />
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Plan Your Tacoma Move?</h2>
          <p className="mb-4">Contact us today for a free, no-obligation quote from the best movers in Tacoma.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tacoma;
