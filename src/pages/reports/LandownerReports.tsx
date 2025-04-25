import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, PieChart } from '@/components/ui/chart/index';
import { ArrowUpRight, ArrowDownRight, DollarSign, TreePine, Leaf } from 'lucide-react';

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

  // Financial impact data
  const financialData = [
    { month: 'Jan', revenue: 2500, costs: 1200, profit: 1300 },
    { month: 'Feb', revenue: 2800, costs: 1300, profit: 1500 },
    { month: 'Mar', revenue: 3200, costs: 1400, profit: 1800 },
    { month: 'Apr', revenue: 3500, costs: 1500, profit: 2000 },
    { month: 'May', revenue: 3800, costs: 1600, profit: 2200 },
    { month: 'Jun', revenue: 4200, costs: 1700, profit: 2500 }
  ];

  // Carbon credits data
  const carbonData = [
    { month: 'Jan', credits: 15, value: 450 },
    { month: 'Feb', credits: 18, value: 540 },
    { month: 'Mar', credits: 22, value: 660 },
    { month: 'Apr', credits: 25, value: 750 },
    { month: 'May', credits: 28, value: 840 },
    { month: 'Jun', credits: 32, value: 960 }
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$20,000</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                <ArrowDownRight className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$8,700</div>
                <p className="text-xs text-muted-foreground">
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$11,300</div>
                <p className="text-xs text-muted-foreground">
                  +25.2% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Monthly revenue, costs, and profit</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={financialData}
                index="month"
                categories={['revenue', 'costs', 'profit']}
                colors={['#4ade80', '#f87171', '#60a5fa']}
                className="h-[300px]"
              />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="carbon">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
                <TreePine className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">140</div>
                <p className="text-xs text-muted-foreground">
                  +14.3% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Credit Value</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,200</div>
                <p className="text-xs text-muted-foreground">
                  +15.8% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CO₂ Offset</CardTitle>
                <TreePine className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">280 tons</div>
                <p className="text-xs text-muted-foreground">
                  Total CO₂ offset this year
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Carbon Credits</CardTitle>
              <CardDescription>Monthly carbon credits and value</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                data={carbonData}
                index="month"
                categories={['credits', 'value']}
                colors={['#22c55e', '#3b82f6']}
                className="h-[300px]"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandownerReports;
