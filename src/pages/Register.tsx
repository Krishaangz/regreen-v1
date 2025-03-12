
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Mail, User, Building, Briefcase } from "lucide-react";
import NavBar from "@/components/NavBar";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("landowner");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle form submission and API call
    navigate("/dashboard");
  };
  
  const roleIcons = {
    landowner: <Building className="h-10 w-10 text-regreen-600" />,
    worker: <Briefcase className="h-10 w-10 text-regreen-600" />,
    community: <User className="h-10 w-10 text-regreen-600" />
  };
  
  const roleDescriptions = {
    landowner: "Register your land for eco-restoration projects. Turn unused space into sustainable environments while generating value.",
    worker: "Apply your skills to environmental projects. Gain experience, earn income, and make a positive impact on your community.",
    community: "Engage with local projects, track environmental improvements, and connect with eco-conscious individuals in your area."
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-regreen-50">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 py-10">
        <Card className="w-full max-w-2xl animate-fade-in border-regreen-100 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-regreen-800">Join ReGreen</CardTitle>
            <CardDescription className="text-lg text-regreen-600">
              Create an account to start your eco-restoration journey
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="landowner" onValueChange={(value) => setRole(value)}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="landowner">Landowner</TabsTrigger>
                <TabsTrigger value="worker">Worker</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
              
              {/* Content for all tabs */}
              <div className="mb-6 flex items-center">
                {roleIcons[role as keyof typeof roleIcons]}
                <p className="ml-4 text-gray-600">{roleDescriptions[role as keyof typeof roleDescriptions]}</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input id="email" type="email" placeholder="Enter your email" className="pl-10" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                      <Input id="location" placeholder="City, State" className="pl-10" required />
                    </div>
                  </div>
                  
                  {role === "landowner" && (
                    <div className="space-y-2">
                      <Label htmlFor="property-type">Property Type</Label>
                      <Select defaultValue="vacant">
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vacant">Vacant Land</SelectItem>
                          <SelectItem value="urban">Urban Space</SelectItem>
                          <SelectItem value="waterbody">Water Body</SelectItem>
                          <SelectItem value="rooftop">Rooftop</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  
                  {role === "worker" && (
                    <div className="space-y-2">
                      <Label htmlFor="skills">Primary Skills</Label>
                      <Select defaultValue="gardening">
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary skill" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gardening">Gardening/Landscaping</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="forestry">Forestry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
                
                <Button type="submit" className="w-full mt-6 bg-regreen-600 hover:bg-regreen-700">
                  Create Account
                </Button>
              </form>
            </Tabs>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-2 border-t border-regreen-100 pt-4">
            <p className="text-center text-gray-600 text-sm">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-regreen-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-regreen-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/dashboard" className="text-regreen-600 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
