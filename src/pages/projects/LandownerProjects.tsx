
import React, { useState } from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import ProjectsTabContent from '@/components/projects/landowner/ProjectsTabContent';
import { useToast } from '@/hooks/use-toast';
import { 
  activeProjects, 
  plannedProjects, 
  completedProjects, 
  pendingProjects 
} from '@/data/landownerProjects';
import CreateProjectModal from '@/components/projects/CreateProjectModal';

const LandownerProjects = () => {
  const { toast } = useToast();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  
  const handleNewProject = () => {
    setIsCreateModalOpen(true);
  };
  
  const tabs = [
    {
      value: "active",
      label: "Active",
      content: <ProjectsTabContent projects={activeProjects} />
    },
    {
      value: "planned",
      label: "Planned",
      content: <ProjectsTabContent projects={plannedProjects} />
    },
    {
      value: "completed",
      label: "Completed",
      content: <ProjectsTabContent projects={completedProjects} />
    },
    {
      value: "pending",
      label: "Pending",
      content: <ProjectsTabContent projects={pendingProjects} />
    }
  ];
  
  return (
    <>
      <ProjectBase
        title="My Properties"
        description="Manage your land restoration projects and track progress"
        tabs={tabs}
        defaultTab="active"
        actionLabel="Add Property"
        onAction={handleNewProject}
      />
      
      <CreateProjectModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
};

export default LandownerProjects;
