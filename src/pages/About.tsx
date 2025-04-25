
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <Link to="/">
          <Button 
            variant="ghost" 
            className="flex items-center text-regreen-600 hover:text-regreen-800 hover:bg-regreen-100 dark:hover:bg-regreen-900/30 dark:hover:text-regreen-400 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
      
      <motion.div 
        className="text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          About ReGreen
        </motion.h1>
        <motion.div 
          className="h-1 w-32 mx-auto bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-8"
          variants={itemVariants}
        />
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-0 shadow-lg neon-card">
            <CardHeader className="bg-gradient-to-r from-green-900/30 to-emerald-800/30 dark:from-green-900/50 dark:to-emerald-800/50">
              <CardTitle className="text-2xl text-center text-regreen-100 dark:text-regreen-50">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-gradient-to-b from-regreen-50/50 to-white dark:from-green-900/20 dark:to-black/20">
              <p className="text-lg leading-relaxed">
                ReGreen is dedicated to fostering environmental restoration through collaborative efforts 
                between landowners, skilled workers, and local communities. We believe in creating 
                sustainable ecosystems while building stronger communities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full overflow-hidden border-0 shadow-lg neon-card">
              <CardHeader className="bg-gradient-to-r from-green-900/30 to-emerald-800/30 dark:from-green-900/50 dark:to-emerald-800/50">
                <CardTitle className="text-xl text-center text-regreen-100 dark:text-regreen-50">What We Do</CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-b from-regreen-50/50 to-white dark:from-green-900/20 dark:to-black/20">
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-center space-x-2" 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>Connect landowners with restoration experts</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>Facilitate environmental restoration projects</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>Monitor and track project progress</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>Support local community involvement</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>Provide educational resources</span>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full overflow-hidden border-0 shadow-lg neon-card">
              <CardHeader className="bg-gradient-to-r from-green-900/30 to-emerald-800/30 dark:from-green-900/50 dark:to-emerald-800/50">
                <CardTitle className="text-xl text-center text-regreen-100 dark:text-regreen-50">Our Impact</CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-b from-regreen-50/50 to-white dark:from-green-900/20 dark:to-black/20">
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>1000+ acres restored</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>500+ projects completed</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>200+ communities served</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>1000+ workers employed</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-600" />
                    <span>50+ species protected</span>
                  </motion.li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-0 shadow-lg neon-card">
            <CardHeader className="bg-gradient-to-r from-green-900/30 to-emerald-800/30 dark:from-green-900/50 dark:to-emerald-800/50">
              <CardTitle className="text-2xl text-center text-regreen-100 dark:text-regreen-50">Join Us</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-gradient-to-b from-regreen-50/50 to-white dark:from-green-900/20 dark:to-black/20">
              <p className="text-lg mb-6 leading-relaxed">
                Whether you're a landowner looking to restore your property, a worker seeking 
                meaningful employment, or a community member passionate about environmental 
                conservation, there's a place for you at ReGreen.
              </p>
              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-green-500 to-emerald-700 hover:from-green-600 hover:to-emerald-800 text-white font-bold py-3 px-6 rounded-md shadow-lg">
                  Join Our Movement
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
