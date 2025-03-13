import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { HelpCircle, Mail, HeadphonesIcon, FileText, Search, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";

const Help = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Help Center</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to your questions, get in touch with our team, and explore resources to make the most of ReGreen.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input 
            type="text" 
            placeholder="Search for help topics..." 
            className="pl-10 py-6 text-lg"
          />
          <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-regreen-600 hover:bg-regreen-700 text-white">
            Search
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-3">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>Browse our comprehensive FAQ collection covering account management, projects, services, and technical support.</p>
          </CardContent>
          <CardFooter className="pt-0 justify-center">
            <Button asChild className="group-hover:bg-blue-600 bg-blue-500 text-white mt-4">
              <Link to="/help/faq" className="flex items-center">
                View FAQ
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-3">
            <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>Reach out to us with your questions, feedback, or inquiries about our services and partnerships.</p>
          </CardContent>
          <CardFooter className="pt-0 justify-center">
            <Button asChild className="group-hover:bg-green-600 bg-green-500 text-white mt-4">
              <Link to="/help/contact" className="flex items-center">
                Contact Form
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="group hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-3">
            <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
              <HeadphonesIcon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle>Technical Support</CardTitle>
            <CardDescription>Get help with platform issues</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>Find solutions to technical problems, account access issues, or get assistance navigating the platform.</p>
          </CardContent>
          <CardFooter className="pt-0 justify-center">
            <Button asChild className="group-hover:bg-purple-600 bg-purple-500 text-white mt-4">
              <Link to="/help/support" className="flex items-center">
                Get Support
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Popular Help Topics</h2>
          <ul className="space-y-4">
            {[
              "How to register for a new account",
              "Adding your property to the platform",
              "Finding and joining restoration projects",
              "Understanding ecological assessment reports",
              "Applying for financial incentives",
              "Tracking project progress",
              "Updating your profile and preferences",
              "Mobile app features and usage"
            ].map((topic, index) => (
              <li key={index}>
                <Link to="/help/faq" className="flex items-center group">
                  <FileText className="h-4 w-4 mr-2 text-regreen-600" />
                  <span className="group-hover:text-regreen-600 transition-colors">{topic}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Support Options</h2>
          <div className="space-y-4">
            <div className="bg-background p-4 rounded-md">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="h-5 w-5 text-regreen-600" />
                <h3 className="font-medium">Live Chat</h3>
              </div>
              <p className="text-sm mb-2">Chat with our support team in real-time during business hours.</p>
              <Badge className="bg-green-500">Available Now</Badge>
              <Button className="w-full mt-3 bg-regreen-600 hover:bg-regreen-700 text-white">Start Chat</Button>
            </div>
            
            <div className="bg-background p-4 rounded-md">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-regreen-600" />
                <h3 className="font-medium">Phone Support</h3>
              </div>
              <p className="text-sm mb-2">Call our dedicated support line: Mon-Fri, 9am-5pm PST</p>
              <div className="font-medium">1-800-REGREEN (734-7336)</div>
            </div>
            
            <div className="bg-background p-4 rounded-md">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="h-5 w-5 text-regreen-600" />
                <h3 className="font-medium">Email Support</h3>
              </div>
              <p className="text-sm mb-2">Send us an email and we'll respond within 24 hours.</p>
              <div className="font-medium">support@regreen.example.com</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-regreen-50 dark:bg-regreen-900/20 rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Our support team is ready to help with any questions or issues you might have about using the ReGreen platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-regreen-600 hover:bg-regreen-700 text-white">
            <Link to="/help/contact">
              Contact Support Team
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-regreen-600 text-regreen-600">
            <Link to="/help/faq">
              Browse All FAQs
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Self-Service Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Video Tutorials",
              description: "Step-by-step guides for using platform features",
              icon: FileText,
              link: "#"
            },
            {
              title: "Knowledge Base",
              description: "In-depth articles and documentation",
              icon: FileText,
              link: "#"
            },
            {
              title: "Community Forum",
              description: "Ask questions and share solutions with other users",
              icon: MessageSquare,
              link: "/community/forums"
            },
            {
              title: "Webinars & Training",
              description: "Live and recorded training sessions",
              icon: HeadphonesIcon,
              link: "#"
            }
          ].map((resource, index) => (
            <Link to={resource.link} key={index}>
              <div className="flex items-center gap-4 p-4 border rounded-md hover:bg-muted hover:border-regreen-200 transition-colors">
                <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center">
                  <resource.icon className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
                </div>
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
