
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, FileQuestion, MessageSquare, FileText, Lightbulb, HomeIcon, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const supportResources = [
    {
      title: "Frequently Asked Questions",
      description: "Find answers to the most common questions about our services, platform features, and eco-restoration processes.",
      icon: <FileQuestion className="h-6 w-6 text-regreen-600" />,
      link: "/help/faq",
      buttonText: "View FAQs"
    },
    {
      title: "Contact Support Team",
      description: "Need personalized assistance? Our dedicated support team is ready to help with any issues or questions you might have.",
      icon: <MessageSquare className="h-6 w-6 text-regreen-600" />,
      link: "/help/contact",
      buttonText: "Contact Us"
    },
    {
      title: "User Guides",
      description: "Step-by-step guides to navigate ReGreen's features and make the most of our platform's capabilities.",
      icon: <FileText className="h-6 w-6 text-regreen-600" />,
      link: "/help/guides",
      buttonText: "Browse Guides"
    },
    {
      title: "Tips & Best Practices",
      description: "Expert recommendations to enhance your eco-restoration projects and maximize environmental impact.",
      icon: <Lightbulb className="h-6 w-6 text-regreen-600" />,
      link: "/help/tips",
      buttonText: "View Tips"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
          Help & Support
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-regreen-800 dark:text-regreen-100">
          How Can We Help You?
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Find the assistance you need to make the most of ReGreen's eco-restoration platform.
        </p>
      </div>
      
      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="byRole">By Role</TabsTrigger>
          <TabsTrigger value="byTopic">By Topic</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {supportResources.map((resource, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-regreen-600">{resource.icon}</div>
                    <div>
                      <CardTitle>{resource.title}</CardTitle>
                      <CardDescription className="mt-1">{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="pt-2">
                  <Button asChild variant="outline" className="text-regreen-600 hover:text-regreen-700 hover:bg-regreen-50">
                    <Link to={resource.link}>
                      {resource.buttonText}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="byRole" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-14 h-14 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="h-7 w-7 text-regreen-600 dark:text-regreen-400" />
                </div>
                <CardTitle>For Landowners</CardTitle>
                <CardDescription>Resources to help landowners transform their properties through eco-restoration</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/landowner-guide" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Property Registration Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/project-monitoring" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Monitoring Your Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/landowner-faq" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Landowner FAQ
                    </Link>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-regreen-600 hover:bg-regreen-700">
                  <Link to="/help/landowner-resources">All Landowner Resources</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-14 h-14 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mx-auto mb-4">
                  <User2 className="h-7 w-7 text-regreen-600 dark:text-regreen-400" />
                </div>
                <CardTitle>For Workers</CardTitle>
                <CardDescription>Resources to help workers succeed in eco-restoration projects</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/worker-guide" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Getting Started Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/task-verification" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Task Verification Instructions
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/worker-faq" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Worker FAQ
                    </Link>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-regreen-600 hover:bg-regreen-700">
                  <Link to="/help/worker-resources">All Worker Resources</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="text-center">
                <div className="w-14 h-14 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mx-auto mb-4">
                  <User2 className="h-7 w-7 text-regreen-600 dark:text-regreen-400" />
                </div>
                <CardTitle>For Community Members</CardTitle>
                <CardDescription>Resources to help community members engage with local eco-restoration</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/community-guide" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Community Participation Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/event-participation" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Event Participation Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/community-faq" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Community FAQ
                    </Link>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-regreen-600 hover:bg-regreen-700">
                  <Link to="/help/community-resources">All Community Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="byTopic" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/registration" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Registration Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/account-setup" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Account Setup Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/platform-tour" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Platform Tour
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Projects & Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/project-creation" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Creating a Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/task-management" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Task Management
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/project-monitoring" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Monitoring Progress
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payments & Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/payment-process" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Payment Process
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/eco-wallet" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Eco-Wallet Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/payment-issues" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Resolving Payment Issues
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help/app-troubleshooting" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> App Troubleshooting
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/device-compatibility" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Device Compatibility
                    </Link>
                  </li>
                  <li>
                    <Link to="/help/privacy-security" className="text-regreen-600 hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5" /> Privacy & Security
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-regreen-50 dark:bg-regreen-900/30 p-6 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-2 text-regreen-800 dark:text-regreen-100">Need Immediate Assistance?</h2>
        <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
          Our support team is available Monday through Friday, 9am-5pm. We aim to respond to all inquiries within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-regreen-600 hover:bg-regreen-700">
            <Link to="/help/contact">Contact Support</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/help/faq">Browse FAQs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Support;
