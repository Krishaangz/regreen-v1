
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const WorkerSchedule = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Mock data for upcoming shifts
  const upcomingShifts = [
    { id: 1, project: 'Oak Valley Restoration', date: 'Mon, Jun 10', time: '8:00 AM - 4:00 PM', location: 'North Ridge' },
    { id: 2, project: 'River Cleanup', date: 'Wed, Jun 12', time: '9:00 AM - 3:00 PM', location: 'East Creek' },
    { id: 3, project: 'Urban Garden Project', date: 'Fri, Jun 14', time: '10:00 AM - 2:00 PM', location: 'Downtown Community Center' },
    { id: 4, project: 'Forest Monitoring', date: 'Mon, Jun 17', time: '8:00 AM - 4:00 PM', location: 'West Woods' },
  ];
  
  // Mock data for completed shifts
  const completedShifts = [
    { id: 1, project: 'Creek Restoration', date: 'Jun 5, 2023', hours: 8, earnings: '$240' },
    { id: 2, project: 'Native Planting', date: 'Jun 3, 2023', hours: 6, earnings: '$180' },
    { id: 3, project: 'Invasive Removal', date: 'May 30, 2023', hours: 8, earnings: '$240' },
    { id: 4, project: 'Habitat Construction', date: 'May 28, 2023', hours: 7, earnings: '$210' },
  ];

  return (
    <div className="container py-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Worker Schedule</h1>
      
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Shifts</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="history">Work History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="space-y-4">
            {upcomingShifts.map((shift) => (
              <Card key={shift.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{shift.project}</CardTitle>
                      <CardDescription>{shift.location}</CardDescription>
                    </div>
                    <Badge>{shift.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">Shift Time:</p>
                      <p>{shift.time}</p>
                    </div>
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Work Calendar</CardTitle>
              <CardDescription>Your scheduled shifts for the month</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Work History</CardTitle>
              <CardDescription>Record of your past shifts and earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Hours</TableHead>
                    <TableHead className="text-right">Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedShifts.map((shift) => (
                    <TableRow key={shift.id}>
                      <TableCell className="font-medium">{shift.project}</TableCell>
                      <TableCell>{shift.date}</TableCell>
                      <TableCell>{shift.hours}</TableCell>
                      <TableCell className="text-right">{shift.earnings}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkerSchedule;
