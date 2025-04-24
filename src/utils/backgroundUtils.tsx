
import { ReactNode } from "react";

// Get the gradient background based on user role
export const getBgGradient = (role: string | null) => {
  switch(role) {
    case 'landowner':
      return "from-regreen-100/50 to-regreen-200/50 dark:from-regreen-900/30 dark:to-regreen-800/30";
    case 'worker':
      return "from-blue-100/50 to-blue-200/50 dark:from-blue-900/30 dark:to-blue-800/30";
    case 'community':
      return "from-amber-100/50 to-amber-200/50 dark:from-amber-900/30 dark:to-amber-800/30";
    default:
      return "from-regreen-50/50 to-regreen-100/50 dark:from-regreen-900/20 dark:to-regreen-800/20";
  }
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
