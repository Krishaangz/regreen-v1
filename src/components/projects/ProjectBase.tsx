
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useRole } from '@/contexts/RoleContext';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProjectBaseProps {
  title: string;
  description: string;
  tabs: Array<{
    value: string;
    label: string;
    content: React.ReactNode;
  }>;
  defaultTab?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const ProjectBase: React.FC<ProjectBaseProps> = ({
  title,
  description,
  tabs,
  defaultTab,
  actionLabel,
  onAction
}) => {
  const { role } = useRole();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Get theme colors based on role
  const getAccentColor = () => {
    switch(role) {
      case 'landowner': return 'bg-regreen-600 hover:bg-regreen-700';
      case 'worker': return 'bg-blue-600 hover:bg-blue-700';
      case 'community': return 'bg-amber-600 hover:bg-amber-700';
      default: return 'bg-regreen-600 hover:bg-regreen-700';
    }
  };
  
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
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        
        {actionLabel && onAction && (
          <Button className={`${getAccentColor()} text-white`} onClick={onAction}>
            <Plus className="mr-2 h-4 w-4" />
            {actionLabel}
          </Button>
        )}
      </motion.div>
      
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button variant="outline" className="sm:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Card>
          <Tabs defaultValue={defaultTab || tabs[0].value}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                {tab.content}
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBase;
