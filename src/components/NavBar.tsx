
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close menu and dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { 
      label: "About", 
      path: "/about" 
    },
    { 
      label: "Projects", 
      path: "/projects" 
    },
    { 
      label: "Services", 
      path: "/services",
      dropdown: [
        { label: "Eco-Restoration", path: "/services/restoration" },
        { label: "Landowner Services", path: "/services/landowner" },
        { label: "Worker Programs", path: "/services/worker" }
      ]
    },
    { 
      label: "Community", 
      path: "/community",
      dropdown: [
        { label: "Forums", path: "/community/forums" },
        { label: "Events", path: "/community/events" },
        { label: "Success Stories", path: "/community/stories" }
      ]
    },
    { 
      label: "Contact", 
      path: "/help/contact" 
    }
  ];

  return (
    <nav className="bg-white/90 dark:bg-regreen-900/90 backdrop-blur-sm py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between" ref={menuRef}>
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
            alt="ReGreen Logo" 
            className="w-8 h-8" 
          />
          <span className="text-xl font-semibold text-regreen-800 dark:text-regreen-100">ReGreen</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="relative btn-interactive"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <>
                  <button 
                    onClick={() => toggleDropdown(item.label)}
                    className="text-regreen-800 dark:text-regreen-100 hover:text-regreen-600 dark:hover:text-regreen-300 font-medium flex items-center gap-1 btn-interactive"
                  >
                    {item.label}
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.label ? "rotate-180" : ""
                    )} />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-regreen-900 rounded-md shadow-lg py-2 min-w-40 animate-fade-in">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-regreen-800 dark:text-regreen-100 hover:bg-regreen-50 dark:hover:bg-regreen-800/50 hover-scale"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-regreen-800 dark:text-regreen-100 hover:text-regreen-600 dark:hover:text-regreen-300 font-medium hover-scale"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" className="border-regreen-600 text-regreen-600 dark:border-regreen-400 dark:text-regreen-400 hover-scale">
              <Link to="/dashboard">Login</Link>
            </Button>
            <Button asChild className="bg-regreen-600 hover:bg-regreen-700 text-white hover-scale">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-regreen-900 shadow-md animate-slide-in overflow-hidden">
          <div className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full px-3 py-2 text-regreen-800 dark:text-regreen-100 hover:bg-regreen-50 dark:hover:bg-regreen-800/50 rounded-md"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.label ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      activeDropdown === item.label ? "max-h-60" : "max-h-0"
                    )}>
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.path}
                          to={subItem.path}
                          className="block pl-6 pr-3 py-2 text-regreen-800 dark:text-regreen-100 hover:bg-regreen-50 dark:hover:bg-regreen-800/50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path}
                    className="block px-3 py-2 text-regreen-800 dark:text-regreen-100 hover:bg-regreen-50 dark:hover:bg-regreen-800/50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100 dark:border-regreen-800">
              <Button asChild variant="outline" className="w-full border-regreen-600 text-regreen-600 dark:border-regreen-400 dark:text-regreen-400">
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild className="w-full bg-regreen-600 hover:bg-regreen-700 text-white">
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
