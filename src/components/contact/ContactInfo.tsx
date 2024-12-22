import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Whether you're planning a local move or need professional packing services, 
          our family-owned team is ready to assist you with all your moving needs in 
          Tacoma and throughout Pierce County.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Tacoma, WA 98445</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer">
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">(253) 300-0156</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer">
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@liftnhaul.com</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer">
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="text-gray-600">Monday - Sunday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;