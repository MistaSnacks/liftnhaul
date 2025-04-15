
import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const LocationsMenu = () => {
  const counties = [
    {
      name: "Pierce County",
      path: "/locations/pierce-county",
      cities: [
        { name: "Tacoma", path: "/locations/pierce-county/tacoma" },
        { name: "Puyallup", path: "/locations/pierce-county/puyallup" },
        { name: "Lakewood", path: "/locations/pierce-county/lakewood" },
      ]
    },
    {
      name: "King County",
      path: "/locations/king-county",
      cities: [
        { name: "Seattle", path: "/locations/king-county/seattle" },
        { name: "Bellevue", path: "/locations/king-county/bellevue" },
        { name: "Kent", path: "/locations/king-county/kent" },
      ]
    },
    {
      name: "Thurston County",
      path: "/locations/thurston-county",
      cities: [
        { name: "Olympia", path: "/locations/thurston-county/olympia" },
        { name: "Lacey", path: "/locations/thurston-county/lacey" },
      ]
    },
  ];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[600px] grid-cols-3 gap-3 p-4">
          {counties.map((county) => (
            <div key={county.name} className="space-y-2">
              <NavigationMenuLink asChild>
                <Link
                  to={county.path}
                  className="block font-medium text-primary hover:underline"
                >
                  {county.name}
                </Link>
              </NavigationMenuLink>
              <ul className="space-y-1 pl-4">
                {county.cities.map((city) => (
                  <li key={city.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={city.path}
                        className="block text-sm text-gray-700 hover:text-primary"
                      >
                        {city.name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-4 border-t">
          <NavigationMenuLink asChild>
            <Link
              to="/locations"
              className="block text-center text-primary hover:underline"
            >
              View All Locations
            </Link>
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default LocationsMenu;
