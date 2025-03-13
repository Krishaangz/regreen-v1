
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, LineChart, Globe, Award, CheckCircle, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
            About ReGreen
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-regreen-800 dark:text-regreen-100">
            Transforming Eco-Anxiety Into Action
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ReGreen connects landowners, workers, and communities to convert underutilized spaces into thriving, sustainable environments.
          </p>
        </div>
        
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-regreen-800 dark:text-regreen-100">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  ReGreen is on a mission to address eco-anxiety by creating tangible opportunities for environmental restoration. 
                  We believe that by connecting people with the resources, skills, and opportunities to make a difference, 
                  we can transform concern into positive action.
                </p>
                <p className="text-muted-foreground">
                  Through our innovative platform, we create a win-win ecosystem where landowners can monetize their 
                  unused properties, workers can find meaningful employment, and communities can enjoy 
                  revitalized green spaces.
                </p>
              </div>
              <div className="bg-regreen-50 dark:bg-regreen-900/30 rounded-lg p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-regreen-100 dark:bg-regreen-800/50 p-3 rounded-full">
                      <Leaf className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Environmental Impact</h3>
                      <p className="text-sm text-muted-foreground">Restore biodiversity, improve air quality, and combat climate change.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-regreen-100 dark:bg-regreen-800/50 p-3 rounded-full">
                      <Users className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Community Building</h3>
                      <p className="text-sm text-muted-foreground">Create shared green spaces that foster social connections and well-being.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-regreen-100 dark:bg-regreen-800/50 p-3 rounded-full">
                      <LineChart className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Economic Growth</h3>
                      <p className="text-sm text-muted-foreground">Generate sustainable jobs and increase property values in local communities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="story">Our Story</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="impact">Our Impact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="story" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>The ReGreen Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  ReGreen began with a simple question: "How can we turn environmental concern into meaningful action?" 
                  Founded in 2021 by a diverse group of environmentalists, tech developers, and community organizers, 
                  our platform was born from the recognition that many people want to contribute to environmental 
                  solutions but don't know where to start.
                </p>
                <p>
                  We identified three key challenges: landowners with underutilized properties, people seeking 
                  meaningful employment in the green sector, and communities in need of accessible green spaces. 
                  By connecting these groups through our platform, we've created a sustainable ecosystem that 
                  benefits all parties while making a positive environmental impact.
                </p>
                <p>
                  Today, ReGreen operates in multiple regions, helping transform abandoned lots, polluted 
                  waterbodies, and underutilized land into thriving community gardens, parks, and 
                  eco-friendly recreational spaces.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { name: "Alex Morgan", role: "Founder & CEO", bio: "Environmental activist with 15+ years of experience in conservation.", avatar: "/placeholder.svg" },
                    { name: "Samira Khan", role: "CTO", bio: "Tech innovator focused on using AI for environmental solutions.", avatar: "/placeholder.svg" },
                    { name: "Carlos Rodriguez", role: "Head of Operations", bio: "Expert in sustainable project management and community engagement.", avatar: "/placeholder.svg" },
                    { name: "Michelle Lee", role: "Chief Ecology Officer", bio: "Botanist specializing in urban green space development.", avatar: "/placeholder.svg" },
                    { name: "David Okafor", role: "Community Relations", bio: "Experienced in fostering partnerships between diverse stakeholders.", avatar: "/placeholder.svg" },
                    { name: "Jia Zhang", role: "Financial Director", bio: "Specializes in sustainable business models and green investment.", avatar: "/placeholder.svg" }
                  ].map((member, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold">{member.name}</h3>
                        <p className="text-sm text-regreen-600 dark:text-regreen-400 mb-2">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="impact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Globe className="h-5 w-5 text-regreen-600" /> Environmental Restoration
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Converted over 500 acres of unused land into thriving green spaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Planted more than 50,000 native trees and plants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Restored 15 polluted waterbodies to healthy conditions</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Users className="h-5 w-5 text-regreen-600" /> Community Impact
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Created access to green spaces for over 200,000 people</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Established 75 community gardens providing fresh produce</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Hosted 300+ environmental education workshops</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <Award className="h-5 w-5 text-regreen-600" /> Recognition
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Environmental Innovation Award 2022</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Community Impact Excellence Award 2023</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Top 10 Green Startups of the Year</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-regreen-600" /> Economic Benefits
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Created over 2,000 green jobs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Generated $5M in additional property value</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-regreen-600 flex-shrink-0 mt-0.5" />
                          <span>Reduced maintenance costs by 30% for participating properties</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-regreen-800 dark:text-regreen-100">
            Join the ReGreen Movement
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-regreen-600 hover:bg-regreen-700 text-white px-8">
              <Link to="/register">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-regreen-600 text-regreen-600 hover:bg-regreen-50 dark:border-regreen-400 dark:text-regreen-400 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
