
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Shield, User, Users } from "lucide-react";
import { toast } from "sonner";

const PrivacySettings = () => {
  const [dataSharing, setDataSharing] = React.useState(true);
  const [profileVisibility, setProfileVisibility] = React.useState(true);
  const [locationTracking, setLocationTracking] = React.useState(false);
  
  const handlePrivacyChange = (setting: string, value: boolean) => {
    toast.success(`${setting} setting updated`);
  };
  
  return (
    <Card className="settings-card">
      <CardHeader>
        <CardTitle>Privacy & Data</CardTitle>
        <CardDescription>Manage your privacy preferences and data settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="data-sharing">Data Sharing</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Allow ReGreen to use your data for ecosystem research
            </p>
          </div>
          <Switch 
            id="data-sharing"
            checked={dataSharing}
            onCheckedChange={(checked) => {
              setDataSharing(checked);
              handlePrivacyChange('Data sharing', checked);
            }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="profile-visibility">Profile Visibility</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Make your profile visible to other community members
            </p>
          </div>
          <Switch 
            id="profile-visibility"
            checked={profileVisibility}
            onCheckedChange={(checked) => {
              setProfileVisibility(checked);
              handlePrivacyChange('Profile visibility', checked);
            }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="location-tracking">Location Tracking</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Allow ReGreen to use your location data for nearby projects
            </p>
          </div>
          <Switch 
            id="location-tracking"
            checked={locationTracking}
            onCheckedChange={(checked) => {
              setLocationTracking(checked);
              handlePrivacyChange('Location tracking', checked);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacySettings;
