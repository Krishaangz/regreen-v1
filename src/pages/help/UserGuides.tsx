
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const UserGuides = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">User Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
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
        ].map((category, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.links.map((link, linkIdx) => (
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
        ))}
      </div>
    </div>
  );
};

export default UserGuides;
