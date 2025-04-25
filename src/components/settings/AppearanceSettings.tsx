
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useTheme as useAppTheme } from "@/contexts/ThemeContext";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';

const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useAppTheme();
  const { toast } = useToast();
  
  const handleSaveTheme = () => {
    toast.success("Theme preferences saved successfully");
  };
  
  return (
    <div className="space-y-6">
      <Card className="settings-card neon-card">
        <CardHeader>
          <CardTitle>Theme Mode</CardTitle>
          <CardDescription>Choose between light and dark modes</CardDescription>
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
      
      <Card className="settings-card neon-card">
        <CardHeader>
          <CardTitle>Color Theme</CardTitle>
          <CardDescription>Choose your accent color</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={colorTheme}
            onValueChange={(value: "green" | "blue" | "purple" | "orange") => setColorTheme(value)}
            className="grid grid-cols-2 gap-4 pt-2"
          >
            <div>
              <RadioGroupItem 
                value="green" 
                id="green" 
                className="sr-only" 
              />
              <Label
                htmlFor="green"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-br from-green-500/20 to-green-700/30 p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-green-500 [&:has([data-state=checked])]:border-green-500 ${colorTheme === 'green' ? 'ring-2 ring-green-500' : ''}`}
              >
                <div className="rounded-full w-8 h-8 bg-gradient-to-br from-green-500 to-green-700" />
                <span className="mt-2">Green</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem 
                value="blue" 
                id="blue" 
                className="sr-only" 
              />
              <Label
                htmlFor="blue"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-br from-blue-500/20 to-blue-700/30 p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500 ${colorTheme === 'blue' ? 'ring-2 ring-blue-500' : ''}`}
              >
                <div className="rounded-full w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700" />
                <span className="mt-2">Blue</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem 
                value="purple" 
                id="purple" 
                className="sr-only" 
              />
              <Label
                htmlFor="purple"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-br from-purple-500/20 to-purple-700/30 p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-purple-500 [&:has([data-state=checked])]:border-purple-500 ${colorTheme === 'purple' ? 'ring-2 ring-purple-500' : ''}`}
              >
                <div className="rounded-full w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700" />
                <span className="mt-2">Purple</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem 
                value="orange" 
                id="orange" 
                className="sr-only" 
              />
              <Label
                htmlFor="orange"
                className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-gradient-to-br from-orange-500/20 to-orange-700/30 p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-orange-500 [&:has([data-state=checked])]:border-orange-500 ${colorTheme === 'orange' ? 'ring-2 ring-orange-500' : ''}`}
              >
                <div className="rounded-full w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700" />
                <span className="mt-2">Orange</span>
              </Label>
            </div>
          </RadioGroup>
          
          <Button onClick={handleSaveTheme} className="w-full mt-6 bg-regreen-600 hover:bg-regreen-700 text-white">
            Save Theme Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppearanceSettings;
