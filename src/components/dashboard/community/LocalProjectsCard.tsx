
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Heart, ThumbsUp } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  location: string;
  distance: string;
  supporters: number;
  participants: number;
}

interface LocalProjectsCardProps {
  projects: Project[];
}

const LocalProjectsCard = ({ projects }: LocalProjectsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Local Projects</CardTitle>
        <CardDescription>Ecological initiatives in your area</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{project.name}</h3>
                <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                  Active
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground flex items-center mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {project.location} • {project.distance} away
              </div>
              
              <div className="flex justify-between mt-3">
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm">{project.supporters} supporters</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm">{project.participants} participants</span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Users className="h-3 w-3 mr-1" />
                  Participate
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="h-3 w-3 mr-1" />
                  Support
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalProjectsCard;
