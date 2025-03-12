
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="mb-4 md:hidden">
          <SidebarTrigger />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
