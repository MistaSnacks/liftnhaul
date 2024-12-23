import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/cb795fbd-18c0-4f1f-8ed6-f8e63107b408.png" 
          alt="LiftNHaul Moving Company Logo - Professional Moving Services in Tacoma" 
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