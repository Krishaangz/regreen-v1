
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/1319075d-dc28-4353-964e-51a8fbbe3522.png" 
            alt="ReGreen Logo" 
            className="w-8 h-8" 
          />
          <span className="text-xl font-semibold text-regreen-800">ReGreen</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <Link to="/projects" className="text-regreen-800 hover:text-regreen-600 font-medium">
            Projects
          </Link>
          <Link to="/about" className="text-regreen-800 hover:text-regreen-600 font-medium">
            About Us
          </Link>
          <Link to="/contact" className="text-regreen-800 hover:text-regreen-600 font-medium">
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="border-regreen-600 text-regreen-600">
              <Link to="/dashboard">Login</Link>
            </Button>
            <Button asChild className="bg-regreen-600 hover:bg-regreen-700 text-white">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-in">
          <div className="flex flex-col p-4 space-y-3">
            <Link 
              to="/projects"
              className="px-3 py-2 text-regreen-800 hover:bg-regreen-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/about"
              className="px-3 py-2 text-regreen-800 hover:bg-regreen-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              className="px-3 py-2 text-regreen-800 hover:bg-regreen-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Button asChild variant="outline" className="w-full border-regreen-600 text-regreen-600">
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
