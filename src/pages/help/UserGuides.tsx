
import { motion } from "framer-motion";
import GuideCard from "@/components/help/guides/GuideCard";
import HelpPageLayout from "@/components/help/layout/HelpPageLayout";
import { useStaggeredAnimation } from "@/hooks/use-staggered-animation";

const UserGuides = () => {
  const { containerVariants, itemVariants } = useStaggeredAnimation({
    delayChildren: 0.3,
    staggerChildren: 0.15
  });
  
  const guideCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using ReGreen platform",
      links: [
        { label: "Platform Overview", path: "/help/guides/overview" },
        { label: "Account Setup", path: "/help/guides/account-setup" },
        { label: "Navigation Guide", path: "/help/guides/navigation" }
      ]
    },
    {
      title: "Landowner Resources",
      description: "Guides for landowners and property managers",
      links: [
        { label: "Property Registration", path: "/help/landowners/registration" },
        { label: "Project Management", path: "/help/landowners/projects" },
        { label: "Ecological Assessment", path: "/help/landowners/assessment" }
      ]
    },
    {
      title: "Worker Guides",
      description: "Resources for eco-restoration workers",
      links: [
        { label: "Task Assignment", path: "/help/workers/tasks" },
        { label: "Safety Protocols", path: "/help/workers/safety" },
        { label: "Skill Development", path: "/help/workers/skills" }
      ]
    }
  ];

  return (
    <HelpPageLayout 
      title="User Guides"
      description="Explore our comprehensive guides to make the most of the ReGreen platform"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {guideCategories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants} custom={idx}>
            <GuideCard {...category} />
          </motion.div>
        ))}
      </motion.div>
    </HelpPageLayout>
  );
};

export default UserGuides;
