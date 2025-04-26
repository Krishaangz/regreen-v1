
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const Tips = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Tips & Best Practices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
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
        ].map((category, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-green-600" />
                {category.title}
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.tips.map((tip, tipIdx) => (
                  <li key={tipIdx} className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tips;
