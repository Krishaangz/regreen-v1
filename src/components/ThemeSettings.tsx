
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Check } from "lucide-react";
import { toast } from "sonner";

const ThemeSettings = () => {
  const { colorTheme, setColorTheme, isDarkMode, toggleDarkMode } = useTheme();

  const handleThemeChange = (newTheme: "green" | "blue" | "purple" | "orange") => {
    setColorTheme(newTheme);
    toast.success(`Theme changed to ${newTheme}`);
  };

  const handleSavePreferences = () => {
    // We already save preferences automatically in the context
    // This button is just for user feedback
    toast.success("Theme preferences saved successfully!");
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
        <CardDescription>Customize the appearance of the app</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
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

        <div>
          <h3 className="text-lg font-medium mb-2">Color Scheme</h3>
          <p className="text-muted-foreground mb-4">Choose your preferred color palette</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className={`border rounded-lg p-3 cursor-pointer transition-all relative ${
                colorTheme === "green" ? "ring-2 ring-offset-2 ring-regreen-600" : ""
              }`}
              onClick={() => handleThemeChange("green")}
            >
              <div className="bg-regreen-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Green</p>
              {colorTheme === "green" && <Check className="absolute top-2 right-2 h-5 w-5 bg-white rounded-full p-1 text-regreen-600" />}
            </div>
            <div
              className={`border rounded-lg p-3 cursor-pointer transition-all relative ${
                colorTheme === "blue" ? "ring-2 ring-offset-2 ring-blue-600" : ""
              }`}
              onClick={() => handleThemeChange("blue")}
            >
              <div className="bg-blue-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Blue</p>
              {colorTheme === "blue" && <Check className="absolute top-2 right-2 h-5 w-5 bg-white rounded-full p-1 text-blue-600" />}
            </div>
            <div
              className={`border rounded-lg p-3 cursor-pointer transition-all relative ${
                colorTheme === "purple" ? "ring-2 ring-offset-2 ring-purple-600" : ""
              }`}
              onClick={() => handleThemeChange("purple")}
            >
              <div className="bg-purple-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Purple</p>
              {colorTheme === "purple" && <Check className="absolute top-2 right-2 h-5 w-5 bg-white rounded-full p-1 text-purple-600" />}
            </div>
            <div
              className={`border rounded-lg p-3 cursor-pointer transition-all relative ${
                colorTheme === "orange" ? "ring-2 ring-offset-2 ring-orange-600" : ""
              }`}
              onClick={() => handleThemeChange("orange")}
            >
              <div className="bg-orange-600 h-12 rounded-md mb-2"></div>
              <p className="text-center font-medium">Orange</p>
              {colorTheme === "orange" && <Check className="absolute top-2 right-2 h-5 w-5 bg-white rounded-full p-1 text-orange-600" />}
            </div>
          </div>
        </div>

        <Button 
          className={`w-full text-white ${
            colorTheme === "blue" ? "bg-blue-600 hover:bg-blue-700" :
            colorTheme === "purple" ? "bg-purple-600 hover:bg-purple-700" :
            colorTheme === "orange" ? "bg-orange-600 hover:bg-orange-700" :
            "bg-regreen-600 hover:bg-regreen-700"
          }`} 
          onClick={handleSavePreferences}
        >
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThemeSettings;
