
import React from "react";
import { getRoleIcon } from "./roleUtils";

interface RoleIndicatorProps {
  role: string | null;
}

const RoleIndicator = ({ role }: RoleIndicatorProps) => {
  return (
    <div className="px-4 py-2 mb-2">
      <div className="flex items-center justify-between px-3 py-2 rounded-md bg-white/10 backdrop-blur-sm">
        <div className="flex items-center">
          {getRoleIcon(role)}
          <span className="capitalize">{role || "Guest"}</span>
        </div>
        <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">Active</span>
      </div>
    </div>
  );
};

export default RoleIndicator;
