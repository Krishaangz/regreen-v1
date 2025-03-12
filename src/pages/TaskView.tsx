
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Calendar, Users, ArrowRight, Check, Upload, Camera, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const TaskView = () => {
  const [loading, setLoading] = useState(false);
  
  const currentTask = {
    id: 101,
    title: "Urban Garden Planting",
    location: "Community Park, 123 Main Street",
    status: "In Progress",
    progress: 45,
    deadline: "Oct 30, 2023",
    timeRemaining: "3 days",
    estimatedHours: 8,
    hoursCompleted: 3.5,
    owner: "City Green Initiative",
    team: [
      { id: 1, name: "Alex Kim" },
      { id: 2, name: "Jamie Smith" },
      { id: 3, name: "Taylor Johnson" }
    ],
    description: "Plant native species in designated areas to create a sustainable urban garden. Tasks include soil preparation, planting according to the provided diagram, and initial watering.",
    requirements: [
      "Basic gardening tools (provided)",
      "Work gloves (bring your own)",
      "Appropriate clothing for outdoor work"
    ],
    imagesBefore: [
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    schedule: [
      { id: 1, title: "Site preparation", status: "completed" },
      { id: 2, title: "Initial planting", status: "in progress" },
      { id: 3, title: "Setup irrigation", status: "pending" },
      { id: 4, title: "Add mulch and finalize", status: "pending" }
    ]
  };
  
  const upcomingTasks = [
    {
      id: 102,
      title: "Riverside Cleanup",
      location: "Willow Creek",
      date: "Nov 2, 2023",
      duration: "4 hours",
      payment: "$60"
    },
    {
      id: 103,
      title: "Native Tree Planting",
      location: "Hillside Reserve",
      date: "Nov 5, 2023",
      duration: "6 hours",
      payment: "$80"
    }
  ];
  
  const handleUploadPhoto = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-regreen-800 dark:text-regreen-100">Current Task</h1>
          <p className="text-muted-foreground">Track and complete your active restoration work</p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-regreen-100 dark:border-regreen-800">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-regreen-800 dark:text-regreen-100">{currentTask.title}</CardTitle>
                  <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-regreen-600" />
                    {currentTask.location}
                  </div>
                </div>
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                  {currentTask.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{currentTask.progress}%</span>
                  </div>
                  <Progress value={currentTask.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Deadline</span>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-regreen-600" />
                      <span className="font-medium">{currentTask.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Time Remaining</span>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-regreen-600" />
                      <span className="font-medium">{currentTask.timeRemaining}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Hours Est/Completed</span>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-regreen-600" />
                      <span className="font-medium">{currentTask.hoursCompleted}/{currentTask.estimatedHours} hours</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs text-muted-foreground">Team</span>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-regreen-600" />
                      <span className="font-medium">{currentTask.team.length} workers</span>
                    </div>
                  </div>
                </div>
                
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="photos">Photos</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Description</h3>
                      <p className="text-sm text-muted-foreground">{currentTask.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Requirements</h3>
                      <ul className="text-sm space-y-1">
                        {currentTask.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check size={14} className="mt-1 text-regreen-600 flex-shrink-0" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Project Owner</h3>
                      <p className="text-sm text-muted-foreground">{currentTask.owner}</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="mt-4">
                    <div className="space-y-4">
                      {currentTask.schedule.map((item) => (
                        <div 
                          key={item.id} 
                          className={`flex items-center gap-3 p-3 rounded-lg border ${
                            item.status === 'completed' 
                              ? 'bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-800' 
                              : item.status === 'in progress'
                                ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/30 dark:border-amber-800'
                                : 'bg-gray-50 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            item.status === 'completed' 
                              ? 'bg-green-500 text-white' 
                              : item.status === 'in progress'
                                ? 'bg-amber-500 text-white'
                                : 'bg-gray-300 dark:bg-gray-700'
                          }`}>
                            {item.status === 'completed' ? (
                              <Check size={14} />
                            ) : (
                              <span className="text-xs">{item.id}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${
                              item.status === 'completed' ? 'line-through text-green-800 dark:text-green-400' : ''
                            }`}>{item.title}</p>
                            <p className="text-xs text-muted-foreground capitalize">{item.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="photos" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Before Photos</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {currentTask.imagesBefore.map((img, index) => (
                            <div key={index} className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                              <img src={img} alt="Before" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Upload Progress Photos</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="aspect-video border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-md flex items-center justify-center cursor-pointer hover:border-regreen-500 dark:hover:border-regreen-500 transition-colors">
                            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-regreen-600 dark:hover:text-regreen-400 transition-colors">
                              <Camera size={24} />
                              <span className="text-xs">Take Photo</span>
                            </div>
                          </div>
                          <div className="aspect-video border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-md flex items-center justify-center cursor-pointer hover:border-regreen-500 dark:hover:border-regreen-500 transition-colors">
                            <div className="flex flex-col items-center gap-1 text-muted-foreground hover:text-regreen-600 dark:hover:text-regreen-400 transition-colors">
                              <Upload size={24} />
                              <span className="text-xs">Upload Photo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-4">
            <Button 
              className="flex-1 p-6 gap-2 bg-regreen-600 hover:bg-regreen-700"
              disabled={loading}
              onClick={handleUploadPhoto}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FileCheck size={18} />
                  <span>Submit Verification</span>
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="border-regreen-100 dark:border-regreen-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Navigation</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-muted-foreground">Map view with directions</p>
              </div>
              <div className="p-4 border-t">
                <Button variant="outline" className="w-full gap-2">
                  <MapPin size={16} />
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-regreen-100 dark:border-regreen-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <motion.div 
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 border rounded-lg hover:border-regreen-300 dark:hover:border-regreen-600 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{task.title}</h3>
                      <Badge variant="outline">{task.payment}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin size={12} />
                        <span>{task.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} />
                        <span>{task.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={12} />
                        <span>{task.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <Button variant="outline" className="w-full mt-2 gap-2">
                  View All Tasks
                  <ArrowRight size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
