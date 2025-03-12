
import { Link, useLocation } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarFooter 
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Map, 
  Settings, 
  LogOut, 
  Users, 
  FileSpreadsheet, 
  TreeDeciduous, 
  HelpCircle,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Projects",
    path: "/projects",
    icon: TreeDeciduous
  },
  {
    label: "Map View",
    path: "/map",
    icon: Map
  },
  {
    label: "Community",
    path: "/community",
    icon: Users,
    submenu: [
      { label: "Forums", path: "/community/forums" },
      { label: "Events", path: "/community/events" },
      { label: "Success Stories", path: "/community/stories" }
    ]
  },
  {
    label: "Services",
    path: "/services",
    icon: FileText,
    submenu: [
      { label: "Eco-Restoration", path: "/services/restoration" },
      { label: "Landowner Services", path: "/services/landowner" },
      { label: "Worker Programs", path: "/services/worker" }
    ]
  },
  {
    label: "Reports",
    path: "/reports",
    icon: FileSpreadsheet
  },
  {
    label: "Help Center",
    path: "/help",
    icon: HelpCircle,
    submenu: [
      { label: "FAQ", path: "/help/faq" },
      { label: "Contact Us", path: "/help/contact" },
      { label: "Support", path: "/help/support" }
    ]
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings
  }
];

const AppSidebar = () => {
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center p-4">
        <Link to="/" className="flex items-center gap-2 flex-1">
          <img 
            src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
            alt="ReGreen Logo" 
            className="w-8 h-8 animate-float" 
          />
          <span className="text-xl font-semibold">ReGreen</span>
        </Link>
        <ThemeToggle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  {item.submenu ? (
                    <SidebarGroup collapsible>
                      <SidebarGroupLabel className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground">
                        <item.icon size={18} className="animate-float" />
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
                                    "flex items-center gap-3 px-3 py-2 ml-6 rounded-md hover-scale",
                                    location.pathname === subItem.path ? 
                                      "bg-sidebar-accent text-sidebar-accent-foreground" : 
                                      "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
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
                      <Link 
                        to={item.path} 
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md hover-scale",
                          location.pathname === item.path ? 
                            "bg-sidebar-accent text-sidebar-accent-foreground" : 
                            "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon size={18} className="animate-float" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground hover-scale">
                    <LogOut size={18} />
                    <span>Logout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-center text-sm text-sidebar-foreground/70">
        ReGreen v1.0 &copy; {new Date().getFullYear()}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
