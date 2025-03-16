
import React from "react";
import { Globe, Hand, Users } from "lucide-react";

interface RoleDescriptionProps {
  role: 'landowner' | 'worker' | 'community';
}

const RoleDescription = ({ role }: RoleDescriptionProps) => {
  const roleIcons = {
    landowner: <Globe className="h-10 w-10 text-regreen-600" />,
    worker: <Hand className="h-10 w-10 text-regreen-600" />,
    community: <Users className="h-10 w-10 text-regreen-600" />
  };
  
  const roleDescriptions = {
    landowner: "Register your land for eco-restoration projects. Turn unused space into sustainable environments while generating value.",
    worker: "Apply your skills to environmental projects. Gain experience, earn income, and make a positive impact on your community.",
    community: "Engage with local projects, track environmental improvements, and connect with eco-conscious individuals in your area."
  };

  return (
    <div className="mb-6 flex items-center p-4 bg-regreen-50 dark:bg-regreen-800/30 rounded-lg">
      {roleIcons[role]}
      <p className="ml-4 text-gray-600 dark:text-regreen-200">{roleDescriptions[role]}</p>
    </div>
  );
};

export default RoleDescription;
