
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MobileNavbar from "./MobileNavbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-regreen-50/50 to-white dark:from-regreen-950/50 dark:to-regreen-900/50 transition-colors duration-300">
      {!isMobile && <AppSidebar />}
      {isMobile && <MobileNavbar />}
      <motion.main 
        className="flex-1 p-4 md:p-6 overflow-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {!isMobile && (
          <div className="mb-4 md:hidden">
            <SidebarTrigger />
          </div>
        )}
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
        <footer className="mt-20 text-center text-sm text-muted-foreground py-6">
          <p>© {new Date().getFullYear()} ReGreen. All rights reserved.</p>
        </footer>
      </motion.main>
    </div>
  );
};

export default Layout;
