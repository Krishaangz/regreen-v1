
import React from "react";

// Define gradient backgrounds based on user role
export const getBgGradient = (role: string | null) => {
  switch(role) {
    case 'landowner':
      return "from-regreen-50/80 via-regreen-50/60 to-white/80 dark:from-regreen-950/90 dark:via-regreen-900/80 dark:to-regreen-950/90";
    case 'worker':
      return "from-blue-50/80 via-regreen-50/60 to-white/80 dark:from-blue-950/90 dark:via-blue-900/80 dark:to-regreen-950/90";
    case 'community':
      return "from-amber-50/80 via-regreen-50/60 to-white/80 dark:from-amber-950/90 dark:via-amber-900/80 dark:to-regreen-950/90";
    default:
      return "from-regreen-50/80 to-white/80 dark:from-regreen-950/90 dark:to-regreen-900/80";
  }
};

// Get background patterns based on user role
export const getBgPattern = (role: string | null) => {
  let patternClasses = "after:absolute after:inset-0 after:opacity-[0.03] after:pointer-events-none after:bg-fixed ";
  
  switch(role) {
    case 'landowner':
      return patternClasses + "after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxNDUzMmQiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTUuNSAyMEg0Mi41TDQ0IDQ0SDMuOEwzLjEgMjBINi41TTEzIDIwTDEzLjMgNDRNMjEgMjBMMjEgNDRNMjkgMjBMMjguNyA0NE0zNyAyMEwzNi43IDQ0TTUxLjIgMjBINDhMNTAuOCA0NEg1NEw1MS4yIDIwWk01NiAyMEg1OEw1OCA0NEg1NnoiLz48L2c+PC9zdmc+')]";
    case 'worker':
      return patternClasses + "after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwYzRhNmUiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTI0LDQwIEwyNCwyMCBMMzYsNDAgTDM2LDIwIi8+PHBhdGggZD0iTTEyLDQwIEwxMiwyMCBMMTIsMjAgTDI0LDQwIEwyNCwyMCIvPjxwYXRoIGQ9Ik0zNiw0MCBMMzYsMjAgTDM2LDIwIEw0OCw0MCBMNDgsMjAiLz48L2c+PC9zdmc+')]";
    case 'community':
      return patternClasses + "after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM5MjQwMGUiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iOCIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iMjAiIHI9IjgiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjQwIiByPSI4Ii8+PC9nPjwvc3ZnPg==')]";
    default:
      return patternClasses + "after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxNDUzMmQiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTMwLDMwIEwzMCwxNSBMMTUsNDUgTDQ1LDE1IEwzMCw0NSBMNDUsNDUiLz48L2c+PC9zdmc+')]";
  }
};
