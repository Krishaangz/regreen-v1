
import React from 'react';
import ProjectBase from '@/components/projects/ProjectBase';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, FileEdit, MapPin, TreeDeciduous, Droplets, Download } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const LandownerProjects = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const activeProjects = [
    {
      id: 1,
      name: 'Oak Valley Restoration',
      type: 'Forest Restoration',
      location: 'Oak Valley',
      area: '12.4 acres',
      progress: 75,
      startDate: 'Jan 15, 2023',
      endDate: 'Dec 20, 2023',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Meadow Ridge Revival',
      type: 'Grassland Restoration',
      location: 'Meadow Ridge',
      area: '8.7 acres',
      progress: 45,
      startDate: 'Mar 10, 2023',
      endDate: 'Nov 30, 2023',
      status: 'In Progress'
    }
  ];
  
  const plannedProjects = [
    {
      id: 3,
      name: 'Green Acres Development',
      type: 'Mixed Restoration',
      location: 'Green Acres',
      area: '15.2 acres',
      startDate: 'Jul 1, 2023',
      endDate: 'Aug 30, 2024',
      status: 'Planned'
    }
  ];
  
  const completedProjects = [
    {
      id: 4,
      name: 'Riverside Park Renewal',
      type: 'Riparian Restoration',
      location: 'Riverside Park',
      area: '5.8 acres',
      progress: 100,
      startDate: 'Mar 5, 2022',
      endDate: 'Feb 28, 2023',
      status: 'Completed'
    }
  ];
  
  const pendingProjects = [
    {
      id: 5,
      name: 'Hilltop Conservation',
      type: 'Soil Conservation',
      location: 'Hilltop',
      area: '7.3 acres',
      status: 'Pending Approval'
    }
  ];
  
  const handleNewProject = () => {
    toast({
      title: "New Project",
      description: "The add new project form would open here.",
    });
  };
  
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
  
  const projectCard = (project: any) => (
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
  
  const tabs = [
    {
      value: "active",
      label: "Active",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {activeProjects.map(projectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "planned",
      label: "Planned",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {plannedProjects.map(projectCard)}
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
            {completedProjects.map(projectCard)}
          </div>
        </CardContent>
      )
    },
    {
      value: "pending",
      label: "Pending",
      content: (
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {pendingProjects.map(projectCard)}
          </div>
        </CardContent>
      )
    }
  ];
  
  return (
    <ProjectBase
      title="My Properties"
      description="Manage your land restoration projects and track progress"
      tabs={tabs}
      defaultTab="active"
      actionLabel="Add Property"
      onAction={handleNewProject}
    />
  );
};

export default LandownerProjects;
