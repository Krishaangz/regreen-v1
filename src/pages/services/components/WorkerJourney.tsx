
import React from "react";

const WorkerJourney = () => {
  return (
    <div className="mt-10 p-8 border rounded-lg space-y-6">
      <h3 className="text-xl font-bold text-center text-regreen-800 dark:text-regreen-100">Worker Journey at ReGreen</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
          <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">1</div>
          <h4 className="font-medium mb-2">Register & Verify</h4>
          <p className="text-xs text-muted-foreground">Sign up, verify your identity, and enable location services</p>
        </div>
        <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
          <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">2</div>
          <h4 className="font-medium mb-2">Join Groups</h4>
          <p className="text-xs text-muted-foreground">Receive AI-matched group invitations for nearby projects</p>
        </div>
        <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
          <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">3</div>
          <h4 className="font-medium mb-2">Complete Tasks</h4>
          <p className="text-xs text-muted-foreground">Perform daily assigned tasks and submit verification photos</p>
        </div>
        <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
          <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">4</div>
          <h4 className="font-medium mb-2">Get Paid</h4>
          <p className="text-xs text-muted-foreground">Receive payments and ratings for completed work</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerJourney;
