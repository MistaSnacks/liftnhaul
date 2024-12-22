import MovingTips from "@/pages/blog/MovingTips";
import MovingToTacoma from "@/pages/blog/MovingToTacoma";
import TacomaNeighborhoods from "@/pages/blog/TacomaNeighborhoods";
import SeattleGuide from "@/pages/blog/SeattleGuide";
import BellevueGuide from "@/pages/blog/BellevueGuide";
import OlympiaGuide from "@/pages/blog/OlympiaGuide";
import PortOrchardGuide from "@/pages/blog/PortOrchardGuide";

export const blogRoutes = [
  { path: "/blog/moving-tips-and-tricks", element: <MovingTips /> },
  { path: "/blog/moving-to-tacoma-guide", element: <MovingToTacoma /> },
  { path: "/blog/best-tacoma-neighborhoods", element: <TacomaNeighborhoods /> },
  { path: "/blog/seattle-living-guide", element: <SeattleGuide /> },
  { path: "/blog/bellevue-living-guide", element: <BellevueGuide /> },
  { path: "/blog/living-in-olympia-guide", element: <OlympiaGuide /> },
  { path: "/blog/port-orchard-living-guide", element: <PortOrchardGuide /> },
];