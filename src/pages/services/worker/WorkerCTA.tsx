
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const WorkerCTA = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Restoration Career?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
        Whether you're looking for training, employment, or career advancement, ReGreen offers
        pathways for individuals at all experience levels who are passionate about ecological restoration.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Apply for Training</Button>
        <Button variant="outline" className="border-regreen-600 text-regreen-600">
          <FileText className="mr-2 h-4 w-4" /> Download Program Guide
        </Button>
      </div>
    </div>
  );
};

export default WorkerCTA;
