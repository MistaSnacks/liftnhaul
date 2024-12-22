import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-4">
          Whether you're planning a local move or need professional packing services, 
          our family-owned team is ready to assist you with all your moving needs in 
          Tacoma and throughout Pierce County.
        </p>
        <p className="text-gray-600 mb-8">
          At Lift n' Haul, we understand that every move is unique. Our experienced team 
          specializes in providing personalized moving solutions tailored to your specific 
          requirements. From carefully handling your precious belongings to ensuring timely 
          delivery, we take pride in making your moving experience as smooth as possible. 
          Our commitment to exceptional customer service and attention to detail has made 
          us a trusted name in the Pierce County moving industry. Contact us today to 
          discuss your moving needs and let us show you why we're the preferred choice 
          for residential and commercial moves in the area.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer min-h-[120px] flex items-center">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Tacoma, WA 98445</p>
            </div>
          </div>
        </Card>

        <a href="tel:+12533000156" className="block">
          <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer min-h-[120px] flex items-center">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(253) 300-0156</p>
              </div>
            </div>
          </Card>
        </a>

        <a href="mailto:info@liftnhaul.com" className="block">
          <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer min-h-[120px] flex items-center">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@liftnhaul.com</p>
              </div>
            </div>
          </Card>
        </a>

        <Card className="p-6 transition-colors hover:bg-secondary cursor-pointer min-h-[120px] flex items-center">
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
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