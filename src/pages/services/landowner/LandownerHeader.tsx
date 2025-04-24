
import React from "react";

const LandownerHeader = () => {
  return (
    <div className="mb-8">
      <div className="relative rounded-xl overflow-hidden mb-6 h-64">
        <img
          src="https://images.unsplash.com/photo-1432836431433-925d3cc0a5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Sustainable land management"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-2">Landowner Services</h1>
            <p className="text-white/90 max-w-3xl">
              Partner with ReGreen to enhance your property's ecological value while creating sustainable income opportunities
            </p>
          </div>
        </div>
      </div>
      <div className="text-center px-4">
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Specialized programs designed to support private landowners in sustainable land management,
          conservation, and ecological restoration while potentially creating new income streams.
        </p>
      </div>
    </div>
  );
};

export default LandownerHeader;
