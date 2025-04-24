
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Sprout, DollarSign } from "lucide-react";

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {[
        {
          title: "Property Assessment", 
          description: "Comprehensive ecological evaluation to identify opportunities for restoration and conservation",
          icon: Home
        },
        {
          title: "Restoration Planning", 
          description: "Custom implementation plans with timelines, resource requirements, and expected outcomes",
          icon: Sprout
        },
        {
          title: "Financial Opportunities", 
          description: "Navigation of carbon markets, conservation easements, and government incentive programs",
          icon: DollarSign
        }
      ].map((service, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
            </div>
            <CardTitle>{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCards;
