
import React from 'react';
import { ArrowLeft, BookOpen, Bookmark, CircleCheck, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const LandownerGuide = () => {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4 animate-fade-in">
      <div className="mb-6">
        <Link to="/help">
          <Button 
            variant="ghost" 
            className="flex items-center text-regreen-600 hover:text-regreen-800 hover:bg-regreen-100 dark:hover:bg-regreen-900/30 dark:hover:text-regreen-400 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Help Center
          </Button>
        </Link>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Landowner Guide</h1>
        <p className="text-muted-foreground">Everything you need to know about registering and managing your property on ReGreen</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2 neon-card">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>How to register your property and begin the restoration journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to ReGreen's landowner program! This guide will walk you through the process of 
              registering your property and setting up your first ecological restoration project.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Step 1: Property Registration</h3>
            <p>
              Begin by navigating to the "My Properties" section and clicking "Add Property". 
              You'll need to provide basic information about your land including location, size, 
              and current ecological conditions.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Step 2: Assessment</h3>
            <p>
              Our team will conduct an initial assessment of your property's restoration potential. 
              This may involve a site visit or remote analysis using satellite imagery and existing ecological data.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Step 3: Project Planning</h3>
            <p>
              Based on the assessment, you'll receive restoration recommendations with estimated costs, 
              timelines, and potential ecological benefits. You can review these and select the options 
              that best match your goals.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Step 4: Implementation</h3>
            <p>
              Once approved, our network of skilled restoration workers will begin implementing the project. 
              You'll have access to real-time updates and progress reports through your dashboard.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-regreen-600 hover:bg-regreen-700 text-white">
              <FileText className="mr-2 h-4 w-4" />
              Download Complete Guide
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="neon-card">
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>Helpful documents and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <Link to="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <FileText className="h-5 w-5 text-regreen-600" />
                  <span>Property Assessment Form</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <BookOpen className="h-5 w-5 text-regreen-600" />
                  <span>Ecological Restoration Manual</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <Bookmark className="h-5 w-5 text-regreen-600" />
                  <span>Financial Incentives Guide</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <CircleCheck className="h-5 w-5 text-regreen-600" />
                  <span>Compliance Checklist</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                  <Download className="h-5 w-5 text-regreen-600" />
                  <span>Sample Contracts</span>
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8 neon-card">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Common questions about the landowner program</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How much does it cost to register my property?</AccordionTrigger>
              <AccordionContent>
                Property registration on the ReGreen platform is completely free. Costs are only incurred when you decide to implement a restoration project, and these costs vary based on the specific needs of your land.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I receive financial incentives for restoration?</AccordionTrigger>
              <AccordionContent>
                Yes, many landowners qualify for various financial incentives, including tax benefits, grants, and carbon credits. Our team will help identify which programs you may be eligible for during the assessment phase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long do restoration projects typically take?</AccordionTrigger>
              <AccordionContent>
                The timeline varies greatly depending on the project scope, size of land, and ecological goals. Small projects may be completed in a few months, while larger, more complex restorations may span several years.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I be involved in the restoration work?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We encourage landowner participation at whatever level you're comfortable with. Some landowners prefer to be hands-on, while others choose to delegate the work entirely to our skilled restoration teams.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How are workers vetted for projects on my property?</AccordionTrigger>
              <AccordionContent>
                All workers in our network undergo rigorous vetting, including background checks, verification of qualifications, and training in ecological restoration practices. Many are certified professionals with specialized expertise.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      
      <div className="bg-regreen-50 dark:bg-regreen-900/20 rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-2 text-regreen-800 dark:text-regreen-100">Need Additional Assistance?</h2>
        <p className="text-muted-foreground mb-4">
          Our landowner support team is here to help with any specific questions about property registration and management.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">
            Contact Support
          </Button>
          <Button variant="outline" className="border-regreen-600 text-regreen-600">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandownerGuide;
