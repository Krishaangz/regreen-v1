
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MobileNavbar from "./MobileNavbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRole } from "@/contexts/RoleContext";
import { useTheme } from "@/contexts/ThemeContext";
import { AnimatePresence } from "framer-motion";
import { getBgGradient, getBgPattern } from "@/utils/backgroundUtils";
import PageTransition from "./layout/PageTransition";
import Footer from "./layout/Footer";

const Layout = () => {
  const isMobile = useIsMobile();
  const { role } = useRole();
  const { colorTheme } = useTheme();
  const location = useLocation();
  
  // Check if current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${getBgGradient(role, colorTheme)} transition-colors duration-500 relative ${getBgPattern(role)}`}>
      <div className="flex h-screen overflow-hidden">
        {!isMobile && <AppSidebar />}
        {isMobile && <MobileNavbar />}
        
        <AnimatePresence mode="wait">
          <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative">
            {!isMobile && (
              <div className="absolute top-4 left-4 z-50">
                <SidebarTrigger />
              </div>
            )}
            <main className="flex-1 overflow-y-auto p-6 md:p-8 w-full">
              <Outlet />
            </main>
            <Footer />
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
