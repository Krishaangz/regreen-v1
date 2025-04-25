
import React from "react";
import { Sun, Moon, Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeModeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Mode</h3>
      <p className="text-muted-foreground mb-4">Choose between light and dark mode</p>
      <div className="grid grid-cols-2 gap-4">
        <div 
          className={`border rounded-lg p-4 cursor-pointer transition-all flex flex-col items-center ${!isDarkMode ? "ring-2 ring-offset-2" : ""}`}
          onClick={() => !isDarkMode || toggleDarkMode()}
        >
          <Sun className="h-10 w-10 mb-2" />
          <span className="font-medium">Light Mode</span>
          {!isDarkMode && <Check className="mt-2 h-5 w-5 text-green-500" />}
        </div>
        <div 
          className={`border rounded-lg p-4 cursor-pointer transition-all flex flex-col items-center ${isDarkMode ? "ring-2 ring-offset-2" : ""}`}
          onClick={() => isDarkMode || toggleDarkMode()}
        >
          <Moon className="h-10 w-10 mb-2" />
          <span className="font-medium">Dark Mode</span>
          {isDarkMode && <Check className="mt-2 h-5 w-5 text-green-500" />}
        </div>
      </div>
    </div>
  );
};

export default ThemeModeSwitcher;
