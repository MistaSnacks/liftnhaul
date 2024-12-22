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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none text-left">
            <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Kitsap County</h1>
            
            <p className="text-lg mb-6">
              LiftNHaul delivers exceptional moving services throughout Kitsap County, serving the communities of Bremerton, Port Orchard, Poulsbo, and surrounding areas. Our team's understanding of the peninsula's unique geography and communities ensures smooth, efficient moves for our clients.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Kitsap County</h2>
            <p className="mb-6">
              Bremerton - Including Downtown and Navy Yard<br />
              Port Orchard - Including Downtown and Manchester<br />
              Poulsbo - Including Historic Downtown<br />
              Bainbridge Island<br />
              Silverdale<br />
              Seabeck<br />
              Kingston<br />
              Olalla
            </p>

            <h2 className="text-2xl font-semibold mb-4">Peninsula Moving Specialists</h2>
            <p className="mb-6">
              Our experience with Kitsap County's ferry system and bridge connections ensures we can coordinate moves efficiently, whether you're relocating within the peninsula or moving to/from the Seattle area. We understand the unique logistics involved in peninsula moves.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Military Moving Expertise</h2>
            <p className="mb-6">
              With Naval Base Kitsap being a significant presence in the area, we have extensive experience helping military families with their relocations. We understand the unique requirements and timing considerations of military moves.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Kitsap County Services</h2>
            <p className="mb-6">
              Residential moving services<br />
              Military relocations<br />
              Commercial moving<br />
              Ferry-coordinated moves<br />
              Professional packing and unpacking<br />
              Storage solutions<br />
              Specialty item moving
            </p>
          </div>

          <div className="space-y-6">
            <img
              src="/lovable-uploads/ca3bb3b2-7239-4a85-b213-5397bf7641b5.png"
              alt="Waterfront buildings and marina in Kitsap County"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
              alt="Kitsap County landscape"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KitsapCounty;