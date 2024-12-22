import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">Tacoma, WA 98445</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">(253) 655-7973</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">info@liftnhaul.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p className="text-gray-600">Monday - Sunday: 7:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;