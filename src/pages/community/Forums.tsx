
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, Users, PlusCircle } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import CreateForumTopicModal from "@/components/community/CreateForumTopicModal";

const Forums = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const forumTopics = useAuthStore((state) => state.forumTopics) || [
    {
      id: 1,
      title: "Best practices for wetland restoration in drought conditions",
      category: "restoration",
      author: "Elena Martinez",
      authorId: "user123",
      date: "2023-06-15T12:00:00Z",
      content: "I'm working on a wetland restoration project in an area that's experiencing prolonged drought. Has anyone had success with specific plants or techniques that are resilient in these conditions?",
      replies: [
        {
          id: 101,
          author: "Michael Chen",
          authorId: "user456",
          date: "2023-06-15T14:30:00Z",
          content: "We've had good results with sedges and rushes that are native to your region but have wider hydrological tolerance. Look for species that can handle both saturated soils and periodic dry conditions."
        },
        {
          id: 102,
          author: "Sarah Johnson",
          authorId: "user789",
          date: "2023-06-15T16:45:00Z",
          content: "Consider installing a simple water control structure if possible. This helped us maintain minimum water levels during drought periods, which made a huge difference for establishment."
        }
      ],
      likes: 24,
      views: 156
    },
    {
      id: 2,
      title: "Funding sources for community forest restoration",
      category: "funding",
      author: "James Wilson",
      authorId: "user234",
      date: "2023-06-10T09:15:00Z",
      content: "Our neighborhood association is looking to restore a small urban forest parcel. Does anyone have recommendations for grants or funding sources that specifically support community-led projects?",
      replies: [
        {
          id: 201,
          author: "Patricia Lopez",
          authorId: "user567",
          date: "2023-06-10T11:20:00Z",
          content: "Check with your state's department of natural resources. Many have urban forestry grants specifically for community groups."
        }
      ],
      likes: 18,
      views: 97
    },
    {
      id: 3,
      title: "Managing invasive species in grassland restoration",
      category: "restoration",
      author: "David Kim",
      authorId: "user345",
      date: "2023-06-05T15:45:00Z",
      content: "We're in year two of our prairie restoration and struggling with persistent invasive species despite regular removal efforts. Any strategies that have worked for long-term control?",
      replies: [
        {
          id: 301,
          author: "Amanda Taylor",
          authorId: "user678",
          date: "2023-06-05T16:30:00Z",
          content: "We found success with a combination of targeted herbicide application followed by dense seeding of native quick-establishing species. The competition helped suppress regrowth."
        },
        {
          id: 302,
          author: "Robert Johnson",
          authorId: "user890",
          date: "2023-06-06T10:15:00Z",
          content: "Don't underestimate prescribed burning if your site and regulations allow for it. It was a game-changer for our grassland restoration."
        },
        {
          id: 303,
          author: "Lisa Chen",
          authorId: "user901",
          date: "2023-06-07T09:00:00Z",
          content: "Consider the timing of your management activities. We adjusted our mowing schedule to hit invasives when they were most vulnerable and that improved our results dramatically."
        }
      ],
      likes: 35,
      views: 210
    }
  ];

  const handleCreateTopic = () => {
    setIsCreateModalOpen(true);
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-2">Community</Badge>
        <h1 className="text-3xl font-bold">ReGreen Forums</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
          Connect with fellow restoration enthusiasts to ask questions, share knowledge, and discuss environmental restoration topics.
        </p>
      </div>
      
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search forums..." 
            className="pl-10 py-2 pr-4"
          />
        </div>
        <Button 
          className="bg-regreen-600 hover:bg-regreen-700 text-white"
          onClick={handleCreateTopic}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          New Topic
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {forumTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <Badge className="mb-2 bg-regreen-600 text-white">{topic.category}</Badge>
                      <div className="text-xs text-muted-foreground">
                        {new Date(topic.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-regreen-600 cursor-pointer transition-colors">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-1">{topic.content}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={`https://ui-avatars.com/api/?name=${topic.author}&background=random`} />
                          <AvatarFallback>{topic.author.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{topic.author}</span>
                      </div>
                      <div className="flex space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {topic.replies ? topic.replies.length : 0} replies
                        </div>
                        <div>
                          <Users className="h-4 w-4 mr-1 inline" />
                          {topic.views} views
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="popular" className="space-y-4">
              {forumTopics
                .sort((a, b) => b.likes - a.likes)
                .map((topic) => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <Badge className="mb-2 bg-regreen-600 text-white">{topic.category}</Badge>
                        <div className="text-xs text-muted-foreground">
                          {new Date(topic.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-regreen-600 cursor-pointer transition-colors">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{topic.content}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`https://ui-avatars.com/api/?name=${topic.author}&background=random`} />
                            <AvatarFallback>{topic.author.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{topic.author}</span>
                        </div>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {topic.replies ? topic.replies.length : 0} replies
                          </div>
                          <div>
                            <Users className="h-4 w-4 mr-1 inline" />
                            {topic.views} views
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="recent" className="space-y-4">
              {forumTopics
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((topic) => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <Badge className="mb-2 bg-regreen-600 text-white">{topic.category}</Badge>
                        <div className="text-xs text-muted-foreground">
                          {new Date(topic.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-regreen-600 cursor-pointer transition-colors">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{topic.content}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`https://ui-avatars.com/api/?name=${topic.author}&background=random`} />
                            <AvatarFallback>{topic.author.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{topic.author}</span>
                        </div>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {topic.replies ? topic.replies.length : 0} replies
                          </div>
                          <div>
                            <Users className="h-4 w-4 mr-1 inline" />
                            {topic.views} views
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
            
            <TabsContent value="unanswered" className="space-y-4">
              {forumTopics
                .filter(topic => !topic.replies || topic.replies.length === 0)
                .map((topic) => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <Badge className="mb-2 bg-regreen-600 text-white">{topic.category}</Badge>
                        <div className="text-xs text-muted-foreground">
                          {new Date(topic.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-regreen-600 cursor-pointer transition-colors">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{topic.content}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`https://ui-avatars.com/api/?name=${topic.author}&background=random`} />
                            <AvatarFallback>{topic.author.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{topic.author}</span>
                        </div>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            0 replies
                          </div>
                          <div>
                            <Users className="h-4 w-4 mr-1 inline" />
                            {topic.views} views
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {forumTopics.filter(topic => !topic.replies || topic.replies.length === 0).length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No unanswered topics found. Great job, community!
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Forum Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['General', 'Technical', 'Restoration', 'Wildlife', 'Funding', 'Success'].map((category) => (
                  <li key={category} className="flex items-center justify-between">
                    <span 
                      className="cursor-pointer hover:text-regreen-600 transition-colors"
                    >
                      {category}
                    </span>
                    <Badge variant="outline">{Math.floor(Math.random() * 20) + 5}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Elena Martinez', 'David Kim', 'Sarah Johnson', 'Michael Chen', 'James Wilson'].map((name, i) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${name}&background=random`} />
                        <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-xs text-muted-foreground">{['Restoration Expert', 'Ecologist', 'Landowner', 'Botanist', 'Community Leader'][i]}</div>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{30 - i * 5}+ posts</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Forum Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Be respectful and constructive</li>
                <li>• Stay on topic</li>
                <li>• No promotional content</li>
                <li>• Share scientific information when possible</li>
                <li>• Respect others' intellectual property</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View Full Guidelines
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <CreateForumTopicModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default Forums;
