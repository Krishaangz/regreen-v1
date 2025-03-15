
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  name: string;
  status: string;
  progress: number;
  type: string;
}

interface RecentProjectsCardProps {
  projects: Project[];
}

const RecentProjectsCard = ({ projects }: RecentProjectsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Projects</CardTitle>
        <CardDescription>Status updates on your active restoration projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentProjectsCard;
