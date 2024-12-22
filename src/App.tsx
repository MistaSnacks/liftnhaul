import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { EditableProvider } from "@/contexts/EditableContext";
import { EditableToggle } from "@/components/EditableToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MainRoutes from "@/routes/mainRoutes";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EditableProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <MainRoutes />
            </main>
            <Footer />
          </div>
          <ScrollToTop />
          <EditableToggle />
          <Toaster />
        </BrowserRouter>
      </EditableProvider>
    </QueryClientProvider>
  );
}

export default App;