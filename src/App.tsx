import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { mainRoutes } from "./routes/mainRoutes";
import { serviceRoutes } from "./routes/serviceRoutes";
import { blogRoutes } from "./routes/blogRoutes";
import { resourceRoutes } from "./routes/resourceRoutes";
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
            <Route path="/" element={<Navigate to="/home" replace />} />
            {mainRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {serviceRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {blogRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {resourceRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;