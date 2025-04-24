
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Training Programs</h2>
          <p>
            Our comprehensive training programs prepare individuals for careers in ecological restoration,
            conservation, and sustainable land management through a combination of classroom learning and hands-on fieldwork.
          </p>
          <ul className="space-y-2">
            {[
              "No prior experience required for entry-level programs",
              "Financial support available through scholarships and stipends",
              "Programs ranging from 6-week intensives to year-long apprenticeships",
              "Industry-recognized certifications upon completion",
              "Direct pathways to employment with ReGreen and partner organizations",
              "Specialized tracks for various ecological restoration disciplines"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Apply Now</Button>
          </div>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
          <img 
            src="/placeholder.svg" 
            alt="Training Programs" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {
            title: "Restoration Technician", 
            description: "6-week intensive program covering basic principles of ecological restoration and field techniques",
            icon: GraduationCap,
            level: "Entry Level",
            format: "Full-time"
          },
          {
            title: "Conservation Specialist", 
            description: "3-month program focused on advanced restoration methods and project planning",
            icon: Award,
            level: "Intermediate",
            format: "Full-time"
          },
          {
            title: "Ecosystem Manager", 
            description: "6-month apprenticeship combining advanced ecological theory with management skills",
            icon: Briefcase,
            level: "Advanced",
            format: "Full-time"
          }
        ].map((program, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mb-4">
                <program.icon className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
              </div>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription className="text-base">{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Level:</span>
                <span className="font-medium">{program.level}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Format:</span>
                <span className="font-medium">{program.format}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-regreen-600 text-regreen-600">
                Program Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrainingTab;
