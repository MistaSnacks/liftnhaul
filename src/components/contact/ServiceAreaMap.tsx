
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ServiceAreaMap = () => {
  const serviceAreas = [
    { name: "Tacoma", position: { top: "40%", left: "36%" } },
    { name: "Puyallup", position: { top: "47%", left: "50%" } },
    { name: "Seattle", position: { top: "20%", left: "39%" } },
    { name: "Olympia", position: { top: "66%", left: "32%" } },
    { name: "Bellevue", position: { top: "25%", left: "50%" } },
    { name: "Bremerton", position: { top: "30%", left: "18%" } },
  ];

  const counties = [
    { name: "Pierce County", color: "bg-red-400/50" },
    { name: "King County", color: "bg-blue-400/50" },
    { name: "Thurston County", color: "bg-green-400/50" },
    { name: "Kitsap County", color: "bg-yellow-400/50" },
  ];

  return (
    <Card className="p-6 shadow-lg">
      <div className="text-center mb-6">
        <p className="text-lg text-gray-600">
          LiftNHaul Movers proudly serves these areas in Western Washington
        </p>
      </div>
      
      <div className="flex justify-center mb-6">
        <div className="flex gap-4 flex-wrap justify-center">
          {counties.map((county, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${county.color}`}></div>
              <span>{county.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
        {/* Washington State map (static image) */}
        <img 
          src="https://images.unsplash.com/photo-1671483584774-b966a774fea4?auto=format&fit=crop&w=1200&h=700&q=80" 
          alt="Washington State Map" 
          className="w-full h-full object-cover opacity-70"
        />
        
        {/* Service area markers */}
        {serviceAreas.map((area, index) => (
          <div 
            key={index} 
            className="absolute flex flex-col items-center animate-pulse"
            style={{ top: area.position.top, left: area.position.left }}
          >
            <MapPin className="w-8 h-8 text-primary fill-current" />
            <span className="bg-white px-2 py-1 rounded text-sm font-medium shadow-md">
              {area.name}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Don't see your location? We likely still serve your area! Contact us to confirm service availability.
        </p>
      </div>
    </Card>
  );
};

export default ServiceAreaMap;
