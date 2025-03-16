
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { getAccentColor, getHoverColor } from "./roleUtils";

interface MenuItem {
  label: string;
  path: string;
  icon?: React.ElementType;
  external?: boolean;
  submenu?: Array<{
    label: string;
    path: string;
  }>;
}

interface MenuItemsProps {
  menuItems: MenuItem[];
  role: string | null;
}

const MenuItems = ({ menuItems, role }: MenuItemsProps) => {
  const location = useLocation();
  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              {item.submenu ? (
                <SidebarGroup>
                  <SidebarGroupLabel className={`flex items-center gap-3 px-3 py-2 rounded-md ${getHoverColor(role)} hover:text-white`}>
                    {item.icon && <item.icon size={18} />}
                    <span>{item.label}</span>
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.submenu.map((subItem) => (
                        <SidebarMenuItem key={subItem.path}>
                          <SidebarMenuButton asChild>
                            <Link 
                              to={subItem.path} 
                              className={cn(
                                "flex items-center gap-3 px-3 py-2 ml-6 rounded-md transition-colors duration-200",
                                location.pathname === subItem.path ? 
                                  getAccentColor(role) : 
                                  `${getHoverColor(role)} hover:text-white`
                              )}
                            >
                              <span>{subItem.label}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ) : (
                <SidebarMenuButton asChild>
                  {item.external ? (
                    <a 
                      href={item.path} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${getHoverColor(role)} hover:text-white`}
                    >
                      {item.icon && <item.icon size={18} />}
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
                        location.pathname === item.path || location.pathname.startsWith(item.path + "/") ? 
                          getAccentColor(role) : 
                          `${getHoverColor(role)} hover:text-white`
                      )}
                    >
                      {item.icon && <item.icon size={18} />}
                      <span>{item.label}</span>
                    </Link>
                  )}
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default MenuItems;
