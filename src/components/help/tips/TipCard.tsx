
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface TipCardProps {
  title: string;
  description: string;
  tips: string[];
}

const TipCard = ({ title, description, tips }: TipCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-green-600" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tips.map((tip, tipIdx) => (
            <li key={tipIdx} className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TipCard;
