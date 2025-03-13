
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Users, Clock, Calendar, Check, X, Timer, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const GroupFormation = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [workerCount, setWorkerCount] = useState(4);
  const [timeRemaining, setTimeRemaining] = useState("23:45:12");
  
  // Mock project data
  const project = {
    id: "proj-12345",
    title: "Urban Garden Restoration",
    location: "Riverside Park, 567 Green Avenue",
    description: "Transform an abandoned lot into a thriving community garden with native plants, walkways, and seating areas.",
    requiredWorkers: 8,
    deadline: "Oct 15, 2023",
    owner: "City Green Initiative",
    skills: ["Gardening", "Landscaping", "Construction"],
    payment: "$120 per day",
    duration: "14 days",
    status: "Forming Group"
  };
  
  // Mock worker data for group members
  const initialWorkers = [
    { id: 1, name: "Alex Johnson", skills: ["Gardening", "Planting"], rating: 4.8, joined: true, avatar: "/placeholder.svg" },
    { id: 2, name: "Maria Garcia", skills: ["Landscaping", "Design"], rating: 4.5, joined: true, avatar: "/placeholder.svg" },
    { id: 3, name: "James Brown", skills: ["Construction", "Heavy Lifting"], rating: 4.2, joined: true, avatar: "/placeholder.svg" },
    { id: 4, name: "Sarah Lee", skills: ["Gardening", "Irrigation"], rating: 4.9, joined: true, avatar: "/placeholder.svg" }
  ];
  
  const [workers, setWorkers] = useState(initialWorkers);
  
  const handleJoinGroup = () => {
    setLoading(true);
    setTimeout(() => {
      setJoined(true);
      setWorkerCount(workerCount + 1);
      setWorkers([...workers, { 
        id: 5, 
        name: "You", 
        skills: ["Gardening", "Planting"], 
        rating: 4.7, 
        joined: true,
        avatar: "/placeholder.svg" 
      }]);
      setLoading(false);
      
      toast({
        title: "Group Joined!",
        description: "You have successfully joined the project group.",
        variant: "default",
      });
    }, 1500);
  };
  
  const handleLeaveGroup = () => {
    setLoading(true);
    setTimeout(() => {
      setJoined(false);
      setWorkerCount(workerCount - 1);
      setWorkers(workers.filter(worker => worker.id !== 5));
      setLoading(false);
      
      toast({
        title: "Left Group",
        description: "You have left the project group.",
        variant: "destructive",
      });
    }, 1500);
  };
  
  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      // Simple timer simulation - would be replaced with actual countdown logic
      const parts = timeRemaining.split(':');
      let hours = parseInt(parts[0]);
      let minutes = parseInt(parts[1]);
      let seconds = parseInt(parts[2]);
      
      seconds -= 1;
      if (seconds < 0) {
        seconds = 59;
        minutes -= 1;
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
          if (hours < 0) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            clearInterval(timer);
          }
        }
      }
      
      setTimeRemaining(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeRemaining]);
  
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-regreen-800 dark:text-regreen-100">Temporary Group Formation</h1>
          <p className="text-muted-foreground">Join groups to participate in eco-restoration projects</p>
        </div>
        
        <div className="w-full md:w-auto">
          {!joined ? (
            <Button 
              className="w-full md:w-auto bg-regreen-600 hover:bg-regreen-700"
              onClick={handleJoinGroup}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Join This Group
                </>
              )}
            </Button>
          ) : (
            <Button 
              variant="outline"
              className="w-full md:w-auto border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950"
              onClick={handleLeaveGroup}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <X className="mr-2 h-4 w-4" />
                  Leave Group
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                </div>
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Group Formation</span>
                    <span className="font-medium">{workerCount}/{project.requiredWorkers} Workers</span>
                  </div>
                  <Progress value={(workerCount / project.requiredWorkers) * 100} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Deadline</span>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-regreen-600" />
                      <span className="font-medium">{project.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Time Remaining</span>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-regreen-600" />
                      <span className="font-medium">{timeRemaining}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Payment</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{project.payment}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Duration</span>
                    <div className="flex items-center gap-2">
                      <Timer size={14} className="text-regreen-600" />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900/30 dark:text-regreen-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-sm font-medium mb-3">Group Members ({workers.length}/{project.requiredWorkers})</h3>
                  <div className="space-y-3">
                    {workers.map(worker => (
                      <motion.div 
                        key={worker.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                            <img src={worker.avatar} alt={worker.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{worker.name} {worker.id === 5 && "(You)"}</p>
                            <p className="text-xs text-muted-foreground">{worker.skills.join(", ")}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">{worker.rating}</span>
                            <span className="text-amber-500 ml-1">★</span>
                          </div>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs">
                            Joined
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                    
                    {Array(project.requiredWorkers - workers.length).fill(0).map((_, index) => (
                      <div key={`empty-${index}`} className="flex items-center justify-center p-3 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Users size={16} />
                          Waiting for worker to join...
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Daily Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="space-y-4 mt-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Site Preparation and Clearing</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Remove debris and prepare the soil for planting. Clear existing weeds and invasive species.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">Day 1</Badge>
                      <Badge variant="outline">4 Hours</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Layout and Design Implementation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mark areas for different plant species, pathways, and seating areas according to the design plan.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">Day 2</Badge>
                      <Badge variant="outline">6 Hours</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <p className="text-sm text-muted-foreground">Tasks will be available once the group is fully formed</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="active" className="space-y-4 mt-4">
                  <div className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center text-center">
                    <MessageSquare className="h-10 w-10 text-muted-foreground mb-2" />
                    <h3 className="font-medium">No Active Tasks</h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-md">
                      Tasks will be assigned once the group formation is complete and the project officially begins.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed" className="space-y-4 mt-4">
                  <div className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center text-center">
                    <Check className="h-10 w-10 text-muted-foreground mb-2" />
                    <h3 className="font-medium">No Completed Tasks</h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-md">
                      Completed tasks will appear here once you begin working on the project.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Group Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex flex-col items-center justify-center text-center p-4">
                <MessageSquare className="h-10 w-10 text-muted-foreground mb-2" />
                <h3 className="font-medium">Group Chat Coming Soon</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Chat with your group members once the group is formed and the project begins.
                </p>
                <Button className="mt-4" disabled>Join Chat</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Owner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img src="/placeholder.svg" alt="Project Owner" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">{project.owner}</h3>
                  <p className="text-sm text-muted-foreground">Project Owner</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Contact Owner
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GroupFormation;
