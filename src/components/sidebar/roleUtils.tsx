
import { Globe, Hand, Users, AlertTriangle } from "lucide-react";
import React from "react";

// Get sidebar theme color based on user role
export const getSidebarTheme = (role: string | null) => {
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
export const getAccentColor = (role: string | null) => {
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
export const getHoverColor = (role: string | null) => {
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

// Get role icon based on user role
export const getRoleIcon = (role: string | null) => {
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
