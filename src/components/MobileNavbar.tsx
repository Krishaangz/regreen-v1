
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Home, LayoutDashboard, Settings, Users, FileText, HelpCircle, MapPin, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const mainMenuItems = [
  {
    label: "Home",
    path: "/",
    icon: Home
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard
  },
  {
    label: "Projects",
    path: "/projects",
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

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
              <X className={cn("h-5 w-5 absolute transition-opacity duration-300", 
                isMenuOpen ? "opacity-100" : "opacity-0")} />
            </Button>
            
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
                alt="ReGreen Logo" 
                className="w-7 h-7 animate-float" 
              />
              <span className="text-lg font-semibold text-regreen-800 dark:text-regreen-100">ReGreen</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-regreen-600">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild className="bg-regreen-600 hover:bg-regreen-700 text-white">
              <Link to="/register">Sign Up</Link>
            </Button>
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
      <div 
        ref={menuRef}
        className={cn(
          "fixed top-0 left-0 h-full bg-white dark:bg-regreen-900 shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out w-3/4 max-w-xs",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-100 dark:border-regreen-800 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
              alt="ReGreen Logo" 
              className="w-8 h-8" 
            />
            <span className="text-xl font-semibold text-regreen-800 dark:text-regreen-100">ReGreen</span>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(false)}
            className="dark:text-white"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="py-4">
          {mainMenuItems.map((item) => (
            <div key={item.label} className="mb-1">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={cn(
                      "flex items-center justify-between w-full px-4 py-3 hover:bg-regreen-50 dark:hover:bg-regreen-800/50 transition-colors",
                      expandedSubmenu === item.label ? "bg-regreen-50 dark:bg-regreen-800/50" : ""
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-regreen-600 dark:text-regreen-400 animate-float" />
                      <span className="text-regreen-800 dark:text-regreen-100">{item.label}</span>
                    </div>
                    <ChevronRight className={cn(
                      "h-4 w-4 text-gray-400 transition-transform duration-200",
                      expandedSubmenu === item.label ? "rotate-90" : ""
                    )} />
                  </button>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 dark:bg-regreen-800/30",
                    expandedSubmenu === item.label ? "max-h-60" : "max-h-0"
                  )}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={cn(
                          "block pl-12 pr-4 py-2 hover:bg-regreen-100 dark:hover:bg-regreen-800/70 transition-colors text-gray-700 dark:text-regreen-200",
                          location.pathname === subItem.path ? "bg-regreen-100 dark:bg-regreen-800/70 font-medium" : ""
                        )}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 hover:bg-regreen-50 dark:hover:bg-regreen-800/50 transition-colors",
                    location.pathname === item.path ? "bg-regreen-50 dark:bg-regreen-800/50 font-medium" : ""
                  )}
                >
                  <item.icon className="h-5 w-5 text-regreen-600 dark:text-regreen-400 animate-float" />
                  <span className="text-regreen-800 dark:text-regreen-100">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
          
          <div className="border-t border-gray-100 dark:border-regreen-800 mt-4 pt-4 px-4">
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 hover:bg-regreen-50 dark:hover:bg-regreen-800/50 rounded-md transition-colors"
            >
              <LogOut className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">Logout</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay when menu is open */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default MobileNavbar;
