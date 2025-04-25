
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Eye, Bell, Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";
import AccountSettings from "@/components/settings/AccountSettings";
import PasswordSettings from "@/components/settings/PasswordSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import PrivacySettings from "@/components/settings/PrivacySettings";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "I'm passionate about environmental restoration and community development projects.",
    location: "Seattle, WA",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const [saveStatus, setSaveStatus] = useState({
    account: { loading: false, saved: false },
    password: { loading: false, saved: false },
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = (section: keyof typeof saveStatus) => {
    setSaveStatus(prev => ({
      ...prev,
      [section]: { loading: true, saved: false }
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
  
  return (
    <motion.div className="animate-fade-in max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-regreen-800 dark:text-regreen-100">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and app settings</p>
        </div>
      </div>

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
            <Shield className="mr-2 h-4 w-4" /> Privacy
          </TabsTrigger>
          <TabsTrigger value="password">
            <Lock className="mr-2 h-4 w-4" /> Password
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <AccountSettings 
            formData={formData}
            handleInputChange={handleInputChange}
            saveStatus={saveStatus.account}
            onSave={() => handleSave('account')}
          />
        </TabsContent>

        <TabsContent value="password">
          <PasswordSettings 
            formData={formData}
            handleInputChange={handleInputChange}
            saveStatus={saveStatus.password}
            onSave={() => handleSave('password')}
          />
        </TabsContent>

        <TabsContent value="appearance">
          <AppearanceSettings />
        </TabsContent>
        
        <TabsContent value="privacy">
          <PrivacySettings />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default Settings;
