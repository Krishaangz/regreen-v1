
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import StatsOverview from '@/components/dashboard/worker/StatsOverview';
import CurrentTasksWidget from '@/components/dashboard/worker/CurrentTasksWidget';
import EarningsWidget from '@/components/dashboard/worker/EarningsWidget';
import UpcomingScheduleWidget from '@/components/dashboard/worker/UpcomingScheduleWidget';
import { useAuthStore } from '@/stores/authStore';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const WorkerDashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hours, setHours] = useState('8');
  const [projectId, setProjectId] = useState('1');
  const [description, setDescription] = useState('Regular work hours');
  
  const addNotification = useAuthStore((state) => state.addNotification);
  const { toast } = useToast();

  const handleLogHours = () => {
    setIsDialogOpen(true);
  };
  
  const handleSubmitHours = () => {
    // Add notification about logged hours
    addNotification({
      type: 'success',
      message: `Successfully logged ${hours} hours for project #${projectId}`,
      date: new Date().toISOString(),
    });
    
    // Show toast confirmation
    toast({
      title: "Success",
      description: `Successfully logged ${hours} hours`,
      variant: "default",
    });
    
    // Close dialog
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">Worker Dashboard</h1>
          <p className="text-muted-foreground">Manage your tasks and schedule</p>
        </div>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleLogHours}
        >
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
      
      {/* Hours Logging Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Log Your Work Hours</DialogTitle>
            <DialogDescription>
              Enter the details of your hours worked below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hours" className="text-right">
                Hours
              </Label>
              <Input
                id="hours"
                type="number"
                min="0.5"
                step="0.5"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project" className="text-right">
                Project
              </Label>
              <Input
                id="project"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmitHours}>Submit Hours</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorkerDashboard;
