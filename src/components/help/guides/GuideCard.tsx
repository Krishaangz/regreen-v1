
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface GuideLink {
  label: string;
  path: string;
}

interface GuideCardProps {
  title: string;
  description: string;
  links: GuideLink[];
}

const GuideCard = ({ title, description, links }: GuideCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {links.map((link, linkIdx) => (
            <li key={linkIdx}>
              <Link 
                to={link.path}
                className="flex items-center gap-2 text-green-600 hover:text-green-700"
              >
                <FileText className="h-4 w-4" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default GuideCard;
