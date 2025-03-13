
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center space-y-4">
      <Badge variant="outline" className="bg-regreen-50 text-regreen-800 dark:bg-regreen-900 dark:text-regreen-100">
        {badge}
      </Badge>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-regreen-800 dark:text-regreen-100">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
