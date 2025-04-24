
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme as useShadcnTheme } from "@/components/theme-provider";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useShadcnTheme();
  const { colorTheme } = useTheme();

  // Apply color-specific styles based on the selected theme
  const getBgColor = () => {
    switch(colorTheme) {
      case "blue":
        return theme === "dark" ? "text-blue-400" : "text-blue-600";
      case "purple":
        return theme === "dark" ? "text-purple-400" : "text-purple-600";
      case "orange":
        return theme === "dark" ? "text-orange-400" : "text-orange-600";
      default:
        return theme === "dark" ? "text-regreen-400" : "text-regreen-600";
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="btn-interactive transition-all duration-500"
    >
      <Sun className={`h-5 w-5 transition-all duration-500 rotate-0 scale-100 ${getBgColor()} ${theme === "dark" ? "rotate-90 scale-0" : ""}`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-500 rotate-90 scale-0 ${getBgColor()} ${theme === "dark" ? "rotate-0 scale-100" : ""}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
