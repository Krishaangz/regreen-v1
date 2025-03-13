
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, MapPin, Search, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Events = () => {
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
            <Button>Create Event</Button>
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
                {/* Sample Event Card */}
                <Card>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 bg-slate-100 flex items-center justify-center p-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">15</div>
                        <div className="text-sm font-medium">Apr</div>
                        <div className="mt-2 text-sm text-muted-foreground">9:00 AM - 2:00 PM</div>
                      </div>
                    </div>
                    <div className="sm:w-3/4 p-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">Land Restoration</Badge>
                        <div className="text-sm text-muted-foreground">
                          <Users className="h-3.5 w-3.5 inline mr-1" />
                          28/50
                        </div>
                      </div>
                      <h3 className="font-medium text-lg mt-1">Spring Tree Planting Festival</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        Organized by <span className="font-medium text-green-600">GreenCity Initiative</span>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        Central Park, New York
                        <span className="ml-2 text-xs text-green-600">(1.2 miles away)</span>
                      </div>
                      <div className="mt-3 text-sm text-muted-foreground">
                        Join us for our annual tree planting event! We'll be planting native species to 
                        restore the urban canopy.
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Add more event cards here */}
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
    </div>
  );
};

export default Events;
