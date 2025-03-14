import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Home, 
  LayoutDashboard, 
  Settings, 
  Users, 
  FileText, 
  HelpCircle, 
  MapPin, 
  LogOut, 
  Briefcase, 
  Building, 
  TreeDeciduous, 
  FileSpreadsheet,
  Globe,
  Hand,
  Calendar,
  MessageSquare,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useRole } from "@/contexts/RoleContext";
import { LucideIcon } from "lucide-react";

// Define types for menu items
interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
  submenu?: SubMenuItem[];
}

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { role, setRole } = useRole();
  
  // Handle logout
  const handleLogout = () => {
    setIsMenuOpen(false);
    setRole(null);
    navigate('/');
  };
  
  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Build breadcrumbs based on current path
  const buildBreadcrumbs = () => {
    if (location.pathname === "/") return [];

    const paths = location.pathname.split('/').filter(Boolean);
    
    return paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join('/')}`;
      return {
        label: path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' '),
        path: url
      };
    });
  };

  const breadcrumbs = buildBreadcrumbs();

  const toggleSubmenu = (label: string) => {
    setExpandedSubmenu(expandedSubmenu === label ? null : label);
  };
  
  // Get role-specific menu items
  const getRoleMenuItems = (): MenuItem[] => {
    switch(role) {
      case 'landowner':
        return [
          {
            label: "Landowner Dashboard",
            path: "/dashboard/landowner",
            icon: LayoutDashboard
          },
          {
            label: "My Properties",
            path: "/my-properties",
            icon: Building
          },
          {
            label: "Projects",
            path: "/projects",
            icon: TreeDeciduous
          },
          {
            label: "Reports",
            path: "/reports",
            icon: FileSpreadsheet
          }
        ];
        
      case 'worker':
        return [
          {
            label: "Worker Dashboard",
            path: "/dashboard/worker",
            icon: LayoutDashboard
          },
          {
            label: "My Tasks",
            path: "/tasks/current",
            icon: Briefcase
          },
          {
            label: "Available Projects",
            path: "/projects",
            icon: TreeDeciduous
          },
          {
            label: "Work Schedule",
            path: "/reports", // Reusing existing page for now
            icon: Calendar
          }
        ];
        
      case 'community':
        return [
          {
            label: "Community Dashboard",
            path: "/dashboard/community",
            icon: LayoutDashboard
          },
          {
            label: "Local Projects",
            path: "/projects",
            icon: TreeDeciduous
          },
          {
            label: "Discussion Forums",
            path: "/community/forums",
            icon: MessageSquare
          },
          {
            label: "Success Stories",
            path: "/community/stories",
            icon: BookOpen
          }
        ];
        
      default:
        return [];
    }
  };
  
  // Base menu items that all users will see
  const baseMenuItems: MenuItem[] = [
    {
      label: "Home",
      path: "/",
      icon: Home
    }
  ];
  
  // Common menu items for all authenticated users
  const commonMenuItems: MenuItem[] = [
    {
      label: "Map View",
      path: "/map",
      icon: MapPin
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
  
  // Combine the menu items
  const roleMenuItems = getRoleMenuItems();
  const allMenuItems: MenuItem[] = [...baseMenuItems, ...roleMenuItems, ...commonMenuItems];
  
  // Get theme based on user role
  const getRoleColors = () => {
    switch(role) {
      case 'landowner':
        return {
          gradient: "bg-gradient-to-b from-regreen-700 to-regreen-800",
          accent: "bg-regreen-600",
          hover: "hover:bg-regreen-600/20 dark:hover:bg-regreen-600/30",
          activeBg: "bg-regreen-600/20 dark:bg-regreen-600/30"
        };
      case 'worker':
        return {
          gradient: "bg-gradient-to-b from-blue-700 to-blue-800",
          accent: "bg-blue-600",
          hover: "hover:bg-blue-600/20 dark:hover:bg-blue-600/30",
          activeBg: "bg-blue-600/20 dark:bg-blue-600/30"
        };
      case 'community':
        return {
          gradient: "bg-gradient-to-b from-amber-700 to-amber-800",
          accent: "bg-amber-600",
          hover: "hover:bg-amber-600/20 dark:hover:bg-amber-600/30",
          activeBg: "bg-amber-600/20 dark:bg-amber-600/30"
        };
      default:
        return {
          gradient: "bg-gradient-to-b from-regreen-700 to-regreen-800",
          accent: "bg-regreen-600",
          hover: "hover:bg-regreen-600/20 dark:hover:bg-regreen-600/30",
          activeBg: "bg-regreen-600/20 dark:bg-regreen-600/30"
        };
    }
  };
  
  const colors = getRoleColors();
  
  const getRoleIcon = () => {
    switch(role) {
      case 'landowner':
        return <Globe className="h-5 w-5 text-regreen-500 dark:text-regreen-400" />;
      case 'worker':
        return <Hand className="h-5 w-5 text-blue-500 dark:text-blue-400" />;
      case 'community':
        return <Users className="h-5 w-5 text-amber-500 dark:text-amber-400" />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="bg-white/90 dark:bg-regreen-900/90 backdrop-blur-sm py-3 px-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="relative"
            >
              <Menu className={cn("h-5 w-5 transition-opacity duration-300", 
                isMenuOpen ? "opacity-0" : "opacity-100")} />
              <X className={cn("h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300", 
                isMenuOpen ? "opacity-100" : "opacity-0")} />
            </Button>
            
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
                alt="ReGreen Logo" 
                className="w-7 h-7" 
              />
              <span className="text-lg font-semibold text-regreen-800 dark:text-regreen-100">ReGreen</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {role ? (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-regreen-100/50 dark:bg-regreen-800/50 text-xs font-medium">
                {getRoleIcon()}
                <span className="capitalize">{role}</span>
              </div>
            ) : (
              <Button asChild className="bg-regreen-600 hover:bg-regreen-700 text-white">
                <Link to="/register">Join</Link>
              </Button>
            )}
          </div>
        </div>
        
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="max-w-6xl mx-auto px-1 pt-2 flex items-center text-sm text-muted-foreground overflow-x-auto scrollbar-none">
            <Link to="/" className="hover:text-regreen-600 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center">
                <ChevronRight className="h-3 w-3 mx-1" />
                <Link 
                  to={crumb.path} 
                  className={cn(
                    "hover:text-regreen-600 transition-colors whitespace-nowrap",
                    idx === breadcrumbs.length - 1 ? "font-medium text-regreen-600" : ""
                  )}
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>
      
      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div 
              ref={menuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`fixed top-0 left-0 h-full shadow-xl z-50 overflow-y-auto w-3/4 max-w-xs ${colors.gradient} text-white`}
            >
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
                    alt="ReGreen Logo" 
                    className="w-8 h-8" 
                  />
                  <span className="text-xl font-semibold text-white">ReGreen</span>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* User role indicator */}
              {role && (
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-md">
                    {getRoleIcon()}
                    <span className="capitalize font-medium">{role}</span>
                  </div>
                </div>
              )}
              
              <div className="py-4">
                {allMenuItems.map((item) => (
                  <div key={item.label} className="mb-1">
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.label)}
                          className={cn(
                            "flex items-center justify-between w-full px-4 py-3 hover:bg-white/10 transition-colors",
                            expandedSubmenu === item.label ? "bg-white/10" : ""
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-white/80" />
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight className={cn(
                            "h-4 w-4 text-white/60 transition-transform duration-200",
                            expandedSubmenu === item.label ? "rotate-90" : ""
                          )} />
                        </button>
                        
                        <AnimatePresence>
                          {expandedSubmenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-white/5"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className={cn(
                                    "block pl-12 pr-4 py-2.5 hover:bg-white/10 transition-colors",
                                    location.pathname === subItem.path ? "bg-white/10 font-medium" : ""
                                  )}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors",
                          location.pathname === item.path ? "bg-white/10 font-medium" : ""
                        )}
                      >
                        <item.icon className="h-5 w-5 text-white/80" />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {role && (
                  <div className="border-t border-white/10 mt-4 pt-4">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 w-full text-left transition-colors"
                    >
                      <LogOut className="h-5 w-5 text-white/80" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-white/10 text-center text-white/60 text-sm">
                ReGreen v1.0 &copy; {new Date().getFullYear()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
