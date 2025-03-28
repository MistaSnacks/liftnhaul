
import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <Link to="/" className="inline-block" aria-label="LiftNHaul Movers - Home">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/34967260-f376-4639-9678-fb69aa1eef1d.png" 
            alt="LiftNHaul Movers - Professional Moving Services in Tacoma" 
            className="h-16 w-auto object-contain"
            loading="lazy"
            width="512" 
            height="512"
          />
          <h3 className="text-2xl font-bold">LiftNHaul Movers</h3>
        </div>
      </Link>
      <p className="text-gray-400">
        Professional moving services in Tacoma and Pierce County area.
        Licensed, insured, and committed to excellence. Your trusted local moving company in Washington.
      </p>
      <div className="text-xs text-gray-500">
        <a href="/sitemap.xml" className="hover:underline">Sitemap</a>
      </div>
    </div>
  );
};

export default FooterLogo;
