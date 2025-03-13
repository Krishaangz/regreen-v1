
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex gap-3 items-start">
        <HelpCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
        <h4 className="font-medium">{question}</h4>
      </div>
      <p className="text-sm text-muted-foreground pl-8">
        {answer}
      </p>
    </div>
  );
};

const FAQSection = () => {
  const faqsLeft = [
    {
      question: "What types of land can be transformed?",
      answer: "ReGreen works with various land types including vacant lots, degraded urban spaces, underutilized institutional grounds, and residential properties. Our experts assess each space to determine the best eco-restoration approach."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on size, complexity, and seasonal factors. Small projects may take 2-4 weeks, while larger transformations can span 2-3 months. Our AI-driven planning provides accurate timelines during the proposal phase."
    },
    {
      question: "What qualifications do workers need?",
      answer: "Workers should have basic physical abilities and willingness to learn. Experience in gardening, landscaping, or construction is beneficial but not required. We provide on-the-job training and skill development opportunities."
    }
  ];

  const faqsRight = [
    {
      question: "How is payment structured for landowners?",
      answer: "Landowners pay 50% of the project cost upfront to initiate the temporary group formation. The remaining 50% is due upon satisfactory project completion and verification."
    },
    {
      question: "How are workers compensated?",
      answer: "Workers receive payment through our secure Eco-Wallet system after successful task verification. Payment rates vary based on task complexity, duration, and skill requirements, with bonuses for exceptional performance."
    },
    {
      question: "Is ongoing maintenance included?",
      answer: "Initial projects focus on transformation. We offer separate maintenance packages to ensure long-term success of your eco-restoration project, with options for scheduled worker visits or community volunteer programs."
    }
  ];

  return (
    <div className="mt-8 p-6 border rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 text-regreen-800 dark:text-regreen-100">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground">
          Have questions about our services? We're here to help.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {faqsLeft.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="space-y-6">
          {faqsRight.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">
          Can't find the answer you're looking for?
        </p>
        <Button asChild className="bg-regreen-600 hover:bg-regreen-700">
          <Link to="/help/contact">
            Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FAQSection;
