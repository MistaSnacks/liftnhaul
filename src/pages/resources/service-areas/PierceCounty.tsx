import { Helmet } from "react-helmet";

const PierceCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Pierce County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional moving services across Pierce County, WA. Serving Tacoma, Puyallup, Lakewood, and surrounding areas with expert local and long-distance moving solutions." 
        />
        <meta 
          name="keywords" 
          content="Pierce County movers, Tacoma moving company, Puyallup movers, Lakewood moving services, professional moving Pierce County" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none text-left">
            <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Pierce County</h1>
            
            <p className="text-lg mb-6">
              LiftNHaul provides comprehensive moving services throughout Pierce County, serving the vibrant communities of Tacoma, Puyallup, Lakewood, and beyond. Our experienced team understands the unique characteristics of each neighborhood and provides tailored moving solutions.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Pierce County</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Tacoma - Including North End, South End, and Downtown</li>
              <li>Puyallup - Including South Hill and Downtown</li>
              <li>Lakewood - Including Tillicum and American Lake</li>
              <li>University Place</li>
              <li>Gig Harbor</li>
              <li>Bonney Lake</li>
              <li>Sumner</li>
              <li>Spanaway</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Comprehensive Moving Solutions</h2>
            <p className="mb-6">
              Whether you're moving to a historic craftsman in North Tacoma or a new development in Puyallup, our team has the expertise to handle your move with precision and care. We offer a full range of moving services tailored to meet your specific needs.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Pierce County Services</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Local residential moving</li>
              <li>Commercial and office relocations</li>
              <li>Professional packing services</li>
              <li>Storage solutions</li>
              <li>Specialty item moving</li>
              <li>Senior moving assistance</li>
            </ul>
          </div>

          <div className="space-y-6">
            <img
              src="/lovable-uploads/c35016d1-350c-441e-89bb-b88afd43d6c7.png"
              alt="Scenic Tacoma waterfront at sunset featuring Commencement Bay marina with Mount Rainier backdrop"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
              alt="Pierce County natural landscape showcasing evergreen forests and mountain views"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PierceCounty;