import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Bell, User, Lock, Globe, Eye, ShieldCheck, Save, Loader2, Check } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const colorSchemes = [
  { name: "Green", color: "bg-regreen-600", accent: "border-regreen-600" },
  { name: "Blue", color: "bg-blue-600", accent: "border-blue-600" },
  { name: "Purple", color: "bg-purple-600", accent: "border-purple-600" },
  { name: "Orange", color: "bg-orange-600", accent: "border-orange-600" },
];

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "I'm passionate about environmental restoration and community development projects.",
    location: "Seattle, WA",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    colorScheme: "Green",
    notificationSettings: {
      projectUpdates: true,
      taskAssignments: true,
      paymentNotifications: false,
      communityActivity: false
    },
    notificationChannels: {
      email: true,
      inApp: true,
      push: false,
      sms: false
    },
    privacySettings: {
      profileVisibility: false,
      locationTracking: true,
      dataSharing: false,
      thirdParty: false
    }
  });
  const [saveStatus, setSaveStatus] = useState({
    account: { saved: false, loading: false },
    password: { saved: false, loading: false },
    appearance: { saved: false, loading: false },
    notifications: { saved: false, loading: false },
    privacy: { saved: false, loading: false }
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSwitchChange = (section: string, setting: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev] as Record<string, boolean>,
        [setting]: checked
      }
    }));
  };
  
  const handleColorSchemeChange = (scheme: string) => {
    setFormData(prev => ({
      ...prev,
      colorScheme: scheme
    }));
  };
  
  const saveSection = (section: keyof typeof saveStatus) => {
    setSaveStatus(prev => ({
      ...prev,
      [section]: { ...prev[section], loading: true, saved: false }
    }));
    
    setTimeout(() => {
      setSaveStatus(prev => ({
        ...prev,
        [section]: { loading: false, saved: true }
      }));
      
      toast({
        title: "Settings Updated",
        description: `Your ${section} settings have been saved successfully.`,
      });
      
      setTimeout(() => {
        setSaveStatus(prev => ({
          ...prev,
          [section]: { ...prev[section], saved: false }
        }));
      }, 3000);
    }, 1000);
  };
  
  const validatePassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Password Error",
        description: "New passwords don't match. Please try again.",
        variant: "destructive"
      });
      return false;
    }
    
    if (formData.newPassword && formData.newPassword.length < 8) {
      toast({
        title: "Password Error",
        description: "Password must be at least 8 characters long.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };
  
  const handlePasswordUpdate = () => {
    if (validatePassword()) {
      saveSection("password");
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div className="animate-fade-in max-w-4xl mx-auto">
      <motion.div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-regreen-800 dark:text-regreen-100">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and app settings</p>
        </div>
      </motion.div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="account">
            <User className="mr-2 h-4 w-4" /> Account
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Eye className="mr-2 h-4 w-4" /> Appearance
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <ShieldCheck className="mr-2 h-4 w-4" /> Privacy
          </TabsTrigger>
          <TabsTrigger value="password">
            <Lock className="mr-2 h-4 w-4" /> Password
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <motion.div variants={item}>
            <Card className="settings-card">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your personal information and account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {initialLoading ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-40" />
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea 
                        id="bio" 
                        name="bio"
                        className="w-full min-h-[100px] p-3 rounded-md border border-input bg-transparent"
                        value={formData.bio}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="location" 
                          name="location" 
                          value={formData.location} 
                          onChange={handleInputChange} 
                          className="flex-1" 
                        />
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2 btn-interactive"
                          onClick={() => {
                            setFormData(prev => ({...prev, location: "Using Current Location..."}));
                            setTimeout(() => {
                              setFormData(prev => ({...prev, location: "San Francisco, CA"}));
                              toast({
                                title: "Location Updated",
                                description: "Your location has been updated to San Francisco, CA",
                              });
                            }, 1500);
                          }}
                        >
                          <Globe className="h-4 w-4" /> Detect
                        </Button>
                      </div>
                    </div>

                    <Button 
                      onClick={() => saveSection("account")} 
                      className="w-full sm:w-auto bg-regreen-600 hover:bg-regreen-700 btn-interactive"
                      disabled={saveStatus.account.loading}
                    >
                      {saveStatus.account.loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                        </>
                      ) : saveStatus.account.saved ? (
                        <>
                          <Check className="mr-2 h-4 w-4" /> Saved!
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" /> Save Changes
                        </>
                      )}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="password" className="space-y-4">
          <motion.div variants={item}>
            <Card className="settings-card">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Update your password to keep your account secure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input 
                    id="current-password" 
                    name="currentPassword"
                    type="password" 
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input 
                      id="new-password" 
                      name="newPassword"
                      type="password" 
                      value={formData.newPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input 
                      id="confirm-password" 
                      name="confirmPassword"
                      type="password" 
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="btn-interactive"
                  onClick={handlePasswordUpdate}
                  disabled={saveStatus.password.loading}
                >
                  {saveStatus.password.loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
                    </>
                  ) : saveStatus.password.saved ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Password Updated!
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 h-4 w-4" /> Update Password
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <motion.div variants={item}>
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
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <motion.div variants={item}>
            <Card className="settings-card">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Control how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { id: "projectUpdates", title: "Project Updates", description: "Get notified about project status changes and milestones" },
                  { id: "taskAssignments", title: "Task Assignments", description: "Receive alerts when new tasks are assigned to you" },
                  { id: "paymentNotifications", title: "Payment Notifications", description: "Get updates about payments and transactions" },
                  { id: "communityActivity", title: "Community Activity", description: "Stay informed about community events and discussions" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{item.title}</Label>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch 
                      checked={formData.notificationSettings[item.id as keyof typeof formData.notificationSettings]} 
                      onCheckedChange={(checked) => handleSwitchChange("notificationSettings", item.id, checked)}
                      className="btn-interactive data-[state=checked]:bg-regreen-600" 
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <Label>Notification Channels</Label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { id: "email", name: "Email Notifications" },
                      { id: "inApp", name: "In-App Notifications" },
                      { id: "push", name: "Push Notifications" },
                      { id: "sms", name: "SMS Notifications" },
                    ].map((channel) => (
                      <div key={channel.id} className="flex items-center gap-2">
                        <Switch 
                          checked={formData.notificationChannels[channel.id as keyof typeof formData.notificationChannels]} 
                          onCheckedChange={(checked) => handleSwitchChange("notificationChannels", channel.id, checked)}
                          className="data-[state=checked]:bg-regreen-600" 
                        />
                        <Label>{channel.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="bg-regreen-600 hover:bg-regreen-700 btn-interactive"
                  onClick={() => saveSection("notifications")}
                  disabled={saveStatus.notifications.loading}
                >
                  {saveStatus.notifications.loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                    </>
                  ) : saveStatus.notifications.saved ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Preferences Saved!
                    </>
                  ) : (
                    "Save Preferences"
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <motion.div variants={item}>
            <Card className="settings-card">
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and data sharing preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { id: "profileVisibility", title: "Profile Visibility", description: "Control who can see your profile information" },
                  { id: "locationTracking", title: "Location Tracking", description: "Allow the app to track your location for project verification" },
                  { id: "dataSharing", title: "Data Sharing", description: "Share anonymous usage data to help improve the app" },
                  { id: "thirdParty", title: "Third-Party Integrations", description: "Allow connections with third-party services" },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{item.title}</Label>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch 
                      checked={formData.privacySettings[item.id as keyof typeof formData.privacySettings]} 
                      onCheckedChange={(checked) => handleSwitchChange("privacySettings", item.id, checked)}
                      className="btn-interactive data-[state=checked]:bg-regreen-600" 
                    />
                  </div>
                ))}

                <Button 
                  className="bg-regreen-600 hover:bg-regreen-700 btn-interactive mb-6"
                  onClick={() => saveSection("privacy")}
                  disabled={saveStatus.privacy.loading}
                >
                  {saveStatus.privacy.loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                    </>
                  ) : saveStatus.privacy.saved ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Preferences Saved!
                    </>
                  ) : (
                    "Save Preferences"
                  )}
                </Button>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-lg font-medium mb-2">Data Management</h3>
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto btn-interactive"
                      onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                          toast({
                            title: "Download Initiated",
                            description: "Your data archive is being prepared. We'll email you when it's ready to download.",
                          });
                        }, 2000);
                      }}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Preparing Data...
                        </>
                      ) : (
                        "Download My Data"
                      )}
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="w-full sm:w-auto btn-interactive"
                      onClick={() => {
                        toast({
                          title: "Delete Account",
                          description: "Please contact support to delete your account. This action cannot be undone.",
                          variant: "destructive"
                        });
                      }}
                    >
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default Settings;
