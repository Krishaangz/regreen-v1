
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CareerTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Career Development</h2>
          <p>
            Beyond initial training and employment, ReGreen is committed to supporting your long-term career
            development in the growing field of ecological restoration and sustainable land management.
          </p>
          <ul className="space-y-2">
            {[
              "Advanced training opportunities for skill enhancement",
              "Leadership development programs",
              "Mentorship from industry experts",
              "Networking with professionals across the field",
              "Support for continuing education and certifications",
              "Pathways to management and specialized roles"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Explore Career Paths</Button>
          </div>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
          <img 
            src="/placeholder.svg" 
            alt="Career Development" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerTab;
