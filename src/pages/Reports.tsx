
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { DownloadCloud, Filter, Share2 } from "lucide-react";

const Reports = () => {
  const [reportType, setReportType] = useState("environmental");
  const [timeRange, setTimeRange] = useState("month");
  
  // Sample environmental impact data
  const environmentalData = [
    { name: 'Jan', trees: 65, co2: 40, water: 24 },
    { name: 'Feb', trees: 78, co2: 52, water: 30 },
    { name: 'Mar', trees: 91, co2: 67, water: 36 },
    { name: 'Apr', trees: 120, co2: 85, water: 40 },
    { name: 'May', trees: 105, co2: 72, water: 45 },
    { name: 'Jun', trees: 145, co2: 102, water: 58 },
  ];
  
  // Sample economic impact data
  const economicData = [
    { name: 'Jan', revenue: 2400, jobs: 15 },
    { name: 'Feb', revenue: 3100, jobs: 23 },
    { name: 'Mar', revenue: 2900, jobs: 18 },
    { name: 'Apr', revenue: 4300, jobs: 27 },
    { name: 'May', revenue: 3800, jobs: 24 },
    { name: 'Jun', revenue: 5200, jobs: 36 },
  ];
  
  // Sample project completion data
  const projectData = [
    { name: 'In Progress', value: 12 },
    { name: 'Completed', value: 45 },
    { name: 'Pending', value: 8 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  
  // Summary cards data
  const summaryCards = [
    {
      title: "Total Projects",
      value: "65",
      change: "+12% from last month",
      positive: true
    },
    {
      title: "Trees Planted",
      value: "1,245",
      change: "+28% from last month",
      positive: true
    },
    {
      title: "CO₂ Reduction",
      value: "418 tons",
      change: "+15% from last year",
      positive: true
    },
    {
      title: "Jobs Created",
      value: "143",
      change: "+8% from last month",
      positive: true
    }
  ];
  
  const handleReportTypeChange = (value: string) => {
    setReportType(value);
  };
  
  const handleTimeRangeChange = (value: string) => {
    setTimeRange(value);
  };
  
  const handleExportReport = () => {
    // In a real app, this would generate and download a PDF or CSV report
    alert("Report export functionality would be implemented here");
  };
  
  const handleShareReport = () => {
    // In a real app, this would open a share dialog
    alert("Report sharing functionality would be implemented here");
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-regreen-800 dark:text-regreen-100">Reports</h1>
          <p className="text-muted-foreground">View and analyze the impact of ReGreen projects</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleExportReport} className="flex items-center gap-2">
            <DownloadCloud size={16} />
            <span>Export</span>
          </Button>
          <Button variant="outline" onClick={handleShareReport} className="flex items-center gap-2">
            <Share2 size={16} />
            <span>Share</span>
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card, index) => (
          <Card key={index} className="border-regreen-100 dark:border-regreen-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className={`text-xs ${card.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {card.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-regreen-100 dark:border-regreen-800">
        <CardHeader className="pb-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle>Impact Analysis</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Report Type:</span>
                <Select value={reportType} onValueChange={handleReportTypeChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="environmental">Environmental</SelectItem>
                    <SelectItem value="economic">Economic</SelectItem>
                    <SelectItem value="projects">Projects</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Time Range:</span>
                <Select value={timeRange} onValueChange={handleTimeRangeChange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="chart" className="space-y-4">
            <TabsList>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chart" className="space-y-4">
              <div className="h-[300px] sm:h-[400px]">
                {reportType === "environmental" ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={environmentalData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="trees" name="Trees Planted" fill="#4CAF50" />
                      <Bar dataKey="co2" name="CO₂ Reduced (tons)" fill="#2196F3" />
                      <Bar dataKey="water" name="Water Conserved (kL)" fill="#03A9F4" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : reportType === "economic" ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={economicData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line yAxisId="left" type="monotone" dataKey="revenue" name="Revenue ($)" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line yAxisId="right" type="monotone" dataKey="jobs" name="Jobs Created" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {projectData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="details">
              <div className="border rounded-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Period</th>
                      {reportType === "environmental" ? (
                        <>
                          <th className="text-left p-3 font-medium">Trees Planted</th>
                          <th className="text-left p-3 font-medium">CO₂ Reduced (tons)</th>
                          <th className="text-left p-3 font-medium">Water Conserved (kL)</th>
                        </>
                      ) : reportType === "economic" ? (
                        <>
                          <th className="text-left p-3 font-medium">Revenue ($)</th>
                          <th className="text-left p-3 font-medium">Jobs Created</th>
                        </>
                      ) : (
                        <>
                          <th className="text-left p-3 font-medium">Status</th>
                          <th className="text-left p-3 font-medium">Count</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {reportType === "environmental" ? (
                      environmentalData.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-3">{item.name}</td>
                          <td className="p-3">{item.trees}</td>
                          <td className="p-3">{item.co2}</td>
                          <td className="p-3">{item.water}</td>
                        </tr>
                      ))
                    ) : reportType === "economic" ? (
                      economicData.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-3">{item.name}</td>
                          <td className="p-3">${item.revenue}</td>
                          <td className="p-3">{item.jobs}</td>
                        </tr>
                      ))
                    ) : (
                      projectData.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-3">Current Period</td>
                          <td className="p-3">{item.name}</td>
                          <td className="p-3">{item.value}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
