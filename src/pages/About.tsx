
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About ReGreen</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            ReGreen is dedicated to fostering environmental restoration through collaborative efforts 
            between landowners, skilled workers, and local communities. We believe in creating 
            sustainable ecosystems while building stronger communities.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>What We Do</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Connect landowners with restoration experts</li>
              <li>• Facilitate environmental restoration projects</li>
              <li>• Monitor and track project progress</li>
              <li>• Support local community involvement</li>
              <li>• Provide educational resources</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• 1000+ acres restored</li>
              <li>• 500+ projects completed</li>
              <li>• 200+ communities served</li>
              <li>• 1000+ workers employed</li>
              <li>• 50+ species protected</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Join Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            Whether you're a landowner looking to restore your property, a worker seeking 
            meaningful employment, or a community member passionate about environmental 
            conservation, there's a place for you at ReGreen.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
