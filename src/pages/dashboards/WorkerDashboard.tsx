
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import StatsOverview from '@/components/dashboard/worker/StatsOverview';
import CurrentTasksWidget from '@/components/dashboard/worker/CurrentTasksWidget';
import EarningsWidget from '@/components/dashboard/worker/EarningsWidget';
import UpcomingScheduleWidget from '@/components/dashboard/worker/UpcomingScheduleWidget';

const WorkerDashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">Worker Dashboard</h1>
          <p className="text-muted-foreground">Manage your tasks and schedule</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <CheckCircle className="mr-2 h-4 w-4" />
          Log Hours
        </Button>
      </div>

      <StatsOverview />

      <div className="grid gap-6 md:grid-cols-2">
        <CurrentTasksWidget />
        <EarningsWidget />
      </div>

      <UpcomingScheduleWidget />
    </div>
  );
};

export default WorkerDashboard;
