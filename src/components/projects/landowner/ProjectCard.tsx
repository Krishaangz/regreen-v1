
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, FileEdit, MapPin, TreeDeciduous, Droplets, Download } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getProjectIcon = (type: string) => {
    switch(type) {
      case 'Forest Restoration':
        return <TreeDeciduous className="h-10 w-10 text-green-600 dark:text-green-400" />;
      case 'Riparian Restoration':
        return <Droplets className="h-10 w-10 text-blue-600 dark:text-blue-400" />;
      default:
        return <TreeDeciduous className="h-10 w-10 text-regreen-600 dark:text-regreen-400" />;
    }
  };

  return (
    <div key={project.id} className="border rounded-lg p-4 hover:border-regreen-600 transition-colors">
      <div className="flex gap-4">
        {getProjectIcon(project.type)}
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-semibold">{project.name}</h3>
            <Badge variant="outline" className="bg-regreen-100 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-300">
              {project.status}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground flex items-center mt-1">
            <MapPin className="h-3 w-3 mr-1" />
            {project.location} • {project.area}
          </div>
          
          {project.progress !== undefined && (
            <div className="mt-2 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
          )}
          
          {(project.startDate && project.endDate) && (
            <div className="text-sm mt-2">
              <span className="text-muted-foreground">Timeline: </span>
              {project.startDate} - {project.endDate}
            </div>
          )}
          
          <div className="flex gap-2 mt-3">
            <Button variant="outline" size="sm" className="flex-1">
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <FileEdit className="h-3 w-3 mr-1" />
              Edit
            </Button>
            {project.progress === 100 && (
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="h-3 w-3 mr-1" />
                Report
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
