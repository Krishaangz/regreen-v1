
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, PieChart } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Plus, TreeDeciduous, Droplets } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const LandownerDashboard = () => {
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

  const landDistributionData = [
    { name: 'Forest', value: 45 },
    { name: 'Grassland', value: 25 },
    { name: 'Wetland', value: 15 },
    { name: 'Other', value: 15 },
  ];

  const upcomingActivities = [
    { id: 1, title: 'Tree Planting Session', date: 'May 15, 2023', location: 'Oak Valley' },
    { id: 2, title: 'Soil Analysis', date: 'May 22, 2023', location: 'Meadow Ridge' },
    { id: 3, title: 'Stakeholder Meeting', date: 'May 30, 2023', location: 'Virtual' },
  ];

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
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">Landowner Dashboard</h1>
          <p className="text-muted-foreground">Manage your properties and restoration projects</p>
        </div>
        <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Land Area</CardTitle>
            <CardDescription>Your restoration properties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">36.3 acres</div>
            <p className="text-sm text-muted-foreground mt-1">Across 3 properties</p>
            <div className="mt-4">
              <PieChart data={landDistributionData} />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Ecosystem Health</CardTitle>
            <CardDescription>6-month trend</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart 
              data={ecosystemHealthData} 
              categories={['biodiversity', 'soil']} 
              index="name"
              yAxisWidth={40}
              className="h-[200px]"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Activities</CardTitle>
            <CardDescription>Next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 border-b pb-3 last:border-0 last:pb-0">
                  <div className="p-2 bg-regreen-100 dark:bg-regreen-900 rounded-md">
                    <Calendar className="h-4 w-4 text-regreen-600 dark:text-regreen-400" />
                  </div>
                  <div>
                    <div className="font-medium">{activity.title}</div>
                    <div className="flex items-center text-sm text-muted-foreground mt-0.5">
                      {activity.date} • {activity.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>Status updates on your active restoration projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex gap-4 border rounded-lg p-4">
                {getProjectIcon(project.type)}
                <div className="flex-1">
                  <div className="font-medium">{project.name}</div>
                  <div className="flex items-center text-sm text-muted-foreground mt-0.5">
                    <MapPin className="h-3 w-3 mr-1" />
                    Status: {project.status}
                  </div>
                  
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandownerDashboard;
