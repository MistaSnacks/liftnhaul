import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const ResourcesMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          <li className="row-span-3">
            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md">
              <div className="mb-2 mt-4 text-lg font-medium text-white">
                Moving Resources
              </div>
              <p className="text-sm leading-tight text-white/90">
                Everything you need to know about moving with LiftNHaul
              </p>
            </div>
          </li>
          <li>
            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">Moving Tips</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Expert advice for a successful move
              </p>
            </div>
          </li>
          <li>
            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">Packing Guide</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Learn how to pack efficiently and safely
              </p>
            </div>
          </li>
          <li>
            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">Service Areas</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Areas we serve in Western Washington
              </p>
            </div>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesMenu;