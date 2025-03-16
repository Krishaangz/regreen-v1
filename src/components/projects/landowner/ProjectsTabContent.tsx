
import React from 'react';
import { CardContent } from '@/components/ui/card';
import ProjectCard from './ProjectCard';

interface ProjectType {
  id: number;
  name: string;
  type: string;
  location: string;
  area: string;
  progress?: number;
  startDate?: string;
  endDate?: string;
  status: string;
}

interface ProjectsTabContentProps {
  projects: ProjectType[];
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
