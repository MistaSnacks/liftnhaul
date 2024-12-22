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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none text-left">
            <h1 className="text-4xl font-bold text-primary mb-8">Moving Services in Pierce County</h1>
            
            <p className="text-lg mb-6">
              As Pierce County's premier moving company, LiftNHaul provides comprehensive moving services throughout Tacoma, Puyallup, Lakewood, and surrounding communities. Our deep understanding of the local area enables us to deliver efficient and reliable moving solutions tailored to the unique needs of Pierce County residents.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Pierce County</h2>
            <p className="mb-6">
              Tacoma - Including North End, South End, and Downtown<br />
              Puyallup - Including South Hill and Downtown<br />
              Lakewood - Including Tillicum and American Lake<br />
              University Place<br />
              Gig Harbor<br />
              Bonney Lake<br />
              Sumner<br />
              Spanaway
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why Choose Us for Your Pierce County Move?</h2>
            <p className="mb-6">
              Our experienced team understands the unique challenges of moving within Pierce County, from navigating downtown Tacoma's historic districts to managing moves in rapidly growing areas like South Hill. We provide personalized service that ensures your belongings are handled with care while maintaining efficient timelines.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Local Expertise</h2>
            <p className="mb-6">
              With years of experience serving Pierce County, we're familiar with local regulations, building requirements, and the most efficient routes throughout the area. This local knowledge helps us provide seamless moving services while avoiding common pitfalls that can delay your move.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Comprehensive Moving Services</h2>
            <p className="mb-6">
              Local residential moves within Pierce County<br />
              Commercial and office relocations<br />
              Apartment and condominium moves<br />
              Professional packing and unpacking services<br />
              Secure storage solutions<br />
              Specialty item moving (pianos, antiques, artwork)
            </p>
          </div>

          <div className="space-y-6">
            <img
              src="/lovable-uploads/c35016d1-350c-441e-89bb-b88afd43d6c7.png"
              alt="Tacoma waterfront at sunset with marina and city skyline"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff"
              alt="Pierce County nature"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PierceCounty;