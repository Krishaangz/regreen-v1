
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Heart, MessageSquare, Calendar, ThumbsUp, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const CommunityDashboard = () => {
  // Sample data for community members
  const localProjects = [
    { id: 1, name: 'Oak Valley Community Forest', location: 'Oak Valley', distance: '2.4 miles', supporters: 86, participants: 34 },
    { id: 2, name: 'Downtown Community Garden', location: 'City Center', distance: '1.8 miles', supporters: 112, participants: 45 },
  ];

  const impactData = [
    { name: 'Jan', trees: 120, carbon: 300 },
    { name: 'Feb', trees: 150, carbon: 400 },
    { name: 'Mar', trees: 200, carbon: 450 },
    { name: 'Apr', trees: 180, carbon: 420 },
    { name: 'May', trees: 250, carbon: 500 },
    { name: 'Jun', trees: 280, carbon: 550 },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Community Planting Day', date: 'May 20, 2023', location: 'Oak Valley', participants: 24 },
    { id: 2, title: 'Environmental Workshop', date: 'May 27, 2023', location: 'Community Center', participants: 15 },
    { id: 3, title: 'Garden Maintenance', date: 'June 3, 2023', location: 'Downtown Garden', participants: 8 },
  ];

  const forumTopics = [
    { id: 1, title: 'Best native plants for pollinators?', author: 'Amy W.', replies: 12, lastActivity: '2h ago' },
    { id: 2, title: 'Organizing volunteer teams effectively', author: 'Michael D.', replies: 8, lastActivity: '5h ago' },
    { id: 3, title: 'Water conservation techniques', author: 'Sarah L.', replies: 15, lastActivity: '1d ago' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">Community Dashboard</h1>
          <p className="text-muted-foreground">Connect with local initiatives and track community impact</p>
        </div>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
          <Users className="mr-2 h-4 w-4" />
          Join Initiative
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Local Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Within 10 miles</p>
            <Progress value={75} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Trees Planted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,280</div>
            <p className="text-xs text-muted-foreground">By your community</p>
            <Progress value={85} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">348</div>
            <p className="text-xs text-muted-foreground">+24 this month</p>
            <Progress value={65} className="h-1 mt-3" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">CO₂ Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56.2 tons</div>
            <p className="text-xs text-muted-foreground">Annual estimate</p>
            <Progress value={92} className="h-1 mt-3" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Environmental Impact</CardTitle>
            <CardDescription>Community contributions to environmental restoration</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart 
              data={impactData} 
              categories={['trees', 'carbon']} 
              index="name"
              yAxisWidth={40}
              className="h-[200px]"
            />
            <div className="flex items-center justify-between mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span>Trees Planted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Carbon Offset (kg)</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Community gatherings and volunteer opportunities</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-amber-600">
              View Calendar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
                  <div className="min-w-16 p-3 bg-amber-100 dark:bg-amber-900 rounded-md text-center">
                    <Calendar className="h-5 w-5 mx-auto text-amber-600 dark:text-amber-400" />
                    <div className="text-xs font-medium mt-1">{event.date.split(',')[0]}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-muted-foreground mt-1 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {event.location}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {event.participants} participants
                    </div>
                  </div>
                  <Button variant="outline" size="sm">RSVP</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Local Projects</CardTitle>
            <CardDescription>Ecological initiatives in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {localProjects.map((project) => (
                <div key={project.id} className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{project.name}</h3>
                    <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                      Active
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {project.location} • {project.distance} away
                  </div>
                  
                  <div className="flex justify-between mt-3">
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{project.supporters} supporters</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm">{project.participants} participants</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Users className="h-3 w-3 mr-1" />
                      Participate
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-3 w-3 mr-1" />
                      Support
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Forum Discussions</CardTitle>
            <CardDescription>Recent topics from the community forum</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {forumTopics.map((topic) => (
                <div key={topic.id} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{topic.title}</h3>
                    <span className="text-xs text-muted-foreground">{topic.lastActivity}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${topic.author}&background=random`} />
                        <AvatarFallback>{topic.author.split(' ')[0][0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{topic.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      {topic.replies} replies
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                View All Discussions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunityDashboard;
