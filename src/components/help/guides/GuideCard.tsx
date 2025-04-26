
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full glass transition-all duration-300 hover:shadow-lg hover:shadow-regreen-500/20 border-regreen-200/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient-primary">
            <Book className="h-5 w-5 text-regreen-600" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {links.map((link, linkIdx) => (
              <motion.li
                key={linkIdx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: linkIdx * 0.1 }}
              >
                <Link 
                  to={link.path}
                  className="flex items-center gap-2 text-regreen-600 hover:text-regreen-700 transition-colors p-2 rounded-md hover:bg-regreen-50 dark:hover:bg-regreen-900/20"
                >
                  <FileText className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GuideCard;
