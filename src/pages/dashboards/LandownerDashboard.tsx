
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, PieChart } from '@/components/ui/chart';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { MapPin, TrendingUp, Leaf, Activity, Clock } from 'lucide-react';

const LandownerDashboard = () => {
  const propertyStats = [
    { title: "Total Properties", value: "3", icon: MapPin, change: "+1", trend: "up" },
    { title: "Active Projects", value: "2", icon: Leaf, change: "+2", trend: "up" },
    { title: "Carbon Credits", value: "120", icon: TrendingUp, change: "+15", trend: "up" },
    { title: "Ecological Score", value: "76%", icon: Activity, change: "+6%", trend: "up" },
  ];

  const upcomingVisits = [
    { date: "May 26", title: "Site Assessment", property: "Meadow Ridge" },
    { date: "June 2", title: "Planting Phase", property: "Oak Valley" },
    { date: "June 15", title: "Progress Inspection", property: "Meadow Ridge" },
  ];

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 700 }
  ];

  const pieData = [
    { name: 'Oak Valley', value: 45 },
    { name: 'Meadow Ridge', value: 35 },
    { name: 'Green Acres', value: 20 }
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl md:text-4xl font-bold">Landowner Dashboard</h1>
        <p className="text-muted-foreground mt-2">Manage your properties and restoration projects</p>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {propertyStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <stat.icon className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
                <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
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
              <CardTitle>Carbon Credit Growth</CardTitle>
              <CardDescription>Monthly progress of your carbon credits</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart 
                data={chartData} 
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
              <CardTitle>Property Distribution</CardTitle>
              <CardDescription>Carbon credits by property</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart 
                data={pieData} 
                nameKey="name" 
                dataKey="value" 
                className="h-[300px]" 
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Upcoming Site Visits</CardTitle>
                <CardDescription>Schedule for the next 30 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Calendar className="h-4 w-4" />
                <span>Calendar</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingVisits.map((visit, index) => (
                <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0">
                  <div className="h-12 w-12 rounded-md bg-regreen-100 dark:bg-regreen-900 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
                  </div>
                  <div>
                    <div className="font-medium">{visit.title}</div>
                    <div className="text-sm text-muted-foreground">{visit.property} • {visit.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Scheduled Visits</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default LandownerDashboard;
