
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerProjects from './projects/LandownerProjects';
import WorkerProjects from './projects/WorkerProjects';
import CommunityProjects from './projects/CommunityProjects';
import PublicProjects from './PublicProjects';

const Projects = () => {
  const { role } = useRole();
  
  // If not on a role-specific dashboard, show the public projects page
  if (!role) {
    return <PublicProjects />;
  }
  
  // Render the appropriate projects view based on the user's role
  switch(role) {
    case 'landowner':
      // Changed to show public projects for landowners too
      return <PublicProjects />;
    case 'worker':
      return <WorkerProjects />;
    case 'community':
      return <CommunityProjects />;
    default:
      return <PublicProjects />;
  }
};

export default Projects;
