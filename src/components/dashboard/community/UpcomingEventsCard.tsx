
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  participants: number;
}

interface UpcomingEventsCardProps {
  events: Event[];
}

const UpcomingEventsCard = ({ events }: UpcomingEventsCardProps) => {
  return (
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
          {events.map((event) => (
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
  );
};

export default UpcomingEventsCard;
