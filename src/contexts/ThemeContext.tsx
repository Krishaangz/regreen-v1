
import React, { createContext, useContext, useState, useEffect } from "react";

type ColorTheme = "green" | "blue" | "purple" | "orange";

interface ThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem("color-theme");
    return (savedTheme as ColorTheme) || "green";
  });

  // Save to localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("color-theme", colorTheme);
    
    // Apply theme class to root element
    document.documentElement.classList.remove("theme-green", "theme-blue", "theme-purple", "theme-orange");
    document.documentElement.classList.add(`theme-${colorTheme}`);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
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
