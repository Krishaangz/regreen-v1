
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import UpcomingShiftCard from './UpcomingShiftCard';

interface ShiftProps {
  id: number;
  date: string;
  time: string;
  location: string;
  task: string;
}

const UpcomingScheduleWidget = () => {
  const upcomingShifts: ShiftProps[] = [
    { id: 1, date: 'May 15, 2023', time: '9:00 AM - 4:00 PM', location: 'Oak Valley', task: 'Tree Planting' },
    { id: 2, date: 'May 18, 2023', time: '8:30 AM - 3:30 PM', location: 'Meadow Ridge', task: 'Irrigation Setup' },
    { id: 3, date: 'May 22, 2023', time: '10:00 AM - 5:00 PM', location: 'Green Acres', task: 'Soil Preparation' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Schedule</CardTitle>
        <CardDescription>Your work shifts for the next two weeks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingShifts.map((shift) => (
            <UpcomingShiftCard key={shift.id} {...shift} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingScheduleWidget;
