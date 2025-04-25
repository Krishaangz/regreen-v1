
import React from 'react';
import { useRole } from '@/contexts/RoleContext';
import LandownerProjects from './projects/LandownerProjects';
import WorkerProjects from './projects/WorkerProjects';
import CommunityProjects from './projects/CommunityProjects';
import PublicProjects from './PublicProjects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { role } = useRole();
  
  // Only show public projects if no role is selected
  if (!role) {
    return <PublicProjects />;
  }
  
  return (
    <div className="container py-6 max-w-6xl">
      {role === 'landowner' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">All Projects</h1>
              <p className="text-muted-foreground">
                Browse all restoration projects from the community
              </p>
            </div>
            <Link to="/my-properties">
              <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">
                My Properties
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="neon-card">
              <CardHeader>
                <CardTitle>Featured Projects</CardTitle>
                <CardDescription>Community restoration highlights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="font-bold text-blue-600">WR</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Wetland Restoration</h3>
                      <p className="text-sm text-muted-foreground">By Community Alliance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="font-bold text-green-600">FR</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Forest Rehabilitation</h3>
                      <p className="text-sm text-muted-foreground">By EcoRestoration Inc</p>
                    </div>
                  </div>
                  <Button className="w-full">View All Featured</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neon-card">
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Recently added to the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="font-bold text-orange-600">GR</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Grassland Revival</h3>
                      <p className="text-sm text-muted-foreground">Added 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="font-bold text-purple-600">PS</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Pollinator Sanctuary</h3>
                      <p className="text-sm text-muted-foreground">Added 5 days ago</p>
                    </div>
                  </div>
                  <Button className="w-full">View All Recent</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neon-card">
              <CardHeader>
                <CardTitle>Near You</CardTitle>
                <CardDescription>Projects in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      <span className="font-bold text-cyan-600">RR</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">River Restoration</h3>
                      <p className="text-sm text-muted-foreground">2.3 miles away</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="font-bold text-red-600">SP</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Soil Preservation</h3>
                      <p className="text-sm text-muted-foreground">4.7 miles away</p>
                    </div>
                  </div>
                  <Button className="w-full">View Map</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <LandownerProjects />
        </div>
      )}
      
      {role === 'worker' && <WorkerProjects />}
      {role === 'community' && <CommunityProjects />}
    </div>
  );
};

export default Projects;
