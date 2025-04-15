
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | LiftNHaul Moving Services</title>
        <meta 
          name="description" 
          content="Navigate through our website easily with our sitemap. Find all pages and resources available on LiftNHaul's website." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Sitemap</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-primary">All Services</Link></li>
              <li><Link to="/services/local-moving" className="text-gray-600 hover:text-primary">Local Moving</Link></li>
              <li><Link to="/services/long-distance-moving" className="text-gray-600 hover:text-primary">Long Distance Moving</Link></li>
              <li><Link to="/services/packing-services" className="text-gray-600 hover:text-primary">Packing Services</Link></li>
              <li><Link to="/services/apartment-moving" className="text-gray-600 hover:text-primary">Apartment Moving</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Locations</h2>
            <ul className="space-y-2">
              <li><Link to="/locations" className="text-gray-600 hover:text-primary">All Locations</Link></li>
              
              <li className="mt-2 font-medium">Pierce County:</li>
              <li className="ml-4"><Link to="/locations/pierce-county" className="text-gray-600 hover:text-primary">Pierce County Overview</Link></li>
              <li className="ml-4"><Link to="/locations/pierce-county/tacoma" className="text-gray-600 hover:text-primary">Tacoma</Link></li>
              <li className="ml-4"><Link to="/locations/pierce-county/puyallup" className="text-gray-600 hover:text-primary">Puyallup</Link></li>
              <li className="ml-4"><Link to="/locations/pierce-county/lakewood" className="text-gray-600 hover:text-primary">Lakewood</Link></li>
              
              <li className="mt-2 font-medium">King County:</li>
              <li className="ml-4"><Link to="/locations/king-county" className="text-gray-600 hover:text-primary">King County Overview</Link></li>
              <li className="ml-4"><Link to="/locations/king-county/seattle" className="text-gray-600 hover:text-primary">Seattle</Link></li>
              <li className="ml-4"><Link to="/locations/king-county/bellevue" className="text-gray-600 hover:text-primary">Bellevue</Link></li>
              <li className="ml-4"><Link to="/locations/king-county/kent" className="text-gray-600 hover:text-primary">Kent</Link></li>
              
              <li className="mt-2 font-medium">Thurston County:</li>
              <li className="ml-4"><Link to="/locations/thurston-county" className="text-gray-600 hover:text-primary">Thurston County Overview</Link></li>
              <li className="ml-4"><Link to="/locations/thurston-county/olympia" className="text-gray-600 hover:text-primary">Olympia</Link></li>
              <li className="ml-4"><Link to="/locations/thurston-county/lacey" className="text-gray-600 hover:text-primary">Lacey</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-600 hover:text-primary">All Resources</Link></li>
              <li><Link to="/resources/moving-tips" className="text-gray-600 hover:text-primary">Moving Tips</Link></li>
              <li><Link to="/resources/packing-guide" className="text-gray-600 hover:text-primary">Packing Guide</Link></li>
              <li><Link to="/resources/service-areas" className="text-gray-600 hover:text-primary">Service Areas</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Blog</h2>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-primary">All Blog Posts</Link></li>
              <li><Link to="/blog/moving-tips-and-tricks" className="text-gray-600 hover:text-primary">Moving Tips & Tricks</Link></li>
              <li><Link to="/blog/moving-to-tacoma-guide" className="text-gray-600 hover:text-primary">Moving to Tacoma Guide</Link></li>
              <li><Link to="/blog/best-tacoma-neighborhoods" className="text-gray-600 hover:text-primary">Best Tacoma Neighborhoods</Link></li>
              <li><Link to="/blog/seattle-living-guide" className="text-gray-600 hover:text-primary">Seattle Living Guide</Link></li>
              <li><Link to="/blog/bellevue-living-guide" className="text-gray-600 hover:text-primary">Bellevue Living Guide</Link></li>
              <li><Link to="/blog/living-in-olympia-guide" className="text-gray-600 hover:text-primary">Living in Olympia Guide</Link></li>
              <li><Link to="/blog/port-orchard-living-guide" className="text-gray-600 hover:text-primary">Port Orchard Living Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
