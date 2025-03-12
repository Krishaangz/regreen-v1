
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import MobileNavbar from "./MobileNavbar";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex w-full">
      {!isMobile && <AppSidebar />}
      {isMobile && <MobileNavbar />}
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        {!isMobile && (
          <div className="mb-4 md:hidden">
            <SidebarTrigger />
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
