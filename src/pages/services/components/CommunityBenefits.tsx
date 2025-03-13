
import React from "react";
import { Leaf, User2, BarChart3, MapPin } from "lucide-react";

const CommunityBenefits = () => {
  return (
    <div className="mt-10 p-6 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg">
      <h3 className="text-xl font-bold mb-6 text-regreen-800 dark:text-regreen-100 text-center">
        How Communities Benefit from ReGreen
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
              <Leaf className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
            </div>
            <div>
              <h4 className="font-medium">Improved Environment</h4>
              <p className="text-sm text-muted-foreground">Better air quality, reduced heat islands, increased biodiversity, and enhanced climate resilience.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
              <User2 className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
            </div>
            <div>
              <h4 className="font-medium">Social Cohesion</h4>
              <p className="text-sm text-muted-foreground">Shared green spaces bring people together, fostering community connections and reducing isolation.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
              <BarChart3 className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
            </div>
            <div>
              <h4 className="font-medium">Economic Development</h4>
              <p className="text-sm text-muted-foreground">Green jobs, increased property values, and local business opportunities around revitalized areas.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
            </div>
            <div>
              <h4 className="font-medium">Recreational Spaces</h4>
              <p className="text-sm text-muted-foreground">Access to natural areas for exercise, recreation, and relaxation, improving physical and mental health.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBenefits;
