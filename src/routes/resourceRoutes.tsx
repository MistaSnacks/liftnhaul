import ServiceAreas from "@/pages/resources/ServiceAreas";
import MovingTipsResource from "@/pages/resources/MovingTips";
import PackingGuide from "@/pages/resources/PackingGuide";
import KingCounty from "@/pages/resources/service-areas/KingCounty";
import PierceCounty from "@/pages/resources/service-areas/PierceCounty";
import ThurstonCounty from "@/pages/resources/service-areas/ThurstonCounty";
import KitsapCounty from "@/pages/resources/service-areas/KitsapCounty";

export const resourceRoutes = [
  { path: "/resources/service-areas", element: <ServiceAreas /> },
  { path: "/resources/moving-tips", element: <MovingTipsResource /> },
  { path: "/resources/packing-guide", element: <PackingGuide /> },
  { path: "/resources/service-areas/king-county", element: <KingCounty /> },
  { path: "/resources/service-areas/pierce-county", element: <PierceCounty /> },
  { path: "/resources/service-areas/thurston-county", element: <ThurstonCounty /> },
  { path: "/resources/service-areas/kitsap-county", element: <KitsapCounty /> },
];