
import React from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Heart, MapPin, ThumbsUp, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const CommunityProjects = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const localProjects = [
    {
      id: 1,
      name: 'Oak Valley Community Forest',
      location: 'Oak Valley',
      distance: '2.4 miles',
      progress: 75,
      supporters: 86,
      participants: 34,
      startDate: 'Jan 15, 2023',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Meadow Ridge Wetland Restoration',
      location: 'Meadow Ridge',
      distance: '5.7 miles',
      progress: 45,
      supporters: 53,
      participants: 21,
      startDate: 'Mar 10, 2023',
      status: 'Active'
    }
  ];
  
  const initiatedProjects = [
    {
      id: 3,
      name: 'Downtown Community Garden',
      location: 'City Center',
      distance: '1.8 miles',
      progress: 90,
      supporters: 112,
      participants: 45,
      startDate: 'Feb 5, 2023',
      status: 'Your Initiative'
    }
  ];
  
  const upcomingProjects = [
    {
      id: 4,
      name: 'Green Acres Urban Forest',
      location: 'Green Acres',
      distance: '3.2 miles',
      supporters: 28,
      targetDate: 'Jun 15, 2023',
      status: 'Planning Phase'
    },
    {
      id: 5,
      name: 'Riverside Park Revival',
      location: 'Riverside Park',
      distance: '4.1 miles',
      supporters: 41,
      targetDate: 'Jul 1, 2023',
      status: 'Planning Phase'
    }
  ];
  
  const savedProjects = [
    {
      id: 6,
      name: 'Highland Park Pollinator Garden',
      location: 'Highland Park',
      distance: '6.3 miles',
      progress: 25,
      supporters: 38,
      participants: 12,
      startDate: 'Apr 20, 2023',
      status: 'Active'
    }
  ];
  
  const handleNewInitiative = () => {
    toast({
      title: "New Initiative",
      description: "The form to start a new community initiative would open here.",
    });
  };
  
  const projectCard = (project: any) => (
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
  
  const tabs = [
    {
      value: "local",
      label: "Local",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {localProjects.map(projectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "initiated",
      label: "My Initiatives",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {initiatedProjects.map(projectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "upcoming",
      label: "Upcoming",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingProjects.map(projectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "saved",
      label: "Saved",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {savedProjects.map(projectCard)}
          </div>
        </CardContent>
      )
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
