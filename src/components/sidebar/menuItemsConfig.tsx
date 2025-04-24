
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
  ChevronDown,
  ChevronRight
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

// Function to get menu items based on role
export const getMenuItems = (role: string | null) => {
  let roleSpecificItems: any[] = [];
  let sharedItems: any[] = [];
  
  // Shared items across all roles but with potential customizations per role
  sharedItems = [
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
      dropdownItems: [
        { label: "Forums", path: "/community/forums" },
        { label: "Events", path: "/community/events" },
        { label: "Success Stories", path: "/community/stories" }
      ]
    },
    {
      label: "Services",
      path: "/services",
      icon: FileText,
      dropdownItems: [
        { label: "Eco-Restoration", path: "/services/restoration" },
        { label: "Landowner Services", path: "/services/landowner" },
        { label: "Worker Programs", path: "/services/worker" }
      ]
    },
    {
      label: "Help Center",
      path: "/help",
      icon: HelpCircle,
      dropdownItems: [
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
          label: "Landowner Reports",
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
          path: "/reports", // Same path but different content
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
        }
      ];
      // Don't duplicate forums and events which are already in the Community dropdown
      break;
      
    default:
      // If no role, show generic items only
      roleSpecificItems = [];
  }
  
  // Combine the menu items in the desired order
  return [...baseMenuItems, ...roleSpecificItems, ...sharedItems];
};

