
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Leaf, Droplets, Mountain, Bird, Filter, Sprout, Scale } from "lucide-react";

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
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
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
                  src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Clearwater Watershed Project" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="water" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Water Systems Restoration</h2>
              <p>
                Our water systems restoration services focus on rehabilitating degraded waterways, improving water quality,
                and restoring natural hydrology to support healthy aquatic ecosystems.
              </p>
              <ul className="space-y-2">
                {[
                  "Stream and river restoration",
                  "Riparian buffer establishment",
                  "Water quality improvement strategies",
                  "Stormwater management systems",
                  "Erosion control and bank stabilization",
                  "Aquatic habitat enhancement"
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
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Water Systems Restoration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Stream Restoration", 
                description: "Restoring natural flow patterns and habitats in damaged streams and rivers",
                icon: Droplets
              },
              {
                title: "Wetland Enhancement", 
                description: "Improving existing wetlands to boost their ecological functions and water filtration capacity",
                icon: Filter
              },
              {
                title: "Watershed Management", 
                description: "Comprehensive planning and implementation of watershed-wide restoration strategies",
                icon: Mountain
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
                <h4 className="text-lg font-medium mb-2">Blue Valley Stream Restoration</h4>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Colorado</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Completed December 2022</span>
                </div>
                <p className="text-sm mb-4">
                  Transformed a channelized creek into a thriving natural stream system with riffles, pools, 
                  and meanders. The project restored 3.5 miles of habitat, reduced erosion, and improved water quality 
                  for downstream communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Stream Restoration</Badge>
                  <Badge variant="outline">Flood Management</Badge>
                  <Badge variant="outline">Water Quality</Badge>
                </div>
              </div>
              <div className="bg-background rounded-md overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Blue Valley Stream Restoration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="soil" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Soil Regeneration Services</h2>
              <p>
                Our soil regeneration services focus on restoring soil health and fertility through sustainable practices
                that enhance microbial activity, organic matter content, and nutrient cycling.
              </p>
              <ul className="space-y-2">
                {[
                  "Soil testing and analysis",
                  "Organic matter incorporation",
                  "Cover cropping and green manures",
                  "Soil microbial restoration",
                  "Erosion control systems",
                  "Carbon sequestration initiatives"
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
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Soil Regeneration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Soil Biology Restoration", 
                description: "Reintroducing beneficial microorganisms to rebuild soil health and structure",
                icon: Sprout
              },
              {
                title: "Carbon Farming", 
                description: "Implementing techniques to increase carbon sequestration in agricultural soils",
                icon: Leaf
              },
              {
                title: "Erosion Remediation", 
                description: "Addressing and preventing soil loss through targeted interventions",
                icon: Mountain
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
                <h4 className="text-lg font-medium mb-2">Highland Farm Regeneration</h4>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Minnesota</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Ongoing since 2021</span>
                </div>
                <p className="text-sm mb-4">
                  Transforming 300 acres of depleted farmland through holistic soil regeneration practices. 
                  After two years, soil organic matter has increased by 2.5%, water infiltration improved by 400%, 
                  and crop yields have increased while reducing inputs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Regenerative Agriculture</Badge>
                  <Badge variant="outline">Soil Health</Badge>
                  <Badge variant="outline">Carbon Sequestration</Badge>
                </div>
              </div>
              <div className="bg-background rounded-md overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Highland Farm Regeneration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="native" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Native Planting Programs</h2>
              <p>
                Our native planting programs focus on reintroducing indigenous plant species to restore biodiversity, 
                enhance ecosystem functions, and create sustainable landscapes that support local wildlife.
              </p>
              <ul className="space-y-2">
                {[
                  "Native species selection for specific ecosystems",
                  "Custom seed mix development",
                  "Large-scale native planting implementation",
                  "Pollinator habitat creation",
                  "Invasive species replacement",
                  "Long-term management and monitoring"
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
                src="https://images.unsplash.com/photo-1513836279014-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Native Planting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Meadow Establishment", 
                description: "Creating diverse native meadows to support pollinators and wildlife",
                icon: Sprout
              },
              {
                title: "Urban Native Landscapes", 
                description: "Integrating native plants into city environments for sustainability and beauty",
                icon: Bird
              },
              {
                title: "Ecological Restoration", 
                description: "Using native plants to restore balance to damaged ecosystems",
                icon: Scale
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
                <h4 className="text-lg font-medium mb-2">Cedar Creek Prairie Restoration</h4>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Iowa</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Completed June 2023</span>
                </div>
                <p className="text-sm mb-4">
                  Converted 175 acres of former cropland to native tallgrass prairie using locally sourced seeds of 
                  over 70 native species. Within one season, the site attracted 45 butterfly species and became a 
                  breeding ground for grassland birds.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Prairie Restoration</Badge>
                  <Badge variant="outline">Biodiversity</Badge>
                  <Badge variant="outline">Pollinator Habitat</Badge>
                </div>
              </div>
              <div className="bg-background rounded-md overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Cedar Creek Prairie Restoration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Restoration;
