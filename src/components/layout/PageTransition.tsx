
import React from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  locationKey: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, locationKey }) => {
  return (
    <motion.div
      key={locationKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-4 md:p-6 overflow-auto"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
