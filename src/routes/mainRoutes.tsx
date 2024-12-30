import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import Resources from "@/pages/Resources";
import Sitemap from "@/pages/Sitemap";
import NotFound from "@/pages/NotFound";

export const mainRoutes = [
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  { path: "/blog", element: <Blog /> },
  { path: "/resources", element: <Resources /> },
  { path: "/sitemap", element: <Sitemap /> },
  { path: "*", element: <NotFound /> },
];