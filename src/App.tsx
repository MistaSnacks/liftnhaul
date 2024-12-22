import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import LocalMoving from "./pages/services/LocalMoving";
import PackingServices from "./pages/services/PackingServices";
import ApartmentMoving from "./pages/services/ApartmentMoving";
import LongDistanceMoving from "./pages/services/LongDistanceMoving";
import Calculator from "./pages/resources/Calculator";
import MovingTips from "./pages/resources/MovingTips";
import PackingGuide from "./pages/resources/PackingGuide";
import ServiceAreas from "./pages/resources/ServiceAreas";
import PierceCounty from "./pages/resources/service-areas/PierceCounty";
import KingCounty from "./pages/resources/service-areas/KingCounty";
import ThurstonCounty from "./pages/resources/service-areas/ThurstonCounty";
import KitsapCounty from "./pages/resources/service-areas/KitsapCounty";
import MovingToTacoma from "./pages/blog/MovingToTacoma";
import TacomaNeighborhoods from "./pages/blog/TacomaNeighborhoods";
import MovingTipsBlog from "./pages/blog/MovingTips";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/local-moving" element={<LocalMoving />} />
              <Route path="/services/packing-services" element={<PackingServices />} />
              <Route path="/services/apartment-moving" element={<ApartmentMoving />} />
              <Route path="/services/long-distance-moving" element={<LongDistanceMoving />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/calculator" element={<Calculator />} />
              <Route path="/resources/moving-tips" element={<MovingTips />} />
              <Route path="/resources/packing-guide" element={<PackingGuide />} />
              <Route path="/resources/service-areas" element={<ServiceAreas />} />
              <Route path="/resources/service-areas/pierce-county" element={<PierceCounty />} />
              <Route path="/resources/service-areas/king-county" element={<KingCounty />} />
              <Route path="/resources/service-areas/thurston-county" element={<ThurstonCounty />} />
              <Route path="/resources/service-areas/kitsap-county" element={<KitsapCounty />} />
              <Route path="/blog/moving-to-tacoma-guide" element={<MovingToTacoma />} />
              <Route path="/blog/best-tacoma-neighborhoods" element={<TacomaNeighborhoods />} />
              <Route path="/blog/moving-tips-and-tricks" element={<MovingTipsBlog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;