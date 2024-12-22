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
import Calculator from "./pages/resources/Calculator";
import MovingTips from "./pages/resources/MovingTips";
import PackingGuide from "./pages/resources/PackingGuide";
import MovingToTacoma from "./pages/blog/MovingToTacoma";
import TacomaNeighborhoods from "./pages/blog/TacomaNeighborhoods";
import MovingTipsBlog from "./pages/blog/MovingTipsBlog";

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
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/calculator" element={<Calculator />} />
              <Route path="/resources/moving-tips" element={<MovingTips />} />
              <Route path="/resources/packing-guide" element={<PackingGuide />} />
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