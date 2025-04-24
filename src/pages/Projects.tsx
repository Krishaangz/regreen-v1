
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerProjects from './projects/LandownerProjects';
import WorkerProjects from './projects/WorkerProjects';
import CommunityProjects from './projects/CommunityProjects';
import PublicProjects from './PublicProjects';
import { Button } from '@/components/ui/button'; 
import { PlusCircle } from 'lucide-react';
import CreateProjectModal from '@/components/projects/CreateProjectModal';

const Projects = () => {
  const { role } = useRole();
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Only landowners can create properties
  const canAddProperty = role === 'landowner';
  
  // If not on a role-specific dashboard, show the public projects page
  if (!role) {
    return <PublicProjects />;
  }
  
  return (
    <div className="container py-6 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        
        {canAddProperty && (
          <Button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2"
          >
            <PlusCircle size={18} />
            <span>Add Property</span>
          </Button>
        )}
      </div>
      
      {/* Render the appropriate projects view based on the user's role */}
      {role === 'landowner' && <PublicProjects />}
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
