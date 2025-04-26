
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

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
          // ... more guide categories
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
