
import React from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, DollarSign, Calendar, Eye } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const WorkerProjects = () => {
  const { toast } = useToast();
  
  const availableProjects = [
    { 
      id: 1, 
      name: 'Oak Valley Restoration', 
      type: 'Tree Planting',
      location: 'Oak Valley', 
      distance: '2.4 miles',
      deadline: 'May 25, 2023',
      compensation: '$180',
      difficulty: 'Medium',
      status: 'Available'
    },
    { 
      id: 2, 
      name: 'Meadow Ridge Revival', 
      type: 'Irrigation Setup',
      location: 'Meadow Ridge', 
      distance: '5.7 miles',
      deadline: 'May 30, 2023',
      compensation: '$220',
      difficulty: 'Hard',
      status: 'Available'
    },
  ];
  
  const assignedProjects = [
    { 
      id: 3, 
      name: 'Green Acres Development', 
      type: 'Soil Preparation',
      location: 'Green Acres', 
      distance: '3.2 miles',
      deadline: 'June 5, 2023',
      compensation: '$150',
      progress: 20,
      status: 'In Progress'
    },
    { 
      id: 4, 
      name: 'Riverside Wetland', 
      type: 'Wetland Planting',
      location: 'Riverside Park', 
      distance: '4.1 miles',
      deadline: 'June 12, 2023',
      compensation: '$210',
      progress: 45,
      status: 'In Progress'
    },
  ];
  
  const completedProjects = [
    { 
      id: 5, 
      name: 'Hamilton Gardens', 
      type: 'Composting',
      location: 'Hamilton Park', 
      distance: '1.8 miles',
      completedDate: 'April 30, 2023',
      compensation: '$175',
      rating: 4.8,
      status: 'Completed'
    },
  ];
  
  const scheduledProjects = [
    { 
      id: 6, 
      name: 'Lakeside Park Clean-up', 
      type: 'Waste Removal',
      location: 'Lakeside Park', 
      distance: '6.3 miles',
      startDate: 'June 20, 2023',
      duration: '3 days',
      compensation: '$240',
      status: 'Scheduled'
    },
  ];
  
  const handleApplyForTask = () => {
    toast({
      title: "Search Tasks",
      description: "The search and filter interface for available tasks would open here.",
    });
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Medium': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'Hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Available': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Completed': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Scheduled': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };
  
  const availableProjectCard = (project: any) => (
    <div key={project.id} className="border rounded-lg p-4 hover:border-blue-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className={getStatusColor(project.status)}>
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground flex items-center mt-1">
        <MapPin className="h-3 w-3 mr-1" />
        {project.location} • {project.distance} away
      </div>
      
      <div className="flex justify-between items-center mt-2 text-sm">
        <span>{project.type}</span>
        <Badge variant="outline" className={getDifficultyColor(project.difficulty)}>
          {project.difficulty}
        </Badge>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm flex items-center">
          <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
          <span className="text-muted-foreground mr-1">Due:</span>
          <span>{project.deadline}</span>
        </div>
        <span className="font-semibold text-blue-600 dark:text-blue-400">{project.compensation}</span>
      </div>
      
      <Button variant="outline" size="sm" className="mt-3 w-full">
        <Eye className="mr-1 h-4 w-4" />
        View Details
      </Button>
    </div>
  );
  
  const assignedProjectCard = (project: any) => (
    <div key={project.id} className="border rounded-lg p-4 hover:border-blue-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className={getStatusColor(project.status)}>
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground flex items-center mt-1">
        <MapPin className="h-3 w-3 mr-1" />
        {project.location} • {project.distance} away
      </div>
      
      <div className="mt-2 space-y-1">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm flex items-center">
          <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
          <span className="text-muted-foreground mr-1">Due:</span>
          <span>{project.deadline}</span>
        </div>
        <span className="font-semibold text-blue-600 dark:text-blue-400">{project.compensation}</span>
      </div>
      
      <Button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white">
        Continue Work
      </Button>
    </div>
  );
  
  const completedProjectCard = (project: any) => (
    <div key={project.id} className="border rounded-lg p-4 hover:border-blue-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className={getStatusColor(project.status)}>
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground flex items-center mt-1">
        <MapPin className="h-3 w-3 mr-1" />
        {project.location} • {project.distance} away
      </div>
      
      <div className="text-sm mt-2">
        <span className="text-muted-foreground">Completed: </span>
        <span>{project.completedDate}</span>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm">
          <span className="text-muted-foreground">Rating: </span>
          <span className="font-medium">{project.rating}/5.0</span>
        </div>
        <span className="font-semibold text-blue-600 dark:text-blue-400">{project.compensation}</span>
      </div>
      
      <Button variant="outline" size="sm" className="mt-3 w-full">
        View Certificate
      </Button>
    </div>
  );
  
  const scheduledProjectCard = (project: any) => (
    <div key={project.id} className="border rounded-lg p-4 hover:border-blue-600 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-semibold">{project.name}</h3>
        <Badge variant="outline" className={getStatusColor(project.status)}>
          {project.status}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground flex items-center mt-1">
        <MapPin className="h-3 w-3 mr-1" />
        {project.location} • {project.distance} away
      </div>
      
      <div className="flex justify-between items-center mt-2 text-sm">
        <div className="flex items-center">
          <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
          <span className="text-muted-foreground mr-1">Starts:</span>
          <span>{project.startDate}</span>
        </div>
        <div>
          <span className="text-muted-foreground mr-1">Duration:</span>
          <span>{project.duration}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <div className="text-sm">
          <span className="text-muted-foreground">Type: </span>
          <span>{project.type}</span>
        </div>
        <span className="font-semibold text-blue-600 dark:text-blue-400">{project.compensation}</span>
      </div>
      
      <div className="flex gap-2 mt-3">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="mr-1 h-4 w-4" />
          Details
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Calendar className="mr-1 h-4 w-4" />
          Calendar
        </Button>
      </div>
    </div>
  );
  
  const tabs = [
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
      value: "assigned",
      label: "In Progress",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {assignedProjects.map(assignedProjectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "scheduled",
      label: "Scheduled",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {scheduledProjects.map(scheduledProjectCard)}
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
    }
  ];
  
  return (
    <ProjectBase
      title="Worker Projects"
      description="Find and manage restoration jobs"
      tabs={tabs}
      defaultTab="assigned"
      actionLabel="Find Tasks"
      onAction={handleApplyForTask}
    />
  );
};

export default WorkerProjects;
