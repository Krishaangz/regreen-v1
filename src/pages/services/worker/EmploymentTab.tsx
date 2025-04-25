
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

interface EmploymentProgram {
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
  status: "open" | "closed" | "coming-soon";
  type: "employment";
  certifications: string[];
  payRate?: string;
}

interface EmploymentTabProps {
  programs: EmploymentProgram[];
  onViewDetails: (program: EmploymentProgram) => void;
}

const EmploymentTab = ({ programs, onViewDetails }: EmploymentTabProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Accepting Applications</Badge>;
      case "closed":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Applications Closed</Badge>;
      case "coming-soon":
        return <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">Coming Soon</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Employment Opportunities</h2>
        <p className="text-muted-foreground mb-6">
          Join our network of skilled workers implementing ecological restoration projects. 
          We offer competitive wages, flexible schedules, and the chance to make a tangible 
          environmental impact.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="overflow-hidden neon-card">
            <CardHeader className="bg-green-50 dark:bg-green-900/20 border-b">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{program.title}</CardTitle>
                {getStatusBadge(program.status)}
              </div>
              <CardDescription className="mt-2">{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{program.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                <span>Starts: {program.startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{program.enrolled}/{program.capacity} Enrolled</span>
              </div>
              {program.payRate && (
                <div className="mt-2 font-medium">
                  Pay Rate: {program.payRate}
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <Button variant="outline" onClick={() => onViewDetails(program)}>
                View Details
              </Button>
              <Button 
                disabled={program.status !== "open"}
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => onViewDetails(program)}
              >
                {program.status === "open" ? "Apply Now" : 
                 program.status === "coming-soon" ? "Notify Me" : "Applications Closed"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmploymentTab;
