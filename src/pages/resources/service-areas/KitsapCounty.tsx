import { Helmet } from "react-helmet";

const KitsapCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Kitsap County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional moving services across Kitsap County, WA. Serving Bremerton, Port Orchard, Poulsbo, and surrounding areas with expert local and long-distance moving solutions." 
        />
        <meta 
          name="keywords" 
          content="Kitsap County movers, Bremerton moving company, Port Orchard movers, Poulsbo moving services, professional moving Kitsap County" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Kitsap County</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            LiftNHaul delivers exceptional moving services throughout Kitsap County, serving the communities of Bremerton, Port Orchard, Poulsbo, and surrounding areas. Our team's understanding of the peninsula's unique geography and communities ensures smooth, efficient moves for our clients.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Kitsap County</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Bremerton - Including Downtown and Navy Yard</li>
            <li>Port Orchard - Including Downtown and Manchester</li>
            <li>Poulsbo - Including Historic Downtown</li>
            <li>Bainbridge Island</li>
            <li>Silverdale</li>
            <li>Seabeck</li>
            <li>Kingston</li>
            <li>Olalla</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Peninsula Moving Specialists</h2>
          <p className="mb-6">
            Our experience with Kitsap County's ferry system and bridge connections ensures we can coordinate moves efficiently, whether you're relocating within the peninsula or moving to/from the Seattle area. We understand the unique logistics involved in peninsula moves.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Military Moving Expertise</h2>
          <p className="mb-6">
            With Naval Base Kitsap being a significant presence in the area, we have extensive experience helping military families with their relocations. We understand the unique requirements and timing considerations of military moves.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Our Kitsap County Services</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Residential moving services</li>
            <li>Military relocations</li>
            <li>Commercial moving</li>
            <li>Ferry-coordinated moves</li>
            <li>Professional packing and unpacking</li>
            <li>Storage solutions</li>
            <li>Specialty item moving</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default KitsapCounty;