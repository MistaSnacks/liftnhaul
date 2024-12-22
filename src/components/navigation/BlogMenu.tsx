import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const BlogMenu = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          <li className="row-span-3">
            <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md">
              <div className="mb-2 mt-4 text-lg font-medium text-white">
                Moving Blog
              </div>
              <p className="text-sm leading-tight text-white/90">
                Tips, tricks, and insights about moving in Western Washington
              </p>
            </div>
          </li>
          <li>
            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">
                Moving to Tacoma: Your Complete Guide
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Everything you need to know about relocating to Tacoma, WA
              </p>
            </div>
          </li>
          <li>
            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">
                Best Neighborhoods in Tacoma
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Discover the unique character of Tacoma's top neighborhoods
              </p>
            </div>
          </li>
          <li>
            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
              <div className="text-sm font-medium leading-none">
                Moving Tips & Tricks
              </div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                Expert advice for a smooth and stress-free move
              </p>
            </div>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default BlogMenu;