import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, PieChart } from '@/components/ui/chart/index';

const LandownerReports = () => {
  // Mock data for charts
  const ecosystemHealthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Biodiversity Index',
        data: [65, 68, 70, 72, 74, 76],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.1)',
      },
      {
        label: 'Carbon Sequestration',
        data: [40, 45, 48, 50, 53, 55],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
      },
    ],
  };

  const speciesData = {
    labels: ['Birds', 'Mammals', 'Insects', 'Plants', 'Amphibians'],
    datasets: [
      {
        data: [30, 20, 25, 15, 10],
        backgroundColor: [
          '#4ade80',
          '#3b82f6',
          '#f97316',
          '#a855f7',
          '#ec4899',
        ],
      },
    ],
  };

  return (
    <div className="container py-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Landowner Reports</h1>
      
      <Tabs defaultValue="ecosystem">
        <TabsList className="mb-4">
          <TabsTrigger value="ecosystem">Ecosystem Health</TabsTrigger>
          <TabsTrigger value="financial">Financial Impact</TabsTrigger>
          <TabsTrigger value="carbon">Carbon Credits</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ecosystem" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Ecosystem Health Trends</CardTitle>
                <CardDescription>Monthly biodiversity and carbon measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart data={ecosystemHealthData} height={300} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Species Distribution</CardTitle>
                <CardDescription>Breakdown of species recovery on your property</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart data={speciesData} height={300} />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Restoration Progress</CardTitle>
              <CardDescription>Overview of your property restoration achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Native plants established</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-regreen-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <span>Invasive species removal</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-regreen-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                
                <div className="flex justify-between mt-4">
                  <span>Soil health improvement</span>
                  <span className="font-medium">82%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-regreen-600 h-2.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle>Financial Benefits</CardTitle>
              <CardDescription>Analysis of your property's financial improvement through restoration</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Financial reporting data will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="carbon">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Credit Program</CardTitle>
              <CardDescription>Track your carbon credit generation and earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Carbon credit data will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandownerReports;
