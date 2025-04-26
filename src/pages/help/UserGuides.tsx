
import GuideCard from "@/components/help/guides/GuideCard";
import { motion } from "framer-motion";

const UserGuides = () => {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gradient-primary mb-4">
          User Guides
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive guides to make the most of the ReGreen platform
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {guideCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <GuideCard {...category} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UserGuides;
