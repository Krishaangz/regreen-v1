
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, HelpCircle, Leaf, MessageSquare, ArrowRight, BookOpen } from "lucide-react";

const Support = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
          Help Center
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-regreen-800 dark:text-regreen-100">
          ReGreen Support Center
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Your complete resource for help, guidance, and troubleshooting with the ReGreen platform.
        </p>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="guides">Guides & Tutorials</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="guides" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-center">Getting Started</CardTitle>
                <CardDescription className="text-center">Essential guides for new users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Platform Overview</h4>
                  <p className="text-xs text-muted-foreground">A comprehensive tour of the ReGreen app</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Account Setup Guide</h4>
                  <p className="text-xs text-muted-foreground">How to create and verify your account</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Role Selection</h4>
                  <p className="text-xs text-muted-foreground">Choosing between Worker, Landowner, and Community roles</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Navigation Tutorial</h4>
                  <p className="text-xs text-muted-foreground">Understanding the dashboard and hamburger menu</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Getting Started Guides
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-center">For Workers</CardTitle>
                <CardDescription className="text-center">Resources for eco-restoration workers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Task Management</h4>
                  <p className="text-xs text-muted-foreground">How to view, accept, and complete assigned tasks</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Group Formation</h4>
                  <p className="text-xs text-muted-foreground">Understanding the temporary group system</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Photo Verification</h4>
                  <p className="text-xs text-muted-foreground">Guidelines for proper task documentation</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Payment & Eco-Wallet</h4>
                  <p className="text-xs text-muted-foreground">Managing earnings and transfers</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Worker Guides
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-3">
                  <Home className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-center">For Landowners</CardTitle>
                <CardDescription className="text-center">Guides for property transformation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Property Registration</h4>
                  <p className="text-xs text-muted-foreground">How to add and describe your property</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Project Proposals</h4>
                  <p className="text-xs text-muted-foreground">Understanding and selecting AI-generated proposals</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Progress Monitoring</h4>
                  <p className="text-xs text-muted-foreground">Tracking your project's status in real-time</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Final Verification</h4>
                  <p className="text-xs text-muted-foreground">Completing the project and releasing payment</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Landowner Guides
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-center">Community Resources</CardTitle>
                <CardDescription className="text-center">Guides for community engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Forum Participation</h4>
                  <p className="text-xs text-muted-foreground">How to engage in community discussions</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Event Management</h4>
                  <p className="text-xs text-muted-foreground">Finding and registering for local events</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Success Stories</h4>
                  <p className="text-xs text-muted-foreground">Sharing and browsing transformation projects</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Volunteer Opportunities</h4>
                  <p className="text-xs text-muted-foreground">Getting involved without formal registration</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Community Guides
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle className="text-center">Video Tutorials</CardTitle>
                <CardDescription className="text-center">Visual step-by-step guides</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">App Navigation</h4>
                  <p className="text-xs text-muted-foreground">Visual tour of the ReGreen mobile and web interfaces</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Task Completion Guide</h4>
                  <p className="text-xs text-muted-foreground">Visual walkthrough of the worker process</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Property Transformation</h4>
                  <p className="text-xs text-muted-foreground">Visualizing the landowner experience</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Eco-Wallet Tutorial</h4>
                  <p className="text-xs text-muted-foreground">Managing finances on ReGreen</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Browse Video Library
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-center">Interactive Training</CardTitle>
                <CardDescription className="text-center">Hands-on learning resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Practice Tasks</h4>
                  <p className="text-xs text-muted-foreground">Simulated tasks for workers to practice with</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Demo Projects</h4>
                  <p className="text-xs text-muted-foreground">Sample projects for landowners to explore</p>
                </div>
                <div className="space-y-1 border-b pb-2">
                  <h4 className="font-medium">Virtual Workshops</h4>
                  <p className="text-xs text-muted-foreground">Scheduled online training sessions</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Skills Assessment</h4>
                  <p className="text-xs text-muted-foreground">Test your knowledge of eco-restoration</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Start Interactive Training
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="troubleshooting" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Common Issues & Solutions</CardTitle>
              <CardDescription>
                Find quick fixes for frequently encountered problems on the ReGreen platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Account & Login Issues</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-sm mb-1">Forgotten Password</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If you can't remember your password, use the "Forgot Password" link on the login screen. You'll receive an email with instructions to reset your password.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        Reset Password Guide
                      </Button>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-sm mb-1">Account Verification Failed</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If your account verification has failed, ensure your ID documents are clear, all corners are visible, and the text is readable. You can attempt verification again from your profile settings.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        ID Verification Tips
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">Two-Factor Authentication Issues</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If you're not receiving 2FA codes or have lost access to your authentication device, you can use the recovery codes provided when you set up 2FA. If you don't have these, contact support.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        2FA Troubleshooting
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-lg mb-2">App Functionality Problems</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-sm mb-1">GPS Location Errors</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If the app cannot detect your location or shows inaccurate positions, check that location services are enabled for the ReGreen app in your device settings and ensure you have a strong signal.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        GPS Troubleshooting
                      </Button>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-sm mb-1">Photo Upload Failing</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If you're unable to upload photos for task verification, check your internet connection, ensure you have sufficient storage space, and verify that the app has permission to access your camera and photos.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        Photo Upload Guide
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">App Crashes or Freezes</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If the app freezes or crashes frequently, try clearing the app cache, ensuring you have the latest version installed, and restarting your device.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        App Performance Tips
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Payment & Wallet Issues</h3>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-sm mb-1">Payment Not Received</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If you completed a task but haven't received payment, check that your task verification was approved. Payments typically process within 24-48 hours of verification.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        Payment Processing Guide
                      </Button>
                    </div>
                    
                    <div className="border-b pb-3">
                      <h4 className="font-medium text-sm mb-1">Unable to Withdraw Funds</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        If you're having trouble withdrawing funds from your Eco-Wallet, verify that your bank account details are correct and that you've completed any required verification steps.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        Withdrawal Troubleshooting
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">Transaction Errors</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        For transaction errors, check your internet connection, ensure you have sufficient funds, and verify that your payment method is not expired or blocked.
                      </p>
                      <Button variant="link" className="h-auto p-0 text-regreen-600">
                        Transaction Error Solutions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild className="bg-regreen-600 hover:bg-regreen-700">
                <Link to="/help/contact">
                  Still Need Help? Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-regreen-600" />
                  Documentation
                </CardTitle>
                <CardDescription>Comprehensive guides and technical documentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-2">User Manuals</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Worker Manual</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Landowner Guide</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Community Handbook</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Admin Documentation</Button>
                  </div>
                </div>
                
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-2">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">System Requirements</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">API Documentation</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Data Security</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Integration Guide</Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Templates & Forms</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Project Proposal Template</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Task Verification Form</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Property Assessment</Button>
                    <Button variant="outline" size="sm" className="justify-start h-8 text-xs">Support Request Form</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-regreen-600 hover:bg-regreen-700">
                  Browse All Documentation
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-regreen-600" />
                  Educational Resources
                </CardTitle>
                <CardDescription>Learning materials on eco-restoration and sustainability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-2">Eco-Restoration Fundamentals</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Introduction to Eco-Restoration</span>
                      <Badge variant="outline" className="text-xs">Beginner</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Native Plant Selection Guide</span>
                      <Badge variant="outline" className="text-xs">Intermediate</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Soil Remediation Techniques</span>
                      <Badge variant="outline" className="text-xs">Advanced</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-2">Waterbody Restoration</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Water Quality Assessment</span>
                      <Badge variant="outline" className="text-xs">Beginner</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Aquatic Plant Management</span>
                      <Badge variant="outline" className="text-xs">Intermediate</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Wetland Reconstruction</span>
                      <Badge variant="outline" className="text-xs">Advanced</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Professional Development</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Environmental Certification Prep</span>
                      <Badge variant="outline" className="text-green-600 bg-green-50">Certificate</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Project Management for Eco-Restoration</span>
                      <Badge variant="outline" className="text-green-600 bg-green-50">Certificate</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sustainable Landscaping Design</span>
                      <Badge variant="outline" className="text-green-600 bg-green-50">Certificate</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-regreen-600 hover:bg-regreen-700">
                  Explore Learning Resources
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8 p-6 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
            <HelpCircle className="h-8 w-8 text-regreen-600 mx-auto mb-3" />
            <h2 className="text-xl font-bold mb-2">Need More Assistance?</h2>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              Our support team is ready to help with any questions or issues you might encounter while using the ReGreen platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-regreen-600 hover:bg-regreen-700">
                <Link to="/help/faq">
                  Browse FAQs
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/help/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;
