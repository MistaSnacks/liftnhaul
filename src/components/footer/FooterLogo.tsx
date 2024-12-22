import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <img 
          src="http://liftnhaul.com/wp-content/uploads/2024/10/cropped-logo1-1-3.webp" 
          alt="LiftNHaul Logo" 
          className="h-12 w-auto"
        />
        <h3 className="text-2xl font-bold">LiftNHaul</h3>
      </div>
      <p className="text-gray-400">
        Professional moving services in Tacoma and Pierce County area.
        Licensed, insured, and committed to excellence.
      </p>
    </div>
  );
};

export default FooterLogo;