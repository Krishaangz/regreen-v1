
import { TipCard } from "@/components/help/tips/TipCard";

const Tips = () => {
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Tips & Best Practices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipCategories.map((category, idx) => (
          <TipCard key={idx} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Tips;
