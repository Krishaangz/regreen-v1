
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { RoleProvider } from "@/contexts/RoleContext";

// Base pages
import Index from "./pages/Index";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

// Role-specific dashboards
import LandownerDashboard from "./pages/dashboards/LandownerDashboard";
import WorkerDashboard from "./pages/dashboards/WorkerDashboard";
import CommunityDashboard from "./pages/dashboards/CommunityDashboard";

// Role-specific map views
import MapView from "./pages/MapView";

// Project pages
import Projects from "./pages/Projects";
import LandownerProjects from "./pages/projects/LandownerProjects";
import TaskView from "./pages/TaskView";
import Reports from "./pages/Reports";

// Services pages
import Services from "./pages/services";
import Restoration from "./pages/services/Restoration";
import Landowner from "./pages/services/Landowner";
import Worker from "./pages/services/Worker";

// Community pages
import Community from "./pages/community";
import Forums from "./pages/community/Forums";
import Events from "./pages/community/Events";
import Stories from "./pages/community/Stories";

// Help pages
import Help from "./pages/help";
import FAQ from "./pages/help/FAQ";
import Contact from "./pages/help/Contact";
import Support from "./pages/help/Support";

// Settings
import Settings from "./pages/Settings";

// RouteGuard component
import RouteGuard from "./components/RouteGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="regreen-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RoleProvider>
            <SidebarProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/register" element={<Register />} />
                
                {/* Dynamic dashboard redirect based on role */}
                <Route path="/dashboard" element={<RouteGuard>
                  <Navigate to="/dashboard/landowner" replace />
                </RouteGuard>} />
                
                {/* Layout with authenticated routes */}
                <Route element={<Layout />}>
                  {/* Role-specific dashboards */}
                  <Route path="/dashboard/landowner" element={<RouteGuard roleRequired="landowner"><LandownerDashboard /></RouteGuard>} />
                  <Route path="/dashboard/worker" element={<RouteGuard roleRequired="worker"><WorkerDashboard /></RouteGuard>} />
                  <Route path="/dashboard/community" element={<RouteGuard roleRequired="community"><CommunityDashboard /></RouteGuard>} />
                  
                  {/* Common routes available to all authenticated users */}
                  <Route path="/projects" element={<RouteGuard><LandownerProjects /></RouteGuard>} />
                  <Route path="/my-properties" element={<RouteGuard roleRequired="landowner"><LandownerProjects /></RouteGuard>} />
                  <Route path="/map" element={<RouteGuard><MapView /></RouteGuard>} />
                  <Route path="/tasks/:taskId" element={<RouteGuard><TaskView /></RouteGuard>} />
                  <Route path="/tasks/current" element={<RouteGuard><TaskView /></RouteGuard>} />
                  <Route path="/reports" element={<RouteGuard><Reports /></RouteGuard>} />
                  <Route path="/settings" element={<RouteGuard><Settings /></RouteGuard>} />
                  
                  {/* Community routes */}
                  <Route path="/community" element={<RouteGuard><Community /></RouteGuard>} />
                  <Route path="/community/forums" element={<RouteGuard><Forums /></RouteGuard>} />
                  <Route path="/community/events" element={<RouteGuard><Events /></RouteGuard>} />
                  <Route path="/community/stories" element={<RouteGuard><Stories /></RouteGuard>} />
                  
                  {/* Services routes - with dynamic content based on role */}
                  <Route path="/services" element={<RouteGuard><Services /></RouteGuard>} />
                  <Route path="/services/restoration" element={<RouteGuard><Restoration /></RouteGuard>} />
                  <Route path="/services/landowner" element={<RouteGuard><Landowner /></RouteGuard>} />
                  <Route path="/services/worker" element={<RouteGuard><Worker /></RouteGuard>} />
                  
                  {/* Help routes */}
                  <Route path="/help" element={<RouteGuard><Help /></RouteGuard>} />
                  <Route path="/help/faq" element={<RouteGuard><FAQ /></RouteGuard>} />
                  <Route path="/help/contact" element={<RouteGuard><Contact /></RouteGuard>} />
                  <Route path="/help/support" element={<RouteGuard><Support /></RouteGuard>} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SidebarProvider>
          </RoleProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
