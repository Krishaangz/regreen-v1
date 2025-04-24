
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkerProgramsHeader from "./worker/WorkerProgramsHeader";
import TrainingTab from "./worker/TrainingTab";
import EmploymentTab from "./worker/EmploymentTab";
import CareerTab from "./worker/CareerTab";
import WorkerSuccessStories from "./worker/WorkerSuccessStories";
import TemporaryGroupSection from "./worker/TemporaryGroupSection";
import WorkerCTA from "./worker/WorkerCTA";

const WorkerPrograms = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <WorkerProgramsHeader />
      
      <Tabs defaultValue="training" className="w-full mb-12">
        <div className="mb-8 flex justify-center">
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl">
            <TabsTrigger value="training">Training Programs</TabsTrigger>
            <TabsTrigger value="employment">Employment Opportunities</TabsTrigger>
            <TabsTrigger value="career">Career Development</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="training">
          <TrainingTab />
        </TabsContent>
        
        <TabsContent value="employment">
          <EmploymentTab />
        </TabsContent>
        
        <TabsContent value="career">
          <CareerTab />
        </TabsContent>
      </Tabs>
      
      <WorkerSuccessStories />
      <TemporaryGroupSection />
      <WorkerCTA />
    </div>
  );
};

export default WorkerPrograms;
