
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight, Clock, Filter } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

const mockProjects = [
  {
    id: 1,
    title: "Urban Garden Transformation",
    location: "Seattle, WA",
    description: "Converting an abandoned lot into a thriving community garden with native plants and vegetables.",
    status: "In Progress",
    startDate: "Aug 15, 2023",
    endDate: "Nov 30, 2023",
    workerCount: 12,
    completion: 75,
    imageBefore: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    imageAfter: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    category: "urban",
    badges: ["Community", "Food Security"]
  },
  {
    id: 2,
    title: "Riverside Cleanup Initiative",
    location: "Portland, OR",
    description: "Restoring a polluted riverbank with native vegetation to prevent erosion and improve water quality.",
    status: "In Progress",
    startDate: "Sep 5, 2023",
    endDate: "Jan 15, 2024",
    workerCount: 8,
    completion: 45,
    imageBefore: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    imageAfter: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "waterbody",
    badges: ["Water Quality", "Biodiversity"]
  },
  {
    id: 3,
    title: "Community Park Revitalization",
    location: "Denver, CO",
    description: "Transforming a neglected park into a vibrant green space with recreational areas and native landscaping.",
    status: "Near Completion",
    startDate: "Jul 1, 2023",
    endDate: "Oct 15, 2023",
    workerCount: 15,
    completion: 90,
    imageBefore: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    imageAfter: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    category: "recreational",
    badges: ["Recreation", "Urban Planning"]
  },
  {
    id: 4,
    title: "Rooftop Garden Initiative",
    location: "Chicago, IL",
    description: "Creating sustainable rooftop gardens on commercial buildings to reduce urban heat island effect.",
    status: "Just Started",
    startDate: "Oct 1, 2023",
    endDate: "Mar 30, 2024",
    workerCount: 6,
    completion: 20,
    imageBefore: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    imageAfter: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "urban",
    badges: ["Climate Action", "Innovation"]
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? mockProjects 
    : mockProjects.filter(project => project.category === activeFilter);
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-regreen-800">Projects</h1>
          <p className="text-muted-foreground">Browse and discover eco-restoration initiatives</p>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0 gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button className="bg-regreen-600 hover:bg-regreen-700">
            Add Project
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveFilter}>
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="urban">Urban</TabsTrigger>
          <TabsTrigger value="waterbody">Waterbody</TabsTrigger>
          <TabsTrigger value="recreational">Recreational</TabsTrigger>
          <TabsTrigger value="agricultural">Agricultural</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <Card className="mt-12 border-regreen-100">
        <CardHeader>
          <CardTitle>Featured Success Story</CardTitle>
          <CardDescription>See how eco-restoration transformed this community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="before-after-slider bg-regreen-100 aspect-video rounded-xl overflow-hidden shadow-lg animate-fade-in">
              <div className="h-full flex items-center justify-center text-regreen-700">
                <p className="text-xl font-medium">Before/After Slider</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-regreen-800">Oakwood Community Transformation</h3>
              <p className="text-gray-600">
                What started as a neglected vacant lot has become the heart of the Oakwood neighborhood. 
                This project demonstrates the power of community-driven eco-restoration.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Austin, TX</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Completed Jan 2023</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span>22 workers involved</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>4 months duration</span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Impact Metrics:</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-regreen-50 rounded-md p-3">
                    <p className="text-sm text-gray-600">Carbon Sequestered</p>
                    <p className="text-xl font-semibold text-regreen-800">32 tons</p>
                  </div>
                  <div className="bg-regreen-50 rounded-md p-3">
                    <p className="text-sm text-gray-600">Native Species</p>
                    <p className="text-xl font-semibold text-regreen-800">45+ varieties</p>
                  </div>
                  <div className="bg-regreen-50 rounded-md p-3">
                    <p className="text-sm text-gray-600">Water Saved</p>
                    <p className="text-xl font-semibold text-regreen-800">150,000 gallons</p>
                  </div>
                  <div className="bg-regreen-50 rounded-md p-3">
                    <p className="text-sm text-gray-600">Property Value Increase</p>
                    <p className="text-xl font-semibold text-regreen-800">+18%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="border-regreen-600 text-regreen-600">
            View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Projects;
