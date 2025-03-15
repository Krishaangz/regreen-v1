
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, MapPin } from 'lucide-react';

interface TaskProps {
  id: number;
  title: string;
  location: string;
  deadline: string;
  progress: number;
  priority: string;
}

const TaskCard = ({ title, location, deadline, progress, priority }: TaskProps) => {
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">{title}</h3>
        <Badge variant="outline" className={getPriorityColor(priority)}>
          {priority}
        </Badge>
      </div>
      <div className="text-sm text-muted-foreground flex items-center mt-1">
        <MapPin className="h-3 w-3 mr-1" />
        {location}
      </div>
      
      <div className="mt-3 space-y-1">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="flex justify-between items-center mt-3">
        <div className="text-sm flex items-center text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          Due: {deadline}
        </div>
        <Button variant="outline" size="sm">Continue</Button>
      </div>
    </div>
  );
};

export default TaskCard;
