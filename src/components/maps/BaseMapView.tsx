
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, Layers, MapPin, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRole } from '@/contexts/RoleContext';
import { motion } from 'framer-motion';

interface BaseMapViewProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const BaseMapView: React.FC<BaseMapViewProps> = ({ title, description, children }) => {
  const { role } = useRole();
  
  // Get theme colors based on role
  const getAccentColor = () => {
    switch(role) {
      case 'landowner': return 'bg-regreen-600 hover:bg-regreen-700';
      case 'worker': return 'bg-blue-600 hover:bg-blue-700';
      case 'community': return 'bg-amber-600 hover:bg-amber-700';
      default: return 'bg-regreen-600 hover:bg-regreen-700';
    }
  };
  
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Card className="h-[600px] overflow-hidden">
            <CardContent className="p-0 h-full relative">
              <div ref={mapContainerRef} className="w-full h-full bg-gray-100 dark:bg-gray-800">
                {/* Map would be rendered here with a real mapping library */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Interactive map would be displayed here
                </div>
              </div>
              
              {/* Map controls */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <Button variant="secondary" size="icon" className="bg-white/90 dark:bg-gray-800/90 shadow-md">
                  <Plus size={18} />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/90 dark:bg-gray-800/90 shadow-md">
                  <Search size={18} />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/90 dark:bg-gray-800/90 shadow-md">
                  <Layers size={18} />
                </Button>
              </div>
              
              {/* Map search */}
              <div className="absolute top-4 right-4 z-10 w-64 bg-white/90 dark:bg-gray-800/90 rounded-md shadow-md">
                <div className="p-2">
                  <Input placeholder="Search locations..." className="bg-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          {/* Sidebar content - will be different per role */}
          {children}
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Map Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span>Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span>Available Sites</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                <span>Community Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span>Completed Projects</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Need assistance with the map or have questions about locations?
              </p>
              <Button className={`w-full ${getAccentColor()} text-white`}>
                <Info className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BaseMapView;
