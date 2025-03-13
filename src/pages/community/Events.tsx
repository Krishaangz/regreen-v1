import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, MapPin, Clock, Users, Search as SearchIcon, Calendar, ArrowUp, Leaf, User2, Droplets, Briefcase, Heart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Placeholder components (you can replace these with your actual implementations)
import CalendarView from "@/components/CalendarView"; // For calendar interface
import MapView from "@/components/MapView"; // For map interface

const Events = () => {
  // State definitions
  const [searchQuery, setSearchQuery] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [distance, setDistance] = useState("25");
  // State for user's own hosted events (for calendar view)
  const [myEvents, setMyEvents] = useState<any[]>([]);
  // For simplicity, new event form state
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDesc, setNewEventDesc] = useState("");

  // Mock data for community events
  const communityEvents = [
    {
      id: 1,
      title: "Spring Tree Planting Festival",
      organizer: "GreenCity Initiative",
      category: "Land Restoration",
      date: "April 15, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Central Park, New York",
      distance: "1.2 miles away",
      attendees: 28,
      maxAttendees: 50,
      description: "Join us for our annual tree planting event! We'll be planting native species to restore the urban canopy.",
      isPinned: true,
      tags: ["Tree Planting", "Volunteers", "Community"],
      image: "/events/spring-planting.jpg"
    },
    {
      id: 2,
      title: "Lake Cleanup Day",
      organizer: "WaterWizard",
      category: "Waterbody Restoration",
      date: "April 22, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "Lake Merritt, Oakland",
      distance: "3.5 miles away",
      attendees: 15,
      maxAttendees: 30,
      description: "Help us clean up the lake and restore the shoreline habitat. Cleanup supplies provided.",
      isPinned: true,
      tags: ["Cleanup", "Water Quality", "Ecosystem"],
      image: "/events/lake-cleanup.jpg"
    },
    {
      id: 3,
      title: "Urban Garden Design Workshop",
      organizer: "EcoEducators",
      category: "Education",
      date: "May 1, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center, Brooklyn",
      distance: "0.8 miles away",
      attendees: 12,
      maxAttendees: 20,
      description: "Learn how to design and maintain an urban garden that supports local biodiversity.",
      isPinned: false,
      tags: ["Workshop", "Urban Gardens", "Design"],
      image: "/events/garden-workshop.jpg"
    },
    {
      id: 4,
      title: "Native Plant Swap",
      organizer: "PlantPeople",
      category: "Community",
      date: "May 8, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Farmers Market, Seattle",
      distance: "2.4 miles away",
      attendees: 35,
      maxAttendees: 100,
      description: "Bring your extra native plants and seedlings to swap with other local gardeners.",
      isPinned: false,
      tags: ["Native Plants", "Gardening", "Community Exchange"],
      image: "/events/plant-swap.jpg"
    },
    {
      id: 5,
      title: "Soil Health Seminar",
      organizer: "SoilScientist",
      category: "Education",
      date: "May 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Public Library, Portland",
      distance: "5.1 miles away",
      attendees: 18,
      maxAttendees: 25,
      description: "Learn about soil testing, amendments, and restoration techniques for degraded urban soils.",
      isPinned: false,
      tags: ["Soil Health", "Education", "Urban Ecology"],
      image: "/events/soil-seminar.jpg"
    },
    {
      id: 6,
      title: "Community Garden Workday",
      organizer: "GardenCollective",
      category: "Land Restoration",
      date: "May 22, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "Community Garden, Chicago",
      distance: "1.9 miles away",
      attendees: 12,
      maxAttendees: 15,
      description: "Help maintain our community garden space. Activities include mulching, weeding, and planting.",
      isPinned: false,
      tags: ["Community Garden", "Volunteering", "Urban Greening"],
      image: "/events/garden-workday.jpg"
    },
    {
      id: 7,
      title: "Pollinator Pathway Planning",
      organizer: "BeeKeepers",
      category: "Biodiversity",
      date: "June 5, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "Botanical Garden, Denver",
      distance: "4.2 miles away",
      attendees: 20,
      maxAttendees: 30,
      description: "Help plan and implement pollinator pathways throughout the city to support local bee populations.",
      isPinned: false,
      tags: ["Pollinators", "Urban Planning", "Biodiversity"],
      image: "/events/pollinator-planning.jpg"
    },
    {
      id: 8,
      title: "Rainwater Harvesting Workshop",
      organizer: "WaterConservation",
      category: "Water Management",
      date: "June 12, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center, Austin",
      distance: "3.7 miles away",
      attendees: 15,
      maxAttendees: 20,
      description: "Learn how to build and install rainwater harvesting systems for home and community gardens.",
      isPinned: false,
      tags: ["Rainwater", "Water Conservation", "DIY"],
      image: "/events/rainwater-workshop.jpg"
    }
  ];

  const categories = [
    { name: "Land Restoration", icon: <Leaf className="h-4 w-4" />, count: 24 },
    { name: "Waterbody Restoration", icon: <Droplets className="h-4 w-4" />, count: 18 },
    { name: "Education", icon: <Briefcase className="h-4 w-4" />, count: 15 },
    { name: "Community", icon: <User2 className="h-4 w-4" />, count: 12 },
    { name: "Biodiversity", icon: <Heart className="h-4 w-4" />, count: 10 },
    { name: "Water Management", icon: <Droplets className="h-4 w-4" />, count: 8 }
  ];

  const upcomingHighlights = [
    { title: "Earth Day Celebration", date: "April 22, 2025", location: "Multiple Locations" },
    { title: "World Environment Day", date: "June 5, 2025", location: "Global Event" },
    { title: "National Cleanup Day", date: "September 20, 2025", location: "Nationwide" },
    { title: "Urban Forestry Summit", date: "October 10, 2025", location: "San Francisco" }
  ];

  // Filter events based on search query
  const filteredEvents = communityEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Simulate getting user location
  useEffect(() => {
    if (locationEnabled) {
      // In a real app, use the Geolocation API
      setUserLocation("New York, NY");
    } else {
      setUserLocation(null);
    }
  }, [locationEnabled]);

  // Handlers for adding and deleting "My Events"
  const handleAddEvent = () => {
    if (newEventTitle.trim() === "") return;
    const newEvent = {
      id: Date.now(),
      title: newEventTitle,
      description: newEventDesc,
      organizer: "You",
      date: new Date().toLocaleDateString(),
      time: "TBD",
    };
    setMyEvents([...myEvents, newEvent]);
    setNewEventTitle("");
    setNewEventDesc("");
  };

  const handleDeleteEvent = (id: number) => {
    setMyEvents(myEvents.filter(event => event.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
          Community
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-regreen-800 dark:text-regreen-100">
          ReGreen Events
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Find and join local eco-restoration events, workshops, and volunteer opportunities in your community.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="flex-1 relative">
              <Input
                placeholder="Search events, locations, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10"
              />
              <SearchIcon className="h-4 w-4 text-muted-foreground absolute left-3 top-3" />
            </div>
            <Button className="bg-regreen-600 hover:bg-regreen-700">Create New Event</Button>
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch id="location" checked={locationEnabled} onCheckedChange={setLocationEnabled} />
                <Label htmlFor="location" className="text-sm">Use my location</Label>
              </div>
              {locationEnabled && userLocation && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{userLocation}</span>
                  <span className="mx-2">|</span>
                  <Select defaultValue={distance}>
                    <SelectTrigger className="w-24 h-8 text-xs">
                      <SelectValue placeholder="Distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 miles</SelectItem>
                      <SelectItem value="10">10 miles</SelectItem>
                      <SelectItem value="25">25 miles</SelectItem>
                      <SelectItem value="50">50 miles</SelectItem>
                      <SelectItem value="100">100 miles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <Select defaultValue="upcoming">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="recent">Recently Added</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Tabs defaultValue="list" className="w-full mb-6">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
            
            {/* List View */}
            <TabsContent value="list" className="mt-4">
              <div className="grid gap-4">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/4 bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-regreen-600">
                            {event.date.split(" ")[1].replace(",", "")}
                          </div>
                          <div className="text-sm font-medium">{event.date.split(" ")[0]}</div>
                          <div className="mt-2 text-sm text-muted-foreground">{event.time}</div>
                        </div>
                      </div>
                      <div className="sm:w-3/4 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {event.isPinned && (
                              <Badge variant="outline" className="text-regreen-600 bg-regreen-50 dark:bg-regreen-950 dark:text-regreen-400 text-xs px-1 py-0 h-5">
                                Featured
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs px-1.5 py-0 h-5">
                              {event.category}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <Users className="h-3.5 w-3.5 inline mr-1" />
                            {event.attendees}/{event.maxAttendees}
                          </div>
                        </div>
                        <Link to={`/community/events/${event.id}`} className="font-medium text-lg hover:text-regreen-600 block mt-1">
                          {event.title}
                        </Link>
                        <div className="text-sm text-muted-foreground mt-1">
                          Organized by <span className="font-medium text-regreen-600">{event.organizer}</span>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {event.location}
                          {locationEnabled && (
                            <span className="ml-2 text-xs text-regreen-600">({event.distance})</span>
                          )}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {event.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground">
                          {event.description}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Calendar View */}
            <TabsContent value="calendar" className="mt-4">
              {/* Render your CalendarView component */}
              <CalendarView events={communityEvents} />
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">My Hosted Events</h2>
                <div className="flex flex-col gap-4">
                  {myEvents.length === 0 ? (
                    <p className="text-sm text-muted-foreground">You have not hosted any events yet.</p>
                  ) : (
                    myEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden">
                        <CardHeader>
                          <CardTitle>{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{event.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm" onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                  <Label className="text-sm">Add New Event</Label>
                  <Input
                    placeholder="Event Title"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                  />
                  <Input
                    placeholder="Event Description"
                    value={newEventDesc}
                    onChange={(e) => setNewEventDesc(e.target.value)}
                  />
                  <Button onClick={handleAddEvent} className="bg-regreen-600 hover:bg-regreen-700">
                    Add Event
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Map View */}
            <TabsContent value="map" className="mt-4">
              <MapView events={filteredEvents} />
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {categories.map((category, idx) => (
                  <Link 
                    key={idx} 
                    to={`/community/events/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-900/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-regreen-600">
                        {category.icon}
                      </div>
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Upcoming Highlights</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {upcomingHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-medium">{highlight.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {highlight.date} &bull; {highlight.location}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;
