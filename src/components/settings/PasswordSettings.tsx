
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Loader2, Check } from "lucide-react";

interface PasswordSettingsProps {
  formData: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveStatus: {
    loading: boolean;
    saved: boolean;
  };
  onSave: () => void;
}

const PasswordSettings = ({ formData, handleInputChange, saveStatus, onSave }: PasswordSettingsProps) => {
  return (
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
          onClick={onSave}
          disabled={saveStatus.loading}
        >
          {saveStatus.loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
            </>
          ) : saveStatus.saved ? (
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
  );
};

export default PasswordSettings;
