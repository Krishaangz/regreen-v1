
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Settings from "./pages/Settings";

// Placeholder components for routes we need to add
const Community = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Community</h1></div>;
const Services = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Services</h1></div>;
const Help = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Help Center</h1></div>;

// Community sub-pages
const Forums = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Community Forums</h1></div>;
const Events = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Community Events</h1></div>;
const Stories = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Success Stories</h1></div>;

// Services sub-pages
const Restoration = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Eco-Restoration Services</h1></div>;
const LandownerServices = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Landowner Services</h1></div>;
const WorkerPrograms = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Worker Programs</h1></div>;

// Help sub-pages
const FAQ = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Frequently Asked Questions</h1></div>;
const Contact = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Contact Us</h1></div>;
const Support = () => <div className="animate-fade-in"><h1 className="text-3xl font-bold">Support</h1></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="regreen-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/settings" element={<Settings />} />
                
                {/* Community routes */}
                <Route path="/community" element={<Community />} />
                <Route path="/community/forums" element={<Forums />} />
                <Route path="/community/events" element={<Events />} />
                <Route path="/community/stories" element={<Stories />} />
                
                {/* Services routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/restoration" element={<Restoration />} />
                <Route path="/services/landowner" element={<LandownerServices />} />
                <Route path="/services/worker" element={<WorkerPrograms />} />
                
                {/* Help routes */}
                <Route path="/help" element={<Help />} />
                <Route path="/help/faq" element={<FAQ />} />
                <Route path="/help/contact" element={<Contact />} />
                <Route path="/help/support" element={<Support />} />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
