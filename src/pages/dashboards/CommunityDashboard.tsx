
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import StatsOverview from '@/components/dashboard/community/StatsOverview';
import EnvironmentalImpactCard from '@/components/dashboard/community/EnvironmentalImpactCard';
import UpcomingEventsCard from '@/components/dashboard/community/UpcomingEventsCard';
import LocalProjectsCard from '@/components/dashboard/community/LocalProjectsCard';
import ForumDiscussionsCard from '@/components/dashboard/community/ForumDiscussionsCard';

const CommunityDashboard = () => {
  // Sample data for community members
  const localProjects = [
    { id: 1, name: 'Oak Valley Community Forest', location: 'Oak Valley', distance: '2.4 miles', supporters: 86, participants: 34 },
    { id: 2, name: 'Downtown Community Garden', location: 'City Center', distance: '1.8 miles', supporters: 112, participants: 45 },
  ];

  const impactData = [
    { name: 'Jan', trees: 120, carbon: 300 },
    { name: 'Feb', trees: 150, carbon: 400 },
    { name: 'Mar', trees: 200, carbon: 450 },
    { name: 'Apr', trees: 180, carbon: 420 },
    { name: 'May', trees: 250, carbon: 500 },
    { name: 'Jun', trees: 280, carbon: 550 },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Community Planting Day', date: 'May 20, 2023', location: 'Oak Valley', participants: 24 },
    { id: 2, title: 'Environmental Workshop', date: 'May 27, 2023', location: 'Community Center', participants: 15 },
    { id: 3, title: 'Garden Maintenance', date: 'June 3, 2023', location: 'Downtown Garden', participants: 8 },
  ];

  const forumTopics = [
    { id: 1, title: 'Best native plants for pollinators?', author: 'Amy W.', replies: 12, lastActivity: '2h ago' },
    { id: 2, title: 'Organizing volunteer teams effectively', author: 'Michael D.', replies: 8, lastActivity: '5h ago' },
    { id: 3, title: 'Water conservation techniques', author: 'Sarah L.', replies: 15, lastActivity: '1d ago' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold">Community Dashboard</h1>
          <p className="text-muted-foreground">Connect with local initiatives and track community impact</p>
        </div>
        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
          <Users className="mr-2 h-4 w-4" />
          Join Initiative
        </Button>
      </div>

      <StatsOverview />

      <div className="grid gap-6 md:grid-cols-2">
        <EnvironmentalImpactCard data={impactData} />
        <UpcomingEventsCard events={upcomingEvents} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LocalProjectsCard projects={localProjects} />
        <ForumDiscussionsCard topics={forumTopics} />
      </div>
    </div>
  );
};

export default CommunityDashboard;
