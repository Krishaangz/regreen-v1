
import React, { useState } from "react";
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
import { ChevronDown, ChevronRight } from "lucide-react";

interface MenuItem {
  label: string;
  path: string;
  icon?: React.ElementType;
  external?: boolean;
  dropdownItems?: Array<{
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
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  
  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };
  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              {item.dropdownItems ? (
                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={cn(
                      "flex items-center justify-between w-full gap-3 px-3 py-2 rounded-md transition-colors duration-200",
                      isActive(item.path) ? 
                        getAccentColor(role) : 
                        `${getHoverColor(role)} hover:text-white`
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon size={18} />}
                      <span>{item.label}</span>
                    </div>
                    {openDropdowns[item.label] ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  
                  {openDropdowns[item.label] && (
                    <div className="pl-6 mt-1 space-y-1">
                      {item.dropdownItems.map((subItem) => (
                        <SidebarMenuButton key={subItem.path} asChild>
                          <Link 
                            to={subItem.path} 
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
                              location.pathname === subItem.path ? 
                                getAccentColor(role) : 
                                `${getHoverColor(role)} hover:text-white`
                            )}
                          >
                            <span>{subItem.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      ))}
                    </div>
                  )}
                </div>
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
                        isActive(item.path) ? 
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
