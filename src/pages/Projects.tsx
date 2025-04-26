
import React, { useState } from 'react';
import { useRole } from '@/contexts/RoleContext';
import WorkerProjects from './projects/WorkerProjects';
import CommunityProjects from './projects/CommunityProjects';
import PublicProjects from './PublicProjects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Plus, Filter, MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/stores/authStore';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  activeProjects, 
  plannedProjects, 
  completedProjects, 
  pendingProjects 
} from '@/data/landownerProjects';

const Projects = () => {
  const { role } = useRole();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('forest');
  const [projectLocation, setProjectLocation] = useState('');
  const [activeTab, setActiveTab] = useState('active');
  const addProject = useAuthStore((state) => state.addProject);
  
  // Only show public projects if no role is selected
  if (!role) {
    return <PublicProjects />;
  }

  // For worker and community roles, show their respective project views
  if (role === 'worker') {
    return <WorkerProjects />;
  }
  
  if (role === 'community') {
    return <CommunityProjects />;
  }

  // Handle project creation
  const handleCreateProject = () => {
    if (!projectName.trim()) {
      toast({
        title: "Error",
        description: "Project name is required",
        variant: "destructive",
      });
      return;
    }

    // Generate a new project ID
    const newProjectId = Date.now();
    
    // Create new project
    const newProject = {
      id: newProjectId,
      name: projectName,
      type: projectType,
      location: projectLocation || 'Your Location',
      progress: 0,
      status: 'Planning',
      startDate: new Date().toLocaleDateString(),
    };
    
    // Add to store
    addProject(newProject);
    
    // Show success message
    toast({
      title: "Success",
      description: "New project created successfully",
      variant: "default",
    });

    // Reset form and close modal
    setProjectName('');
    setProjectType('forest');
    setProjectLocation('');
    setIsCreateModalOpen(false);
  };

  // Project cards component
  const ProjectCard = ({ project }: { project: any }) => (
    <Card key={project.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{project.name}</CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={14} className="text-muted-foreground" />
              <CardDescription>{project.location}</CardDescription>
            </div>
          </div>
          <Badge className={
            project.status === 'Active' ? 'bg-green-500' : 
            project.status === 'Planning' ? 'bg-blue-500' : 
            project.status === 'Completed' ? 'bg-gray-500' : 
            'bg-amber-500'
          }>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-muted-foreground" />
              <span>{project.workers || '0'} workers</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-muted-foreground" />
              <span>Started: {project.startDate}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            // This would navigate to a detailed project view in a real app
            toast({
              title: "Project Details",
              description: `Viewing details for ${project.name}`,
              variant: "default",
            });
          }}
        >
          View Details
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );

  // Landowner consolidated view (Properties + Projects)
  return (
    <div className="container mx-auto py-6 space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">My Properties & Projects</h1>
          <p className="text-muted-foreground">
            Manage your land properties and restoration projects
          </p>
        </div>
        <Button 
          className="bg-regreen-600 hover:bg-regreen-700 text-white"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <Plus size={16} className="mr-2" />
          Register New Property
        </Button>
      </div>

      {/* Featured properties overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle>Total Land</CardTitle>
            <CardDescription>Your registered properties</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-3xl font-bold">120 acres</div>
            <div className="text-sm text-muted-foreground mt-2">4 registered properties</div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" size="sm">View Land Records</Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Currently in progress</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-3xl font-bold">3 projects</div>
            <div className="text-sm text-muted-foreground mt-2">75% average completion</div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" size="sm" onClick={() => setActiveTab('active')}>
              View Active Projects
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle>Ecosystem Health</CardTitle>
            <CardDescription>Overall health score</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-3xl font-bold">82/100</div>
            <div className="text-sm text-green-600 mt-2">↑ 12% improvement</div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" size="sm">View Health Report</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Projects tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <TabsList className="grid grid-cols-4 w-full sm:w-auto">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="planned">Planned</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
          </div>
        </div>
        
        <TabsContent value="active" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {activeProjects.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground mb-4">No active projects found</p>
              <Button 
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-regreen-600 hover:bg-regreen-700 text-white"
              >
                <Plus size={16} className="mr-2" />
                Create New Project
              </Button>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="planned" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {plannedProjects.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground mb-4">No planned projects found</p>
              <Button 
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-regreen-600 hover:bg-regreen-700 text-white"
              >
                <Plus size={16} className="mr-2" />
                Create New Project
              </Button>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {completedProjects.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No completed projects found</p>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="pending" className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {pendingProjects.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No pending projects found</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Project Creation Dialog */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Register New Property</DialogTitle>
            <DialogDescription>
              Add a new property to your portfolio for restoration projects.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-name" className="text-right">
                Property Name
              </Label>
              <Input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Oak Valley"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-type" className="text-right">
                Land Type
              </Label>
              <Select
                defaultValue={projectType}
                onValueChange={(value) => setProjectType(value)}
              >
                <SelectTrigger className="col-span-3" id="project-type">
                  <SelectValue placeholder="Select land type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="forest">Forest</SelectItem>
                  <SelectItem value="grassland">Grassland</SelectItem>
                  <SelectItem value="wetland">Wetland</SelectItem>
                  <SelectItem value="agricultural">Agricultural</SelectItem>
                  <SelectItem value="mixed">Mixed Ecosystem</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-location" className="text-right">
                Location
              </Label>
              <Input
                id="project-location"
                value={projectLocation}
                onChange={(e) => setProjectLocation(e.target.value)}
                placeholder="City, State"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateProject}>
              Create Property
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
