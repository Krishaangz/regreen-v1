
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, FileCheck, MapPin, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProgramDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  program: {
    id: string;
    title: string;
    description: string;
    location: string;
    duration: string;
    startDate: string;
    capacity: number;
    enrolled: number;
    prerequisites: string[];
    benefits: string[];
    status: 'open' | 'closed' | 'coming-soon';
    type: 'training' | 'employment' | 'career';
    certifications: string[];
    payRate?: string;
    skillsGained?: string[];
  };
}

const WorkerProgramDetails = ({ isOpen, onClose, program }: ProgramDetailsProps) => {
  const { toast } = useToast();

  const handleApply = () => {
    toast.success(`Application submitted for ${program.title}`);
    onClose();
  };

  const statusColors = {
    open: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    closed: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    'coming-soon': "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
        <div className={`p-1 ${program.type === 'training' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 
                               program.type === 'employment' ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                               'bg-gradient-to-r from-purple-400 to-purple-600'}`}>
          <div className="bg-background p-5 sm:p-6">
            <DialogHeader className="mb-4">
              <div className="flex items-center justify-between">
                <Badge className={statusColors[program.status]}>
                  {program.status === 'open' ? 'Accepting Applications' : 
                   program.status === 'closed' ? 'Applications Closed' : 'Coming Soon'}
                </Badge>
                
                <Badge variant="outline" className={
                  program.type === 'training' ? 'border-blue-500 text-blue-600' : 
                  program.type === 'employment' ? 'border-green-500 text-green-600' : 
                  'border-purple-500 text-purple-600'
                }>
                  {program.type === 'training' ? 'Training Program' : 
                   program.type === 'employment' ? 'Employment Opportunity' : 
                   'Career Development'}
                </Badge>
              </div>
              <DialogTitle className="text-2xl mt-2">{program.title}</DialogTitle>
              <DialogDescription className="text-base">{program.description}</DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Program Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{program.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-muted-foreground" />
                    <span>Starts: {program.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>{program.enrolled}/{program.capacity} Enrolled</span>
                  </div>
                  {program.payRate && (
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-muted-foreground" />
                      <span>Pay Rate: {program.payRate}</span>
                    </div>
                  )}
                </div>

                <h3 className="font-semibold text-lg mt-6 mb-3">Prerequisites</h3>
                <ul className="space-y-2 list-disc list-inside">
                  {program.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Benefits</h3>
                <ul className="space-y-2 list-disc list-inside">
                  {program.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>

                {program.skillsGained && (
                  <>
                    <h3 className="font-semibold text-lg mt-6 mb-3">Skills Gained</h3>
                    <div className="flex flex-wrap gap-2">
                      {program.skillsGained.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </>
                )}

                <h3 className="font-semibold text-lg mt-6 mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {program.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline">{cert}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button 
                onClick={handleApply} 
                disabled={program.status !== 'open'}
                className={
                  program.type === 'training' ? 'bg-blue-600 hover:bg-blue-700' : 
                  program.type === 'employment' ? 'bg-green-600 hover:bg-green-700' : 
                  'bg-purple-600 hover:bg-purple-700'
                }
              >
                {program.status === 'open' ? 'Apply Now' : 
                 program.status === 'coming-soon' ? 'Notify Me' : 'Applications Closed'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkerProgramDetails;
