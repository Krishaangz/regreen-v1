
import React from "react";
import { Leaf, ShieldCheck, User2 } from "lucide-react";
import ServiceCard from "./ServiceCard";

const WorkerServices = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <ServiceCard
        icon={Leaf}
        iconColor="text-purple-600 dark:text-purple-400"
        iconBgColor="bg-purple-100 dark:bg-purple-900/30"
        title="Eco-Restoration Work"
        description="Join projects that restore natural ecosystems"
        features={[
          "Planting and maintenance tasks",
          "Habitat creation for local wildlife",
          "Soil remediation and improvement",
          "Earn while making a positive impact"
        ]}
        buttonText="Apply Now"
        buttonColor="bg-purple-600 hover:bg-purple-700"
        buttonAction={() => {}}
        isLink={true}
        linkTo="/services/worker"
      />
      
      <ServiceCard
        icon={ShieldCheck}
        iconColor="text-indigo-600 dark:text-indigo-400"
        iconBgColor="bg-indigo-100 dark:bg-indigo-900/30"
        title="Skill Development"
        description="Gain certifications and grow your expertise"
        features={[
          "On-the-job training in ecological restoration",
          "Certification programs in sustainability",
          "Workshops led by industry experts",
          "Career advancement opportunities"
        ]}
        buttonText="Explore Training"
        buttonColor="bg-indigo-600 hover:bg-indigo-700"
        buttonAction={() => {}}
        isLink={true}
        linkTo="/services/worker"
      />
      
      <ServiceCard
        icon={User2}
        iconColor="text-pink-600 dark:text-pink-400"
        iconBgColor="bg-pink-100 dark:bg-pink-900/30"
        title="Temporary Group Formation"
        description="Join project-specific worker groups"
        features={[
          "AI-matched project assignments",
          "Collaborative team environment",
          "Daily task allocation based on skills",
          "Performance-based bonuses"
        ]}
        buttonText="Browse Groups"
        buttonColor="bg-pink-600 hover:bg-pink-700"
        buttonAction={() => {}}
        isLink={true}
        linkTo="/group-formation"
      />
    </div>
  );
};

export default WorkerServices;
