
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

interface CreateForumTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateForumTopicModal = ({ isOpen, onClose }: CreateForumTopicModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const { toast } = useToast();
  const userProfile = useAuthStore((state) => state.userProfile);
  const addForumTopic = useAuthStore((state) => state.addForumTopic);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newTopic = {
      id: Date.now(),
      title: title,
      content: content,
      category: category,
      author: userProfile?.name || 'Anonymous User',
      authorId: userProfile?.id || 'anonymous',
      date: new Date().toISOString(),
      replies: [],
      likes: 0,
      views: 0,
    };

    addForumTopic(newTopic);

    toast({
      title: "Success",
      description: "Your forum topic has been created successfully",
      variant: "default",
    });

    // Reset form and close modal
    setTitle('');
    setContent('');
    setCategory('general');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Forum Topic</DialogTitle>
          <DialogDescription>
            Share your questions, insights, or start a discussion with the ReGreen community.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title"
              placeholder="Enter a clear, concise title for your topic"
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
                <SelectItem value="general">General Discussion</SelectItem>
                <SelectItem value="technical">Technical Questions</SelectItem>
                <SelectItem value="restoration">Restoration Tips</SelectItem>
                <SelectItem value="wildlife">Wildlife & Biodiversity</SelectItem>
                <SelectItem value="funding">Funding & Incentives</SelectItem>
                <SelectItem value="success">Success Stories</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea 
              id="content"
              placeholder="Write your post here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} className="bg-regreen-600 hover:bg-regreen-700 text-white">
            Create Topic
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateForumTopicModal;
