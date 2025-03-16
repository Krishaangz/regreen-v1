
import React from 'react';
import { CardContent } from '@/components/ui/card';
import ProjectCard from './ProjectCard';

export interface CommunityProjectType {
  id: number;
  name: string;
  location: string;
  distance: string;
  progress?: number;
  supporters: number;
  participants?: number;
  startDate?: string;
  targetDate?: string;
  status: string;
}

interface ProjectsTabContentProps {
  projects: CommunityProjectType[];
}

const ProjectsTabContent: React.FC<ProjectsTabContentProps> = ({ projects }) => {
  return (
    <CardContent className="p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </CardContent>
  );
};

export default ProjectsTabContent;
