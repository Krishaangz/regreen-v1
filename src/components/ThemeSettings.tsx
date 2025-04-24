
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme as useShadcnTheme } from "@/components/theme-provider";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeSettings = () => {
  const { theme, setTheme } = useShadcnTheme();
  const { colorTheme, setColorTheme } = useTheme();

  const handleThemeChange = (newTheme: "green" | "blue" | "purple" | "orange") => {
    setColorTheme(newTheme);
  };

  const handleSavePreferences = () => {
    // We already save preferences automatically in the context
    // This button is just for user feedback
    alert("Theme preferences saved successfully!");
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
        <CardDescription>Customize the appearance of the app</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Dark Mode</h3>
          <p className="text-muted-foreground mb-4">Toggle between light and dark themes</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {theme === "light" ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="btn-interactive transition-all duration-500"
            >
              <Sun className={`h-5 w-5 transition-all duration-500 rotate-0 scale-100 ${theme === "dark" ? "rotate-90 scale-0" : ""}`} />
              <Moon className={`absolute h-5 w-5 transition-all duration-500 rotate-90 scale-0 ${theme === "dark" ? "rotate-0 scale-100" : ""}`} />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Color Scheme</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className={`border rounded-lg p-2 cursor-pointer transition-all ${
                colorTheme === "green" ? "ring-2 ring-regreen-600" : ""
              }`}
              onClick={() => handleThemeChange("green")}
            >
              <div className="bg-regreen-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Green</p>
            </div>
            <div
              className={`border rounded-lg p-2 cursor-pointer transition-all ${
                colorTheme === "blue" ? "ring-2 ring-blue-600" : ""
              }`}
              onClick={() => handleThemeChange("blue")}
            >
              <div className="bg-blue-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Blue</p>
            </div>
            <div
              className={`border rounded-lg p-2 cursor-pointer transition-all ${
                colorTheme === "purple" ? "ring-2 ring-purple-600" : ""
              }`}
              onClick={() => handleThemeChange("purple")}
            >
              <div className="bg-purple-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Purple</p>
            </div>
            <div
              className={`border rounded-lg p-2 cursor-pointer transition-all ${
                colorTheme === "orange" ? "ring-2 ring-orange-600" : ""
              }`}
              onClick={() => handleThemeChange("orange")}
            >
              <div className="bg-orange-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Orange</p>
            </div>
          </div>
        </div>

        <Button className="bg-regreen-600 hover:bg-regreen-700 text-white" onClick={handleSavePreferences}>
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThemeSettings;
