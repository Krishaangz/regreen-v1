
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter 
} from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";
import { useRole } from "@/contexts/RoleContext";
import RoleIndicator from "./sidebar/RoleIndicator";
import MenuItems from "./sidebar/MenuItems";
import LogoutButton from "./sidebar/LogoutButton";
import { getSidebarTheme } from "./sidebar/roleUtils";
import { getMenuItems } from "./sidebar/menuItemsConfig";

const AppSidebar = () => {
  const { role, setRole } = useRole();
  const [menuItems, setMenuItems] = useState<any[]>([]);
  
  // Handle logout
  const handleLogout = () => {
    setRole(null);
  };
  
  // Set up role-specific menu items
  useEffect(() => {
    setMenuItems(getMenuItems(role));
  }, [role]);
  
  return (
    <Sidebar className={`${getSidebarTheme(role)} text-white`}>
      <SidebarHeader className="flex items-center p-4">
        <Link to="/" className="flex items-center gap-2 flex-1">
          <img 
            src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
            alt="ReGreen Logo" 
            className="w-8 h-8" 
          />
          <span className="text-xl font-semibold">ReGreen</span>
        </Link>
        <ThemeToggle />
      </SidebarHeader>
      
      {/* Role indicator */}
      <RoleIndicator role={role} />
      
      <SidebarContent>
        {/* Menu items */}
        <MenuItems menuItems={menuItems} role={role} />
        
        {/* Logout button */}
        <LogoutButton role={role} onLogout={handleLogout} />
      </SidebarContent>
      
      <SidebarFooter className="p-4 text-center text-sm text-white/60">
        ReGreen v1.0 &copy; {new Date().getFullYear()}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
