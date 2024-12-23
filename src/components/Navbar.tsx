import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ResourcesMenu from "./navigation/ResourcesMenu";
import BlogMenu from "./navigation/BlogMenu";
import MobileMenu from "./navigation/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const resourcePages = [
    {
      title: "Moving Tips",
      path: "/resources/moving-tips",
      description: "Expert advice for a successful move",
    },
    {
      title: "Packing Guide",
      path: "/resources/packing-guide",
      description: "Learn how to pack efficiently and safely",
    },
    {
      title: "Service Areas",
      path: "/resources/service-areas",
      description: "Areas we serve in Western Washington",
    },
  ];

  const blogPosts = [
    {
      title: "Moving to Tacoma: Your Complete Guide",
      path: "/blog/moving-to-tacoma-guide",
      description: "Everything you need to know about relocating to Tacoma, WA",
    },
    {
      title: "Best Neighborhoods in Tacoma",
      path: "/blog/best-tacoma-neighborhoods",
      description: "Discover the unique character of Tacoma's top neighborhoods",
    },
    {
      title: "Moving Tips & Tricks",
      path: "/blog/moving-tips-and-tricks",
      description: "Expert advice for a smooth and stress-free move",
    },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="/lovable-uploads/cb795fbd-18c0-4f1f-8ed6-f8e63107b408.png" 
                alt="LiftNHaul Moving Company Logo - Professional Moving Services in Tacoma" 
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-primary">LiftNHaul</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <NavigationMenu>
              <NavigationMenuList>
                <ResourcesMenu />
                <BlogMenu />
              </NavigationMenuList>
            </NavigationMenu>
            <a href="tel:+12533000156">
              <Button className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                (253) 300-0156
              </Button>
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navItems={navItems}
          resourcePages={resourcePages}
          blogPosts={blogPosts}
        />
      </div>
    </nav>
  );
};

export default Navbar;