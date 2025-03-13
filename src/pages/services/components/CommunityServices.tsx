
import React from "react";
import { User2, MapPin, HomeIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";

const CommunityServices = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <ServiceCard
        icon={User2}
        iconColor="text-regreen-600 dark:text-regreen-400"
        iconBgColor="bg-regreen-100 dark:bg-regreen-900/30"
        title="Community Engagement"
        description="Connect with like-minded eco-enthusiasts"
        features={[
          "Discussion forums on environmental topics",
          "Local green initiative spotlights",
          "Volunteer opportunities",
          "Knowledge sharing and best practices"
        ]}
        buttonText="Join Community"
        buttonColor="bg-regreen-600 hover:bg-regreen-700"
        buttonAction={() => {}}
        isLink={true}
        linkTo="/community/forums"
      />
      
      <ServiceCard
        icon={MapPin}
        iconColor="text-orange-600 dark:text-orange-400"
        iconBgColor="bg-orange-100 dark:bg-orange-900/30"
        title="Events & Workshops"
        description="Participate in eco-restoration activities"
        features={[
          "Community tree-planting days",
          "Environmental education workshops",
          "Cleanup drives and restoration events",
          "Networking with environmental experts"
        ]}
        buttonText="Browse Events"
        buttonColor="bg-orange-600 hover:bg-orange-700"
        buttonAction={() => {}}
        isLink={true}
        linkTo="/community/events"
      />
      
      <ServiceCard
        icon={HomeIcon}
        iconColor="text-teal-600 dark:text-teal-400"
        iconBgColor="bg-teal-100 dark:bg-teal-900/30"
        title="Success Stories"
        description="Explore completed transformation projects"
        features={[
          "Before and after transformations",
          "Community impact testimonials",
          "Environmental improvement metrics",
          "Inspiration for your own projects"
        ]}
        buttonText="View Stories"
        buttonColor="bg-teal-600 hover:bg-teal-700"
        buttonAction={() => {}}
        isLink={true}
        linkTo="/community/stories"
      />
    </div>
  );
};

export default CommunityServices;
