import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import LocalMoving from "./pages/services/LocalMoving";
import LongDistanceMoving from "./pages/services/LongDistanceMoving";
import PackingServices from "./pages/services/PackingServices";
import ApartmentMoving from "./pages/services/ApartmentMoving";
import MovingTips from "./pages/blog/MovingTips";
import MovingToTacoma from "./pages/blog/MovingToTacoma";
import TacomaNeighborhoods from "./pages/blog/TacomaNeighborhoods";
import SeattleGuide from "./pages/blog/SeattleGuide";
import BellevueGuide from "./pages/blog/BellevueGuide";
import OlympiaGuide from "./pages/blog/OlympiaGuide";
import PortOrchardGuide from "./pages/blog/PortOrchardGuide";
import ServiceAreas from "./pages/resources/ServiceAreas";
import MovingTipsResource from "./pages/resources/MovingTips";
import PackingGuide from "./pages/resources/PackingGuide";
import KingCounty from "./pages/resources/service-areas/KingCounty";
import PierceCounty from "./pages/resources/service-areas/PierceCounty";
import ThurstonCounty from "./pages/resources/service-areas/ThurstonCounty";
import KitsapCounty from "./pages/resources/service-areas/KitsapCounty";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route
              path="/services/local-moving"
              element={<LocalMoving />}
            />
            <Route
              path="/services/long-distance-moving"
              element={<LongDistanceMoving />}
            />
            <Route
              path="/services/packing-services"
              element={<PackingServices />}
            />
            <Route
              path="/services/apartment-moving"
              element={<ApartmentMoving />}
            />
            <Route
              path="/blog/moving-tips-and-tricks"
              element={<MovingTips />}
            />
            <Route
              path="/blog/moving-to-tacoma-guide"
              element={<MovingToTacoma />}
            />
            <Route
              path="/blog/best-tacoma-neighborhoods"
              element={<TacomaNeighborhoods />}
            />
            <Route
              path="/blog/seattle-living-guide"
              element={<SeattleGuide />}
            />
            <Route
              path="/blog/bellevue-living-guide"
              element={<BellevueGuide />}
            />
            <Route
              path="/blog/living-in-olympia-guide"
              element={<OlympiaGuide />}
            />
            <Route
              path="/blog/port-orchard-living-guide"
              element={<PortOrchardGuide />}
            />
            <Route path="/resources/service-areas" element={<ServiceAreas />} />
            <Route path="/resources/moving-tips" element={<MovingTipsResource />} />
            <Route path="/resources/packing-guide" element={<PackingGuide />} />
            <Route
              path="/resources/service-areas/king-county"
              element={<KingCounty />}
            />
            <Route
              path="/resources/service-areas/pierce-county"
              element={<PierceCounty />}
            />
            <Route
              path="/resources/service-areas/thurston-county"
              element={<ThurstonCounty />}
            />
            <Route
              path="/resources/service-areas/kitsap-county"
              element={<KitsapCounty />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;