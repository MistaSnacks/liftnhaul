import LocalMoving from "@/pages/services/LocalMoving";
import LongDistanceMoving from "@/pages/services/LongDistanceMoving";
import PackingServices from "@/pages/services/PackingServices";
import ApartmentMoving from "@/pages/services/ApartmentMoving";

export const serviceRoutes = [
  { path: "/services/local-moving", element: <LocalMoving /> },
  { path: "/services/long-distance-moving", element: <LongDistanceMoving /> },
  { path: "/services/packing-services", element: <PackingServices /> },
  { path: "/services/apartment-moving", element: <ApartmentMoving /> },
];