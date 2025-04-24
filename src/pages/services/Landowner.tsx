
import React from "react";
import LandownerHeader from "./landowner/LandownerHeader";
import LandownerBenefits from "./landowner/LandownerBenefits";
import ServiceCards from "./landowner/ServiceCards";
import FAQ from "./landowner/FAQ";
import SuccessStory from "./landowner/SuccessStory";
import LandownerCTA from "./landowner/LandownerCTA";

const Landowner = () => {
  return (
    <div className="container mx-auto py-8 animate-fade-in">
      <LandownerHeader />
      <LandownerBenefits />
      <ServiceCards />
      <FAQ />
      <SuccessStory />
      <LandownerCTA />
    </div>
  );
};

export default Landowner;
