
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MobileNavbar from "./MobileNavbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRole } from "@/contexts/RoleContext";
import { AnimatePresence } from "framer-motion";
import { getBgGradient, getBgPattern } from "@/utils/backgroundUtils";
import PageTransition from "./layout/PageTransition";
import Footer from "./layout/Footer";

const Layout = () => {
  const isMobile = useIsMobile();
  const { role } = useRole();
  const location = useLocation();
  
  // Check if current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div className={`min-h-screen flex flex-col w-full bg-gradient-to-br ${getBgGradient(role)} transition-colors duration-500 relative ${getBgPattern(role)}`}>
      <div className="flex flex-1 w-full overflow-hidden">
        {!isMobile && <AppSidebar />}
        {isMobile && <MobileNavbar />}
        
        <AnimatePresence mode="wait">
          <PageTransition locationKey={location.pathname}>
            <div className={`flex-1 overflow-x-hidden flex flex-col min-h-screen w-full`}>
              {!isMobile && (
                <div className="mb-4 md:hidden">
                  <SidebarTrigger />
                </div>
              )}
              <main className={`flex-1 w-full ${!isHomePage ? 'max-w-full px-6' : ''}`}>
                <Outlet />
              </main>
              <Footer />
            </div>
          </PageTransition>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
