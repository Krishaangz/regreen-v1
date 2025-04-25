
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Card className="settings-card">
      <CardHeader>
        <CardTitle>Theme Settings</CardTitle>
        <CardDescription>Choose between light and dark mode</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Dark Mode</Label>
            <p className="text-sm text-muted-foreground">
              Toggle between light and dark themes
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="h-5 w-5 text-muted-foreground" />
            <Switch 
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              className="data-[state=checked]:bg-regreen-600"
            />
            <Moon className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;
