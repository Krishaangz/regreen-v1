
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerProjects from './projects/LandownerProjects';
import WorkerProjects from './projects/WorkerProjects';
import CommunityProjects from './projects/CommunityProjects';
import PublicProjects from './PublicProjects';
import CreateProjectModal from '@/components/projects/CreateProjectModal';

const Projects = () => {
  const { role } = useRole();
  const [showCreateModal, setShowCreateModal] = useState(false);
  
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
      
      {/* Create Project Modal */}
      {showCreateModal && (
        <CreateProjectModal 
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  );
};

export default Projects;
