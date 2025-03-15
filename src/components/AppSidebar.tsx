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
  FileText,
  Home,
  Briefcase,
  Building,
  Camera,
  Globe,
  Hand,
  MapPin,
  Leaf,
  Calendar,
  MessageSquare,
  BookOpen,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { useRole } from "@/contexts/RoleContext";
import { useState, useEffect } from "react";

const AppSidebar = () => {
  const location = useLocation();
  const { role, setRole } = useRole();
  const [menuItems, setMenuItems] = useState<any[]>([]);
  
  // Handle logout
  const handleLogout = () => {
    setRole(null);
  };
  
  // Set up role-specific menu items
  useEffect(() => {
    // Base menu items that all roles have
    const baseMenuItems = [
      {
        label: "Home",
        path: "/", // External to the app's layout
        icon: Home,
        external: true
      }
    ];
    
    // Common menu items for all roles
    const commonMenuItems = [
      {
        label: "Map View",
        path: "/map",
        icon: MapPin,
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
    
    let roleSpecificItems: any[] = [];
    
    // Role-specific menu items
    switch(role) {
      case 'landowner':
        roleSpecificItems = [
          {
            label: "Landowner Dashboard",
            path: "/dashboard/landowner",
            icon: LayoutDashboard,
          },
          {
            label: "My Properties",
            path: "/my-properties",
            icon: Building,
          },
          {
            label: "Projects",
            path: "/projects",
            icon: TreeDeciduous,
          },
          {
            label: "Reports",
            path: "/reports",
            icon: FileSpreadsheet,
          }
        ];
        break;
        
      case 'worker':
        roleSpecificItems = [
          {
            label: "Worker Dashboard",
            path: "/dashboard/worker",
            icon: LayoutDashboard,
          },
          {
            label: "My Tasks",
            path: "/tasks/current",
            icon: Briefcase,
          },
          {
            label: "Available Projects",
            path: "/projects",
            icon: TreeDeciduous,
          },
          {
            label: "Work Schedule",
            path: "/reports", // Reusing existing page for now
            icon: Calendar,
          }
        ];
        break;
        
      case 'community':
        roleSpecificItems = [
          {
            label: "Community Dashboard",
            path: "/dashboard/community",
            icon: LayoutDashboard,
          },
          {
            label: "Local Projects",
            path: "/projects",
            icon: TreeDeciduous,
          },
          {
            label: "Discussion Forums",
            path: "/community/forums",
            icon: MessageSquare,
          },
          {
            label: "Success Stories",
            path: "/community/stories",
            icon: BookOpen,
          }
        ];
        break;
        
      default:
        // If no role, show generic items only
        roleSpecificItems = [];
    }
    
    // Combine the menu items in the desired order
    setMenuItems([...baseMenuItems, ...roleSpecificItems, ...commonMenuItems]);
  }, [role]);
  
  // Get sidebar theme color based on user role
  const getSidebarTheme = () => {
    switch(role) {
      case 'landowner':
        return "bg-gradient-to-b from-regreen-700 to-regreen-800";
      case 'worker':
        return "bg-gradient-to-b from-blue-700 to-blue-800";
      case 'community':
        return "bg-gradient-to-b from-amber-700 to-amber-800";
      default:
        return "bg-gradient-to-b from-regreen-700 to-regreen-800";
    }
  };
  
  // Get accent colors based on user role
  const getAccentColor = () => {
    switch(role) {
      case 'landowner':
        return "bg-regreen-600 text-white";
      case 'worker':
        return "bg-blue-600 text-white";
      case 'community':
        return "bg-amber-600 text-white";
      default:
        return "bg-regreen-600 text-white";
    }
  };
  
  // Get hover colors based on user role
  const getHoverColor = () => {
    switch(role) {
      case 'landowner':
        return "hover:bg-regreen-600/30";
      case 'worker':
        return "hover:bg-blue-600/30";
      case 'community':
        return "hover:bg-amber-600/30";
      default:
        return "hover:bg-regreen-600/30";
    }
  };
  
  const getRoleIcon = () => {
    switch(role) {
      case 'landowner':
        return <Globe className="w-5 h-5 mr-2" />;
      case 'worker':
        return <Hand className="w-5 h-5 mr-2" />;
      case 'community':
        return <Users className="w-5 h-5 mr-2" />;
      default:
        return <AlertTriangle className="w-5 h-5 mr-2" />;
    }
  };
  
  return (
    <Sidebar className={`${getSidebarTheme()} text-white`}>
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
      <div className="px-4 py-2 mb-2">
        <div className="flex items-center justify-between px-3 py-2 rounded-md bg-white/10 backdrop-blur-sm">
          <div className="flex items-center">
            {getRoleIcon()}
            <span className="capitalize">{role || "Guest"}</span>
          </div>
          <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">Active</span>
        </div>
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  {item.submenu ? (
                    <SidebarGroup>
                      <SidebarGroupLabel className={`flex items-center gap-3 px-3 py-2 rounded-md ${getHoverColor()} hover:text-white`}>
                        <item.icon size={18} />
                        <span>{item.label}</span>
                      </SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {item.submenu.map((subItem: any) => (
                            <SidebarMenuItem key={subItem.path}>
                              <SidebarMenuButton asChild>
                                <Link 
                                  to={subItem.path} 
                                  className={cn(
                                    "flex items-center gap-3 px-3 py-2 ml-6 rounded-md transition-colors duration-200",
                                    location.pathname === subItem.path ? 
                                      getAccentColor() : 
                                      `${getHoverColor()} hover:text-white`
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
                          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${getHoverColor()} hover:text-white`}
                        >
                          <item.icon size={18} />
                          <span>{item.label}</span>
                        </a>
                      ) : (
                        <Link 
                          to={item.path} 
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
                            location.pathname === item.path || location.pathname.startsWith(item.path + "/") ? 
                              getAccentColor() : 
                              `${getHoverColor()} hover:text-white`
                          )}
                        >
                          <item.icon size={18} />
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
        
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button 
                    onClick={handleLogout} 
                    className={`flex w-full items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${getHoverColor()} hover:text-white`}
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-center text-sm text-white/60">
        ReGreen v1.0 &copy; {new Date().getFullYear()}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
