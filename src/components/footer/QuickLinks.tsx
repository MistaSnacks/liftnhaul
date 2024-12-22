import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
            Sitemap
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;