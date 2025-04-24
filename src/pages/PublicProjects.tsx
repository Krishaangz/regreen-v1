
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import ProjectCard from '@/components/projects/landowner/ProjectCard';
import { activeProjects, completedProjects, plannedProjects, pendingProjects } from '@/data/landownerProjects';
import CreateProjectModal from '@/components/projects/CreateProjectModal';
import { useRole } from '@/contexts/RoleContext';

// Combine all projects and add a username field for public display
const allProjects = [
  ...activeProjects.map(p => ({ ...p, username: "Sarah Johnson" })),
  ...plannedProjects.map(p => ({ ...p, username: "Michael Roberts" })),
  ...completedProjects.map(p => ({ ...p, username: "David Chen" })),
  ...pendingProjects.map(p => ({ ...p, username: "Emma Wilson" }))
];

const forestProjects = allProjects.filter(p => p.type === 'Forest Restoration');
const wetlandProjects = allProjects.filter(p => p.type === 'Wetland Restoration');
const prairieProjects = allProjects.filter(p => p.type === 'Prairie Restoration');

const PublicProjects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { role } = useRole();

  const filteredProjects = (projects: any[]) => {
    return projects.filter(project => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-left">
          <h1 className="text-3xl font-bold">Ecological Projects</h1>
          <p className="text-muted-foreground">
            Browse restoration projects from landowners across the country
          </p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          
          {role !== "worker" && (
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-regreen-600 hover:bg-regreen-700 text-white whitespace-nowrap"
            >
              <Plus className="h-4 w-4 mr-2" />
              {role === "landowner" ? "Add Property" : "Start Initiative"}
            </Button>
          )}
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-3xl mx-auto mb-6">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="forest">Forest</TabsTrigger>
          <TabsTrigger value="wetland">Wetland</TabsTrigger>
          <TabsTrigger value="prairie">Prairie</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Projects</CardTitle>
              <CardDescription>
                Viewing {filteredProjects(allProjects).length} projects across all categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects(allProjects).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={{...project, name: `${project.name} (${project.username})`}}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="forest">
          <Card>
            <CardHeader>
              <CardTitle>Forest Restoration Projects</CardTitle>
              <CardDescription>
                Viewing {filteredProjects(forestProjects).length} forest restoration projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects(forestProjects).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={{...project, name: `${project.name} (${project.username})`}}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="wetland">
          <Card>
            <CardHeader>
              <CardTitle>Wetland Restoration Projects</CardTitle>
              <CardDescription>
                Viewing {filteredProjects(wetlandProjects).length} wetland restoration projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects(wetlandProjects).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={{...project, name: `${project.name} (${project.username})`}}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="prairie">
          <Card>
            <CardHeader>
              <CardTitle>Prairie Restoration Projects</CardTitle>
              <CardDescription>
                Viewing {filteredProjects(prairieProjects).length} prairie restoration projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects(prairieProjects).map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={{...project, name: `${project.name} (${project.username})`}}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <CreateProjectModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default PublicProjects;
