import { Facebook, Instagram, Twitter } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="text-center">
      <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Facebook className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Instagram className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;