
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Leaf, Droplets, Calendar, Clock, ArrowUp, MessageCircle, Eye, Pin } from "lucide-react";

const Forums = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const forumTopics = [
    {
      id: 1,
      title: "Urban Garden Design Ideas",
      author: "GreenThumb",
      category: "Land Restoration",
      replies: 28,
      views: 342,
      lastActivity: "2 hours ago",
      isPinned: true,
      tags: ["Urban Gardens", "Design", "Community"]
    },
    {
      id: 2,
      title: "Best Native Plants for Water Filtration",
      author: "WaterWizard",
      category: "Waterbody Restoration",
      replies: 15,
      views: 187,
      lastActivity: "6 hours ago",
      isPinned: true,
      tags: ["Aquatic Plants", "Water Quality", "Native Species"]
    },
    {
      id: 3,
      title: "How to Encourage Local Wildlife in Your Restoration Project",
      author: "BioDiversifier",
      category: "Biodiversity",
      replies: 32,
      views: 276,
      lastActivity: "1 day ago",
      isPinned: false,
      tags: ["Wildlife", "Habitat", "Ecosystem"]
    },
    {
      id: 4,
      title: "Tips for Soil Remediation in Former Industrial Areas",
      author: "SoilScientist",
      category: "Land Restoration",
      replies: 24,
      views: 198,
      lastActivity: "2 days ago",
      isPinned: false,
      tags: ["Soil Health", "Remediation", "Urban Renewal"]
    },
    {
      id: 5,
      title: "Community Engagement Strategies for Eco-Restoration",
      author: "CommunityBuilder",
      category: "Engagement",
      replies: 45,
      views: 412,
      lastActivity: "3 days ago",
      isPinned: false,
      tags: ["Community", "Outreach", "Volunteers"]
    },
    {
      id: 6,
      title: "Rainwater Harvesting Systems for Small Urban Spaces",
      author: "RainCollector",
      category: "Water Management",
      replies: 19,
      views: 231,
      lastActivity: "4 days ago",
      isPinned: false,
      tags: ["Rainwater", "Urban", "Conservation"]
    },
    {
      id: 7,
      title: "Success Stories: Before/After Transformation Projects",
      author: "TransformationPro",
      category: "Success Stories",
      replies: 53,
      views: 621,
      lastActivity: "5 days ago",
      isPinned: false,
      tags: ["Success", "Transformation", "Inspiration"]
    },
    {
      id: 8,
      title: "Overcoming Challenges in Stream Restoration",
      author: "StreamRestorer",
      category: "Waterbody Restoration",
      replies: 31,
      views: 289,
      lastActivity: "1 week ago",
      isPinned: false,
      tags: ["Streams", "Erosion Control", "Aquatic Habitat"]
    }
  ];
  
  const categories = [
    { name: "Land Restoration", icon: <Leaf className="h-4 w-4" />, count: 156 },
    { name: "Waterbody Restoration", icon: <Droplets className="h-4 w-4" />, count: 123 },
    { name: "Community Engagement", icon: <Users className="h-4 w-4" />, count: 98 },
    { name: "Success Stories", icon: <MessageSquare className="h-4 w-4" />, count: 87 },
    { name: "Events & Workshops", icon: <Calendar className="h-4 w-4" />, count: 64 },
    { name: "Worker Resources", icon: <Briefcase className="h-4 w-4" />, count: 52 }
  ];
  
  const topContributors = [
    { username: "GreenThumb", posts: 142, joined: "1 year ago" },
    { username: "EcoInnovator", posts: 128, joined: "10 months ago" },
    { username: "WaterWizard", posts: 115, joined: "1 year ago" },
    { username: "EarthDefender", posts: 97, joined: "8 months ago" },
    { username: "BioDiversifier", posts: 86, joined: "6 months ago" }
  ];
  
  const filteredTopics = forumTopics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="text-center mb-8">
        <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
          Community
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 text-regreen-800 dark:text-regreen-100">
          ReGreen Forums
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Connect with the ReGreen community to share ideas, ask questions, and learn from others' experiences in eco-restoration.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search topics, categories, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                icon={<Search className="h-4 w-4 text-muted-foreground" />}
              />
            </div>
            <Button className="bg-regreen-600 hover:bg-regreen-700">Create New Topic</Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full mb-6">
            <TabsList>
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {filteredTopics.map((topic) => (
                      <div key={topic.id} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900/10 transition-colors">
                        <div className="flex items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {topic.isPinned && (
                                <Badge variant="outline" className="text-regreen-600 bg-regreen-50 dark:bg-regreen-950 dark:text-regreen-400 text-xs px-1 py-0 h-5">
                                  <Pin className="h-3 w-3 mr-1" />
                                  Pinned
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs px-1.5 py-0 h-5">
                                {topic.category}
                              </Badge>
                            </div>
                            <Link to={`/community/forums/topic/${topic.id}`} className="font-medium text-lg hover:text-regreen-600 transition-colors">
                              {topic.title}
                            </Link>
                            <div className="text-sm text-muted-foreground mt-1">
                              Started by <span className="font-medium text-regreen-600">{topic.author}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {topic.tags.map((tag, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs font-normal">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="hidden sm:flex flex-col items-end text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center">
                              <MessageCircle className="h-3.5 w-3.5 mr-1" />
                              {topic.replies} replies
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-3.5 w-3.5 mr-1" />
                              {topic.views} views
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              {topic.lastActivity}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center px-4 py-3 border-t">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredTopics.length} of {forumTopics.length} topics
                  </div>
                  <Button variant="outline" size="sm">
                    Load More
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="popular" className="mt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-muted-foreground">Popular topics shown here based on views and engagement.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-muted-foreground">Most recently active topics shown here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="unanswered" className="mt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-muted-foreground">Topics with no replies shown here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {categories.map((category, idx) => (
                  <Link 
                    key={idx} 
                    to={`/community/forums/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-900/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-regreen-600">
                        {category.icon}
                      </div>
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {topContributors.map((contributor, idx) => (
                  <div key={idx} className="px-4 py-2.5 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{contributor.username}</div>
                      <div className="text-xs text-muted-foreground">Joined {contributor.joined}</div>
                    </div>
                    <Badge variant="outline">{contributor.posts} posts</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t px-4 py-3">
              <Button variant="ghost" size="sm" className="w-full text-xs">View All Contributors</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Forum Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-sm">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowUp className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                  <span>Be respectful to all community members</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUp className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                  <span>Share knowledge and personal experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUp className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                  <span>Stay on topic and use appropriate categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUp className="h-4 w-4 text-regreen-600 flex-shrink-0 mt-0.5" />
                  <span>Use the search before posting a new topic</span>
                </li>
              </ul>
              
              <Button variant="link" className="p-0 h-auto text-xs text-regreen-600 mt-2">
                Read Full Guidelines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Forums;
