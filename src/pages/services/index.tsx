
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Import components
import { SectionHeader } from "./components/SectionHeader";
import LandownerServices from "./components/LandownerServices";
import LandownerHowItWorks from "./components/LandownerHowItWorks";
import WorkerServices from "./components/WorkerServices";
import WorkerJourney from "./components/WorkerJourney";
import CommunityServices from "./components/CommunityServices";
import CommunityBenefits from "./components/CommunityBenefits";
import FAQSection from "./components/FAQSection";

const Services = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const handleRequestService = (service: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Service Request Received",
        description: `Your request for ${service} has been submitted. We'll contact you soon.`,
      });
    }, 1500);
  };
  
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 animate-fade-in">
      <div className="space-y-8">
        <SectionHeader 
          badge="Our Services"
          title="Eco-Restoration Solutions"
          description="ReGreen offers comprehensive services for land restoration, waterbody renewal, and community engagement, all backed by our innovative technology platform."
        />
        
        <Tabs defaultValue="landowners" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="landowners">For Landowners</TabsTrigger>
            <TabsTrigger value="workers">For Workers</TabsTrigger>
            <TabsTrigger value="community">For Communities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="landowners" className="mt-6">
            <LandownerServices handleRequestService={handleRequestService} loading={loading} />
            <LandownerHowItWorks />
          </TabsContent>
          
          <TabsContent value="workers" className="mt-6">
            <WorkerServices />
            <WorkerJourney />
          </TabsContent>
          
          <TabsContent value="community" className="mt-6">
            <CommunityServices />
            <CommunityBenefits />
          </TabsContent>
        </Tabs>
        
        <FAQSection />
      </div>
    </div>
  );
};

export default Services;
