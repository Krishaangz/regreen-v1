
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, PieChart } from '@/components/ui/chart/index';

const LandownerReports = () => {
  // Mock data transformed for LineChart component
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const lineChartData = months.map((month, index) => ({
    month: month,
    'Biodiversity Index': [65, 68, 70, 72, 74, 76][index],
    'Carbon Sequestration': [40, 45, 48, 50, 53, 55][index],
  }));

  // Mock data transformed for PieChart component
  const pieChartData = [
    { name: 'Birds', value: 30 },
    { name: 'Mammals', value: 20 },
    { name: 'Insects', value: 25 },
    { name: 'Plants', value: 15 },
    { name: 'Amphibians', value: 10 },
  ];

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
                <LineChart 
                  data={lineChartData}
                  index="month"
                  categories={['Biodiversity Index', 'Carbon Sequestration']}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Species Distribution</CardTitle>
                <CardDescription>Breakdown of species recovery on your property</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart 
                  data={pieChartData}
                  className="h-[300px]"
                />
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
