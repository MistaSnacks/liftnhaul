import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const BlogMenu = () => {
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
    {
      title: "Living in Olympia: A Comprehensive Guide",
      path: "/blog/living-in-olympia",
      description: "Discover life in Washington's capital city",
    },
    {
      title: "Port Orchard: Your Ultimate Moving Guide",
      path: "/blog/port-orchard-guide",
      description: "Everything about moving to Port Orchard, WA",
    },
    {
      title: "Seattle Living: What to Know Before Moving",
      path: "/blog/seattle-living-guide",
      description: "Essential tips for relocating to Seattle",
    },
    {
      title: "Moving to Bellevue: A Complete Guide",
      path: "/blog/bellevue-guide",
      description: "Your comprehensive guide to life in Bellevue",
    },
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          {blogPosts.map((post) => (
            <li key={post.path}>
              <NavigationMenuLink asChild>
                <Link
                  to={post.path}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    {post.title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {post.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default BlogMenu;