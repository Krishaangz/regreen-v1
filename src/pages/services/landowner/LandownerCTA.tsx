
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const LandownerCTA = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Ready to Explore Your Land's Potential?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
        Schedule a free initial consultation with our land assessment team to discover opportunities
        for ecological enhancement and potential financial benefits.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Schedule Consultation</Button>
        <Button variant="outline" className="border-regreen-600 text-regreen-600">
          <FileText className="mr-2 h-4 w-4" /> Download Information Package
        </Button>
      </div>
    </div>
  );
};

export default LandownerCTA;
