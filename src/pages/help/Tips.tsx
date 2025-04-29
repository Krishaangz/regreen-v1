
import { motion } from "framer-motion";
import TipCard from "@/components/help/tips/TipCard";
import HelpPageLayout from "@/components/help/layout/HelpPageLayout";
import { useStaggeredAnimation } from "@/hooks/use-staggered-animation";

const Tips = () => {
  const { containerVariants, itemVariants } = useStaggeredAnimation({
    delayChildren: 0.3,
    staggerChildren: 0.15
  });
  
  const tipCategories = [
    {
      title: "Project Management",
      description: "Best practices for managing eco-restoration projects",
      tips: [
        "Start with a clear project scope",
        "Regular monitoring and documentation",
        "Engage with local community",
        "Follow sustainable practices"
      ]
    },
    {
      title: "Landowner Tips",
      description: "Guidance for property restoration",
      tips: [
        "Understand your land's ecosystem",
        "Plan long-term restoration goals",
        "Collaborate with local experts",
        "Monitor ecological progress"
      ]
    },
    {
      title: "Worker Best Practices",
      description: "Professional tips for eco-restoration workers",
      tips: [
        "Prioritize safety protocols",
        "Document work meticulously",
        "Learn continuously",
        "Respect local environmental regulations"
      ]
    }
  ];

  return (
    <HelpPageLayout 
      title="Tips & Best Practices" 
      description="Expert advice to make the most of your eco-restoration efforts"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tipCategories.map((category, idx) => (
          <motion.div key={idx} variants={itemVariants} custom={idx}>
            <TipCard {...category} />
          </motion.div>
        ))}
      </motion.div>
    </HelpPageLayout>
  );
};

export default Tips;
