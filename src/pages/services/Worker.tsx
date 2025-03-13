
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, GraduationCap, Briefcase, Award, Users, FileText, User2 } from "lucide-react";

const WorkerPrograms = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Worker Programs</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Training, employment, and career development opportunities in ecological restoration
          and sustainable land management, focusing on building the workforce needed for a greener future.
        </p>
      </div>
      
      <Tabs defaultValue="training" className="w-full mb-12">
        <div className="mb-8 flex justify-center">
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl">
            <TabsTrigger value="training">Training Programs</TabsTrigger>
            <TabsTrigger value="employment">Employment Opportunities</TabsTrigger>
            <TabsTrigger value="career">Career Development</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="training" className="space-y-8">
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
        </TabsContent>
        
        <TabsContent value="employment" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Employment Opportunities</h2>
              <p>
                ReGreen directly employs restoration workers on projects across the country, offering competitive wages, 
                benefits, and the opportunity to make a tangible difference in ecological health and climate resilience.
              </p>
              <ul className="space-y-2">
                {[
                  "Full-time, part-time, and seasonal positions available",
                  "Field-based roles with hands-on restoration work",
                  "Opportunities in both rural and urban settings",
                  "Career progression pathways within the organization",
                  "Comprehensive benefits for full-time employees",
                  "Opportunity to work on diverse projects and ecosystems"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">View Current Openings</Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
              <img 
                src="/placeholder.svg" 
                alt="Employment Opportunities" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">Featured Job Openings</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Restoration Field Technician",
                  location: "Portland, OR",
                  type: "Full-time",
                  salary: "$42,000 - $48,000/year"
                },
                {
                  title: "Ecological Restoration Specialist",
                  location: "Denver, CO",
                  type: "Full-time",
                  salary: "$52,000 - $65,000/year"
                },
                {
                  title: "Seasonal Restoration Crew Member",
                  location: "Multiple Locations",
                  type: "Seasonal (May-October)",
                  salary: "$22 - $25/hour"
                }
              ].map((job, index) => (
                <div key={index} className="bg-background p-4 rounded-md flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{job.title}</h4>
                    <div className="text-sm text-muted-foreground">
                      {job.location} • {job.type}
                    </div>
                    <div className="text-sm font-medium text-regreen-600">
                      {job.salary}
                    </div>
                  </div>
                  <Button size="sm" className="bg-regreen-600 hover:bg-regreen-700 text-white">Apply</Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="career" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Development</h2>
              <p>
                Beyond initial training and employment, ReGreen is committed to supporting your long-term career
                development in the growing field of ecological restoration and sustainable land management.
              </p>
              <ul className="space-y-2">
                {[
                  "Advanced training opportunities for skill enhancement",
                  "Leadership development programs",
                  "Mentorship from industry experts",
                  "Networking with professionals across the field",
                  "Support for continuing education and certifications",
                  "Pathways to management and specialized roles"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Explore Career Paths</Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
              <img 
                src="/placeholder.svg" 
                alt="Career Development" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Worker Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Carlos Rodriguez",
              image: "/placeholder.svg",
              role: "Restoration Team Lead",
              quote: "I started as a seasonal technician with no experience three years ago. The training and mentorship I received completely changed my career path, and now I lead my own restoration projects."
            },
            {
              name: "Michelle Thompson",
              image: "/placeholder.svg",
              role: "Ecological Specialist",
              quote: "After a decade in retail, I was looking for more meaningful work. ReGreen's training program gave me both the skills and confidence to transition to a career that aligns with my values."
            },
            {
              name: "Jamal Washington",
              image: "/placeholder.svg",
              role: "Project Manager",
              quote: "The career development opportunities at ReGreen are unmatched. I've been able to grow from field technician to project manager while continuing to learn and develop new skills."
            }
          ].map((story, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{story.name}</CardTitle>
                <CardDescription>{story.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center italic">"{story.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="bg-muted rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Temporary Group Formation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Temporary Worker Group" 
              className="w-full h-64 object-cover rounded-md mb-4"
            />
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Join Project-Specific Worker Groups</h3>
            <p className="mb-4">
              For those seeking flexible work arrangements, our temporary group formation allows you to join
              specific restoration projects on a contract basis. These short-term teams come together for
              projects ranging from a few days to several months, allowing you to choose work that fits your schedule.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Project-specific contracts with clear start and end dates",
                "Competitive daily rates based on skill level and project demands",
                "Opportunity to work in diverse locations and ecosystems",
                "Great for seasonal workers, students, or those testing career paths"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">
              <User2 className="mr-2 h-4 w-4" />
              Join the Worker Pool
            </Button>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Restoration Career?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Whether you're looking for training, employment, or career advancement, ReGreen offers
          pathways for individuals at all experience levels who are passionate about ecological restoration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Apply for Training</Button>
          <Button variant="outline" className="border-regreen-600 text-regreen-600">
            <FileText className="mr-2 h-4 w-4" /> Download Program Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkerPrograms;
