
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const EmploymentTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Employment Opportunities</h2>
          <p>
            ReGreen directly employs restoration workers on projects across the country, offering competitive wages, 
            benefits, and the opportunity to make a tangible difference in ecological health and climate resilience.
          </p>
          <ul className="space-y-2">
            {[
              "Full-time, part-time, and seasonal positions available",
              "Field-based roles with hands-on restoration work",
              "Opportunities in both rural and urban settings",
              "Career progression pathways within the organization",
              "Comprehensive benefits for full-time employees",
              "Opportunity to work on diverse projects and ecosystems"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">View Current Openings</Button>
          </div>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
          <img 
            src="/placeholder.svg" 
            alt="Employment Opportunities" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="bg-muted rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Featured Job Openings</h3>
        <div className="space-y-4">
          {[
            {
              title: "Restoration Field Technician",
              location: "Portland, OR",
              type: "Full-time",
              salary: "$42,000 - $48,000/year"
            },
            {
              title: "Ecological Restoration Specialist",
              location: "Denver, CO",
              type: "Full-time",
              salary: "$52,000 - $65,000/year"
            },
            {
              title: "Seasonal Restoration Crew Member",
              location: "Multiple Locations",
              type: "Seasonal (May-October)",
              salary: "$22 - $25/hour"
            }
          ].map((job, index) => (
            <div key={index} className="bg-background p-4 rounded-md flex justify-between items-center">
              <div>
                <h4 className="font-medium">{job.title}</h4>
                <div className="text-sm text-muted-foreground">
                  {job.location} • {job.type}
                </div>
                <div className="text-sm font-medium text-regreen-600">
                  {job.salary}
                </div>
              </div>
              <Button size="sm" className="bg-regreen-600 hover:bg-regreen-700 text-white">Apply</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmploymentTab;
