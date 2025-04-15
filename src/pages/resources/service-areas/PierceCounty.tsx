
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PierceCounty = () => {
  return (
    <>
      <Helmet>
        <title>Pierce County Movers | Professional Moving Services | LiftNHaul</title>
        <meta 
          name="description" 
          content="Professional movers in Pierce County, WA. Serving Tacoma, Puyallup, Lakewood with affordable local moving services, residential moving, and commercial solutions." 
        />
        <meta 
          name="keywords" 
          content="pierce county movers, tacoma moving company, puyallup moving services, lakewood movers, residential moving services, professional movers pierce county, moving company near me" 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose max-w-none text-left">
            <h1 className="text-4xl font-bold text-primary mb-8">Professional Movers in Pierce County</h1>
            
            <p className="text-lg mb-6">
              As one of the leading moving companies in Pierce County, LiftNHaul provides comprehensive moving services throughout Tacoma, Puyallup, Lakewood, and surrounding communities. Our team of professional movers understands the local area, enabling us to deliver efficient and reliable moving solutions tailored to the unique needs of Pierce County residents.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Areas We Serve in Pierce County</h2>
            <p className="mb-6">
              <strong>Tacoma Moving Company</strong> - Including North End, South End, and Downtown<br />
              <strong>Puyallup Moving Services</strong> - Including South Hill and Downtown<br />
              <strong>Lakewood Movers</strong> - Including Tillicum and American Lake<br />
              University Place<br />
              Gig Harbor<br />
              Bonney Lake<br />
              Sumner<br />
              Spanaway
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why Choose Our Pierce County Moving Services?</h2>
            <p className="mb-6">
              Our experienced team understands the unique challenges of moving within Pierce County, from navigating downtown Tacoma's historic districts to managing moves in rapidly growing areas like South Hill. As professional movers in Pierce County, we provide personalized service that ensures your belongings are handled with care while maintaining efficient timelines.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Local Expertise</h2>
            <p className="mb-6">
              With years of experience as a Tacoma moving company serving Pierce County, we're familiar with local regulations, building requirements, and the most efficient routes throughout the area. This local knowledge helps us provide seamless moving services while avoiding common pitfalls that can delay your move.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Comprehensive Moving Services</h2>
            <p className="mb-6">
              <strong>Local moving services in Tacoma</strong> and throughout Pierce County<br />
              <strong>Commercial moving Tacoma</strong> and office relocation services<br />
              <strong>Apartment moving Tacoma</strong> specialists for multi-unit buildings<br />
              <strong>Professional packing services</strong> Washington residents trust<br />
              <strong>Secure storage moving services</strong> for temporary needs<br />
              <strong>Furniture moving company</strong> services for specialty items (pianos, antiques, artwork)
            </p>
            
            <div className="mt-8">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90">Get a Quote from Professional Movers in Pierce County</Button>
              </Link>
            </div>
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
