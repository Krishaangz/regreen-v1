
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerProjects from './projects/LandownerProjects';
import WorkerProjects from './projects/WorkerProjects';
import CommunityProjects from './projects/CommunityProjects';

const Projects = () => {
  const { role } = useRole();
  
  // Render the appropriate projects view based on the user's role
  switch(role) {
    case 'landowner':
      return <LandownerProjects />;
    case 'worker':
      return <WorkerProjects />;
    case 'community':
      return <CommunityProjects />;
    default:
      // Fallback to landowner view if no role is set (should not happen due to RouteGuard)
      return <LandownerProjects />;
  }
};

export default Projects;
