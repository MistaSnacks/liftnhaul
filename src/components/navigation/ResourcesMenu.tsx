import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ResourcesMenu = () => {
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

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          {resourcePages.map((resource) => (
            <li key={resource.path}>
              <NavigationMenuLink asChild>
                <Link
                  to={resource.path}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    {resource.title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {resource.description}
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

export default ResourcesMenu;