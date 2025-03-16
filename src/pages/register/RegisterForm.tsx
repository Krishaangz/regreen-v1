
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useRole } from "@/contexts/RoleContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RoleDescription from "./RoleDescription";
import RegisterFormFields from "./RegisterFormFields";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  propertyType: string;
  skills: string;
  interests: string;
}

interface RegisterFormProps {
  initialRole: 'landowner' | 'worker' | 'community';
}

const RegisterForm = ({ initialRole }: RegisterFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setRole } = useRole();
  
  const [selectedRole, setSelectedRole] = useState<'landowner' | 'worker' | 'community'>(initialRole);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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
      setRole(selectedRole);
      
      toast({
        title: "Registration successful!",
        description: `Welcome to ReGreen. You've registered as a ${selectedRole}.`,
      });
      
      // Navigate to the appropriate dashboard based on role
      navigate(`/dashboard/${selectedRole}`);
    }, 1500);
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
          <Tabs defaultValue={selectedRole} onValueChange={(value) => setSelectedRole(value as 'landowner' | 'worker' | 'community')}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="landowner">Landowner</TabsTrigger>
              <TabsTrigger value="worker">Worker</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <RoleDescription role={selectedRole} />
            
            <form onSubmit={handleSubmit}>
              <RegisterFormFields 
                formData={formData}
                selectedRole={selectedRole}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
              />
              
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
  );
};

export default RegisterForm;
