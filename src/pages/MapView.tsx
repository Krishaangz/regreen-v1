
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, CheckCircle, Calendar, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const MapView = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<"map" | "list">("map");
  
  // Simulate loading of map data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const nearbyTasks = [
    {
      id: 1,
      title: "Urban Garden Planting",
      location: "Downtown Community Park",
      distance: "0.8 miles away",
      payment: "$45",
      estimatedTime: "2 hours",
      deadline: "Today",
      difficulty: "Easy",
      skillsRequired: ["Gardening", "Planting"]
    },
    {
      id: 2,
      title: "Riverside Cleanup",
      location: "Willow Creek",
      distance: "1.2 miles away",
      payment: "$60",
      estimatedTime: "3 hours",
      deadline: "Tomorrow",
      difficulty: "Medium",
      skillsRequired: ["Cleaning", "Waste Management"]
    },
    {
      id: 3,
      title: "Native Tree Planting",
      location: "Hillside Reserve",
      distance: "2.4 miles away",
      payment: "$80",
      estimatedTime: "4 hours",
      deadline: "In 2 days",
      difficulty: "Medium",
      skillsRequired: ["Forestry", "Digging"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-regreen-800 dark:text-regreen-100">Find Tasks</h1>
          <p className="text-muted-foreground">Discover eco-restoration opportunities near you</p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant={currentView === "map" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCurrentView("map")}
            className="bg-regreen-600 hover:bg-regreen-700"
          >
            Map
          </Button>
          <Button 
            variant={currentView === "list" ? "default" : "outline"} 
            size="sm"
            onClick={() => setCurrentView("list")}
          >
            List
          </Button>
        </div>
      </div>
      
      {currentView === "map" ? (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {loading ? (
              <div className="h-[50vh] w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 border-4 border-regreen-600 border-t-transparent animate-spin rounded-full"></div>
                  <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
                </div>
              </div>
            ) : (
              <div className="relative h-[50vh] w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Placeholder</p>
                
                {/* Task Markers - Would be dynamically placed on a real map */}
                <motion.div 
                  className="absolute top-1/4 left-1/3 bg-regreen-600 text-white rounded-full p-2 cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <MapPin size={18} />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 right-1/3 bg-regreen-600 text-white rounded-full p-2 cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <MapPin size={18} />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/4 left-1/2 bg-regreen-600 text-white rounded-full p-2 cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <MapPin size={18} />
                </motion.div>
                
                {/* Current Location */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-3 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.8 
                  }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
                  </div>
                </motion.div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between p-4 border-t">
            <p className="text-sm text-muted-foreground">3 tasks found within 5 miles</p>
            <Button size="sm" variant="outline" className="gap-2">
              <MapPin size={16} />
              Recenter
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-4">
          {nearbyTasks.map((task) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className="overflow-hidden border-regreen-100 dark:border-regreen-800 hover:shadow-md transition-shadow group-hover:border-regreen-300 dark:group-hover:border-regreen-600">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-regreen-800 dark:text-regreen-100">{task.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin size={14} className="text-regreen-600 animate-float" />
                        {task.location} • <span className="font-medium text-regreen-600">{task.distance}</span>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-regreen-50 text-regreen-800 border-regreen-200 dark:bg-regreen-900/50 dark:text-regreen-100 dark:border-regreen-700">
                      {task.payment}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-muted-foreground" />
                      <span>{task.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span>Due: {task.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-muted-foreground" />
                      <span>Difficulty: {task.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-muted-foreground" />
                      <span>Skills: {task.skillsRequired[0]}{task.skillsRequired.length > 1 ? ' +' + (task.skillsRequired.length - 1) : ''}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button size="sm" className="w-full gap-2 bg-regreen-600 hover:bg-regreen-700">
                    <CheckCircle size={16} />
                    Accept Task
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
      
      <motion.div 
        className="fixed bottom-6 right-6 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button className="rounded-full w-14 h-14 bg-regreen-600 hover:bg-regreen-700 shadow-lg">
          <MapPin size={24} />
        </Button>
      </motion.div>
    </div>
  );
};

export default MapView;
