
import { 
  LayoutDashboard, 
  Map, 
  Settings, 
  Users, 
  FileSpreadsheet, 
  TreeDeciduous, 
  HelpCircle,
  FileText,
  Home,
  Briefcase,
  Building,
  Calendar,
  MessageSquare,
  BookOpen,
  MapPin,
  Globe,
} from "lucide-react";
import React from "react";

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
    label: "Projects",
    path: "/projects",
    icon: TreeDeciduous,
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

// Function to get menu items based on role
export const getMenuItems = (role: string | null) => {
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
          label: "Discussion Forums",
          path: "/community/forums",
          icon: MessageSquare,
        },
        {
          label: "Events",
          path: "/community/events",
          icon: Calendar,
        }
      ];
      break;
      
    default:
      // If no role, show generic items only
      roleSpecificItems = [];
  }
  
  // Combine the menu items in the desired order
  return [...baseMenuItems, ...roleSpecificItems, ...commonMenuItems];
};
