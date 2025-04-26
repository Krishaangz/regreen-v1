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
  Wallet
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
  
  // Show wallet only for landowner and worker roles
  const walletItem = {
    label: "Wallet",
    path: "/wallet",
    icon: Wallet,
    hidden: role === 'community'
  };
  
  // Shared items across all roles but with potential customizations per role
  sharedItems = [
    {
      label: "Map View",
      path: role === 'landowner' ? "/landowner-map" : 
            role === 'worker' ? "/worker-map" : 
            role === 'community' ? "/community-map" : "/map",
      icon: Map,
    },
    {
      label: "Projects",
      path: role === 'landowner' ? "/projects" : 
            role === 'worker' ? "/worker-projects" : 
            role === 'community' ? "/community-projects" : "/projects",
      icon: TreeDeciduous,
    },
    // Wallet item position based on role
    ...(role !== 'community' ? [walletItem] : []),
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
        { label: "User Guides", path: "/help/guides" },
        { label: "Tips & Best Practices", path: "/help/tips" },
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
          path: "/landowner-reports",
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
          path: "/worker-schedule", 
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
          label: "Community Forum",
          path: "/community/forums",
          icon: MessageSquare,
        }
      ];
      break;
      
    default:
      // If no role, show generic items only
      roleSpecificItems = [];
  }
  
  // Combine the menu items in the desired order
  return [...baseMenuItems, ...roleSpecificItems, ...sharedItems].filter(item => !item.hidden);
};
