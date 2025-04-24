
import React from "react";

const WorkerProgramsHeader = () => {
  return (
    <div className="mb-8">
      <div className="relative rounded-xl overflow-hidden mb-6 h-64">
        <img
          src="https://images.unsplash.com/photo-1635865947523-3b707d114b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Worker Programs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-2">Worker Programs</h1>
            <p className="text-white/90 max-w-3xl">
              Join the ecological restoration workforce and build a rewarding career in environmental stewardship
            </p>
          </div>
        </div>
      </div>
      <div className="text-center px-4">
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Training, employment, and career development opportunities in ecological restoration
          and sustainable land management, focusing on building the workforce needed for a greener future.
        </p>
      </div>
    </div>
  );
};

export default WorkerProgramsHeader;
