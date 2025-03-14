
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <motion.div 
      className="text-center space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100 px-3 py-1 text-sm font-medium">
          {badge}
        </Badge>
      </motion.div>
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-regreen-800 dark:text-regreen-100 tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="text-lg text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
