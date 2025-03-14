
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart } from '@/components/ui/chart/index';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, TrendingUp, MessageSquare, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CommunityDashboard = () => {
  const communityStats = [
    { title: "Active Members", value: "124", icon: Users, change: "+12", trend: "up" },
    { title: "Local Projects", value: "8", icon: MapPin, change: "+2", trend: "up" },
    { title: "Forum Posts", value: "342", icon: MessageSquare, change: "+28", trend: "up" },
    { title: "Community Impact", value: "85%", icon: Heart, change: "+5%", trend: "up" },
  ];

  const upcomingEvents = [
    { date: "May 28", title: "Community Tree Planting", location: "Riverside Park", attendees: 28 },
    { date: "June 5", title: "Eco Workshop", location: "Community Center", attendees: 15 },
    { date: "June 18", title: "Local Stream Cleanup", location: "Crystal Creek", attendees: 34 },
  ];

  const engagementData = [
    { name: 'Jan', value: 250 },
    { name: 'Feb', value: 320 },
    { name: 'Mar', value: 280 },
    { name: 'Apr', value: 420 },
    { name: 'May', value: 380 }
  ];

  const recentDiscussions = [
    { 
      id: 1, 
      title: "Proposed New Bike Path",
      author: "Jamie Wilson",
      avatar: "/placeholder.svg",
      replies: 24,
      lastActivity: "2 hours ago"
    },
    { 
      id: 2, 
      title: "Local School Garden Initiative",
      author: "Robin Taylor",
      avatar: "/placeholder.svg",
      replies: 18,
      lastActivity: "5 hours ago"
    },
    { 
      id: 3, 
      title: "Renewable Energy Cooperative",
      author: "Casey Morgan",
      avatar: "/placeholder.svg",
      replies: 32,
      lastActivity: "Yesterday"
    }
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
        <h1 className="text-3xl md:text-4xl font-bold">Community Dashboard</h1>
        <p className="text-muted-foreground mt-2">Stay connected with local restoration projects and community initiatives</p>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {communityStats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <stat.icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
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
              <CardTitle>Community Engagement</CardTitle>
              <CardDescription>Monthly participation in local initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart 
                data={engagementData} 
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
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Community gatherings and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground">{event.location} • {event.date}</div>
                    </div>
                    <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                      {event.attendees} Attending
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </Button>
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
                <CardTitle>Recent Forum Discussions</CardTitle>
                <CardDescription>Stay updated with community conversations</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <div key={discussion.id} className="flex items-start gap-4 border-b pb-4 last:border-0">
                  <Avatar>
                    <AvatarImage src={discussion.avatar} alt={discussion.author} />
                    <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <div className="font-medium">{discussion.title}</div>
                      <div className="text-xs text-muted-foreground">{discussion.lastActivity}</div>
                    </div>
                    <div className="text-sm mt-1">
                      <span className="text-muted-foreground">by </span>
                      <span className="font-medium">{discussion.author}</span>
                      <span className="ml-2 text-xs text-muted-foreground">
                        {discussion.replies} replies
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Discussions</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CommunityDashboard;
