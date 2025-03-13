
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Leaf, Droplets, Mountain, Bird } from "lucide-react";

const Restoration = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Eco-Restoration Services</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Specialized services to restore and revitalize ecosystems across diverse landscapes.
          Our expert teams implement science-based approaches tailored to each unique environment.
        </p>
      </div>
      
      <Tabs defaultValue="habitat" className="w-full">
        <div className="mb-8 flex justify-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
            <TabsTrigger value="habitat">Habitat Restoration</TabsTrigger>
            <TabsTrigger value="water">Water Systems</TabsTrigger>
            <TabsTrigger value="soil">Soil Regeneration</TabsTrigger>
            <TabsTrigger value="native">Native Planting</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="habitat" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Habitat Restoration</h2>
              <p>
                Our habitat restoration services focus on rebuilding and rehabilitating degraded or damaged ecosystems to restore their ecological functions and biodiversity.
              </p>
              <ul className="space-y-2">
                {[
                  "Ecological assessments and site evaluations",
                  "Invasive species management and removal",
                  "Creation of wildlife corridors",
                  "Wetland restoration and construction",
                  "Prairie and grassland establishment",
                  "Forest rehabilitation and management"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Request Consultation</Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
              <img 
                src="/placeholder.svg" 
                alt="Habitat Restoration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Wetland Creation", 
                description: "Designing and building new wetland systems to enhance water quality and provide wildlife habitat",
                icon: Droplets
              },
              {
                title: "Forest Restoration", 
                description: "Reestablishing native forest ecosystems through strategic planting and management",
                icon: Leaf
              },
              {
                title: "Wildlife Habitat", 
                description: "Creating specialized habitat features for target species and biodiversity support",
                icon: Bird
              }
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="bg-muted rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-3">Recent Project Highlight</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Clearwater Watershed Restoration</h4>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Northern California</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Completed March 2023</span>
                </div>
                <p className="text-sm mb-4">
                  A comprehensive restoration of 240 acres of degraded watershed, including stream bank stabilization, 
                  native planting, and creation of wildlife corridors. The project resulted in a 60% increase in native 
                  bird species and improved water quality metrics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Watershed</Badge>
                  <Badge variant="outline">Riparian</Badge>
                  <Badge variant="outline">Wildlife Corridor</Badge>
                </div>
              </div>
              <div className="bg-background rounded-md overflow-hidden h-48">
                <img 
                  src="/placeholder.svg" 
                  alt="Clearwater Watershed Project" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="water" className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">Water Systems Restoration</h2>
          <p className="text-muted-foreground mb-8">Content for Water Systems Restoration will be available soon.</p>
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Get Updates</Button>
        </TabsContent>
        
        <TabsContent value="soil" className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">Soil Regeneration Services</h2>
          <p className="text-muted-foreground mb-8">Content for Soil Regeneration Services will be available soon.</p>
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Get Updates</Button>
        </TabsContent>
        
        <TabsContent value="native" className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">Native Planting Programs</h2>
          <p className="text-muted-foreground mb-8">Content for Native Planting Programs will be available soon.</p>
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Get Updates</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Restoration;
