
import React from "react";
import { Leaf, Droplets, TreeDeciduous } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface LandownerServicesProps {
  handleRequestService: (service: string) => void;
  loading: boolean;
}

const LandownerServices = ({ handleRequestService, loading }: LandownerServicesProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <ServiceCard
        icon={Leaf}
        iconColor="text-green-600 dark:text-green-400"
        iconBgColor="bg-green-100 dark:bg-green-900/30"
        title="Land Transformation"
        description="Convert unused land into productive green spaces"
        features={[
          "Customized eco-restoration plans",
          "Native species planting and care",
          "Sustainable landscape design",
          "Increase property value by up to 20%"
        ]}
        buttonText="Request Service"
        buttonColor="bg-green-600 hover:bg-green-700"
        buttonAction={() => handleRequestService("Land Transformation")}
        loading={loading}
      />
      
      <ServiceCard
        icon={Droplets}
        iconColor="text-blue-600 dark:text-blue-400"
        iconBgColor="bg-blue-100 dark:bg-blue-900/30"
        title="Waterbody Restoration"
        description="Revitalize ponds, streams, and water features"
        features={[
          "Water quality assessment and improvement",
          "Aquatic ecosystem restoration",
          "Erosion control and bank stabilization",
          "Regular maintenance programs"
        ]}
        buttonText="Request Service"
        buttonColor="bg-blue-600 hover:bg-blue-700"
        buttonAction={() => handleRequestService("Waterbody Restoration")}
        loading={loading}
      />
      
      <ServiceCard
        icon={TreeDeciduous}
        iconColor="text-amber-600 dark:text-amber-400"
        iconBgColor="bg-amber-100 dark:bg-amber-900/30"
        title="Urban Green Spaces"
        description="Create community parks and gathering areas"
        features={[
          "Community garden development",
          "Recreational area design",
          "Urban wildlife habitat creation",
          "Climate-resilient landscaping"
        ]}
        buttonText="Request Service"
        buttonColor="bg-amber-600 hover:bg-amber-700"
        buttonAction={() => handleRequestService("Urban Green Spaces")}
        loading={loading}
      />
    </div>
  );
};

export default LandownerServices;
