
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WorkerSuccessStories = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Worker Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Carlos Rodriguez",
            image: "/placeholder.svg",
            role: "Restoration Team Lead",
            quote: "I started as a seasonal technician with no experience three years ago. The training and mentorship I received completely changed my career path, and now I lead my own restoration projects."
          },
          {
            name: "Michelle Thompson",
            image: "/placeholder.svg",
            role: "Ecological Specialist",
            quote: "After a decade in retail, I was looking for more meaningful work. ReGreen's training program gave me both the skills and confidence to transition to a career that aligns with my values."
          },
          {
            name: "Jamal Washington",
            image: "/placeholder.svg",
            role: "Project Manager",
            quote: "The career development opportunities at ReGreen are unmatched. I've been able to grow from field technician to project manager while continuing to learn and develop new skills."
          }
        ].map((story, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-2">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-xl">{story.name}</CardTitle>
              <CardDescription>{story.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center italic">"{story.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkerSuccessStories;
