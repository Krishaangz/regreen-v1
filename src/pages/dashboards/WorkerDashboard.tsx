
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart } from '@/components/ui/charts';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Calendar, CheckCircle, Timer, DollarSign, User } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const WorkerDashboard = () => {
  // Sample data for workers
  const currentTasks = [
    { id: 1, title: 'Tree Planting', location: 'Oak Valley', deadline: 'May 25, 2023', progress: 65, priority: 'high' },
    { id: 2, title: 'Soil Preparation', location: 'Green Acres', deadline: 'June 5, 2023', progress: 20, priority: 'medium' },
  ];

  const earningsData = [
    { name: 'Jan', amount: 1200 },
    { name: 'Feb', amount: 1350 },
    { name: 'Mar', amount: 1450 },
    { name: 'Apr', amount: 1200 },
    { name: 'May', amount: 1650 },
    { name: 'Jun', amount: 1800 },
  ];

  const upcomingShifts = [
    { id: 1, date: 'May 15, 2023', time: '9:00 AM - 4:00 PM', location: 'Oak Valley', task: 'Tree Planting' },
    { id: 2, date: 'May 18, 2023', time: '8:30 AM - 3:30 PM', location: 'Meadow Ridge', task: 'Irrigation Setup' },
    { id: 3, date: 'May 22, 2023', time: '10:00 AM - 5:00 PM', location: 'Green Acres', task: 'Soil Preparation' },
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">Worker Dashboard</h1>
          <p className="text-muted-foreground">Manage your tasks and schedule</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <CheckCircle className="mr-2 h-4 w-4" />
          Log Hours
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Month Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.5 hrs</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
            <Progress value={68} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This year</p>
            <Progress value={80} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Next Shift</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Tomorrow</div>
            <p className="text-xs text-muted-foreground">9:00 AM - Oak Valley</p>
            <Progress value={100} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,824</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
            <Progress value={75} className="h-1 mt-3" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Tasks</CardTitle>
            <CardDescription>Tasks requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentTasks.map((task) => (
                <div key={task.id} className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{task.title}</h3>
                    <Badge variant="outline" className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {task.location}
                  </div>
                  
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{task.progress}%</span>
                    </div>
                    <Progress value={task.progress} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div className="text-sm flex items-center text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Due: {task.deadline}
                    </div>
                    <Button variant="outline" size="sm">Continue</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
            <CardDescription>Your payment history for the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart 
              data={earningsData} 
              categories={['amount']} 
              index="name"
              yAxisWidth={40}
              className="h-[200px]"
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border rounded-md p-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Hourly Rate</span>
                </div>
                <div className="text-xl font-bold mt-1">$22.50</div>
              </div>
              <div className="border rounded-md p-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">Skill Level</span>
                </div>
                <div className="text-xl font-bold mt-1">Advanced</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Schedule</CardTitle>
          <CardDescription>Your work shifts for the next two weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingShifts.map((shift) => (
              <div key={shift.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                <div className="min-w-16 p-3 bg-blue-100 dark:bg-blue-900 rounded-md text-center">
                  <Calendar className="h-5 w-5 mx-auto text-blue-600 dark:text-blue-400" />
                  <div className="text-xs font-medium mt-1">{shift.date.split(',')[0]}</div>
                </div>
                <div className="flex-1">
                  <div className="font-medium">{shift.task}</div>
                  <div className="text-sm text-muted-foreground mt-1 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {shift.location}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 flex items-center">
                    <Timer className="h-3 w-3 mr-1" />
                    {shift.time}
                  </div>
                </div>
                <Button variant="outline" size="sm">Details</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkerDashboard;
