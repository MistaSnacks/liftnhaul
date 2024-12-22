import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Tacoma, WA 98445</p>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Service Area</h4>
              <p className="text-sm text-gray-600">
                We serve the greater Tacoma area and Pierce County. Our central location allows us to efficiently reach customers throughout the region.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(253) 300-0156</p>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-sm text-gray-600">
                Our friendly team is ready to assist you with any questions about our moving services. We aim to respond promptly to all inquiries.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@liftnhaul.com</p>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Email Us</h4>
              <p className="text-sm text-gray-600">
                Send us an email for quotes, scheduling, or any other inquiries. We typically respond within 24 hours during business days.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-gray-600">Monday - Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Business Hours</h4>
              <p className="text-sm text-gray-600">
                We operate seven days a week to accommodate your schedule. Special arrangements can be made for moves outside regular business hours.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default ContactInfo;