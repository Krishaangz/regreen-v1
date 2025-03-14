
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ThumbsUp, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import BaseMapView from '@/components/maps/BaseMapView';

const CommunityMapView = () => {
  const communityEvents = [
    { 
      id: 1, 
      title: 'Tree Planting Day', 
      location: 'Oak Valley Park', 
      date: 'May 28, 2023',
      participants: 23,
      status: 'Upcoming'
    },
    { 
      id: 2, 
      title: 'Local Stream Cleanup', 
      location: 'Crystal Creek', 
      date: 'June 5, 2023',
      participants: 45,
      status: 'Registration Open'
    },
    { 
      id: 3, 
      title: 'Community Garden Workshop', 
      location: 'Green Acres Community Center', 
      date: 'June 12, 2023',
      participants: 18,
      status: 'Registration Open'
    },
  ];

  return (
    <BaseMapView 
      title="Community Initiatives" 
      description="Discover and participate in local environmental projects"
    >
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Local Events</CardTitle>
            <Button variant="outline" size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              Calendar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {communityEvents.map((event) => (
              <div key={event.id} className="border-b pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-muted-foreground">{event.location}</div>
                    <div className="text-sm text-muted-foreground">
                      {event.date} • {event.participants} participants
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                    {event.status}
                  </Badge>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700 text-white">
                    <Users className="mr-1 h-4 w-4" />
                    Join
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    Support
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </BaseMapView>
  );
};

export default CommunityMapView;
