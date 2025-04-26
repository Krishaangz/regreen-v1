
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkerProgramsHeader from "./worker/WorkerProgramsHeader";
import EmploymentTab from "./worker/EmploymentTab";
import TrainingTab from "./worker/TrainingTab";
import CareerTab from "./worker/CareerTab";
import TemporaryGroupSection from "./worker/TemporaryGroupSection";
import WorkerSuccessStories from "./worker/WorkerSuccessStories";
import WorkerCTA from "./worker/WorkerCTA";
import WorkerProgramDetails from "./worker/WorkerProgramDetails";

// Define strongly typed interfaces for our program types
interface BaseProgram {
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
  type: "training" | "employment" | "career";
  certifications: string[];
}

interface EmploymentProgram extends BaseProgram {
  type: "employment";
  payRate: string;
}

interface TrainingProgram extends BaseProgram {
  type: "training";
  skillsGained: string[];
}

interface CareerProgram extends BaseProgram {
  type: "career";
  skillsGained: string[];
}

// Mock data for worker programs
const programData: {
  training: TrainingProgram[];
  employment: EmploymentProgram[];
  career: CareerProgram[];
} = {
  training: [
    {
      id: "train1",
      title: "Ecological Restoration Fundamentals",
      description: "A comprehensive 6-week training program covering the basics of ecosystem restoration, native plant identification, and restoration techniques.",
      location: "Multiple Locations",
      duration: "6 weeks",
      startDate: "June 15, 2023",
      capacity: 25,
      enrolled: 18,
      prerequisites: [
        "High school diploma or equivalent",
        "Interest in environmental conservation",
        "Basic physical fitness"
      ],
      benefits: [
        "Hands-on field experience",
        "Industry-recognized certification",
        "Job placement assistance upon completion",
        "Networking with industry professionals"
      ],
      status: "open",
      type: "training",
      certifications: ["Ecological Restoration Technician Level 1"],
      skillsGained: [
        "Native plant identification",
        "Soil assessment",
        "Erosion control techniques",
        "Invasive species management"
      ]
    },
    {
      id: "train2",
      title: "Advanced Wetland Restoration",
      description: "Specialized training for professionals looking to develop expertise in wetland ecosystem restoration and management.",
      location: "Online + Field Sessions",
      duration: "8 weeks",
      startDate: "July 10, 2023",
      capacity: 20,
      enrolled: 12,
      prerequisites: [
        "Basic ecological knowledge",
        "Previous field experience preferred",
        "Comfort working in wet conditions"
      ],
      benefits: [
        "Advanced certification",
        "Specialized career opportunities",
        "Field trips to exemplary wetland projects",
        "Mentorship from industry experts"
      ],
      status: "open",
      type: "training",
      certifications: ["Wetland Specialist Certification"],
      skillsGained: [
        "Wetland delineation",
        "Hydrology assessment",
        "Wetland plant identification",
        "Water quality monitoring"
      ]
    }
  ],
  employment: [
    {
      id: "emp1",
      title: "Restoration Field Technician",
      description: "Immediate openings for field technicians to implement restoration projects across the region. Work includes planting, maintenance, and monitoring of restoration sites.",
      location: "Regional - Multiple Sites",
      duration: "Seasonal (3-6 months)",
      startDate: "Immediate",
      capacity: 15,
      enrolled: 8,
      prerequisites: [
        "Valid driver's license",
        "Ability to work outdoors in various weather conditions",
        "Basic knowledge of tools and equipment"
      ],
      benefits: [
        "Competitive hourly wage",
        "Skills development",
        "Potential for permanent positions",
        "Contribution to environmental restoration"
      ],
      status: "open",
      type: "employment",
      certifications: [],
      payRate: "$18-22/hour DOE"
    },
    {
      id: "emp2",
      title: "Crew Leader - Forest Restoration",
      description: "Lead a team of restoration workers in implementing large-scale forest restoration projects, including planting, invasive species removal, and monitoring.",
      location: "Eastern Woodlands Region",
      duration: "Full-time, Permanent",
      startDate: "July 1, 2023",
      capacity: 5,
      enrolled: 2,
      prerequisites: [
        "2+ years of field experience",
        "Leadership experience",
        "Knowledge of forest ecology",
        "Valid driver's license"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Paid time off",
        "Professional development opportunities",
        "Retirement plan"
      ],
      status: "open",
      type: "employment",
      certifications: ["First Aid/CPR", "Crew Leadership Certification (preferred)"],
      payRate: "$45,000-55,000/year"
    }
  ],
  career: [
    {
      id: "career1",
      title: "Restoration Ecologist Development Program",
      description: "A two-year professional development program designed to train the next generation of restoration ecologists through rotational assignments, mentorship, and specialized training.",
      location: "Nationwide",
      duration: "2 years",
      startDate: "September 1, 2023",
      capacity: 10,
      enrolled: 3,
      prerequisites: [
        "Bachelor's degree in ecology, environmental science, or related field",
        "Demonstrated interest in ecological restoration",
        "Willing to relocate for rotational assignments"
      ],
      benefits: [
        "Full-time salary and benefits",
        "Structured career advancement",
        "Advanced certifications",
        "Professional network development",
        "Mentorship from senior ecologists"
      ],
      status: "open",
      type: "career",
      certifications: ["Professional Ecologist Certification", "Project Management for Restoration Projects"],
      skillsGained: [
        "Restoration project design",
        "Scientific monitoring and assessment",
        "GIS mapping",
        "Grant writing",
        "Stakeholder engagement"
      ]
    },
    {
      id: "career2",
      title: "Indigenous Knowledge Integration Fellowship",
      description: "A specialized career development program focused on integrating traditional ecological knowledge with contemporary restoration practices.",
      location: "Various Tribal Lands",
      duration: "18 months",
      startDate: "August 15, 2023",
      capacity: 8,
      enrolled: 4,
      prerequisites: [
        "Connection to indigenous communities",
        "Background in ecology or environmental work",
        "Commitment to cultural preservation"
      ],
      benefits: [
        "Stipend and living allowance",
        "Travel opportunities",
        "Publication and presentation opportunities",
        "Community impact",
        "Cultural knowledge preservation"
      ],
      status: "coming-soon",
      type: "career",
      certifications: ["Cultural Resource Management", "Traditional Ecological Knowledge Integration"],
      skillsGained: [
        "Traditional land management practices",
        "Cross-cultural communication",
        "Community engagement",
        "Indigenous plant knowledge",
        "Sustainable harvesting practices"
      ]
    }
  ]
};

const Worker = () => {
  const [activeTab, setActiveTab] = useState("employment");
  const [selectedProgram, setSelectedProgram] = useState<BaseProgram | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleOpenDetails = (program: BaseProgram) => {
    setSelectedProgram(program);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <WorkerProgramsHeader />
      
      <Tabs 
        defaultValue="employment" 
        value={activeTab}
        onValueChange={setActiveTab} 
        className="mt-10"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="employment">Employment</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="career">Career Development</TabsTrigger>
        </TabsList>
        
        <TabsContent value="employment" className="space-y-4 mt-6">
          <EmploymentTab programs={programData.employment} onViewDetails={handleOpenDetails} />
        </TabsContent>
        
        <TabsContent value="training" className="space-y-4 mt-6">
          <TrainingTab programs={programData.training} onViewDetails={handleOpenDetails} />
        </TabsContent>
        
        <TabsContent value="career" className="space-y-4 mt-6">
          <CareerTab programs={programData.career} onViewDetails={handleOpenDetails} />
        </TabsContent>
      </Tabs>
      
      <TemporaryGroupSection />
      
      <WorkerSuccessStories />
      
      <WorkerCTA />

      {selectedProgram && (
        <WorkerProgramDetails 
          isOpen={isDetailsOpen}
          onClose={handleCloseDetails}
          program={selectedProgram}
        />
      )}
    </div>
  );
};

export default Worker;
