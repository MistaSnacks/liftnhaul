import ServiceAreas from "@/pages/resources/ServiceAreas";
import MovingTipsResource from "@/pages/resources/MovingTips";
import PackingGuide from "@/pages/resources/PackingGuide";

export const resourceRoutes = [
  { path: "/resources/service-areas", element: <ServiceAreas /> },
  { path: "/resources/moving-tips", element: <MovingTipsResource /> },
  { path: "/resources/packing-guide", element: <PackingGuide /> },
];