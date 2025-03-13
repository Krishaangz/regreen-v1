import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { MessageSquare, Users, CalendarDays, BookOpen, ArrowRight } from "lucide-react";

const Community = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">ReGreen Community</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow restoration enthusiasts, share knowledge, find events, and celebrate success stories in our growing community of environmental stewards.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-3">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Community Forums</CardTitle>
            <CardDescription>Discuss restoration topics and get advice</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <p>Join conversations on ecological restoration, land management, and conservation practices with experts and enthusiasts.</p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <Badge variant="outline">500+ Members</Badge>
              <Badge variant="outline">20+ Topics</Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-0 justify-center">
            <Button asChild className="group-hover:bg-blue-600 bg-blue-500 text-white mt-4">
              <Link to="/community/forums" className="flex items-center">
                Visit Forums
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-3">
            <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
              <CalendarDays className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle>Community Events</CardTitle>
            <CardDescription>Join restoration activities and workshops</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <p>Participate in hands-on restoration events, educational workshops, and community gatherings across the country.</p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <Badge variant="outline">30+ Upcoming Events</Badge>
              <Badge variant="outline">Virtual & In-Person</Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-0 justify-center">
            <Button asChild className="group-hover:bg-green-600 bg-green-500 text-white mt-4">
              <Link to="/community/events" className="flex items-center">
                Browse Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-3">
            <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-7 w-7 text-amber-600 dark:text-amber-400" />
            </div>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>Inspiring restoration transformations</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <p>Read about successful restoration projects and the people behind them, celebrating environmental achievements.</p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <Badge variant="outline">100+ Stories</Badge>
              <Badge variant="outline">Before & After</Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-0 justify-center">
            <Button asChild className="group-hover:bg-amber-600 bg-amber-500 text-white mt-4">
              <Link to="/community/stories" className="flex items-center">
                Read Stories
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="bg-muted rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Join Our Community Network</h2>
            <p className="mb-4">
              Connect with over 5,000 restoration professionals, landowners, and enthusiasts across the country. 
              Share knowledge, find collaborators, and be part of the growing movement for ecological recovery.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Get answers to your restoration questions",
                "Find local restoration events and volunteer opportunities",
                "Connect with experts in specific ecosystems or restoration techniques",
                "Share your own knowledge and experiences"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-regreen-600 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">
              <Users className="mr-2 h-4 w-4" />
              Create Community Profile
            </Button>
          </div>
          <div className="relative">
            <div className="bg-background rounded-lg p-6 shadow-lg">
              <div className="flex space-x-4 items-center mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Community Spotlight</h3>
                  <p className="text-sm text-muted-foreground">Active members making a difference</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    name: "Elena Martinez",
                    role: "Restoration Ecologist",
                    contribution: "Answered 150+ community questions on wetland restoration",
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "David Kim",
                    role: "Volunteer Coordinator",
                    contribution: "Organized 12 community planting events in 2023",
                    avatar: "/placeholder.svg"
                  },
                  {
                    name: "Taylor Washington",
                    role: "Landowner",
                    contribution: "Shared detailed documentation of 5-year prairie restoration",
                    avatar: "/placeholder.svg"
                  }
                ].map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-muted rounded-md transition-colors">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-xs text-muted-foreground">{member.role}</div>
                      <div className="text-xs">{member.contribution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 h-20 w-20 bg-muted rounded-full border-4 border-background z-10 flex items-center justify-center">
              <Users className="h-8 w-8 text-regreen-600" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Upcoming Featured Community Events</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join these highlighted events to connect with fellow ReGreen community members, learn new skills, and make a direct impact.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Urban Greenspace Restoration Workshop",
              date: "June 15, 2023",
              location: "Portland, OR",
              type: "In-person",
              image: "/placeholder.svg"
            },
            {
              title: "Landowner Success Stories Webinar",
              date: "June 22, 2023",
              location: "Online",
              type: "Virtual",
              image: "/placeholder.svg"
            },
            {
              title: "Summer Meadow Planting Weekend",
              date: "July 8-9, 2023",
              location: "Minneapolis, MN",
              type: "In-person",
              image: "/placeholder.svg"
            }
          ].map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-regreen-600">{event.type}</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm flex items-center">
                  <Badge variant="outline" className="mr-2">{event.location}</Badge>
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-regreen-600 text-regreen-600">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Button asChild className="mt-8 bg-regreen-600 hover:bg-regreen-700 text-white">
          <Link to="/community/events">
            View All Community Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Community;
