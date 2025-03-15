
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import TaskCard from './TaskCard';

interface TaskProps {
  id: number;
  title: string;
  location: string;
  deadline: string;
  progress: number;
  priority: string;
}

const CurrentTasksWidget = () => {
  // Sample data for workers
  const currentTasks: TaskProps[] = [
    { id: 1, title: 'Tree Planting', location: 'Oak Valley', deadline: 'May 25, 2023', progress: 65, priority: 'high' },
    { id: 2, title: 'Soil Preparation', location: 'Green Acres', deadline: 'June 5, 2023', progress: 20, priority: 'medium' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Tasks</CardTitle>
        <CardDescription>Tasks requiring your attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {currentTasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentTasksWidget;
