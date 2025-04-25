
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { toast } from "sonner";
import ThemeModeSwitcher from "./theme/ThemeModeSwitcher";

const ThemeSettings = () => {
  const { colorTheme, setColorTheme } = useTheme();

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
        <ThemeModeSwitcher />
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
