
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface TipCardProps {
  title: string;
  description: string;
  tips: string[];
}

const TipCard = ({ title, description, tips }: TipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full glass transition-all duration-300 hover:shadow-lg hover:shadow-regreen-500/20 border-regreen-200/20">
        <CardHeader>
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="flex items-center gap-2 text-gradient-primary">
              <Lightbulb className="h-5 w-5 text-regreen-600" />
              {title}
            </CardTitle>
          </motion.div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tips.map((tip, tipIdx) => (
              <motion.li
                key={tipIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: tipIdx * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-regreen-600 text-lg leading-none">•</span>
                <span className="text-foreground/80">{tip}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TipCard;
