
import React from "react";

const LandownerHowItWorks = () => {
  return (
    <div className="mt-12 p-6 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold mb-4 text-regreen-800 dark:text-regreen-100">How It Works for Landowners</h3>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">1</div>
              <div>
                <h4 className="font-medium">Register Your Property</h4>
                <p className="text-sm text-muted-foreground">Provide details about your land or waterbody, including location, size, and current condition.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">2</div>
              <div>
                <h4 className="font-medium">Receive Customized Proposals</h4>
                <p className="text-sm text-muted-foreground">Our AI analyzes your property and generates tailored eco-friendly project ideas.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">3</div>
              <div>
                <h4 className="font-medium">Approve and Fund</h4>
                <p className="text-sm text-muted-foreground">Select your preferred proposal and make a 50% upfront payment to initiate the project.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">4</div>
              <div>
                <h4 className="font-medium">Monitor Progress</h4>
                <p className="text-sm text-muted-foreground">Track project execution in real-time through our interactive dashboard.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">5</div>
              <div>
                <h4 className="font-medium">Enjoy Your Transformed Property</h4>
                <p className="text-sm text-muted-foreground">Release the remaining payment once you're satisfied with the completed project.</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="relative h-64 md:h-auto bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Land Transformation Process" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300">Before/After Transformation Showcase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandownerHowItWorks;
