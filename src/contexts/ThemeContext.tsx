
import React, { createContext, useContext, useState, useEffect } from "react";
import { useTheme as useShadcnTheme } from "@/components/theme-provider";

type ColorTheme = "green" | "blue" | "purple" | "orange";

interface ThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme: shadcnTheme, setTheme: setShadcnTheme } = useShadcnTheme();
  const isDarkMode = shadcnTheme === "dark";

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem("color-theme");
    return (savedTheme as ColorTheme) || "green";
  });

  // Apply theme class to root element when color theme changes
  useEffect(() => {
    localStorage.setItem("color-theme", colorTheme);
    
    // Remove all theme classes
    document.documentElement.classList.remove("theme-green", "theme-blue", "theme-purple", "theme-orange");
    // Add the new theme class
    document.documentElement.classList.add(`theme-${colorTheme}`);
    
    console.log(`Theme changed to: ${colorTheme}`);
  }, [colorTheme]);

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setShadcnTheme(newTheme);
    console.log(`Dark mode toggled to: ${newTheme}`);
  };

  return (
    <ThemeContext.Provider value={{ 
      colorTheme, 
      setColorTheme, 
      isDarkMode,
      toggleDarkMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
