
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, LineChart, BarChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-regreen-800">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Track your environmental impact.</p>
        </div>
        <Tabs defaultValue="overview" className="mt-4 md:mt-0">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          {
            title: "Total Projects",
            value: "12",
            description: "+2 from last month",
            icon: <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center"><BarChart className="w-5 h-5 text-blue-600" /></div>,
            color: "bg-blue-50 border-blue-100",
            textColor: "text-blue-600"
          },
          {
            title: "Land Restored",
            value: "24.5",
            description: "acres",
            icon: <div className="w-8 h-8 rounded-full bg-regreen-100 flex items-center justify-center"><AreaChart className="w-5 h-5 text-regreen-600" /></div>,
            color: "bg-regreen-50 border-regreen-100",
            textColor: "text-regreen-600"
          },
          {
            title: "Carbon Offset",
            value: "143",
            description: "tons CO₂ equivalent",
            icon: <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center"><LineChart className="w-5 h-5 text-purple-600" /></div>,
            color: "bg-purple-50 border-purple-100",
            textColor: "text-purple-600"
          },
          {
            title: "Jobs Created",
            value: "37",
            description: "eco-restoration jobs",
            icon: <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center"><BarChart className="w-5 h-5 text-amber-600" /></div>,
            color: "bg-amber-50 border-amber-100",
            textColor: "text-amber-600"
          },
        ].map((stat, index) => (
          <Card key={index} className={`${stat.color} border`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className={`text-2xl font-bold mt-1 ${stat.textColor}`}>{stat.value}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                </div>
                {stat.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Project Activity</CardTitle>
            <CardDescription>Monthly eco-restoration progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-gray-50 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Activity Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Current eco-restoration initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Urban Garden Transformation", progress: 75, status: "On track" },
                { name: "Riverside Cleanup", progress: 45, status: "In progress" },
                { name: "Community Park Revitalization", progress: 90, status: "Near completion" },
                { name: "Rooftop Garden Initiative", progress: 20, status: "Just started" },
              ].map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-sm">{project.name}</span>
                    <span className="text-xs text-muted-foreground">{project.status}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={project.progress} className="h-2" />
                    <span className="text-xs font-medium">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Scheduled work and verifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Site inspection", date: "Today, 2:00 PM", location: "Urban Garden Site" },
                { title: "Photo verification", date: "Tomorrow, 10:00 AM", location: "Riverside Project" },
                { title: "Team coordination", date: "Oct 12, 3:30 PM", location: "Virtual Meeting" },
                { title: "Progress review", date: "Oct 15, 1:00 PM", location: "Main Office" },
              ].map((task, index) => (
                <div key={index} className="flex items-start gap-4 p-3 hover:bg-muted/50 rounded-md transition-colors">
                  <div className="w-2 h-2 mt-2 rounded-full bg-regreen-500 animate-pulse-slow"></div>
                  <div>
                    <h4 className="font-medium">{task.title}</h4>
                    <p className="text-sm text-muted-foreground">{task.date}</p>
                    <p className="text-xs text-muted-foreground">{task.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Environmental Impact</CardTitle>
            <CardDescription>Measurable ecological benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { metric: "Trees Planted", value: "287", change: "+24 this month" },
                { metric: "Water Quality", value: "92%", change: "+5% improvement" },
                { metric: "Biodiversity", value: "135", change: "species identified" },
                { metric: "Air Quality", value: "Good", change: "+12% improvement" },
              ].map((impact, index) => (
                <div key={index} className="flex justify-between items-center p-3 hover:bg-muted/50 rounded-md transition-colors">
                  <span className="font-medium">{impact.metric}</span>
                  <div className="text-right">
                    <span className="font-bold block">{impact.value}</span>
                    <span className="text-xs text-muted-foreground">{impact.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
