
import PierceCounty from "@/pages/locations/pierce-county";
import Tacoma from "@/pages/locations/pierce-county/tacoma";
import Puyallup from "@/pages/locations/pierce-county/puyallup";
import Lakewood from "@/pages/locations/pierce-county/lakewood";

import KingCounty from "@/pages/locations/king-county";
import Seattle from "@/pages/locations/king-county/seattle";
import Bellevue from "@/pages/locations/king-county/bellevue";
import Kent from "@/pages/locations/king-county/kent";

import ThurstonCounty from "@/pages/locations/thurston-county";
import Olympia from "@/pages/locations/thurston-county/olympia";
import Lacey from "@/pages/locations/thurston-county/lacey";

import Locations from "@/pages/locations";

export const locationRoutes = [
  { path: "/locations", element: <Locations /> },
  { path: "/locations/pierce-county", element: <PierceCounty /> },
  { path: "/locations/pierce-county/tacoma", element: <Tacoma /> },
  { path: "/locations/pierce-county/puyallup", element: <Puyallup /> },
  { path: "/locations/pierce-county/lakewood", element: <Lakewood /> },
  { path: "/locations/king-county", element: <KingCounty /> },
  { path: "/locations/king-county/seattle", element: <Seattle /> },
  { path: "/locations/king-county/bellevue", element: <Bellevue /> },
  { path: "/locations/king-county/kent", element: <Kent /> },
  { path: "/locations/thurston-county", element: <ThurstonCounty /> },
  { path: "/locations/thurston-county/olympia", element: <Olympia /> },
  { path: "/locations/thurston-county/lacey", element: <Lacey /> },
];
