
import React from "react";
import { motion } from "framer-motion";

const WorkerJourney = () => {
  const steps = [
    {
      number: 1,
      title: "Register & Verify",
      description: "Sign up, verify your identity, and enable location services"
    },
    {
      number: 2,
      title: "Join Groups",
      description: "Receive AI-matched group invitations for nearby projects"
    },
    {
      number: 3,
      title: "Complete Tasks",
      description: "Perform daily assigned tasks and submit verification photos"
    },
    {
      number: 4,
      title: "Get Paid",
      description: "Receive payments and ratings for completed work"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="mt-10 p-8 border rounded-lg space-y-6 glass"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-center text-regreen-800 dark:text-regreen-100">Worker Journey at ReGreen</h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {steps.map((step) => (
          <motion.div 
            key={step.number}
            className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center card-hover-effect"
            variants={item}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {step.number}
            </motion.div>
            <h4 className="font-medium mb-2">{step.title}</h4>
            <p className="text-xs text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WorkerJourney;
