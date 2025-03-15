
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { MapPin, TreeDeciduous, Droplets } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  name: string;
  status: string;
  progress: number;
  type: string;
}

const ProjectCard = ({ id, name, status, progress, type }: ProjectCardProps) => {
  const getProjectIcon = (type: string) => {
    switch(type) {
      case 'Forest':
        return <TreeDeciduous className="h-8 w-8 text-green-600 dark:text-green-400" />;
      case 'Wetland':
        return <Droplets className="h-8 w-8 text-blue-600 dark:text-blue-400" />;
      default:
        return <TreeDeciduous className="h-8 w-8 text-regreen-600 dark:text-regreen-400" />;
    }
  };

  return (
    <div className="flex gap-4 border rounded-lg p-4">
      {getProjectIcon(type)}
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <div className="flex items-center text-sm text-muted-foreground mt-0.5">
          <MapPin className="h-3 w-3 mr-1" />
          Status: {status}
        </div>
        
        <div className="mt-4 space-y-1">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
