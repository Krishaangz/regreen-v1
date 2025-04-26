
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertTriangle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/stores/authStore';

const WorkerTasks = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('current');
  const addNotification = useAuthStore((state) => state.addNotification);

  // Sample tasks data - in a real app this would come from your backend
  const currentTasks = [
    {
      id: 1,
      name: 'Native Plant Installation',
      project: 'Oak Valley Restoration',
      location: 'East Field',
      dueDate: '2023-05-15',
      priority: 'high',
      status: 'in-progress',
      description: 'Install native plant species according to the provided blueprint.'
    },
    {
      id: 2,
      name: 'Irrigation System Check',
      project: 'Meadow Ridge Revival',
      location: 'North Section',
      dueDate: '2023-05-16',
      priority: 'medium',
      status: 'in-progress',
      description: 'Verify all irrigation systems are functioning correctly and repair as needed.'
    }
  ];

  const upcomingTasks = [
    {
      id: 3,
      name: 'Soil Amendment Application',
      project: 'Oak Valley Restoration',
      location: 'West Field',
      dueDate: '2023-05-18',
      priority: 'medium',
      status: 'scheduled',
      description: 'Apply organic soil amendments as specified in the project plan.'
    },
    {
      id: 4,
      name: 'Invasive Species Removal',
      project: 'Cedar Lake Restoration',
      location: 'Lakeside',
      dueDate: '2023-05-20',
      priority: 'high',
      status: 'scheduled',
      description: 'Identify and remove specified invasive plant species from the lakeside area.'
    }
  ];

  const completedTasks = [
    {
      id: 5,
      name: 'Site Preparation',
      project: 'Oak Valley Restoration',
      location: 'East Field',
      completionDate: '2023-05-10',
      priority: 'high',
      description: 'Clear the site and prepare soil for planting.'
    },
    {
      id: 6,
      name: 'Initial Assessment',
      project: 'Meadow Ridge Revival',
      location: 'Full Site',
      completionDate: '2023-05-08',
      priority: 'medium',
      description: 'Conduct initial site assessment and document existing conditions.'
    }
  ];

  const handleCompleteTask = (taskId: number) => {
    // In a real app, you would update the task status in your backend
    toast({
      title: "Task completed",
      description: `Task #${taskId} has been marked as complete`,
      variant: "default",
    });

    addNotification({
      type: 'success',
      message: `You completed task #${taskId}`,
      date: new Date().toISOString(),
    });
  };

  const handleScheduleTask = (taskId: number) => {
    // In a real app, you would update your calendar or scheduling system
    toast({
      title: "Task scheduled",
      description: `Task #${taskId} has been added to your calendar`,
      variant: "default",
    });
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-500">High</Badge>;
      case 'medium':
        return <Badge className="bg-amber-500">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-500">Low</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case 'scheduled':
        return <Badge className="bg-purple-500">Scheduled</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6 container mx-auto py-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Tasks</h1>
          <p className="text-muted-foreground">View and manage your assigned restoration tasks</p>
        </div>
        <Button onClick={() => setActiveTab('current')}>Refresh Tasks</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3">
          <TabsTrigger value="current">Current ({currentTasks.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming ({upcomingTasks.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current" className="space-y-4">
          {currentTasks.map(task => (
            <Card key={task.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle>{task.name}</CardTitle>
                    <CardDescription className="mt-1">
                      Project: {task.project} | Location: {task.location}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                    {getPriorityBadge(task.priority)}
                    {getStatusBadge(task.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{task.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock size={16} className="mr-1" />
                    <span>Due: {task.dueDate}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleScheduleTask(task.id)}
                    >
                      <Calendar size={16} className="mr-1" />
                      Schedule
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      <CheckCircle size={16} className="mr-1" />
                      Complete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {currentTasks.length === 0 && (
            <div className="text-center py-8">
              <p>No current tasks assigned.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="upcoming" className="space-y-4">
          {upcomingTasks.map(task => (
            <Card key={task.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle>{task.name}</CardTitle>
                    <CardDescription className="mt-1">
                      Project: {task.project} | Location: {task.location}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                    {getPriorityBadge(task.priority)}
                    {getStatusBadge(task.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{task.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <AlertTriangle size={16} className="mr-1" />
                    <span>Starts: {task.dueDate}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleScheduleTask(task.id)}
                  >
                    <Calendar size={16} className="mr-1" />
                    Add to Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {upcomingTasks.length === 0 && (
            <div className="text-center py-8">
              <p>No upcoming tasks scheduled.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completedTasks.map(task => (
            <Card key={task.id}>
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle>{task.name}</CardTitle>
                    <CardDescription className="mt-1">
                      Project: {task.project} | Location: {task.location}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                    {getPriorityBadge(task.priority)}
                    <Badge variant="outline" className="border-green-500 text-green-500">Completed</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{task.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle size={16} className="mr-1" />
                  <span>Completed on: {task.completionDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
          {completedTasks.length === 0 && (
            <div className="text-center py-8">
              <p>No completed tasks yet.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkerTasks;
