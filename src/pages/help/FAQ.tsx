
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Leaf, User2, Droplets, HomeIcon, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      icon: <HelpCircle className="h-5 w-5 text-regreen-600" />,
      questions: [
        {
          question: "What is ReGreen?",
          answer: "ReGreen is an innovative platform that connects landowners and waterbody owners with skilled workers to transform underutilized spaces into eco-friendly recreational areas. We use AI-driven task allocation, real-time geo-verification, and secure digital payments to ensure efficient and transparent project execution."
        },
        {
          question: "How does ReGreen benefit the environment?",
          answer: "ReGreen directly addresses environmental degradation by converting idle land and polluted waterbodies into thriving green spaces. This increases biodiversity, improves air and water quality, reduces heat islands in urban areas, and contributes to carbon sequestration efforts."
        },
        {
          question: "Is ReGreen available in my area?",
          answer: "ReGreen is expanding its services across multiple regions. To check if we're active in your area, please use the location search on our homepage or contact our support team for the latest expansion updates."
        }
      ]
    },
    {
      category: "For Landowners",
      icon: <HomeIcon className="h-5 w-5 text-regreen-600" />,
      questions: [
        {
          question: "How do I register my property with ReGreen?",
          answer: "Register as a landowner through our app, then add your property details including location, size, current condition, and relevant images. Our AI will generate customized eco-restoration proposals based on your property's characteristics."
        },
        {
          question: "What is the payment structure for landowners?",
          answer: "Landowners pay 50% of the project cost upfront to initiate the process. This triggers our temporary group formation system to assign qualified workers to your project. The remaining 50% is due only after you're satisfied with the completed transformation."
        },
        {
          question: "Can I monitor the progress of my project?",
          answer: "Yes, our interactive dashboard provides real-time updates on your project status. You can view worker locations, daily task completions, before/after photos, and progress metrics throughout the project lifecycle."
        }
      ]
    },
    {
      category: "For Workers",
      icon: <Briefcase className="h-5 w-5 text-regreen-600" />,
      questions: [
        {
          question: "How do I register as a worker with ReGreen?",
          answer: "Download the ReGreen app, select 'Register as Worker', and complete your profile with personal details, skills, and work experience. You'll need to upload valid ID and enable GPS for location verification to be eligible for task assignments."
        },
        {
          question: "How are workers paid for completed tasks?",
          answer: "Workers receive payment through our secure Eco-Wallet system. After task completion and verification (through geo-tagged photos), payment is automatically credited to your wallet. You can transfer these funds to your bank account at any time."
        },
        {
          question: "What types of skills are needed for ReGreen projects?",
          answer: "We welcome workers with various skills including gardening, landscaping, cleaning, planting, basic construction, and environmental maintenance. Our AI matches tasks to your specific skill set, and we offer opportunities to learn new skills through on-site training."
        }
      ]
    },
    {
      category: "Environmental Impact",
      icon: <Leaf className="h-5 w-5 text-regreen-600" />,
      questions: [
        {
          question: "What types of eco-restoration projects does ReGreen undertake?",
          answer: "ReGreen facilitates various projects including urban garden development, community park creation, waterbody cleanup and restoration, reforestation initiatives, habitat creation for local wildlife, and sustainable landscaping transformations."
        },
        {
          question: "How does ReGreen measure environmental impact?",
          answer: "We track key metrics including square footage of land restored, number of native plants introduced, water quality improvements, carbon sequestration estimates, and biodiversity increases. These metrics are compiled into comprehensive impact reports for each project."
        },
        {
          question: "Does ReGreen use sustainable practices in its projects?",
          answer: "Absolutely! We prioritize native plant species, water conservation techniques, natural pest management, and minimal-impact maintenance practices. Our AI-generated proposals always emphasize environmentally sustainable approaches specific to each location."
        }
      ]
    },
    {
      category: "Community Engagement",
      icon: <User2 className="h-5 w-5 text-regreen-600" />,
      questions: [
        {
          question: "How can community members get involved with ReGreen?",
          answer: "Community members can register to access our forums, participate in local events and workshops, volunteer for community projects, and share success stories. We also offer educational resources on environmental conservation and sustainable practices."
        },
        {
          question: "Does ReGreen organize community events?",
          answer: "Yes, we regularly organize tree-planting days, cleanup drives, educational workshops, and celebration events for completed projects. All upcoming events are listed in our Community Events section, where you can RSVP and invite others to join."
        },
        {
          question: "Can I suggest areas in my community that need restoration?",
          answer: "Absolutely! Through our Community Forum, you can suggest public areas that would benefit from restoration. These suggestions are reviewed by our team and may be presented to local authorities or property owners for potential projects."
        }
      ]
    },
    {
      category: "Water Resources",
      icon: <Droplets className="h-5 w-5 text-regreen-600" />,
      questions: [
        {
          question: "How does ReGreen restore polluted waterbodies?",
          answer: "Our waterbody restoration includes water quality testing, removal of pollutants and invasive species, bank stabilization, introduction of native aquatic plants, and establishment of buffer zones. Each restoration plan is customized based on the specific ecological needs of the waterbody."
        },
        {
          question: "Can ReGreen help with flood management?",
          answer: "Yes, many of our waterbody and land restoration projects incorporate flood management techniques through improved drainage systems, creation of retention ponds, and strategic planting that helps absorb excess water and prevent erosion."
        },
        {
          question: "What types of waterbodies can be restored through ReGreen?",
          answer: "We work with various waterbodies including ponds, small lakes, streams, urban water features, and wetland areas. The size and condition of the waterbody will determine the scope and approach of the restoration project."
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
          Help Center
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-regreen-800 dark:text-regreen-100">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Find answers to common questions about ReGreen's eco-restoration services, worker opportunities, and community initiatives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((category, idx) => (
          <Card key={idx} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                {category.icon}
                <CardTitle>{category.category}</CardTitle>
              </div>
              <CardDescription>Common questions about {category.category.toLowerCase()}</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.category}-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        <Button asChild className="bg-regreen-600 hover:bg-regreen-700">
          <Link to="/help/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
};

export default FAQ;
