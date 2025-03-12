
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  workerCount: number;
  completion: number;
  imageBefore: string;
  imageAfter: string;
  category: string;
  badges: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to show project details page (to be implemented)
  const viewProject = () => {
    console.log(`Viewing project ${project.id}`);
    // navigate(`/projects/${project.id}`);
  };
  
  // Status color mapping
  const statusColorMap: Record<string, string> = {
    "Just Started": "bg-blue-100 text-blue-800",
    "In Progress": "bg-amber-100 text-amber-800",
    "Near Completion": "bg-green-100 text-green-800",
    "Completed": "bg-regreen-100 text-regreen-800"
  };
  
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg border-regreen-100 animate-scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-regreen-100">
        <img 
          src={isHovered ? project.imageAfter : project.imageBefore} 
          alt={isHovered ? "After transformation" : "Before transformation"} 
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColorMap[project.status] || "bg-gray-100 text-gray-800"}`}>
            {project.status}
          </span>
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <p className="text-white p-3 text-sm font-medium">
              Drag slider to see transformation
            </p>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-regreen-800">{project.title}</h3>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="bg-regreen-50 text-regreen-800 border-regreen-200">
              {badge}
            </Badge>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap text-xs text-gray-500 mb-4 gap-x-4 gap-y-2">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{project.startDate}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            <span>{project.workerCount} workers</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span>{project.completion}%</span>
          </div>
          <Progress value={project.completion} className="h-2" />
        </div>
      </CardContent>
      
      <CardFooter className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <Button variant="ghost" size="sm" className="text-regreen-600 hover:text-regreen-700 hover:bg-regreen-50 w-full" onClick={viewProject}>
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
