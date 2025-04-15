
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Seattle = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Seattle, WA | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional moving services in Seattle, WA. Local experts providing residential and commercial moving, packing services, and more throughout the Emerald City." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <Link to="/locations/king-county" className="text-primary hover:underline mb-4 inline-flex items-center">
            &larr; Back to King County
          </Link>
          <h1 className="text-4xl font-bold text-primary mt-4">Moving Services in Seattle</h1>
          <p className="text-lg text-gray-700 mt-4 mb-8">
            LiftNHaul provides comprehensive moving services throughout Seattle, from downtown high-rises to charming neighborhood homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/lovable-uploads/46dac536-d0a0-4fe7-a8ef-7d3a9530bd42.png"
              alt="Seattle cityscape with Space Needle and Mount Rainier"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">About Seattle</h2>
            <p className="mb-4">
              As Washington's largest city and the cultural and economic center of the Pacific Northwest, Seattle offers a vibrant urban lifestyle with stunning natural beauty. Home to over 750,000 residents, the Emerald City is known for its coffee culture, tech industry, and iconic landmarks like the Space Needle.
            </p>
            <p className="mb-4">
              From the bustling streets of downtown to the quiet residential areas of Magnolia and West Seattle, our team has the expertise to handle moves throughout the diverse neighborhoods of Seattle.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Popular Seattle Neighborhoods We Serve</h3>
            <ul className="space-y-2">
              <li>Downtown and Belltown</li>
              <li>Capitol Hill and First Hill</li>
              <li>Queen Anne and Magnolia</li>
              <li>Ballard and Fremont</li>
              <li>West Seattle and South Seattle</li>
              <li>University District and Northgate</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4">Our Seattle Moving Services</h2>
            <p className="mb-4">
              We understand the unique challenges of moving in Seattle, from navigating narrow streets to dealing with limited parking and elevator access. Our team offers specialized services to address these urban moving challenges:
            </p>
            <ul className="space-y-2">
              <li><strong>High-Rise Apartment Moving</strong> - Specialists in navigating elevator time constraints and building regulations</li>
              <li><strong>Local Residential Moving</strong> - From small apartments to large homes</li>
              <li><strong>Downtown Office Relocations</strong> - Minimizing business disruption</li>
              <li><strong>Professional Packing</strong> - Full and partial packing services</li>
              <li><strong>Furniture Assembly/Disassembly</strong> - For difficult pieces and tight spaces</li>
              <li><strong>Secure Storage Solutions</strong> - For items that don't fit in your new space</li>
            </ul>
            <p className="mt-4">
              Our Seattle moving team is experienced with the city's unique challenges, including traffic patterns, parking restrictions, and building requirements. We handle the logistics so you can focus on settling into your new home.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/lovable-uploads/9d482628-c117-42b0-8948-8596e4b18d60.png"
              alt="LiftNHaul movers carefully loading a moving truck"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg opacity-90"
            />
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Plan Your Seattle Move?</h2>
          <p className="mb-4">Contact us today for a free, no-obligation quote for your Seattle moving needs.</p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get a Free Quote</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Seattle;
