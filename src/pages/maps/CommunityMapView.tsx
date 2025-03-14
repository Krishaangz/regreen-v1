
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Calendar, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import BaseMapView from '@/components/maps/BaseMapView';

const CommunityMapView = () => {
  const communityProjects = [
    { 
      id: 1, 
      title: 'Oak Valley Community Forest', 
      location: 'Oak Valley', 
      distance: '2.4 miles',
      participants: 34,
      supporters: 86,
      startDate: 'Jan 15, 2023',
      status: 'Active'
    },
    { 
      id: 2, 
      title: 'Downtown Community Garden', 
      location: 'City Center', 
      distance: '1.8 miles',
      participants: 45,
      supporters: 112,
      startDate: 'Feb 5, 2023',
      status: 'Your Initiative'
    },
    { 
      id: 3, 
      title: 'Riverside Park Revival', 
      location: 'Riverside Park', 
      distance: '4.1 miles',
      participants: 0,
      supporters: 41,
      targetDate: 'Jul 1, 2023',
      status: 'Planning Phase'
    },
  ];

  return (
    <BaseMapView 
      title="Community Map" 
      description="Find local initiatives and environmental projects"
    >
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Local Initiatives</CardTitle>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Users className="mr-1 h-4 w-4" />
              Start Initiative
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {communityProjects.map((project) => (
              <div key={project.id} className="border-b pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{project.title}</div>
                    <div className="text-sm text-muted-foreground">{project.location} • {project.distance}</div>
                  </div>
                  <Badge variant="outline" className={
                    project.status === 'Active' 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : project.status === 'Your Initiative'
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  }>
                    {project.status}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm flex items-center">
                    <Users className="h-3 w-3 mr-1 text-muted-foreground" />
                    <span>{project.participants} participants</span>
                  </div>
                  <div className="text-sm flex items-center">
                    <Heart className="h-3 w-3 mr-1 text-muted-foreground" />
                    <span>{project.supporters} supporters</span>
                  </div>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="flex-1 min-w-0">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    Discuss
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 min-w-0">
                    <Calendar className="mr-1 h-3 w-3" />
                    Events
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </BaseMapView>
  );
};

export default CommunityMapView;
