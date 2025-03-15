
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface UpcomingActivitiesCardProps {
  activities: Activity[];
}

const UpcomingActivitiesCard = ({ activities }: UpcomingActivitiesCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Upcoming Activities</CardTitle>
        <CardDescription>Next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 border-b pb-3 last:border-0 last:pb-0">
              <div className="p-2 bg-regreen-100 dark:bg-regreen-900 rounded-md">
                <Calendar className="h-4 w-4 text-regreen-600 dark:text-regreen-400" />
              </div>
              <div>
                <div className="font-medium">{activity.title}</div>
                <div className="flex items-center text-sm text-muted-foreground mt-0.5">
                  {activity.date} • {activity.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingActivitiesCard;
