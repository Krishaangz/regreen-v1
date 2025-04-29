
import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

interface HelpPageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const HelpPageLayout = ({ title, description, children }: HelpPageLayoutProps) => {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </motion.div>
      
      {children}
    </div>
  );
};

export default HelpPageLayout;
