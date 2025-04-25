
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Loader2, Check, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AccountSettingsProps {
  formData: {
    name: string;
    email: string;
    bio: string;
    location: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  saveStatus: {
    loading: boolean;
    saved: boolean;
  };
  onSave: () => void;
}

const AccountSettings = ({ formData, handleInputChange, saveStatus, onSave }: AccountSettingsProps) => {
  const { toast } = useToast();

  return (
    <Card className="settings-card">
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
        <CardDescription>Update your personal information and account settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
              onClick={() => {
                toast({
                  title: "Location Updated",
                  description: "Your location has been updated",
                });
              }}
            >
              <Globe className="h-4 w-4 mr-2" /> Detect
            </Button>
          </div>
        </div>

        <Button 
          onClick={onSave} 
          className="w-full sm:w-auto bg-regreen-600 hover:bg-regreen-700"
          disabled={saveStatus.loading}
        >
          {saveStatus.loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
            </>
          ) : saveStatus.saved ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Saved!
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AccountSettings;
