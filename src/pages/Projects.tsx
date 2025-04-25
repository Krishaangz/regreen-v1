
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerProjects from './projects/LandownerProjects';
import WorkerProjects from './projects/WorkerProjects';
import CommunityProjects from './projects/CommunityProjects';
import PublicProjects from './PublicProjects';

const Projects = () => {
  const { role } = useRole();
  
  // Only show public projects if no role is selected
  if (!role) {
    return <PublicProjects />;
  }
  
  return (
    <div className="container py-6 max-w-6xl">
      {/* Render the appropriate projects view based on the user's role */}
      {role === 'landowner' && <LandownerProjects />}
      {role === 'worker' && <WorkerProjects />}
      {role === 'community' && <CommunityProjects />}
    </div>
  );
};

export default Projects;
