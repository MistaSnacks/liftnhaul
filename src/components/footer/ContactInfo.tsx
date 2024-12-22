import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="text-center">
      <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
      <ul className="space-y-2">
        <li className="flex items-center justify-center text-gray-400">
          <MapPin className="h-5 w-5 mr-2" />
          Tacoma, WA 98445
        </li>
        <li className="flex items-center justify-center text-gray-400">
          <Phone className="h-5 w-5 mr-2" />
          (253) 300-0156
        </li>
        <li className="flex items-center justify-center text-gray-400">
          <Mail className="h-5 w-5 mr-2" />
          info@liftnhaul.com
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;