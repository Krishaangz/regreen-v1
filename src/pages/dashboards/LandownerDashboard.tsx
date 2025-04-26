
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import LandAreaCard from '@/components/dashboard/landowner/LandAreaCard';
import EcosystemHealthCard from '@/components/dashboard/landowner/EcosystemHealthCard';
import UpcomingActivitiesCard from '@/components/dashboard/landowner/UpcomingActivitiesCard';
import RecentProjectsCard from '@/components/dashboard/landowner/RecentProjectsCard';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { useToast } from '@/hooks/use-toast';

const LandownerDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const addProject = useAuthStore((state) => state.addProject);
  
  // Sample data for landowners
  const recentProjects = [
    { id: 1, name: 'Oak Valley Restoration', status: 'Active', progress: 75, type: 'Forest' },
    { id: 2, name: 'Meadow Ridge Revival', status: 'Planning', progress: 15, type: 'Grassland' },
  ];

  const ecosystemHealthData = [
    { name: 'Jan', biodiversity: 30, soil: 40 },
    { name: 'Feb', biodiversity: 35, soil: 45 },
    { name: 'Mar', biodiversity: 40, soil: 50 },
    { name: 'Apr', biodiversity: 45, soil: 55 },
    { name: 'May', biodiversity: 55, soil: 60 },
    { name: 'Jun', biodiversity: 65, soil: 65 },
  ];

  const landData = {
    totalArea: 100,
    distribution: [
      { name: 'Forest', value: 45 },
      { name: 'Grassland', value: 25 },
      { name: 'Wetland', value: 15 },
      { name: 'Other', value: 15 },
    ]
  };

  const upcomingActivities = [
    { id: 1, title: 'Tree Planting Session', date: 'May 15, 2023', location: 'Oak Valley' },
    { id: 2, title: 'Soil Analysis', date: 'May 22, 2023', location: 'Meadow Ridge' },
    { id: 3, title: 'Stakeholder Meeting', date: 'May 30, 2023', location: 'Virtual' },
  ];

  const handleNewProject = () => {
    // Generate a new project ID
    const newProjectId = Date.now();
    
    // Create new project
    const newProject = {
      id: newProjectId,
      name: `New Project ${newProjectId}`,
      type: 'Forest Restoration',
      location: 'Your Location',
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
    
    // Navigate to projects page
    navigate('/my-properties');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">Landowner Dashboard</h1>
          <p className="text-muted-foreground">Manage your properties and restoration projects</p>
        </div>
        <Button 
          className="bg-regreen-600 hover:bg-regreen-700 text-white"
          onClick={handleNewProject}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <LandAreaCard landData={landData} />
        
        <EcosystemHealthCard data={ecosystemHealthData} />
        
        <UpcomingActivitiesCard activities={upcomingActivities} />
      </div>

      <RecentProjectsCard projects={recentProjects} />
    </div>
  );
};

export default LandownerDashboard;
