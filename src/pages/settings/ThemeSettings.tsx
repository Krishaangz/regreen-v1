
import React from "react";
import ThemeSettings from "@/components/ThemeSettings";

const ThemeSettingsPage = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <ThemeSettings />
    </div>
  );
};

export default ThemeSettingsPage;
