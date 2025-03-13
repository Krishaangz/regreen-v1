import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Leaf, Droplets, TreeDeciduous, HomeIcon, ShieldCheck, User2, ArrowRight, CheckCircle, HelpCircle, BarChart3, MapPin } from "lucide-react";

const Services = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const handleRequestService = (service: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Service Request Received",
        description: `Your request for ${service} has been submitted. We'll contact you soon.`,
      });
    }, 1500);
  };
  
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
            Our Services
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-regreen-800 dark:text-regreen-100">
            Eco-Restoration Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ReGreen offers comprehensive services for land restoration, waterbody renewal, and community engagement, all backed by our innovative technology platform.
          </p>
        </div>
        
        <Tabs defaultValue="landowners" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="landowners">For Landowners</TabsTrigger>
            <TabsTrigger value="workers">For Workers</TabsTrigger>
            <TabsTrigger value="community">For Communities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="landowners" className="mt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-7 w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Land Transformation</CardTitle>
                  <CardDescription>Convert unused land into productive green spaces</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Customized eco-restoration plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Native species planting and care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Sustainable landscape design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Increase property value by up to 20%</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleRequestService("Land Transformation")}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>Request Service</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Waterbody Restoration</CardTitle>
                  <CardDescription>Revitalize ponds, streams, and water features</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Water quality assessment and improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Aquatic ecosystem restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Erosion control and bank stabilization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Regular maintenance programs</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleRequestService("Waterbody Restoration")}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>Request Service</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                    <TreeDeciduous className="h-7 w-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle>Urban Green Spaces</CardTitle>
                  <CardDescription>Create community parks and gathering areas</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Community garden development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Recreational area design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Urban wildlife habitat creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Climate-resilient landscaping</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    onClick={() => handleRequestService("Urban Green Spaces")}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>Request Service</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-12 p-6 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-regreen-800 dark:text-regreen-100">How It Works for Landowners</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Register Your Property</h4>
                        <p className="text-sm text-muted-foreground">Provide details about your land or waterbody, including location, size, and current condition.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Receive Customized Proposals</h4>
                        <p className="text-sm text-muted-foreground">Our AI analyzes your property and generates tailored eco-friendly project ideas.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Approve and Fund</h4>
                        <p className="text-sm text-muted-foreground">Select your preferred proposal and make a 50% upfront payment to initiate the project.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Monitor Progress</h4>
                        <p className="text-sm text-muted-foreground">Track project execution in real-time through our interactive dashboard.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center text-regreen-800 dark:text-regreen-100 font-bold">5</div>
                      <div>
                        <h4 className="font-medium">Enjoy Your Transformed Property</h4>
                        <p className="text-sm text-muted-foreground">Release the remaining payment once you're satisfied with the completed project.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="relative h-64 md:h-auto bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Land Transformation Process" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 dark:text-gray-300">Before/After Transformation Showcase</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="workers" className="mt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Eco-Restoration Work</CardTitle>
                  <CardDescription>Join projects that restore natural ecosystems</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Planting and maintenance tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Habitat creation for local wildlife</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Soil remediation and improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Earn while making a positive impact</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link to="/register">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle>Skill Development</CardTitle>
                  <CardDescription>Gain certifications and grow your expertise</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>On-the-job training in ecological restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Certification programs in sustainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Workshops led by industry experts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>Career advancement opportunities</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                    <Link to="/register">
                      Explore Training <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mx-auto mb-4">
                    <User2 className="h-7 w-7 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle>Temporary Group Formation</CardTitle>
                  <CardDescription>Join project-specific worker groups</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>AI-matched project assignments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Collaborative team environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Daily task allocation based on skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>Performance-based bonuses</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
                    <Link to="/group-formation">
                      Browse Groups <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-10 p-8 border rounded-lg space-y-6">
              <h3 className="text-xl font-bold text-center text-regreen-800 dark:text-regreen-100">Worker Journey at ReGreen</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">1</div>
                  <h4 className="font-medium mb-2">Register & Verify</h4>
                  <p className="text-xs text-muted-foreground">Sign up, verify your identity, and enable location services</p>
                </div>
                <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">2</div>
                  <h4 className="font-medium mb-2">Join Groups</h4>
                  <p className="text-xs text-muted-foreground">Receive AI-matched group invitations for nearby projects</p>
                </div>
                <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">3</div>
                  <h4 className="font-medium mb-2">Complete Tasks</h4>
                  <p className="text-xs text-muted-foreground">Perform daily assigned tasks and submit verification photos</p>
                </div>
                <div className="p-4 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg text-center">
                  <div className="w-10 h-10 rounded-full bg-regreen-100 dark:bg-regreen-800 flex items-center justify-center mx-auto mb-3 text-regreen-800 dark:text-regreen-100 font-bold">4</div>
                  <h4 className="font-medium mb-2">Get Paid</h4>
                  <p className="text-xs text-muted-foreground">Receive payments and ratings for completed work</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="community" className="mt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mx-auto mb-4">
                    <User2 className="h-7 w-7 text-regreen-600 dark:text-regreen-400" />
                  </div>
                  <CardTitle>Community Engagement</CardTitle>
                  <CardDescription>Connect with like-minded eco-enthusiasts</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                      <span>Discussion forums on environmental topics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                      <span>Local green initiative spotlights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                      <span>Volunteer opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                      <span>Knowledge sharing and best practices</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-regreen-600 hover:bg-regreen-700">
                    <Link to="/community/forums">
                      Join Community <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-7 w-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle>Events & Workshops</CardTitle>
                  <CardDescription>Participate in eco-restoration activities</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Community tree-planting days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Environmental education workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Cleanup drives and restoration events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>Networking with environmental experts</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link to="/community/events">
                      Browse Events <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mx-auto mb-4">
                    <HomeIcon className="h-7 w-7 text-teal-600 dark:text-teal-400" />
                  </div>
                  <CardTitle>Success Stories</CardTitle>
                  <CardDescription>Explore completed transformation projects</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Before and after transformations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Community impact testimonials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Environmental improvement metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Inspiration for your own projects</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link to="/community/stories">
                      View Stories <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-10 p-6 bg-regreen-50 dark:bg-regreen-900/30 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-regreen-800 dark:text-regreen-100 text-center">
                How Communities Benefit from ReGreen
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
                      <Leaf className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Improved Environment</h4>
                      <p className="text-sm text-muted-foreground">Better air quality, reduced heat islands, increased biodiversity, and enhanced climate resilience.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
                      <User2 className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Social Cohesion</h4>
                      <p className="text-sm text-muted-foreground">Shared green spaces bring people together, fostering community connections and reducing isolation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
                      <BarChart3 className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Economic Development</h4>
                      <p className="text-sm text-muted-foreground">Green jobs, increased property values, and local business opportunities around revitalized areas.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-regreen-100 dark:bg-regreen-800/50 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-regreen-600 dark:text-regreen-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Recreational Spaces</h4>
                      <p className="text-sm text-muted-foreground">Access to natural areas for exercise, recreation, and relaxation, improving physical and mental health.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
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
              <div className="space-y-2">
                <div className="flex gap-3 items-start">
                  <HelpCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                  <h4 className="font-medium">What types of land can be transformed?</h4>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  ReGreen works with various land types including vacant lots, degraded urban spaces, underutilized institutional grounds, and residential properties. Our experts assess each space to determine the best eco-restoration approach.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-3 items-start">
                  <HelpCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                  <h4 className="font-medium">How long does a typical project take?</h4>
                </div>
                <p className="text-sm text-
