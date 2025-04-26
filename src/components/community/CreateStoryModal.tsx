import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuthStore } from '@/stores/authStore';

interface CreateStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateStoryModal = ({ isOpen, onClose }: CreateStoryModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Land Restoration');
  const { toast } = useToast();
  const userProfile = useAuthStore((state) => state.userProfile);
  const addStory = useAuthStore((state) => state.addStory);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newStory = {
      id: Date.now(),
      title: title,
      content: content,
      category: category,
      author: {
        name: userProfile?.name || 'Anonymous User',
        avatar: userProfile?.avatar || '/placeholder.svg',
        location: userProfile?.location || 'Unknown Location',
      },
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      image: '/placeholder.svg',
      likes: 0,
      comments: 0,
      shares: 0
    };

    addStory(newStory);

    toast({
      title: "Success",
      description: "Your success story has been shared with the community",
      variant: "default",
    });

    // Reset form and close modal
    setTitle('');
    setContent('');
    setCategory('Land Restoration');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Share Your Success Story</DialogTitle>
          <DialogDescription>
            Inspire others by sharing your restoration journey and achievements.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title"
              placeholder="Give your success story a catchy title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Land Restoration">Land Restoration</SelectItem>
                <SelectItem value="Water Systems">Water Systems</SelectItem>
                <SelectItem value="Urban Greening">Urban Greening</SelectItem>
                <SelectItem value="Regenerative Agriculture">Regenerative Agriculture</SelectItem>
                <SelectItem value="Wildlife Conservation">Wildlife Conservation</SelectItem>
                <SelectItem value="Community Project">Community Project</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="content">Your Story</Label>
            <Textarea 
              id="content"
              placeholder="Share your restoration journey, challenges, solutions, and successes..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
          
          {/* We'd typically have image upload here but keeping it simple for now */}
          <p className="text-sm text-muted-foreground">
            Note: A default placeholder image will be used for your story. 
            Image upload functionality will be available soon.
          </p>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-regreen-600 hover:bg-regreen-700 text-white">
            Share Story
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateStoryModal;
