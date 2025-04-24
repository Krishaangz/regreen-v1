
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const LandownerBenefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Benefits for Landowners</h2>
        <ul className="space-y-3">
          {[
            "Access to expert ecological assessment and planning",
            "Financial incentives through carbon credits and conservation programs",
            "Increased land value through ecological improvements",
            "Technical support and resources for implementation",
            "Opportunity to contribute to climate resilience and biodiversity",
            "Custom solutions tailored to your property's unique features"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Become a Partner Landowner</Button>
        </div>
      </div>
      <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
        <img 
          src="/placeholder.svg" 
          alt="Landowner Partnership" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LandownerBenefits;
