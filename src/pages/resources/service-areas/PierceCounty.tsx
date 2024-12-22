import { Helmet } from "react-helmet";

const PierceCounty = () => {
  return (
    <>
      <Helmet>
        <title>Moving Services in Pierce County | Professional Movers | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional moving services in Pierce County, WA. Serving Tacoma, Puyallup, Lakewood, and surrounding areas with expert local and long-distance moving solutions." 
        />
        <meta 
          name="keywords" 
          content="Pierce County movers, Tacoma moving company, Puyallup movers, Lakewood moving services, professional moving Pierce County" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Pierce County</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            As Pierce County's premier moving company, LiftNHaul provides comprehensive moving services throughout Tacoma, Puyallup, Lakewood, and surrounding communities. Our deep understanding of the local area enables us to deliver efficient and reliable moving solutions tailored to the unique needs of Pierce County residents.
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

          <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Pierce County Move?</h2>
          <p className="mb-6">
            Our experienced team understands the unique challenges of moving within Pierce County, from navigating downtown Tacoma's historic districts to managing moves in rapidly growing areas like South Hill. We provide personalized service that ensures your belongings are handled with care while maintaining efficient timelines.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Local Expertise</h2>
          <p className="mb-6">
            With years of experience serving Pierce County, we're familiar with local regulations, building requirements, and the most efficient routes throughout the area. This local knowledge helps us provide seamless moving services while avoiding common pitfalls that can delay your move.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Comprehensive Moving Services</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Local residential moves within Pierce County</li>
            <li>Commercial and office relocations</li>
            <li>Apartment and condominium moves</li>
            <li>Professional packing and unpacking services</li>
            <li>Secure storage solutions</li>
            <li>Specialty item moving (pianos, antiques, artwork)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PierceCounty;