
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, User2 } from "lucide-react";

const TemporaryGroupSection = () => {
  return (
    <div className="bg-muted rounded-lg p-6 mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Temporary Group Formation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src="/placeholder.svg" 
            alt="Temporary Worker Group" 
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium mb-3">Join Project-Specific Worker Groups</h3>
          <p className="mb-4">
            For those seeking flexible work arrangements, our temporary group formation allows you to join
            specific restoration projects on a contract basis. These short-term teams come together for
            projects ranging from a few days to several months, allowing you to choose work that fits your schedule.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Project-specific contracts with clear start and end dates",
              "Competitive daily rates based on skill level and project demands",
              "Opportunity to work in diverse locations and ecosystems",
              "Great for seasonal workers, students, or those testing career paths"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">
            <User2 className="mr-2 h-4 w-4" />
            Join the Worker Pool
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemporaryGroupSection;
