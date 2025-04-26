
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, MapPin, Search, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuthStore } from "@/stores/authStore";
import { useRole } from "@/contexts/RoleContext";
import CreateEventModal from "@/components/community/CreateEventModal";
import { useToast } from "@/hooks/use-toast";

interface EventType {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  category: string;
  type: string;
  capacity: number;
  enrolled: number;
  organizer: string;
  organizerId: string;
  image: string;
}

const Events = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { role } = useRole();
  const { toast } = useToast();
  
  // Get events from store or use default events
  const communityEvents: EventType[] = useAuthStore((state) => state.events) || [
    {
      id: "1",
      title: "Spring Tree Planting Festival",
      description: "Join us for our annual tree planting event! We'll be planting native species to restore the urban canopy.",
      location: "Central Park, New York",
      date: "April 15, 2023",
      time: "9:00 AM - 2:00 PM",
      category: "land-restoration",
      type: "in-person",
      capacity: 50,
      enrolled: 28,
      organizer: "GreenCity Initiative",
      organizerId: "org1",
      image: "/placeholder.svg"
    },
    {
      id: "2",
      title: "Wetland Restoration Workshop",
      description: "Learn practical techniques for restoring degraded wetlands and improving water quality.",
      location: "Riverside Nature Center",
      date: "May 5, 2023",
      time: "10:00 AM - 3:00 PM",
      category: "water-restoration",
      type: "in-person",
      capacity: 30,
      enrolled: 18,
      organizer: "Watershed Alliance",
      organizerId: "org2",
      image: "/placeholder.svg"
    },
    {
      id: "3",
      title: "Native Plant Identification Webinar",
      description: "Virtual workshop on identifying native plant species for ecological restoration projects.",
      location: "Online",
      date: "May 12, 2023",
      time: "7:00 PM - 8:30 PM",
      category: "education",
      type: "virtual",
      capacity: 100,
      enrolled: 72,
      organizer: "Botanical Society",
      organizerId: "org3",
      image: "/placeholder.svg"
    }
  ];

  const handleJoinEvent = (eventId: string) => {
    toast({
      title: "Success",
      description: "You have successfully joined this event",
      variant: "default",
    });
  };

  const handleCreateEvent = () => {
    if (role !== 'community') {
      toast({
        title: "Permission Denied",
        description: "Only community members can create events",
        variant: "destructive",
      });
      return;
    }
    setIsCreateModalOpen(true);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <Badge variant="outline" className="bg-green-50 text-green-800">
          Community
        </Badge>
        <h1 className="text-3xl font-bold mt-2">
          ReGreen Events
        </h1>
        <p className="text-muted-foreground mt-2">
          Find and join local eco-restoration events, workshops, and volunteer opportunities in your community.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          {/* Search and Filter Bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Input
                placeholder="Search events, locations, or categories..."
                className="pl-10"
              />
              <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-3" />
            </div>
            <Button 
              onClick={handleCreateEvent}
              disabled={role !== 'community'}
              title={role !== 'community' ? "Only community members can create events" : ""}
              className={role !== 'community' ? "opacity-70 cursor-not-allowed" : ""}
            >
              Create Event
            </Button>
          </div>
          
          {/* View Options */}
          <Tabs defaultValue="list" className="w-full mb-6">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
            
            {/* List View */}
            <TabsContent value="list" className="mt-4">
              <div className="grid gap-4">
                {communityEvents.map((event) => (
                  <Card key={event.id}>
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/4 bg-slate-100 flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">
                            {event.date.split(" ")[1].replace(",", "")}
                          </div>
                          <div className="text-sm font-medium">
                            {event.date.split(" ")[0]}
                          </div>
                          <div className="mt-2 text-sm text-muted-foreground">{event.time}</div>
                        </div>
                      </div>
                      <div className="sm:w-3/4 p-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs capitalize">
                            {event.category.replace("-", " ")}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            <Users className="h-3.5 w-3.5 inline mr-1" />
                            {event.enrolled}/{event.capacity}
                          </div>
                        </div>
                        <h3 className="font-medium text-lg mt-1">{event.title}</h3>
                        <div className="text-sm text-muted-foreground mt-1">
                          Organized by <span className="font-medium text-green-600">{event.organizer}</span>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {event.location}
                          {event.type === "in-person" && (
                            <span className="ml-2 text-xs text-green-600">(1.2 miles away)</span>
                          )}
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground">
                          {event.description}
                        </div>
                        <div className="mt-3">
                          <Button 
                            size="sm" 
                            className="bg-regreen-600 hover:bg-regreen-700 text-white"
                            onClick={() => handleJoinEvent(event.id)}
                          >
                            Join Event
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Calendar View - placeholder */}
            <TabsContent value="calendar" className="mt-4">
              <Card className="p-4">
                <p className="text-center text-muted-foreground">Calendar view coming soon</p>
              </Card>
            </TabsContent>
            
            {/* Map View - placeholder */}
            <TabsContent value="map" className="mt-4">
              <Card className="p-4">
                <p className="text-center text-muted-foreground">Map view coming soon</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Land Restoration</span>
                  <Badge variant="secondary">24</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Waterbody Restoration</span>
                  <Badge variant="secondary">18</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Education</span>
                  <Badge variant="secondary">15</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Community</span>
                  <Badge variant="secondary">12</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Earth Day Celebration</span>
                  <div className="text-xs text-muted-foreground">April 22, 2025 • Multiple Locations</div>
                </div>
                <div>
                  <span className="font-medium">World Environment Day</span>
                  <div className="text-xs text-muted-foreground">June 5, 2025 • Global Event</div>
                </div>
                <div>
                  <span className="font-medium">National Cleanup Day</span>
                  <div className="text-xs text-muted-foreground">Sept 20, 2025 • Nationwide</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <CreateEventModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default Events;
