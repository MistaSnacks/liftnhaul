import { Helmet } from "react-helmet";

const KingCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in King County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Expert moving services throughout King County, WA. Serving Seattle, Bellevue, Kent, and surrounding areas with professional local and long-distance moving solutions." 
        />
        <meta 
          name="keywords" 
          content="King County movers, Seattle moving company, Bellevue movers, Kent moving services, professional moving King County" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none text-left">
            <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in King County</h1>
            
            <p className="text-lg mb-6">
              LiftNHaul extends its professional moving services throughout King County, serving the diverse communities of Seattle, Bellevue, Kent, and beyond. Our experienced team understands the unique challenges of moving in the Puget Sound's most populous county, from downtown high-rises to suburban homes.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Areas We Serve in King County</h2>
            <p className="mb-6">
              Seattle - Including Downtown, Capitol Hill, and West Seattle
              Bellevue - Including Downtown and Crossroads
              Kent - Including East Hill and Valley
              Renton
              Federal Way
              Auburn
              Mercer Island
              Kirkland
            </p>

            <h2 className="text-2xl font-semibold mb-4">Specialized King County Moving Services</h2>
            <p className="mb-6">
              We offer tailored moving solutions that address the specific needs of King County residents and businesses. Our team is experienced in handling moves of all sizes, from studio apartments to large family homes and commercial properties.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Urban Moving Expertise</h2>
            <p className="mb-6">
              Moving in urban areas like Seattle and Bellevue requires special consideration for parking, building regulations, and time constraints. Our team is well-versed in navigating these challenges, ensuring a smooth moving experience even in busy urban environments.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our King County Services Include</h2>
            <p className="mb-6">
              Residential moving services
              Commercial and office relocations
              High-rise apartment moving
              Professional packing and unpacking
              Secure storage solutions
              Specialty item transportation
              Same-day moving services
            </p>
          </div>

          <div className="space-y-6">
            <img
              src="/lovable-uploads/04dffb87-16a4-4fa0-afc5-479ac4deb54b.png"
              alt="Seattle skyline featuring Space Needle and downtown buildings"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="/lovable-uploads/46dac536-d0a0-4fe7-a8ef-7d3a9530bd42.png"
              alt="Seattle skyline with Space Needle and Mount Rainier in the background"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KingCounty;