
import React from "react";
import { LogOut } from "lucide-react";
import { 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from "@/components/ui/sidebar";
import { getHoverColor } from "./roleUtils";

interface LogoutButtonProps {
  role: string | null;
  onLogout: () => void;
}

const LogoutButton = ({ role, onLogout }: LogoutButtonProps) => {
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button 
                onClick={onLogout} 
                className={`flex w-full items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${getHoverColor(role)} hover:text-white`}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default LogoutButton;
