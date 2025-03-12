
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight, Leaf, Droplets, Sun, Wind } from "lucide-react";

const LandownerProjects = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  const activeProjects = [
    {
      id: 1,
      title: "Urban Garden Transformation",
      location: "123 Main Street",
      type: "Garden",
      status: "In Progress",
      progress: 65,
      startDate: "Oct 10, 2023",
      estimatedCompletion: "Nov 15, 2023",
      workers: 4,
      tasks: { completed: 12, total: 18 },
      icon: Leaf
    },
    {
      id: 2,
      title: "Rooftop Green Space",
      location: "456 Park Avenue",
      type: "Rooftop",
      status: "Just Started",
      progress: 20,
      startDate: "Oct 18, 2023",
      estimatedCompletion: "Dec 5, 2023",
      workers: 3,
      tasks: { completed: 4, total: 20 },
      icon: Sun
    }
  ];
  
  const completedProjects = [
    {
      id: 3,
      title: "Streambed Restoration",
      location: "789 River Road",
      type: "Waterbody",
      status: "Completed",
      progress: 100,
      startDate: "Aug 5, 2023",
      completionDate: "Sept 20, 2023",
      impact: { area: "1.5 acres", biodiversity: "+12 species", carbon: "2.4 tons offset" },
      icon: Droplets
    },
    {
      id: 4,
      title: "Mini Wind Farm Installation",
      location: "101 Hillside Avenue",
      type: "Energy",
      status: "Completed",
      progress: 100,
      startDate: "July 10, 2023",
      completionDate: "Aug 30, 2023",
      impact: { area: "0.8 acres", energy: "255 kWh/month", carbon: "4.2 tons offset" },
      icon: Wind
    }
  ];
  
  const proposedProjects = [
    {
      id: 5,
      title: "Pollinator Garden",
      location: "234 Meadow Lane",
      type: "Garden",
      estimatedCost: "$2,400",
      estimatedDuration: "6 weeks",
      potentialImpact: "Attract 15+ butterfly species, support local bee populations",
      icon: Leaf
    },
    {
      id: 6,
      title: "Rainwater Harvesting System",
      location: "567 Lake View Road",
      type: "Water",
      estimatedCost: "$3,800",
      estimatedDuration: "8 weeks",
      potentialImpact: "Conserve 2,000 gallons of water monthly, reduce runoff by 40%",
      icon: Droplets
    }
  ];
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-regreen-800 dark:text-regreen-100">My Properties</h1>
          <p className="text-muted-foreground">Manage your eco-restoration projects</p>
        </div>
        
        <Button className="bg-regreen-600 hover:bg-regreen-700">
          Register New Property
        </Button>
      </div>
      
      <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="proposed">Proposals</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-6">
          {activeProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-regreen-100 dark:border-regreen-800 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800/60 flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-regreen-600 dark:text-regreen-400 animate-float" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-regreen-800 dark:text-regreen-100">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin size={14} className="text-regreen-600" />
                        {project.location}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={
                    project.progress < 25 ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" :
                    project.progress < 75 ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100" :
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  }>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-muted-foreground" />
                      <span>Est. Completion: {project.estimatedCompletion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-muted-foreground" />
                      <span>{project.workers} Workers Assigned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf size={14} className="text-muted-foreground" />
                      <span>Tasks: {project.tasks.completed}/{project.tasks.total}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full gap-2">
                  View Details
                  <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-6">
          {completedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-regreen-100 dark:border-regreen-800 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-800/60 flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-green-600 dark:text-green-400 animate-float" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-regreen-800 dark:text-regreen-100">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin size={14} className="text-regreen-600" />
                        {project.location}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Completed</span>
                      <span className="font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-2 bg-green-200 dark:bg-green-800">
                      <div className="h-full bg-green-600 dark:bg-green-400 rounded-full"></div>
                    </Progress>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span>Completed: {project.completionDate}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Environmental Impact:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="bg-white dark:bg-green-800/30 p-2 rounded shadow-sm">
                        <span className="block font-medium text-green-800 dark:text-green-200">Area Restored</span>
                        <span className="text-green-700 dark:text-green-300">{project.impact.area}</span>
                      </div>
                      {project.impact.biodiversity && (
                        <div className="bg-white dark:bg-green-800/30 p-2 rounded shadow-sm">
                          <span className="block font-medium text-green-800 dark:text-green-200">Biodiversity</span>
                          <span className="text-green-700 dark:text-green-300">{project.impact.biodiversity}</span>
                        </div>
                      )}
                      {project.impact.energy && (
                        <div className="bg-white dark:bg-green-800/30 p-2 rounded shadow-sm">
                          <span className="block font-medium text-green-800 dark:text-green-200">Energy Generated</span>
                          <span className="text-green-700 dark:text-green-300">{project.impact.energy}</span>
                        </div>
                      )}
                      <div className="bg-white dark:bg-green-800/30 p-2 rounded shadow-sm">
                        <span className="block font-medium text-green-800 dark:text-green-200">Carbon Impact</span>
                        <span className="text-green-700 dark:text-green-300">{project.impact.carbon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex gap-2">
                <Button variant="outline" className="flex-1 gap-2">
                  View Report
                  <ArrowRight size={16} />
                </Button>
                <Button className="flex-1 gap-2 bg-regreen-600 hover:bg-regreen-700">
                  Share Results
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="proposed" className="space-y-6">
          {proposedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-regreen-100 dark:border-regreen-800 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800/60 flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-float" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-regreen-800 dark:text-regreen-100">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin size={14} className="text-regreen-600" />
                        {project.location}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                    Proposed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-muted-foreground" />
                      <span>Duration: {project.estimatedDuration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">$</span>
                      <span>Est. Cost: {project.estimatedCost}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Potential Impact:</h4>
                    <p className="text-xs text-blue-700 dark:text-blue-300">{project.potentialImpact}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex gap-2">
                <Button variant="outline" className="flex-1">
                  View Proposal
                </Button>
                <Button className="flex-1 gap-2 bg-regreen-600 hover:bg-regreen-700">
                  Accept & Fund
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandownerProjects;
