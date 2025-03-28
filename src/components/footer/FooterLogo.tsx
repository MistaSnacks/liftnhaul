
import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/34967260-f376-4639-9678-fb69aa1eef1d.png" 
          alt="LiftNHaul Movers - Professional Moving Services in Tacoma" 
          className="h-16 w-auto object-contain"
        />
        <h3 className="text-2xl font-bold">LiftNHaul Movers</h3>
      </div>
      <p className="text-gray-400">
        Professional moving services in Tacoma and Pierce County area.
        Licensed, insured, and committed to excellence. Your trusted local moving company in Washington.
      </p>
    </div>
  );
};

export default FooterLogo;
