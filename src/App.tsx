
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
import MapView from "./pages/MapView";
import LandownerProjects from "./pages/LandownerProjects";
import TaskView from "./pages/TaskView";
import Reports from "./pages/Reports";

// Services pages
import Services from "./pages/Services";
import Restoration from "./pages/services/Restoration";
import Landowner from "./pages/services/Landowner";
import Worker from "./pages/services/Worker";

// Community pages
import Community from "./pages/Community";
import Forums from "./pages/community/Forums";
import Events from "./pages/community/Events";
import Stories from "./pages/community/Stories";

// Help pages
import Help from "./pages/Help";
import FAQ from "./pages/help/FAQ";
import Contact from "./pages/help/Contact";
import Support from "./pages/help/Support";

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
                <Route path="/map" element={<MapView />} />
                <Route path="/my-properties" element={<LandownerProjects />} />
                <Route path="/tasks/:taskId" element={<TaskView />} />
                <Route path="/tasks/current" element={<TaskView />} />
                <Route path="/reports" element={<Reports />} />
                
                {/* Community routes */}
                <Route path="/community" element={<Community />} />
                <Route path="/community/forums" element={<Forums />} />
                <Route path="/community/events" element={<Events />} />
                <Route path="/community/stories" element={<Stories />} />
                
                {/* Services routes */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/restoration" element={<Restoration />} />
                <Route path="/services/landowner" element={<Landowner />} />
                <Route path="/services/worker" element={<Worker />} />
                
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
