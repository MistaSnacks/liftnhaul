import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: Array<{ name: string; path: string }>;
  resourcePages: Array<{ title: string; path: string }>;
  blogPosts: Array<{ title: string; path: string }>;
}

const MobileMenu = ({ isOpen, setIsOpen, navItems, resourcePages, blogPosts }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden animate-fadeIn">
      <div className="pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className="px-3 py-2">
          <Link
            to="/resources"
            className="block text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md py-2"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          {resourcePages.map((resource) => (
            <Link
              key={resource.path}
              to={resource.path}
              className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {resource.title}
            </Link>
          ))}
        </div>
        <div className="px-3 py-2">
          <Link
            to="/blog"
            className="block text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md py-2"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          {blogPosts.map((post) => (
            <Link
              key={post.path}
              to={post.path}
              className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {post.title}
            </Link>
          ))}
        </div>
        <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
          <Phone className="mr-2 h-4 w-4" />
          (253) 300-0156
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;