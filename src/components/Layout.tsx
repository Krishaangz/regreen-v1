
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
    <div className={`min-h-screen flex w-full bg-gradient-to-br ${getBgGradient(role)} transition-colors duration-500 relative ${getBgPattern(role)}`}>
      {!isMobile && <AppSidebar />}
      {isMobile && <MobileNavbar />}
      <AnimatePresence mode="wait">
        <PageTransition locationKey={location.pathname}>
          {!isMobile && (
            <div className="mb-4 md:hidden">
              <SidebarTrigger />
            </div>
          )}
          <div className={`${isHomePage ? 'w-full' : 'max-w-7xl mx-auto'}`}>
            <Outlet />
          </div>
          <Footer />
        </PageTransition>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
