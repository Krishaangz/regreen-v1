
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart } from '@/components/ui/chart';
import { Calendar, Users, MapPin, TrendingUp, MessageSquare, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CommunityDashboard = () => {
  const communityStats = [
    { title: "Community Members", value: "186", icon: Users, change: "+12", trend: "up" },
    { title: "Local Projects", value: "7", icon: MapPin, change: "+2", trend: "up" },
    { title: "Forum Posts", value: "124", icon: MessageSquare, change: "+18", trend: "up" },
    { title: "Volunteer Hours", value: "420", icon: Heart, change: "+45", trend: "up" },
  ];

  const upcomingEvents = [
    { 
      date: "May 28", 
      title: "Community Planting Day", 
      location: "Riverside Park",
      attendees: 24,
      category: "volunteer"
    },
    { 
      date: "June 5", 
      title: "Ecological Workshop", 
      location: "Community Center",
      attendees: 18,
      category: "education"
    },
    { 
      date: "June 12", 
      title: "Fundraising Event", 
      location: "Town Square",
      attendees: 42,
      category: "fundraising"
    },
  ];

  const engagementData = [
    { name: 'Jan', value: 250 },
    { name: 'Feb', value: 320 },
    { name: 'Mar', value: 280 },
    { name: 'Apr', value: 390 },
    { name: 'May', value: 480 }
  ];

  const recentForumPosts = [
    {
      title: "Best native plants for pollinators?",
      author: "Emily Chen",
      avatar: "EC",
      responses: 8,
      time: "2 hours ago",
      category: "gardening"
    },
    {
      title: "Volunteer opportunity this weekend",
      author: "Marcus Johnson",
      avatar: "MJ",
      responses: 12,
      time: "5 hours ago",
      category: "volunteer"
    },
    {
      title: "Water conservation techniques",
      author: "Sarah Williams",
      avatar: "SW",
      responses: 6,
      time: "yesterday",
      category: "conservation"
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

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'volunteer': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'education': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'fundraising': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'gardening': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'conservation': return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300';
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
        <h1 className="text-3xl md:text-4xl font-bold">Community Dashboard</h1>
        <p className="text-muted-foreground mt-2">Connect with local initiatives and events</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Community gatherings in your area</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Calendar</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0">
                    <div className="h-12 w-12 rounded-md bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-muted-foreground">{event.location} • {event.date}</div>
                        </div>
                        <div className="text-sm font-medium flex items-center gap-1 mt-1 sm:mt-0">
                          <Users className="h-3 w-3" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className={getCategoryColor(event.category)}>
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Events</Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Community Engagement</CardTitle>
              <CardDescription>Monthly participation trend</CardDescription>
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
      </div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Recent Forum Discussions</CardTitle>
            <CardDescription>Join the conversation with your community</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentForumPosts.map((post, index) => (
                <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                      {post.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="font-medium">{post.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {post.author} • {post.time}
                        </div>
                      </div>
                      <div className="text-sm font-medium flex items-center gap-1 mt-1 sm:mt-0">
                        <MessageSquare className="h-3 w-3" />
                        <span>{post.responses}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className={getCategoryColor(post.category)}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Visit Community Forums</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CommunityDashboard;
