
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
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
  );
};

export default FAQ;
