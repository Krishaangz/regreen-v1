
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Sprout, DollarSign, FileText, Clock } from "lucide-react";

const Landowner = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-3">Landowner Services</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Specialized programs designed to support private landowners in sustainable land management,
          conservation, and ecological restoration while potentially creating new income streams.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Benefits for Landowners</h2>
          <ul className="space-y-3">
            {[
              "Access to expert ecological assessment and planning",
              "Financial incentives through carbon credits and conservation programs",
              "Increased land value through ecological improvements",
              "Technical support and resources for implementation",
              "Opportunity to contribute to climate resilience and biodiversity",
              "Custom solutions tailored to your property's unique features"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-regreen-600 mr-2 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Become a Partner Landowner</Button>
          </div>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden h-[350px]">
          <img 
            src="/placeholder.svg" 
            alt="Landowner Partnership" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Property Assessment", 
            description: "Comprehensive ecological evaluation to identify opportunities for restoration and conservation",
            icon: Home
          },
          {
            title: "Restoration Planning", 
            description: "Custom implementation plans with timelines, resource requirements, and expected outcomes",
            icon: Sprout
          },
          {
            title: "Financial Opportunities", 
            description: "Navigation of carbon markets, conservation easements, and government incentive programs",
            icon: DollarSign
          }
        ].map((service, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-regreen-100 dark:bg-regreen-900/30 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-regreen-600 dark:text-regreen-400" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What types of land are suitable for restoration projects?</AccordionTrigger>
            <AccordionContent>
              Almost any parcel of land can benefit from ecological improvement. We work with various landscapes including farmland, 
              forests, wetlands, grasslands, and even degraded urban areas. The key factor is the landowner's commitment to 
              sustainable management rather than the current condition of the land.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does the carbon credit system work for landowners?</AccordionTrigger>
            <AccordionContent>
              Landowners can generate carbon credits through practices that sequester carbon, such as reforestation, 
              improved forest management, or soil carbon enhancement. Once verified, these credits can be sold to 
              organizations looking to offset their emissions. We guide you through the entire process from project 
              development to credit issuance and marketing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is the minimum acreage required to participate?</AccordionTrigger>
            <AccordionContent>
              While larger properties (40+ acres) may qualify for more programs, we have solutions for properties of 
              all sizes. Even small parcels can participate in collaborative regional projects or community-based 
              initiatives that aggregate multiple properties for greater ecological impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are there government grants available to help fund these projects?</AccordionTrigger>
            <AccordionContent>
              Yes, numerous state and federal programs offer financial assistance for conservation and restoration efforts. 
              These include the USDA's Conservation Reserve Program (CRP), Environmental Quality Incentives Program (EQIP), 
              and various state-level initiatives. Our team helps identify and apply for appropriate funding opportunities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="bg-muted rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Landowner Success Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="Johnson Family Farm" 
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-regreen-600">Carbon Credits</Badge>
              <Badge className="bg-regreen-600">Riparian Restoration</Badge>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Johnson Family Farm Transformation</h3>
            <div className="flex items-center mb-4">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Partnership since 2019</span>
            </div>
            <p className="mb-4">
              "Working with ReGreen has transformed how we manage our 200-acre family farm. We've converted 40 acres of 
              marginal cropland to native prairie and restored the riparian buffer along our creek. The financial benefits 
              from carbon credits and reduced input costs have been significant, but the real reward is seeing the return 
              of wildlife and knowing we're leaving the land better than we found it."
            </p>
            <p className="text-sm mb-4">
              <strong>Results:</strong> 120 tons of carbon sequestered annually, 30% increase in bird species diversity, 
              improved water quality in local watershed, and a new revenue stream through carbon credits.
            </p>
            <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Read Full Case Study</Button>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Explore Your Land's Potential?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Schedule a free initial consultation with our land assessment team to discover opportunities
          for ecological enhancement and potential financial benefits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-regreen-600 hover:bg-regreen-700 text-white">Schedule Consultation</Button>
          <Button variant="outline" className="border-regreen-600 text-regreen-600">
            <FileText className="mr-2 h-4 w-4" /> Download Information Package
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landowner;
