
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart } from '@/components/ui/chart';
import { Calendar, Clock, Shovel, TrendingUp, MapPin, CheckCircle, AlertTriangle, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const WorkerDashboard = () => {
  const taskStats = [
    { title: "Completed Tasks", value: "27", icon: CheckCircle, change: "+4", trend: "up" },
    { title: "Upcoming Tasks", value: "5", icon: Clock, change: "+2", trend: "up" },
    { title: "Project Sites", value: "3", icon: MapPin, change: "0", trend: "neutral" },
    { title: "Skill Rating", value: "4.8", icon: Award, change: "+0.2", trend: "up" },
  ];

  const upcomingTasks = [
    { 
      date: "May 24", 
      title: "Tree Planting", 
      location: "Oak Valley",
      urgency: "high", 
      compensation: "$180",
      status: "confirmed"
    },
    { 
      date: "May 29", 
      title: "Site Preparation", 
      location: "Green Acres",
      urgency: "medium", 
      compensation: "$150",
      status: "pending"
    },
    { 
      date: "June 3", 
      title: "Irrigation Setup", 
      location: "Meadow Ridge",
      urgency: "medium", 
      compensation: "$200",
      status: "confirmed"
    },
  ];

  const hoursData = [
    { name: 'Jan', value: 45 },
    { name: 'Feb', value: 52 },
    { name: 'Mar', value: 48 },
    { name: 'Apr', value: 70 },
    { name: 'May', value: 60 }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl md:text-4xl font-bold">Worker Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your tasks and track your progress</p>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {taskStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <stat.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className={`text-xs font-medium ${
                  stat.trend === 'up' 
                    ? 'text-green-600 dark:text-green-400' 
                    : stat.trend === 'down' 
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <CardTitle className="text-base font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Hours</CardTitle>
              <CardDescription>Your progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart 
                data={hoursData} 
                xKey="name" 
                yKey="value" 
                className="h-[300px]" 
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Goals</CardTitle>
              <CardDescription>Your progress towards this week's targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Work Hours</span>
                  <span className="text-sm text-muted-foreground">15/20 hrs</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Trees Planted</span>
                  <span className="text-sm text-muted-foreground">45/50</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Areas Prepared</span>
                  <span className="text-sm text-muted-foreground">2/3</span>
                </div>
                <Progress value={66} className="h-2" />
              </div>
              
              <div className="flex justify-center mt-4">
                <Button variant="outline" size="sm">View All Goals</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Your schedule for the next 14 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Calendar className="h-4 w-4" />
                <span>Calendar</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0">
                  <div className="h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Shovel className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="font-medium">{task.title}</div>
                        <div className="text-sm text-muted-foreground">{task.location} • {task.date}</div>
                      </div>
                      <div className="text-sm font-semibold text-green-600 dark:text-green-400 mt-1 sm:mt-0">
                        {task.compensation}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className={getUrgencyColor(task.urgency)}>
                        {task.urgency.charAt(0).toUpperCase() + task.urgency.slice(1)} Priority
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(task.status)}>
                        {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Tasks</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default WorkerDashboard;
