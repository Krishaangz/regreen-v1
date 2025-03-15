
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useRole } from "@/contexts/RoleContext";
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
import { 
  MapPin, 
  Mail, 
  User, 
  Building, 
  Briefcase, 
  Users, 
  Lock, 
  Globe, 
  Hand, 
  Leaf, 
  CheckCircle 
} from "lucide-react";
import NavBar from "@/components/NavBar";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { setRole } = useRole();
  
  // Get role from URL if present
  const queryParams = new URLSearchParams(location.search);
  const roleParam = queryParams.get('role');
  
  const [selectedRole, setSelectedRole] = useState(
    roleParam === 'landowner' || roleParam === 'worker' || roleParam === 'community' 
      ? roleParam 
      : "landowner"
  );
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
    propertyType: 'vacant',
    skills: 'gardening',
    interests: 'education',
  });

  // Function to handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, this would make an API call to register the user
    setTimeout(() => {
      setIsLoading(false);
      
      // Set the user role in context
      setRole(selectedRole as 'landowner' | 'worker' | 'community');
      
      toast({
        title: "Registration successful!",
        description: `Welcome to ReGreen. You've registered as a ${selectedRole}.`,
      });
      
      // Navigate to the appropriate dashboard based on role
      navigate(`/dashboard/${selectedRole}`);
    }, 1500);
  };
  
  const roleIcons = {
    landowner: <Globe className="h-10 w-10 text-regreen-600" />,
    worker: <Hand className="h-10 w-10 text-regreen-600" />,
    community: <Users className="h-10 w-10 text-regreen-600" />
  };
  
  const roleDescriptions = {
    landowner: "Register your land for eco-restoration projects. Turn unused space into sustainable environments while generating value.",
    worker: "Apply your skills to environmental projects. Gain experience, earn income, and make a positive impact on your community.",
    community: "Engage with local projects, track environmental improvements, and connect with eco-conscious individuals in your area."
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-regreen-100 to-regreen-50 dark:from-regreen-900/70 dark:to-regreen-950">
      <NavBar />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="w-full max-w-2xl"
        >
          <Card className="border-regreen-100 dark:border-regreen-800 shadow-xl bg-white/80 dark:bg-regreen-900/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-regreen-800 dark:text-regreen-100">Join ReGreen</CardTitle>
              <CardDescription className="text-lg text-regreen-600 dark:text-regreen-300">
                Create an account to start your eco-restoration journey
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue={selectedRole} onValueChange={(value) => setSelectedRole(value)}>
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="landowner">Landowner</TabsTrigger>
                  <TabsTrigger value="worker">Worker</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
                
                {/* Content for all tabs */}
                <div className="mb-6 flex items-center p-4 bg-regreen-50 dark:bg-regreen-800/30 rounded-lg">
                  {roleIcons[selectedRole as keyof typeof roleIcons]}
                  <p className="ml-4 text-gray-600 dark:text-regreen-200">{roleDescriptions[selectedRole as keyof typeof roleDescriptions]}</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          required 
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          required 
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          className="pl-10" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="Create a password" 
                          className="pl-10" 
                          required 
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-4 w-4" />
                        <Input 
                          id="location" 
                          placeholder="City, State" 
                          className="pl-10" 
                          required 
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    {selectedRole === "landowner" && (
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">Property Type</Label>
                        <Select 
                          defaultValue={formData.propertyType} 
                          onValueChange={(value) => handleSelectChange('propertyType', value)}
                        >
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
                    
                    {selectedRole === "worker" && (
                      <div className="space-y-2">
                        <Label htmlFor="skills">Primary Skills</Label>
                        <Select 
                          defaultValue={formData.skills}
                          onValueChange={(value) => handleSelectChange('skills', value)}
                        >
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
                    
                    {selectedRole === "community" && (
                      <div className="space-y-2">
                        <Label htmlFor="interests">Primary Interest</Label>
                        <Select 
                          defaultValue={formData.interests}
                          onValueChange={(value) => handleSelectChange('interests', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select primary interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="education">Environmental Education</SelectItem>
                            <SelectItem value="volunteering">Volunteering</SelectItem>
                            <SelectItem value="advocacy">Advocacy</SelectItem>
                            <SelectItem value="sponsorship">Project Sponsorship</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-6 bg-gradient-to-r from-regreen-500 to-regreen-600 hover:from-regreen-600 hover:to-regreen-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </form>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-2 border-t border-regreen-100 dark:border-regreen-800 pt-4">
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                By signing up, you agree to our{" "}
                <Link to="/terms" className="text-regreen-600 dark:text-regreen-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-regreen-600 dark:text-regreen-400 hover:underline">
                  Privacy Policy
                </Link>
              </p>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link to="/" className="text-regreen-600 dark:text-regreen-400 hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
