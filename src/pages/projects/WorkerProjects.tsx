
import React from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BriefcaseMedical, Check, Clock, Eye, MessageSquare, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

const WorkerProjects = () => {
  const navigate = useNavigate();
  
  const assignedProjects = [
    {
      id: 1,
      name: 'Oak Valley Tree Planting',
      location: 'Oak Valley',
      deadline: 'May 25, 2023',
      compensation: '$180',
      status: 'In Progress',
      teamMembers: 4,
      hoursRemaining: 6
    },
    {
      id: 2,
      name: 'Meadow Ridge Irrigation',
      location: 'Meadow Ridge',
      deadline: 'June 3, 2023',
      compensation: '$220',
      status: 'Not Started',
      teamMembers: 3,
      hoursRemaining: 12
    }
  ];
  
  const availableProjects = [
    {
      id: 3,
      name: 'Green Acres Soil Preparation',
      location: 'Green Acres',
      deadline: 'June 5, 2023',
      compensation: '$150',
      status: 'Open',
      skillLevel: 'Beginner',
      distance: '3.2 miles'
    },
    {
      id: 4,
      name: 'Riverside Park Planting',
      location: 'Riverside Park',
      deadline: 'June 10, 2023',
      compensation: '$175',
      status: 'Open',
      skillLevel: 'Intermediate',
      distance: '5.8 miles'
    }
  ];
  
  const completedProjects = [
    {
      id: 5,
      name: 'Downtown Community Garden',
      location: 'City Center',
      completedDate: 'May 10, 2023',
      compensation: '$165',
      status: 'Completed',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Highland Park Cleanup',
      location: 'Highland Park',
      completedDate: 'Apr 28, 2023',
      compensation: '$140',
      status: 'Completed',
      rating: 5.0
    }
  ];
  
  const assignedProjectCard = (project: any) => (
    <div key={project.id} className="border rounded-lg p-4 hover:border-blue-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground mt-1">
        {project.location}
      </div>
      
      <div className="flex justify-between mt-3">
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Team Size</div>
          <div className="flex -space-x-2">
            {Array(project.teamMembers).fill(0).map((_, i) => (
              <Avatar key={i} className="h-7 w-7 border-2 border-background">
                <AvatarFallback>T{i+1}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
        <div className="space-y-1 text-right">
          <div className="text-sm text-muted-foreground">Compensation</div>
          <div className="font-semibold text-blue-600 dark:text-blue-400">{project.compensation}</div>
        </div>
      </div>
      
      <div className="flex items-center mt-3 text-sm">
        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
        <span className="text-muted-foreground mr-1">Hours remaining:</span>
        <span>{project.hoursRemaining}</span>
        <span className="mx-2">•</span>
        <span className="text-muted-foreground mr-1">Due:</span>
        <span>{project.deadline}</span>
      </div>
      
      <div className="flex gap-2 mt-3">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="h-3 w-3 mr-1" />
          View
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <MessageSquare className="h-3 w-3 mr-1" />
          Team Chat
        </Button>
      </div>
    </div>
  );
  
  const availableProjectCard = (project: any) => (
    <div key={project.id} className="border rounded-lg p-4 hover:border-blue-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground mt-1">
        {project.location} • {project.distance} away
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <Badge variant="outline">{project.skillLevel}</Badge>
        <div className="font-semibold text-blue-600 dark:text-blue-400">{project.compensation}</div>
      </div>
      
      <div className="flex items-center mt-3 text-sm">
        <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
        <span className="text-muted-foreground mr-1">Deadline:</span>
        <span>{project.deadline}</span>
      </div>
      
      <div className="flex gap-2 mt-3">
        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
          <BriefcaseMedical className="h-3 w-3 mr-1" />
          Apply
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="h-3 w-3 mr-1" />
          Details
        </Button>
      </div>
    </div>
  );
  
  const completedProjectCard = (project: any) => (
    <div key={project.id} className="border rounded-lg p-4 hover:border-blue-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground mt-1">
        {project.location}
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500 mr-1" />
          <span className="font-medium">{project.rating}</span>
        </div>
        <div className="font-semibold text-blue-600 dark:text-blue-400">{project.compensation}</div>
      </div>
      
      <div className="flex items-center mt-3 text-sm">
        <Check className="h-4 w-4 mr-1 text-green-500" />
        <span className="text-muted-foreground mr-1">Completed:</span>
        <span>{project.completedDate}</span>
      </div>
      
      <Button variant="outline" size="sm" className="w-full mt-3">
        <Eye className="h-3 w-3 mr-1" />
        View Details
      </Button>
    </div>
  );
  
  const tabs = [
    {
      value: "assigned",
      label: "Assigned",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {assignedProjects.map(assignedProjectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "available",
      label: "Available",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {availableProjects.map(availableProjectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "completed",
      label: "Completed",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {completedProjects.map(completedProjectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "saved",
      label: "Saved",
      content: (
        <CardContent className="p-6">
          <div className="text-center py-12 text-muted-foreground">
            No saved projects yet
          </div>
        </CardContent>
      )
    }
  ];
  
  return (
    <ProjectBase
      title="Available Projects"
      description="Find work opportunities and track your assigned tasks"
      tabs={tabs}
      defaultTab="assigned"
    />
  );
};

export default WorkerProjects;
