import { Helmet } from "react-helmet";

const ThurstonCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Thurston County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Reliable moving services in Thurston County, WA. Serving Olympia, Lacey, Tumwater, and surrounding areas with expert local and long-distance moving solutions." 
        />
        <meta 
          name="keywords" 
          content="Thurston County movers, Olympia moving company, Lacey movers, Tumwater moving services, professional moving Thurston County" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none text-left">
            <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Thurston County</h1>
            
            <p className="text-lg mb-6">
              LiftNHaul provides comprehensive moving services throughout Thurston County, including Olympia, Lacey, Tumwater, and surrounding areas. Our team's familiarity with the region ensures efficient and reliable moving services for both residential and commercial clients.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Thurston County</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Olympia - Including Downtown and West Side</li>
              <li>Lacey - Including Hawks Prairie and Woodland</li>
              <li>Tumwater</li>
              <li>Yelm</li>
              <li>Rochester</li>
              <li>Tenino</li>
              <li>Rainier</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Local Knowledge and Expertise</h2>
            <p className="mb-6">
              Our experience in Thurston County allows us to navigate the unique aspects of moving in the state capital region. We understand the local communities and can provide efficient service while avoiding common moving challenges.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Thurston County Services</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Local residential moving</li>
              <li>Commercial and office relocations</li>
              <li>Government office moving</li>
              <li>Professional packing services</li>
              <li>Storage solutions</li>
              <li>Specialty item moving</li>
              <li>Senior moving assistance</li>
            </ul>
          </div>

          <div className="space-y-6">
            <img
              src="/lovable-uploads/d854d334-cecc-4759-a38e-e7c325286122.png"
              alt="Olympia waterfront at golden hour showcasing port facilities and pleasure craft marina"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="/lovable-uploads/b22970d2-7bef-4c43-91a3-d1934d24aac7.png"
              alt="Majestic Olympic Mountains vista through evergreen forest canopy in Thurston County"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThurstonCounty;