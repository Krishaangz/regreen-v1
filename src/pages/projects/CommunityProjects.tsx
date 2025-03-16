
import React from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import ProjectsTabContent from '@/components/projects/community/ProjectsTabContent';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { 
  localProjects, 
  initiatedProjects, 
  upcomingProjects, 
  savedProjects 
} from '@/data/communityProjects';

const CommunityProjects = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleNewInitiative = () => {
    toast({
      title: "New Initiative",
      description: "The form to start a new community initiative would open here.",
    });
  };
  
  const tabs = [
    {
      value: "local",
      label: "Local",
      content: <ProjectsTabContent projects={localProjects} />
    },
    {
      value: "initiated",
      label: "My Initiatives",
      content: <ProjectsTabContent projects={initiatedProjects} />
    },
    {
      value: "upcoming",
      label: "Upcoming",
      content: <ProjectsTabContent projects={upcomingProjects} />
    },
    {
      value: "saved",
      label: "Saved",
      content: <ProjectsTabContent projects={savedProjects} />
    }
  ];
  
  return (
    <ProjectBase
      title="Community Projects"
      description="Discover and participate in local ecological initiatives"
      tabs={tabs}
      defaultTab="local"
      actionLabel="Start Initiative"
      onAction={handleNewInitiative}
    />
  );
};

export default CommunityProjects;
