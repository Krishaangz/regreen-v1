
import React from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import ProjectsTabContent from '@/components/projects/landowner/ProjectsTabContent';
import { useToast } from '@/hooks/use-toast';
import { 
  activeProjects, 
  plannedProjects, 
  completedProjects, 
  pendingProjects 
} from '@/data/landownerProjects';

const LandownerProjects = () => {
  const { toast } = useToast();
  
  const handleNewProject = () => {
    toast({
      title: "New Project",
      description: "The add new project form would open here.",
    });
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
    <ProjectBase
      title="My Properties"
      description="Manage your land restoration projects and track progress"
      tabs={tabs}
      defaultTab="active"
      actionLabel="Add Property"
      onAction={handleNewProject}
    />
  );
};

export default LandownerProjects;
