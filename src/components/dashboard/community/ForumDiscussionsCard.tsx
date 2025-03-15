
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare } from 'lucide-react';

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
}

interface ForumDiscussionsCardProps {
  topics: ForumTopic[];
}

const ForumDiscussionsCard = ({ topics }: ForumDiscussionsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forum Discussions</CardTitle>
        <CardDescription>Recent topics from the community forum</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.id} className="border-b pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between">
                <h3 className="font-semibold">{topic.title}</h3>
                <span className="text-xs text-muted-foreground">{topic.lastActivity}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${topic.author}&background=random`} />
                    <AvatarFallback>{topic.author.split(' ')[0][0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{topic.author}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  {topic.replies} replies
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            <MessageSquare className="mr-2 h-4 w-4" />
            View All Discussions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumDiscussionsCard;
