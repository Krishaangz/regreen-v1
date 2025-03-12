
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Bell, User, Lock, Globe, Eye, ShieldCheck, Save } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  
  const handleSave = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-regreen-800 dark:text-regreen-100">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and app settings</p>
        </div>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="account" className="btn-interactive">
            <User className="mr-2 h-4 w-4 animate-float" /> Account
          </TabsTrigger>
          <TabsTrigger value="appearance" className="btn-interactive">
            <Eye className="mr-2 h-4 w-4 animate-float" /> Appearance
          </TabsTrigger>
          <TabsTrigger value="notifications" className="btn-interactive">
            <Bell className="mr-2 h-4 w-4 animate-float" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="btn-interactive">
            <ShieldCheck className="mr-2 h-4 w-4 animate-float" /> Privacy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your personal information and account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea 
                  id="bio" 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent"
                  defaultValue="I'm passionate about environmental restoration and community development projects."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex gap-2">
                  <Input id="location" defaultValue="Seattle, WA" className="flex-1" />
                  <Button variant="outline" className="flex items-center gap-2 btn-interactive">
                    <Globe className="h-4 w-4" /> Detect
                  </Button>
                </div>
              </div>

              <Button onClick={handleSave} className="w-full sm:w-auto bg-regreen-600 hover:bg-regreen-700 btn-interactive">
                {loading ? (
                  <>
                    <div className="loading-spinner h-4 w-4 mr-2" /> Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password to keep your account secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <Button variant="outline" className="btn-interactive">
                <Lock className="mr-2 h-4 w-4" /> Update Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>Customize the appearance of the app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="theme-toggle">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark themes
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-5 w-5 text-muted-foreground" />
                  <Switch 
                    id="theme-toggle" 
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    className="btn-interactive data-[state=checked]:bg-regreen-600"
                  />
                  <Moon className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Color Scheme</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Green", "Blue", "Purple", "Orange"].map((color) => (
                    <div 
                      key={color}
                      className={`p-4 rounded-lg border-2 ${
                        color === "Green" ? "border-regreen-600 bg-regreen-50 dark:bg-regreen-900/30" : "border-transparent hover:border-gray-300"
                      } cursor-pointer transition-all hover:shadow-md btn-interactive`}
                    >
                      <div className={`h-8 rounded mb-2 ${
                        color === "Green" ? "bg-regreen-600" : 
                        color === "Blue" ? "bg-blue-600" : 
                        color === "Purple" ? "bg-purple-600" : "bg-orange-600"
                      }`} />
                      <p className="text-center font-medium">{color}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-regreen-600 hover:bg-regreen-700 btn-interactive">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { title: "Project Updates", description: "Get notified about project status changes and milestones" },
                { title: "Task Assignments", description: "Receive alerts when new tasks are assigned to you" },
                { title: "Payment Notifications", description: "Get updates about payments and transactions" },
                { title: "Community Activity", description: "Stay informed about community events and discussions" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{item.title}</Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch defaultChecked={index < 2} className="btn-interactive data-[state=checked]:bg-regreen-600" />
                </div>
              ))}

              <div className="space-y-2">
                <Label>Notification Channels</Label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { name: "Email Notifications", defaultChecked: true },
                    { name: "In-App Notifications", defaultChecked: true },
                    { name: "Push Notifications", defaultChecked: false },
                    { name: "SMS Notifications", defaultChecked: false },
                  ].map((channel, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Switch defaultChecked={channel.defaultChecked} className="data-[state=checked]:bg-regreen-600" />
                      <Label>{channel.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-regreen-600 hover:bg-regreen-700 btn-interactive">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control your privacy and data sharing preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { title: "Profile Visibility", description: "Control who can see your profile information" },
                { title: "Location Tracking", description: "Allow the app to track your location for project verification" },
                { title: "Data Sharing", description: "Share anonymous usage data to help improve the app" },
                { title: "Third-Party Integrations", description: "Allow connections with third-party services" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{item.title}</Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch defaultChecked={index === 1} className="btn-interactive data-[state=checked]:bg-regreen-600" />
                </div>
              ))}

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-medium mb-2">Data Management</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full sm:w-auto btn-interactive">
                    Download My Data
                  </Button>
                  <Button variant="destructive" className="w-full sm:w-auto btn-interactive">
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
