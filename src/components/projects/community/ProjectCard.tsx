
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Heart, MapPin, ThumbsUp, Users } from 'lucide-react';

interface CommunityProjectType {
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

interface ProjectCardProps {
  project: CommunityProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div key={project.id} className="border rounded-lg p-4 hover:border-amber-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground flex items-center mt-1">
        <MapPin className="h-3 w-3 mr-1" />
        {project.location} • {project.distance} away
      </div>
      
      {project.progress !== undefined && (
        <div className="mt-3 space-y-1">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
      )}
      
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <ThumbsUp className="h-4 w-4 mr-1 text-muted-foreground" />
          <span className="text-sm">{project.supporters} supporters</span>
        </div>
        
        {project.participants && (
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm">{project.participants} participants</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center mt-3 text-sm">
        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
        <span className="text-muted-foreground mr-1">
          {project.startDate ? 'Started:' : 'Target date:'}
        </span>
        <span>{project.startDate || project.targetDate}</span>
      </div>
      
      <div className="flex gap-2 mt-3">
        {project.status === 'Planning Phase' ? (
          <>
            <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700 text-white">
              <ThumbsUp className="h-3 w-3 mr-1" />
              Support
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Users className="h-3 w-3 mr-1" />
              Join
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm" className="flex-1">
              <Users className="h-3 w-3 mr-1" />
              Participate
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Heart className="h-3 w-3 mr-1" />
              Save
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
