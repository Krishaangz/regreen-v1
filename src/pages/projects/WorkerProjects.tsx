
import React from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import ProjectsTabContent from '@/components/projects/community/ProjectsTabContent';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Mock data for worker projects
const availableProjects = [
  {
    id: 1,
    name: "Oak Creek Forest Restoration",
    location: "Maplewood County",
    distance: "8.2 miles",
    supporters: 24,
    participants: 8,
    startDate: "June 15, 2023",
    status: "Recruiting"
  },
  {
    id: 2,
    name: "Riverside Wetland Project",
    location: "Clearwater Valley",
    distance: "12.5 miles",
    supporters: 36,
    participants: 15,
    startDate: "May 28, 2023",
    status: "Active"
  },
];

const assignedProjects = [
  {
    id: 3,
    name: "Cedar Lake Restoration",
    location: "Northern Heights",
    distance: "5.3 miles",
    supporters: 42,
    participants: 18,
    startDate: "April 10, 2023",
    progress: 65,
    status: "In Progress"
  }
];

const completedProjects = [
  {
    id: 4,
    name: "Community Garden Expansion",
    location: "Downtown",
    distance: "3.1 miles",
    supporters: 56,
    participants: 22,
    startDate: "January 15, 2023",
    targetDate: "March 20, 2023",
    progress: 100,
    status: "Completed"
  }
];

const savedProjects = [
  {
    id: 5,
    name: "Hillside Erosion Control",
    location: "Eastern Ridge",
    distance: "18.7 miles",
    supporters: 19,
    participants: 0,
    status: "Planning Phase"
  }
];

const WorkerProjects = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const tabs = [
    {
      value: "available",
      label: "Available Jobs",
      content: <ProjectsTabContent projects={availableProjects} />
    },
    {
      value: "assigned",
      label: "My Assignments",
      content: <ProjectsTabContent projects={assignedProjects} />
    },
    {
      value: "completed",
      label: "Completed",
      content: <ProjectsTabContent projects={completedProjects} />
    },
    {
      value: "saved",
      label: "Saved Jobs",
      content: <ProjectsTabContent projects={savedProjects} />
    }
  ];
  
  return (
    <ProjectBase
      title="Worker Projects"
      description="Find work opportunities in ecological restoration projects"
      tabs={tabs}
      defaultTab="available"
    />
  );
};

export default WorkerProjects;
