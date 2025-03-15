
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Timer } from 'lucide-react';

interface ShiftProps {
  id: number;
  date: string;
  time: string;
  location: string;
  task: string;
}

const UpcomingShiftCard = ({ date, time, location, task }: ShiftProps) => {
  return (
    <div className="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
      <div className="min-w-16 p-3 bg-blue-100 dark:bg-blue-900 rounded-md text-center">
        <Calendar className="h-5 w-5 mx-auto text-blue-600 dark:text-blue-400" />
        <div className="text-xs font-medium mt-1">{date.split(',')[0]}</div>
      </div>
      <div className="flex-1">
        <div className="font-medium">{task}</div>
        <div className="text-sm text-muted-foreground mt-1 flex items-center">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </div>
        <div className="text-sm text-muted-foreground mt-1 flex items-center">
          <Timer className="h-3 w-3 mr-1" />
          {time}
        </div>
      </div>
      <Button variant="outline" size="sm">Details</Button>
    </div>
  );
};

export default UpcomingShiftCard;
