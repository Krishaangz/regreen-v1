
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import CreateStoryModal from "@/components/community/CreateStoryModal";
import { useToast } from "@/hooks/use-toast";

const Stories = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { toast } = useToast();
  
  // Get stories from store or use default stories
  const successStories = useAuthStore((state) => state.stories) || [
    {
      id: 1,
      title: "From Barren Land to Thriving Ecosystem",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg",
        location: "Oregon",
      },
      category: "Land Restoration",
      date: "May 15, 2023",
      image: "/placeholder.svg",
      likes: 342,
      comments: 28,
      shares: 56,
      content: "What started as a 50-acre plot of eroded farmland has transformed into a diverse habitat with native trees, wildflowers, and the return of local wildlife. Working with ReGreen changed how I view land stewardship.",
    },
    {
      id: 2,
      title: "Community Creek Cleanup Success",
      author: {
        name: "Miguel Fernandez",
        avatar: "/placeholder.svg",
        location: "New Mexico",
      },
      category: "Water Systems",
      date: "July 8, 2023",
      image: "/placeholder.svg",
      likes: 287,
      comments: 42,
      shares: 31,
      content: "Our neighborhood organized a series of creek cleanups through ReGreen that removed over 2 tons of debris and restored natural water flow. Now we're seeing fish species return that haven't been spotted in decades!",
    },
    {
      id: 3,
      title: "Urban Green Space Revival",
      author: {
        name: "Aisha Williams",
        avatar: "/placeholder.svg",
        location: "Michigan",
      },
      category: "Urban Greening",
      date: "September 22, 2023",
      image: "/placeholder.svg",
      likes: 421,
      comments: 53,
      shares: 87,
      content: "Converting an abandoned lot into a community garden brought our neighborhood together and created a beautiful green space in our urban environment. The project has inspired similar initiatives throughout the city.",
    },
    {
      id: 4,
      title: "Soil Health Regeneration Project",
      author: {
        name: "James Cooper",
        avatar: "/placeholder.svg",
        location: "Iowa",
      },
      category: "Regenerative Agriculture",
      date: "November 5, 2023",
      image: "/placeholder.svg",
      likes: 189,
      comments: 24,
      shares: 18,
      content: "Implementing regenerative practices on my 300-acre farm has increased yields while reducing input costs. Three years in, and soil tests show dramatic improvements in organic matter and microbial activity.",
    }
  ];

  const handleLike = (storyId: number) => {
    toast({
      title: "Story Liked",
      description: "You have liked this success story",
      variant: "default",
    });
  };

  const handleComment = (storyId: number) => {
    toast({
      title: "Comments",
      description: "Comment feature will be available soon",
      variant: "default",
    });
  };

  const handleShare = (storyId: number) => {
    toast({
      title: "Story Shared",
      description: "This success story has been shared",
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="flex flex-col space-y-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Success Stories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who are making a difference in their communities and ecosystems through ReGreen's programs and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story) => (
            <Card key={story.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 right-2 bg-regreen-600">{story.category}</Badge>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={story.author.avatar} alt={story.author.name} />
                      <AvatarFallback>{story.author.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{story.author.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {story.author.location}
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-regreen-600 transition-colors cursor-pointer">
                  {story.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm">{story.content}</p>
              </CardContent>
              
              <CardFooter className="border-t pt-4 flex flex-col gap-4">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {story.date}
                </div>
                
                <div className="flex justify-between w-full">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => handleLike(story.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{story.likes}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => handleComment(story.id)}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{story.comments}</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => handleShare(story.id)}
                  >
                    <Share2 className="h-4 w-4" />
                    <span>{story.shares}</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            className="bg-regreen-600 hover:bg-regreen-700 text-white"
            onClick={() => setIsCreateModalOpen(true)}
          >
            Share Your Success Story
          </Button>
        </div>
      </div>

      <CreateStoryModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default Stories;
