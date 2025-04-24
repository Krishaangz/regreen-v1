
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const SuccessStory = () => {
  return (
    <div className="bg-muted rounded-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Landowner Success Story</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="/placeholder.svg" 
            alt="Johnson Family Farm" 
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-regreen-600">Carbon Credits</Badge>
            <Badge className="bg-regreen-600">Riparian Restoration</Badge>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Johnson Family Farm Transformation</h3>
          <div className="flex items-center mb-4">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Partnership since 2019</span>
          </div>
          <p className="mb-4">
            "Working with ReGreen has transformed how we manage our 200-acre family farm. We've converted 40 acres of 
            marginal cropland to native prairie and restored the riparian buffer along our creek. The financial benefits 
            from carbon credits and reduced input costs have been significant, but the real reward is seeing the return 
            of wildlife and knowing we're leaving the land better than we found it."
          </p>
          <p className="text-sm mb-4">
            <strong>Results:</strong> 120 tons of carbon sequestered annually, 30% increase in bird species diversity, 
            improved water quality in local watershed, and a new revenue stream through carbon credits.
          </p>
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Read Full Case Study</Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
