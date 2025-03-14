
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import BaseMapView from '@/components/maps/BaseMapView';

const WorkerMapView = () => {
  const availableJobs = [
    { 
      id: 1, 
      title: 'Tree Planting', 
      location: 'Oak Valley', 
      distance: '2.4 miles',
      deadline: 'May 25, 2023',
      compensation: '$180',
      urgency: 'high'
    },
    { 
      id: 2, 
      title: 'Irrigation Setup', 
      location: 'Meadow Ridge', 
      distance: '5.7 miles',
      deadline: 'May 30, 2023',
      compensation: '$220',
      urgency: 'medium'
    },
    { 
      id: 3, 
      title: 'Soil Preparation', 
      location: 'Green Acres', 
      distance: '3.2 miles',
      deadline: 'June 5, 2023',
      compensation: '$150',
      urgency: 'low'
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <BaseMapView 
      title="Work Locations" 
      description="Find and manage job opportunities near you"
    >
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Available Jobs</CardTitle>
            <Button variant="outline" size="sm" className="gap-1">
              <Clock className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {availableJobs.map((job) => (
              <div key={job.id} className="border-b pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{job.title}</div>
                    <div className="text-sm text-muted-foreground">{job.location} • {job.distance}</div>
                  </div>
                  <Badge variant="outline" className={getUrgencyColor(job.urgency)}>
                    {job.urgency}
                  </Badge>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Due: </span>
                    <span>{job.deadline}</span>
                  </div>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{job.compensation}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  <Eye className="mr-1 h-4 w-4" />
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </BaseMapView>
  );
};

export default WorkerMapView;
