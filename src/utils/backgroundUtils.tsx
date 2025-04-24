
import { ReactNode } from "react";

// Get the gradient background based on user role and color theme
export const getBgGradient = (role: string | null, colorTheme: string = "green") => {
  // Base gradients for each role
  const roleGradients = {
    landowner: {
      green: "from-regreen-100/50 to-regreen-200/50 dark:from-regreen-900/30 dark:to-regreen-800/30",
      blue: "from-blue-100/50 to-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/30",
      purple: "from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30",
      orange: "from-orange-100/50 to-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/30"
    },
    worker: {
      green: "from-regreen-100/50 to-regreen-200/50 dark:from-regreen-900/30 dark:to-regreen-800/30",
      blue: "from-blue-100/50 to-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/30",
      purple: "from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30",
      orange: "from-orange-100/50 to-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/30"
    },
    community: {
      green: "from-regreen-100/50 to-regreen-200/50 dark:from-regreen-900/30 dark:to-regreen-800/30",
      blue: "from-blue-100/50 to-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/30",
      purple: "from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30",
      orange: "from-orange-100/50 to-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/30"
    },
    default: {
      green: "from-regreen-50/50 to-regreen-100/50 dark:from-regreen-900/20 dark:to-regreen-800/20",
      blue: "from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20",
      purple: "from-purple-50/50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/20",
      orange: "from-orange-50/50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/20"
    }
  };
  
  // Default to "default" role if role is null
  const roleKey = role || "default";
  
  // Return the gradient for the specified role and color theme
  // If the color theme doesn't exist, default to green
  return roleGradients[roleKey as keyof typeof roleGradients][colorTheme as keyof typeof roleGradients.default] || 
         roleGradients[roleKey as keyof typeof roleGradients].green;
};

// Get the pattern overlay based on user role
export const getBgPattern = (role: string | null) => {
  return "bg-grid-pattern";
};

// Get primary button color based on theme
export const getPrimaryButtonColor = (colorTheme: string) => {
  switch(colorTheme) {
    case 'blue':
      return "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
    case 'purple':
      return "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500";
    case 'orange':
      return "bg-orange-600 hover:bg-orange-700 focus:ring-orange-500";
    default: // green
      return "bg-regreen-600 hover:bg-regreen-700 focus:ring-regreen-500";
  }
};

// Get text color based on theme
export const getTextColor = (colorTheme: string) => {
  switch(colorTheme) {
    case 'blue':
      return "text-blue-600 dark:text-blue-400";
    case 'purple':
      return "text-purple-600 dark:text-purple-400";
    case 'orange':
      return "text-orange-600 dark:text-orange-400";
    default: // green
      return "text-regreen-600 dark:text-regreen-400";
  }
};

// Get border color based on theme
export const getBorderColor = (colorTheme: string) => {
  switch(colorTheme) {
    case 'blue':
      return "border-blue-200 dark:border-blue-800";
    case 'purple':
      return "border-purple-200 dark:border-purple-800";
    case 'orange':
      return "border-orange-200 dark:border-orange-800";
    default: // green
      return "border-regreen-200 dark:border-regreen-800";
  }
};
