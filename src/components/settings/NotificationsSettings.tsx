
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, CalendarClock, Mail, MessageSquare, Phone, Save } from "lucide-react";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from "sonner";

const NotificationsSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [eventReminders, setEventReminders] = useState(true);
  const [notificationFrequency, setNotificationFrequency] = useState("immediate");
  
  const handleSave = () => {
    toast.success("Notification preferences saved successfully");
  };
  
  return (
    <div className="space-y-6">
      <Card className="settings-card neon-card">
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Choose how you want to be notified about platform activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Receive updates and alerts via email
              </p>
            </div>
            <Switch 
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="push-notifications">Push Notifications</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Receive alerts on your browser or device
              </p>
            </div>
            <Switch 
              id="push-notifications"
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Receive important alerts via text message
              </p>
            </div>
            <Switch 
              id="sms-notifications"
              checked={smsNotifications}
              onCheckedChange={setSmsNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="in-app-notifications">In-App Notifications</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Show notifications within the application
              </p>
            </div>
            <Switch 
              id="in-app-notifications"
              checked={inAppNotifications}
              onCheckedChange={setInAppNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="event-reminders">Event Reminders</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Get notifications about upcoming events
              </p>
            </div>
            <Switch 
              id="event-reminders"
              checked={eventReminders}
              onCheckedChange={setEventReminders}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="settings-card neon-card">
        <CardHeader>
          <CardTitle>Notification Frequency</CardTitle>
          <CardDescription>Choose how often you would like to receive notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={notificationFrequency} 
            onValueChange={setNotificationFrequency}
            className="space-y-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="immediate" id="immediate" />
              <Label htmlFor="immediate">Immediate - Send notifications as events occur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily">Daily - Send a daily digest of notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">Weekly - Send a weekly summary of activities</Label>
            </div>
          </RadioGroup>
          
          <Button 
            onClick={handleSave}
            className="w-full mt-6 bg-regreen-600 hover:bg-regreen-700 text-white"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Notification Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsSettings;
